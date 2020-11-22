import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Rate,
    Checkbox,
    Row,
    Col,
    Input,
  } from 'antd';
import React from "react"

interface FormProps{
  onSubmit: (values: any) => void
}
export function TestForm(props: FormProps){
    
  const { Option } = Select;
  const {onSubmit} = props;

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const onFinish = (values: any) => {
    onSubmit(values)
  };
  
    return (
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          grade: 5,
          animal: 'dog',
          rate: 100
        }}
      > 
      <Form.Item
        label="T qui ?"
        name="username"
        rules={[{ required: true, message: 'stp dis t qui!' }]}
      >
        <Input />
      </Form.Item>

        <Form.Item
          name="games"
          label="Tes jeux favoris ?"
          rules={[{ required: true, message: 'Stp choisis', type: 'array' }]}
        >
          <Select mode="multiple" placeholder="Selectionne tes jeux favoris ">
            <Option value="Among Us">Among Us</Option>
            <Option value="Phasmophobia">Phasmophobia</Option>
            <Option value="Heave Ho">Heave Ho</Option>
          </Select>
        </Form.Item>
  
        <Form.Item name="rate" label="A quel point je suis géniale /100 ?">
          <Slider
            marks={{
              0: 'Pas mal pas mal',
              20: 'Hoho',
              40: 'Sah quel plaisir',
              60: 'Woof woof',
              80: 'Sublimissime',
              100: 'Vraiment la best',
            }}
          />
        </Form.Item>
  
        <Form.Item name="animal" label="Je prends un chien ou un chat ?">
          <Radio.Group>
            <Radio value="dog">Chien</Radio>
            <Radio value="cat">Chat</Radio>
          </Radio.Group>
        </Form.Item>
  
        <Form.Item name="grade" label="Ma note pour ce projet">
          <Rate />
        </Form.Item>
  
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

