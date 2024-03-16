<template>
    <div class="container flex">
        <table>
            <tbody>
            <tr>
                <td colspan="2">
                    <h2>Авторизация</h2>
                </td>
            </tr>
            <tr>
                <td colspan="2"  class="flex justify-center">
                        <label for="email">Email:</label>
                        <input type="email" id="email" v-model="email" required>
                        <label for="password">Пароль:</label>
                        <input type="password" id="password" v-model="password" required>
                        <button type="submit" @click="login" class="btn btn-primary">Войти</button>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="flex justify-center">
                    <button>
                        <router-link to="/registration">Не зарегистрированы?</router-link>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

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
                window.location.href = '/';
            } catch (error) {
                console.error('Ошибка при авторизации:', error.response.data);
            }
        }
    }
}
</script>

<style>
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

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

td {
    padding: .75rem;
    border-bottom: 1px solid #dee2e6;
    vertical-align: top;
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
input[type="password"] {
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
