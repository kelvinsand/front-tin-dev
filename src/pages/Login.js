import React, { useState } from 'react';
import './Login.css';

import api from '../services/api'

import logo from '../assets/logo.svg';

export default function Login({ history }) {
    const [username, setuUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username
        });

        const { _id } = response.data;

        history.push(`/devs/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input 
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={e => setuUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}