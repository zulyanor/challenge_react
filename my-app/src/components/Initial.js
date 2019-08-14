import createStore from 'unistore';
import { Provider, connect } from 'unistore/react';

export let store = createStore({ username: '', password: '', isLogin: false, email: '' });

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

    changeLogin(state) {
        return { isLogin: true };
    },

    logOut(state) {
        return { isLogin: false };
    }
});
