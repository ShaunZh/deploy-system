/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-28 22:43:21
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-29 22:14:04
 */
import React, { useState } from 'react';
import { Form, Input, Spin } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};



export default function PipelineEdit(): React.ReactElement {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({});
  return (
    <div className="pipeline-edit">
      <h1>流水线信息</h1>
      urn (
      <Form
        {...layout}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}