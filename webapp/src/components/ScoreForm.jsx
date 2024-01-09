import { Button, Form, Input, InputNumber } from "antd";
import { ScoreContext } from "contexts/ScoreContext";
import { useContext } from "react";

const ScoreForm = ({jokeID}) => {
    const [form] = Form.useForm();
    const {addOneScore} = useContext(ScoreContext);

    const addScore = async (values) => {
        values.joke = jokeID;
        await addOneScore(values);
        form.resetFields();
    }

    return (
        <Form
            form={form}
            onFinish={addScore}
        >
            <Form.Item
                hasFeedback
                name={"username"}
                label={"Username"}
                validateDebounce={1000}
                rules={[
                    {min: 3, required: true}
                ]}
            >
                <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
                hasFeedback
                name={"score"}
                label={"Score"}
                validateDebounce={1000}
                rules={[
                    {required: true}
                ]}
            >
                <InputNumber min={0} max={10} placeholder="Rating /10" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ScoreForm;