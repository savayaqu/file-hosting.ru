<template>
    <div>
        <h2>Регистрация</h2>
        <form @submit.prevent="register">
            <label for="first_name">Имя:</label>
            <input type="text" id="first_name" v-model="firstName" required>
            <label for="last_name">Фамилия:</label>
            <input type="text" id="last_name" v-model="lastName" required>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            <label for="password">Пароль:</label>
            <input type="password" id="password" v-model="password" required>
            <button type="submit">Зарегистрироваться</button>
        </form>
        <router-link to="/authorization">Уже зареган? Войди!</router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://file-hosting.ru/api-file/registration', {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.email,
                    password: this.password,
                });
                console.log('Успешная регистрация', response.data);
            } catch (error) {
                console.error('Ошибка при регистрации:', error.response.data);
            }
        },
    },
};
</script>
