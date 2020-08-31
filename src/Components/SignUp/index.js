import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import api from '../../Services/api';

class SignUp extends Component {
    state = {
      username: '',
      password: '',
      error: '',
    };

    handleSignIn = async e => {
      e.preventDefault();
      const { username, password } = this.state;
      if (!username || !password) {
        this.setState({ error: "Preencha todos os campos "});
        alert(this.state.error);
      } else {
        try {
          await api.post('/register', { username, password });
          alert("Usuário criado com sucesso");
        } catch(err) {
          this.setState({
            error: "Houve um problema com a criação do usuário"
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
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSignIn}>
            Registrar
          </Button>
          
        </Form.Item>
        <Form.Item>
            <Link to="/">Voltar</Link>
        </Form.Item>
      </Form>
    );
  }
}

export default SignUp;