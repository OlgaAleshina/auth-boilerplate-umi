
import { formatMessage } from 'umi-plugin-locale';
import { Form, Input, Button, Checkbox, Modal} from 'antd';
import { Link } from 'umi';
import { connect } from 'dva';


function Login({dispath, ...props}) {


  const onFinish = (values) => {

    const {username, password} = values;

    props.dispatch({
      type: 'auth/login',
      payload: {username, password},
    });

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const openModal = () => {
      let secondsToGo = 5;
      const modal = Modal.error({
        title: 'This is a notification message',
        content: props.authError,
      });
      const timer = setInterval(() => {
        secondsToGo -= 1;
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
      }, secondsToGo * 1000)
    }

  return (
    <div >
            {props.authError &&  openModal()}

            {formatMessage({ id: 'login.title' })}
            <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      {formatMessage({ id: 'login.submit' })}
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    <Link to="/auth/signup">{formatMessage({ id: 'login.goToRegister' })}</Link>
                </Form.Item>
          </Form>  
          
    </div>
    
  );
}

function mapStateToProps(state) {
  const { email, password, isLogged, authError } = state.auth;
  return {
    //loading: state.loading.models.users,
    email,
    password,
    isLogged, 
    authError,
  };
}

export default connect(mapStateToProps)(Login);


