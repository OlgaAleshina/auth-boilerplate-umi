
import { formatMessage } from 'umi-plugin-locale';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';


function Signup ({dispatch, ...props}) {
  
  const onFinish = async (values) => {
    console.log('Success:', values);

    const {username, password} = values;

    props.dispatch({
      type: 'auth/signup',
      payload: {username, password},
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div >
            {formatMessage({ id: 'signup.title' })}
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
                      Submit
                    </Button>
                  </Form.Item>
          </Form>  
    </div>
    
  );
}


function mapStateToProps(state) {
  const { email, password, isLogged } = state.auth;
  return {
    //loading: state.loading.models.auth,
    email,
    password,
    isLogged
  };
}

export default connect(mapStateToProps)(Signup);
