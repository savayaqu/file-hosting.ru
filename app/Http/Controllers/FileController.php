<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileRenameRequest;
use App\Http\Requests\FileStoreRequest;
use App\Models\File;
use App\Models\Right;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function store(FileStoreRequest $request) {
        $uploadedFiles = [];

        // Проверка наличия файлов для загрузки
        if ($request->hasFile('files')) {
            // Получение массива файлов
            $files = $request->file('files');

            foreach ($files as $file) {
                // Имя с расширением
                $originalFileName = $file->getClientOriginalName();
                // Расширение файла
                $fileExtension = $file->getClientOriginalExtension();
                // Путь
                $filePath = 'uploads/' . $request->user()->id;  /*  uploads/1  */

                // Проверяем, существует ли файл с таким именем у пользователя
                $existingFile = File::where('name', $originalFileName)
                    ->where('user_id', $request->user()->id)
                    ->first();

                // Если файл уже существует, переименовываем его
                if ($existingFile) {
                    $counter = 1;
                    do {
                        $fileName = pathinfo($originalFileName, PATHINFO_FILENAME) . " ($counter)." . $fileExtension;
                        $existingFile = File::where('name', $fileName)
                            ->where('user_id', $request->user()->id)
                            ->first();
                        $counter++;
                    } while ($existingFile);
                } else {
                    $fileName = $originalFileName;
                }

                // Генерация уникального идентификатора файла
                $fileId = substr(md5(uniqid()), 0, 10);
                // Сохранение файла
                $storedName = $file->storeAs($filePath, $fileName);
                // Создание объекта файла и сохранение его в базу данных
                $uploadedFile = new File();
                $uploadedFile->name = $fileName;
                $uploadedFile->extension = $fileExtension;
                $uploadedFile->path = $storedName;
                $uploadedFile->file_id = $fileId;
                $uploadedFile->user_id = $request->user()->id;
                $uploadedFile->save();

                // Добавление информации о загруженном файле в массив для ответа
                $uploadedFiles[] = [
                    'success' => true,
                    'code' => 200,
                    'message' => 'Success',
                    'name' => $fileName,
                    'url' => url(Storage::url($storedName)),
                    'file_id' => $fileId,
                ];
            }
        }

        // Возвращение ответа после обработки всех файлов
        return response()->json($uploadedFiles);
    }

    //Функция изменения
    public function edit($file_id, FileRenameRequest $request)
    {
        // Найдем файл по его идентификатору
        $file = File::where('file_id', $file_id)->firstOrFail();

        // Обновим имя файла, если оно было изменено в запросе
        if ($request->has('name')) {
            $file->name = $request->name;
        }

        // Сохраняем изменения
        $file->save();

        // Возвращаем ответ при успехе
        return response()->json([
            'success' => true,
            'code' => 200,
            'message' => 'Renamed',
        ])->setStatusCode(200);
    }

    //функция скачивания
    public function download($file_id)
    {
        // Найдем файл по его идентификатору
        $file = File::where('file_id', $file_id)->firstOrFail();

        // Построим путь к файлу в хранилище
        $filePath = 'uploads/' . $file->user_id . '/' . $file->name;

        // Проверяем, существует ли файл
        if (!Storage::exists($filePath)) {
            abort(404);
        }

        // Отправляем файл для скачивания
        return response()->download(storage_path('app/' . $filePath), $file->name);
    }
    //Функция удаления
    public function destroy($file_id)
    {
        // Найдем файл по его идентификатору
        $file = File::where('file_id', $file_id)->firstOrFail();

        // Удаляем файл из хранилища
        Storage::delete($file->path);

        // Удаляем запись о файле из базы данных
        $file->delete();

        // Возвращаем ответ об успешном удалении
        return response()->json([
            'success' => true,
            'code' => 200,
            'message' => 'File deleted',
        ])->setStatusCode(200);
    }
    //Функция просмотра файлов пользователя
    public function owned(Request $request)
    {
        // Найти все файлы, которые принадлежат текущему пользователю
        $files = File::where('user_id', $request->user()->id)->get();

        // Сформировать ответ с информацией о найденных файлах
        $response = [];
        foreach ($files as $file) {
            // Получить всех пользователей, имеющих доступ к этому файлу
            $accesses = Right::where('file_id', $file->id)->with('user')->get();

            // Подготовка данных о доступах
            $accesses_data = [];
            foreach ($accesses as $access) {
                $accesses_data[] = [
                    'fullname' => $access->user->first_name . ' ' . $access->user->last_name,
                    'email' => $access->user->email,
                    'type' => $access->user_id == $file->user_id ? 'author' : 'co-author',
                ];
            }

            $response[] = [
                'file_id' => $file->file_id,
                'name' => $file->name,
                'code' => 200,
                'url' => url('/files/' . $file->file_id),
                'accesses' => $accesses_data,
            ];
        }

        // Вернуть ответ с информацией о файлах пользователя
        return response()->json($response);
    }

    //Функция просмотра файлов, к которым имеет доступ пользователь
    public function allowed(Request $request)
    {

        // Получить все записи о доступе пользователя
        $rights = Right::where('user_id', $request->user()->id)
            ->whereHas('file') // Отфильтровать только те записи, где есть связанный файл
            ->with('file')
            ->get();

        // Сформировать ответ с информацией о файлах, к которым пользователь имеет доступ
        $response = [];
        foreach ($rights as $right) {
            $file = $right->file;
            $response[] = [
                'file_id' => $file->file_id,
                'name' => $file->name,
                'code' => 200,
                'url' => url('/files/' . $file->file_id),
            ];
        }

        // Вернуть ответ с информацией о файлах, к которым пользователь имеет доступ
        return response()->json($response);
    }
}

