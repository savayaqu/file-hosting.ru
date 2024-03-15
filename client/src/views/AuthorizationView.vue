<template>
    <div>
        <h2>Авторизация</h2>
        <form @submit.prevent="login">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            <label for="password">Пароль:</label>
            <input type="password" id="password" v-model="password" required>
            <button type="submit">Войти</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://file-hosting.ru/api-file/authorization', {
                    email: this.email,
                    password: this.password,
                });
                // Устанавливаем токен в куки
                document.cookie = `token=${response.data.token}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
                console.log('Успешная авторизация', response.data);
                // Здесь вы можете выполнить дополнительные действия после успешной авторизации,
                // например, перенаправление на другую страницу
            } catch (error) {
                console.error('Ошибка при авторизации:', error.response.data);
                // Здесь вы можете обработать ошибку, например, отображение сообщения об ошибке
            }
        }
    }
}
</script>
