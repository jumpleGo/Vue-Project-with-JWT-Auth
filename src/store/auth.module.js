import { userService } from './../auth/user.reader';
import router from './../router'

const user = JSON.parse(localStorage.getItem('user'));


export const authentication = {
    namespaced: true,
        state: {
            status:{
                loggingIn: false
            },
            user: null,
            userWithPremissions: false
        },

    
    actions: {
      checkOnUser({commit}){
        if(user){
            let status = {
                status: { 
                    loggedIn: true 
                  },
            }
            commit('checkStatus', status);
            }else{
                let status = {
                    status: {
                        loggedIn: false 
                    }, 
              }
            commit('checkStatus', status);
      }
    },
        login({ commit }, { email, password }) {
            commit('loginRequest', { email });

            userService.login(email, password)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        router.push('/');
                    },
                    error => {
                        commit('loginFailure', error);
                        
                    }
                );
        },
        logout({ commit }) {
            userService.logout();
            commit('logout');
            
        }
    },
    mutations: {
        loginRequest(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
            state.userWithPremissions = user.permissions.showAllUsers
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
            state.userWithPremissions = false;
        },
        checkStatus(state, payload){
            state.status = payload.status
        }
    },

    
}