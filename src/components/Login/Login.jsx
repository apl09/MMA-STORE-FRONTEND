import React, { useContext } from "react";
import { Button, Form, Input, notification } from "antd";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const onSubmit = (values) => {
    login(values);
    notification.success({
      message: "Successfully logged",
      description: "Welcome to MMA Store!!!",
    });
    setTimeout(() => {
      navigate("/users");
    }, 3000);
  };

  return (
    <div className="login-container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        className="login-form"
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please input a correct email!",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
