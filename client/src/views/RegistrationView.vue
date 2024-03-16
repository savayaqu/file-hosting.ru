<template>
    <div class="container flex">
        <h2>Регистрация</h2>
        <form @submit.prevent="register" class="flex justify-center">
            <label for="first_name">Имя:</label>
            <input type="text" id="first_name" v-model="firstName" required>
            <label for="last_name">Фамилия:</label>
            <input type="text" id="last_name" v-model="lastName" required>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            <label for="password">Пароль:</label>
            <input type="password" id="password" v-model="password" required>
            <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
        </form>
        <button class="flex justify-center">
            <router-link to="/authorization">Уже зареган? Войди!</router-link>
        </button>
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

<style scoped>
.container {
    color: #343a40;
    margin: 20px auto;
    padding: 20px;
    width: fit-content;
    border: 1px solid rgba(0,0,0,.125);
    background-color: #fff;
    border-radius: .25rem;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
    font-family: Arial, sans-serif;
}

h2 {
    color: #007bff;
    margin-bottom: 20px;
    text-align: center;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="email"],
input[type="password"],
input[type="text"] {
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
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
    margin-bottom: 20px;
}

.btn-primary:hover {
    filter: brightness(90%);
}

.router-link {
    color: #007bff;
    text-decoration: none;
}

.router-link:hover {
    text-decoration: underline;
}
</style>
