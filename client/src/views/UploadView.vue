<template>
    <div>
        <h2>Загрузка файлов</h2>
        <div class="file-upload">
            <input type="file" ref="fileInput" multiple @change="handleFileUpload">
            <span>Выберите файлы</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { getCookie } from "@/CookieUtils";

export default {
    methods: {
        async handleFileUpload() {
            const formData = new FormData();
            const files = this.$refs.fileInput.files;

            for (let i = 0; i < files.length; i++) {
                formData.append('files[]', files[i]);
            }

            try {
                const response = await axios.post('http://file-hosting.ru/api-file/files', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + getCookie('token'),
                    }
                });

                console.log('Файлы успешно загружены:', response.data);
            } catch (error) {
                console.error('Ошибка загрузки файлов:', error.response.data);
            }
        }
    }
};
</script>

<style>
.file-upload {
    position: relative;
    display: inline-block;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    color: #333;
    font-size: 16px;
    overflow: hidden;
    height: 50px;
}

.file-upload input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 2;
}

.file-upload span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    z-index: 1;
}
</style>
