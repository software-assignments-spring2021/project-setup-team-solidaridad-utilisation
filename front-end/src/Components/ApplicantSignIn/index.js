import React, { useContext } from "react"
import { useParams, useHistory } from "react-router-dom"
import './index.css'
import { Card, Col, Button, Form, Input, Checkbox, message } from 'antd';
import {
    Link,
} from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext"
import axios from "axios"

const ApplicantSignIn = () => {
    const history = useHistory()
    const { setApplicantUser, setApplicantToken } = useContext(AuthContext)
    const [form] = Form.useForm()
    const { job } = useParams()

    const signin = async () => {
        try {
            const validateResult = await form.validateFields()
            console.log(validateResult)

            // sign in the user
            const result = await axios.post("/applicant/user/login", {
                email: validateResult.email,
                password: validateResult.password,
            })

            setApplicantUser(result.data.user)
            setApplicantToken(result.data.token)
            localStorage.setItem("applicantToken", result.data.token)

            history.push(`/application/${job}`)
        } catch (errorInfo) {
            console.log('Failed:', errorInfo)
            message.error("Please fill out all of the required fields")
        }
    }

    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24,
        },
    };

    return (
        <div className="Applicant-SignIn-Card">
            <Col span={24}>
                <Card>
                    <div className="Applicant-SignIn-Words">
                        <h3>Express Apply</h3>
                        <p className="NoAccount">Don't have an account? <Link to={`/application/signup/job/${job}`}>Sign up</Link></p>
                    </div>
                        <Form
                            {...layout}
                            form={form}
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
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
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item {...layout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Form>


                    <Button type="primary" block onClick={signin}>
                        Continue with Copply
                    </Button>
                </Card>
            </Col>
        </div>
    );
}

export default ApplicantSignIn