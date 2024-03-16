<template>
    <div>
        <h2>Выход</h2>
        <button class="btn btn-primary" @click="logout">Выйти</button>
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
                window.location.href = '/';

            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    }
};
</script>
<style>
div {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}
button {
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
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    margin-top: 20px;
}

.btn-primary:hover {
    filter: brightness(90%);
}
</style>
