import "./App.css";
import { Input, Button, Form, Radio, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Myform() {
  const department = [
    "Software Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Chemical Engineering",
  ];
  return (
    <div className="Myform">
      <header className="App-header">
        <h1>Registration Form</h1>
        <p>AASTU students registration page</p>
        <Form>
          {/* //first name */}
          <Form.Item label="First Name">
            <Input
              placeholder="First Name"
              type="text"
              maxLength={25}
              allowClear
              required
            ></Input>
          </Form.Item>

          {/* last name */}
          <Form.Item label="Last Name">
            <Input
              placeholder="Last Name"
              type="text"
              maxLength={25}
              allowClear
              required
            ></Input>
          </Form.Item>

          {/* Phone */}
          <Form.Item label="Phone Number">
            <Input
              placeholder="09 xx xx xx xx"
              type="text"
              maxLength={25}
              allowClear
              required
            ></Input>
          </Form.Item>

          {/* Email */}
          <Form.Item label="Email">
            <Input
              placeholder="someone@domain.com"
              type="text"
              maxLength={25}
              allowClear
              required
            ></Input>
          </Form.Item>

          {/* password */}
          <Form.Item label="Password">
            <Input
              placeholder="Password"
              type="password"
              maxLength={25}
              allowClear
              required
            ></Input>
          </Form.Item>

          {/* confirm password */}
          <Form.Item label="Confirm Password">
            <Input
              placeholder="Confirm Password"
              type="password"
              maxLength={25}
              allowClear
              required
            ></Input>
          </Form.Item>

          {/* confirm password */}
          <Form.Item label="Sex">
            <Radio.Group>
              <Radio value={1}>Female</Radio>
              <Radio value={2}>Male</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Birth date */}
          <Form.Item label="Birth Date">
            <Input type="date" required></Input>
          </Form.Item>
          {/* Department*/}
          <Form.Item label="Department">
            <Select
              placeholder="Select your Department"
              mode="multiple"
              style={{ width: 300, overflow: "clip" }}
            >
              {department.map((department, index) => {
                return (
                  <Select.Option key={index} value={department}>
                    {department}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>

          {/* Submit */}
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default Myform;
