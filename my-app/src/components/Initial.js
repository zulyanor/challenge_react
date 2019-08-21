import createStore from 'unistore';
import { Provider, connect } from 'unistore/react';
import axios from 'axios';

export let store = createStore({ username: '', password: '', isLogin: false, email: '', data: [] });

export let actions = store => ({
    changeUsername(state, newUsername) {
        return { username: newUsername };
    },

    changePassword(state, newPassword) {
        return { password: newPassword };
    },

    changeEmail(state, newEmail) {
        return { email: newEmail };
    },

    changeData(state, newData) {
        return { data: newData };
    },

    logOut(state) {
        return { isLogin: false };
    },

    // dipanggil di signin.js
    postLogin: async state => {
        const data = { username: state.username, password: state.password };
        await axios
            .post('https://zulyano1.free.beeceptor.com/auth', data)
            .then(response => {
                console.log(response.data);
                store.setState({
                    isLogin: true,
                    username: response.data.username,
                    email: response.data.email
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
});

// store.getState.namaState
