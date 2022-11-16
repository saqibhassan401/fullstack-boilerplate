import React from "react";
import { Form, Input, Button } from "antd";
import Icon from '@ant-design/icons';
import style from "./index.module.scss";
import { Link } from "react-router-dom";

export const RestorePasswordForm = props => {

  const onFinish = values => {
        props.onSubmit(values);
  };

  return (
    <Form onFinish={onFinish} className={style.restorePassword}>
      <h1 className={style.authHeader}>Restore password</h1>
      <Form.Item
        {...props.isError && {
          help: props.errorMessage,
          validateStatus: "error"
        }}
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "The input is not valid E-mail!" }
        ]}
      >
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="email"
          />
      </Form.Item>
      <Form.Item>
        <Button
          loading={props.isLoading}
          type="primary"
          style={{ width: "100%" }}
          htmlType="submit"
        >
          Restore
        </Button>
        <div className={style.singupLinks}>
          <Link to="/">Sign in</Link> or{" "}
          <Link to="/signup">Create accaunt</Link>
        </div>
      </Form.Item>
    </Form>
  );
};
