'use client'
import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";



type FieldType = {
  username?: string;
  password?: string;
};

export default function Login() {
    const [messageApi] = message.useMessage();
    const router = useRouter();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const data = await fetch('/api/login',{body: JSON.stringify(values), method: 'POST', headers: {'Content-Type': 'application/json'}})
    const res = await data.json();
    console.log('res', res);
    const { code, message } = res;
    if (code === 0) {
        messageApi.success(message);
        router.push('/')
    }
  };

  return (
    <div className="flex justify-center items-center w-1/3 mt-20 pt-20 mx-auto">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        className="w-96"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="用户名:"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码:"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" className="w-full" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
