<template>
    <upload-view></upload-view>
    <div class="container">
        <h2>Ваши файлы</h2>
        <table>
            <thead>
            <tr>
                <th>Имя файла</th>
                <th>Ссылка</th>
                <th>Действия</th>
                <th>Права доступа</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="file in files" :key="file.file_id">
                <td>{{ file.name }}</td>
                <td>
                    <button class="btn btn-primary" @click="downloadFile(file.file_id)">Скачать</button>
                </td>
                <td>
                    <button class="btn btn-light" @click="editFileName(file.file_id)">Редактировать</button>
                    <button class="btn btn-danger" @click="deleteFile(file.file_id)">Удалить</button>
                </td>
                <td>
                    <button class="btn btn-success" @click="addRight(file.file_id)">Добавить</button>
                    <button class="btn btn-danger" @click="deleteRight(file.file_id)">Удалить</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="container">
        <h2>Файлы, к которым у вас есть доступ</h2>
        <table>
            <thead>
            <tr>
                <th>Имя файла</th>
                <th>Ссылка</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="file in sharedFiles" :key="file.file_id">
                <td>{{ file.name }}</td>
                <td><button class="btn btn-primary" @click="downloadFile(file.file_id)">Скачать</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<style>

.container {
    color: #343a40;
    max-width: 50%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid rgba(0,0,0,.125);
    background-color: #fff;
    border-radius: .25rem;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
    font-family: Arial, sans-serif;
}

h2 {
    color: #007bff;
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    padding: .75rem;
    border-bottom: 1px solid #dee2e6;
    text-align: center; /* Центрируем текст по горизонтали */
    vertical-align: middle; /* Центрируем содержимое по вертикали */
}

th {
    text-align: left;
    background-color: #e9ecef;
}

.btn {
    display: inline-block;
    font-weight: 400;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    margin: 0 !important;
}

.btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}

.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}

.btn-light {
    color: #343a40;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
}

.btn-primary:hover, .btn-danger:hover, .btn-success:hover, .btn-light:hover {
    filter: brightness(90%);
}
</style>
<script>
import axios from 'axios';
import { getCookie } from '@/CookieUtils';
import UploadView from "@/views/UploadView.vue";

export default {
    components: {UploadView},
    data() {
        return {
            files: [],
            sharedFiles: [],
            newName: '',
            email: '',
        };
    },
    mounted() {
        this.fetchFiles();
        this.fetchSharedFiles();
    },
    methods: {
        async fetchFiles() {
            try {
                const response = await axios.get('http://file-hosting.ru/api-file/disk', {
                    headers: {
                        'Authorization': 'Bearer ' + getCookie('token'),
                    },
                });
                this.files = response.data;
            } catch (error) {
                console.error('Ошибка при получении списка файлов:', error);
            }
        },
        async fetchSharedFiles() {
            try {
                const response = await axios.get('http://file-hosting.ru/api-file/shared', {
                    headers: {
                        'Authorization': 'Bearer ' + getCookie('token'),
                    },
                });
                this.sharedFiles = response.data;
            } catch (error) {
                console.error('Ошибка при получении списка файлов:', error);
            }
        },
        async downloadFile(fileId) {
            try {
                const response = await axios.get(`http://file-hosting.ru/api-file/files/${fileId}`, {
                    responseType: 'blob',
                    headers: {
                        'Authorization': 'Bearer ' + getCookie('token'),
                    },
                });
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', response.headers['content-disposition'].split('filename=')[1]);
                document.body.appendChild(link);
                link.click();
                URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Ошибка при скачивании файла:', error);
            }
        },
        async editFileName(fileId) {
            const newName = prompt('Введите новое имя файла:');
            if (newName !== null) {
                try {
                    await axios.patch(`http://file-hosting.ru/api-file/files/${fileId}`, {
                        name: newName,
                    }, {
                        headers: {
                            'Authorization': 'Bearer ' + getCookie('token'),
                        },
                    });
                    alert('Имя файла успешно изменено!');
                    this.fetchFiles(); // Обновляем список файлов после изменения имени
                } catch (error) {
                    console.error('Ошибка при редактировании имени файла:', error);
                }
            }
        },
        async deleteFile(fileId) {
            if (confirm('Вы уверены, что хотите удалить этот файл?')) {
                try {
                    await axios.delete(`http://file-hosting.ru/api-file/files/${fileId}`, {
                        headers: {
                            'Authorization': 'Bearer ' + getCookie('token'),
                        },
                    });
                    alert('Файл успешно удален!');
                    this.fetchFiles(); // Обновляем список файлов после удаления файла
                } catch (error) {
                    console.error('Ошибка при удалении файла:', error);
                }
            }
        },
        async addRight(fileId) {
            const email = prompt('Введите email пользователя, которому будет предоставлен доступ: :');
            if (email !== null) {
                try {
                    await axios.post(`http://file-hosting.ru/api-file/files/${fileId}/accesses`, {
                        email: email,
                    }, {
                        headers: {
                            'Authorization': 'Bearer ' + getCookie('token'),
                        },
                    });
                    alert('Доступ добавлен!');
                    this.fetchFiles(); // Обновляем список файлов после изменения имени
                } catch (error) {
                    console.error('Ошибка при добавлении права:', error);
                }
            }
        },
        async deleteRight(fileId) {
            const email = prompt('Введите email пользователя, у которого забрать доступ: :');
            if (confirm('Вы уверены, что хотите забрать доступ у пользователя: ' + email + ' ?')) {
                try {
                    await axios.delete(`http://file-hosting.ru/api-file/files/${fileId}/accesses?email=${email}`, {
                        headers: {
                            'Authorization': 'Bearer ' + getCookie('token'),
                        },
                    });
                    alert('Доступ забран!');
                    this.fetchFiles(); // Обновляем список файлов после удаления файла
                } catch (error) {
                    console.error('Ошибка:', error);
                }
            }
        },
    },
};
</script>
