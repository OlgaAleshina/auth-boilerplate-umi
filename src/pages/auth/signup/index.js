
import { formatMessage } from 'umi-plugin-locale';
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import { connect } from 'dva';
import "./styles.css";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'umi';


function Signup ({dispatch, ...props}) {
  
  const onFinish = async (values) => {
    console.log('Success:', values);

    const {email, password, remember} = values;

    props.dispatch({
      type: 'auth/signup',
      payload: {email, password, remember},
    });
  };


  const openModal = () => {
    let secondsToGo = 5;
    const modal = Modal.error({
      title: formatMessage({id: 'signup.modal.errTitle'}),
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
    <div>
            {props.authError &&  openModal()}

            {formatMessage({ id: 'signup.title' })}
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: formatMessage({ id: 'signup.email.message'}),
                  },
                ]}
              >
                  <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="Email" />
              </Form.Item>

            <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: formatMessage({ id: 'signup.password.message'}),
                  },
                ]}
            >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder= {formatMessage({ id: 'signup.password.placeholder'})}/>
            </Form.Item>
     
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>{formatMessage({id: 'signup.rememberMe'})}</Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  {formatMessage({ id: 'signup.submit' })}
                </Button>
                <Link to="/auth/login">{formatMessage({ id: 'signup.goToLogin' })}</Link>
            </Form.Item>
        </Form>
          
    </div>
    
  );
}


function mapStateToProps(state) {
  const { email, password, isLogged, authError } = state.auth;
  return {
    //loading: state.loading.models.auth,
    email,
    password,
    isLogged,
    authError
  };
}

export default connect(mapStateToProps)(Signup);
