import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import api from '../../Services/api';

class Login extends Component {
    state = {
      username: '',
      password: '',
      error: '',
    };

    handleSignIn = async e => {
      e.preventDefault();
      const { username, password } = this.state;
      if (!username || !password) {
        this.setState({ error: "Preencha os campos acima "});
        alert(this.state.error);
      } else {
        try {
          await api.post('/authenticate', { username, password });
          alert("Logado com sucesso");
        } catch(err) {
          this.setState({
            error: "Houve um problema com o login, verifique suas credenciais"
          })
          alert(this.state.error);
        }
      }
    }
    render() {
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }} 
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input 
            prefix={<UserOutlined className="site-form-item-icon" />} 
            type="text"
            placeholder="Nome de usuário" 
            onChange={e => this.setState({ username: e.target.value })} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSignIn}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Login;