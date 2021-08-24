import * as authService from '../services/auth';
import { router } from 'umi';
import { setCookies, getCookies } from '../utils/handlingCookies';

export default {
    namespace: 'auth',
    
    state: {
        email: '',
        password: '',
        isLogged: false,
        authError: null,
    },

    reducers: {
        log(state, {payload}) {
          return { ...state, isLogged: payload };
        },
        authError(state, {payload}) {
            return { ...state, authError: payload}
        }
      },

    effects: {
        *login( {payload}, { call, put }) {
           
           try {
                yield call(authService.login, payload.email, payload.password);

                yield put({
                    type: 'log',
                    payload: true
                });
                
                yield setCookies('isLogged', true, (payload.remember && 100))

                yield router.push("/user")

            } catch(error) {
                yield put({
                    type: 'authError',
                    payload: error.message
                })
            }
        },

        *signup( {payload} , { call, put }) {

            try {
                yield call(authService.signup, payload.emil, payload.password);
                
                yield put({
                type: 'log',
                payload: true
                });
                
                yield setCookies('isLogged', true, (payload.remember && 100))

                yield router.push("/user")

            } catch(error) {
                
                yield put({
                    type: 'authError',
                    payload: error.message
                })
            }
          },
    },

    subscriptions: {
        checkLogin({ history }) {
            
            return history.listen((state) => {
                if(getCookies("isLogged") || state.isLogged) {
                    return 
                } else {
                    router.push("/auth/login")
                }
          });
        },

      },
}