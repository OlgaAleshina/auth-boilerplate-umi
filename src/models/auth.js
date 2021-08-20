import * as authService from '../services/auth';


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
        *login( {payload}, { call, put }, history) {
           // console.log(history)
           try {
                yield call(authService.login, payload.username, payload.password);

                yield put({
                    type: 'log',
                    payload: true
                });
            } catch(error) {
                yield put({
                    type: 'authError',
                    payload: error.message
                })
            }
        },

        *signup( {payload} , { call, put }) {
            
            yield call(authService.signup, payload.username, payload.password);
            yield put({
              type: 'log',
              payload: true
            });
          },
    }
}