<template>
    <div>
        <h2>Выход</h2>
        <button @click="logout">Выйти</button>
    </div>
</template>

<script>
import axios from 'axios';
import {getCookie} from "@/CookieUtils";
export default {
    methods: {
        async logout() {
            try {
                await axios.get('http://file-hosting.ru/api-file/logout', {
                    headers: {
                        'Authorization': 'Bearer ' + getCookie('token'),
                    }
                });
                document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                console.log('Вы успешно вышли');
                // Здесь можете выполнить дополнительные действия после успешного выхода
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    }
};
</script>
