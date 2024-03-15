<template>
    <div>
        <h2>Загрузка файлов</h2>
        <input type="file" ref="fileInput" multiple @change="handleFileUpload">
    </div>
</template>

<script>
import axios from 'axios';
import {getCookie} from "@/CookieUtils";

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
