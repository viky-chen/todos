import { Button, Form, Input, message } from "antd";
import { todoApi } from "../services";
import Cookie from "js-cookie";

export const AuthForm = () => {
  const [form] = Form.useForm();
  const login = () => {
    console.log("data", form.getFieldValue("username"));

    todoApi.api
      .authControllerLogin({
        name: form.getFieldValue("username"),
        password: form.getFieldValue("password"),
      })
      .then(async (res) => {
        Cookie.set("assess_token", res.data.access_token);
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(err.response.data.message);
        message.error(err.response.data.message);
      });
  };
  return (
    <div
      style={{
        width: "448px",
        height: "344px",

        background: "#FFFFFF",
        borderRadius: "8px",
        marginTop: "32px",
        padding: "24px",
      }}
    >
      <h3>Login to WebToDo</h3>
      <Form
        form={form}
        layout={"vertical"}
        size={"large"}
        onSubmitCapture={login}
      >
        <Form.Item
          name="username"
          label="Username"
          required={false}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          required={false}
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
            }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
