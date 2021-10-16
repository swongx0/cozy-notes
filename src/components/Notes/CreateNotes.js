import React, {useState} from 'react';
import { Layout, Typography, Form, Input, InputNumber, Button } from 'antd';
import './styles.css'
import useSelection from 'antd/lib/table/hooks/useSelection';

const { Content } = Layout;
const { Title } = Typography;

const layout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 20 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const CreateNotes = ({setNotes}) => {
    const onFinish = (values: any) => {
    console.log(values);
    };

    const [form, setForm] = useState({ title: '', body: ''})

    function handleChange(event) {
        const {value, name} = event.target
        setForm({...form, [name]: value})
        console.log(form)
    }

    function addNote() {
        setNotes(note => [...note, form])
        setForm({ title: '', body: ''})
    }

    return (
        <Content style={{ padding: '25px 50px', margin: '24px 16px 0' }}>
            <div className="site-layout-background rounded" style={{ padding: 24, minHeight: 360 }}>
                <Title level={3}>New Note</Title>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item label="Title" rules={[{ required: true }]}>
                        <Input name='title' value={form.title} onChange={handleChange}/>
                    </Form.Item>
                    <Form.Item label="Body">
                        <Input.TextArea name='body' value={form.body} onChange={handleChange} style={{height:'60vh'}} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 1 }}>
                        <Button onClick={addNote} type="primary">
                        Submit
                        </Button>
                    </Form.Item>
                    </Form>
            </div>
        </Content>
    )
}

export default CreateNotes