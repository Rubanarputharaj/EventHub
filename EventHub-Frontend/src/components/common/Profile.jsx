import React, { useState } from "react";
import { Card, Button, Form, Input, Row, Col, message } from "antd";
import { EditOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";
import "./common.css";

function Profile() {

  const [isEditing, setIsEditing] = useState(false);

  const [form] = Form.useForm();

  const initialValues = {
    fullName: "Alex",
    email: "alex@eventhub.com",
    phone: "+91 98765 43210",
    city: "Salem, Tamil Nadu",
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    form.setFieldsValue(initialValues);
    setIsEditing(false);
  };

  const handleSave = (values) => {
    console.log(values);

    message.success("Profile updated successfully");

    setIsEditing(false);
  };

  return (
    <div className="parent-profile">

      <Card className="profile-card">

        {/* Header */}
        <div className="profile-header">

          <h2>My Profile</h2>

          {!isEditing && (
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={handleEdit}
            >
              Edit
            </Button>
          )}

        </div>

        {/* Profile Details */}
        {/* <div className="profile-details">

          <div className="profile-avatar">
            A
          </div>

          <div>
            <h3>{initialValues.fullName}</h3>
            <p>{initialValues.email}</p>
          </div>

        </div> */}

        {/* Form */}
        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
          onFinish={handleSave}
          disabled={!isEditing}
        >

          <Row gutter={16}>

            <Col span={12}>
              <Form.Item
                label="Full Name"
                name="fullName"
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Phone Number"
                name="phone"
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="City"
                name="city"
              >
                <Input />
              </Form.Item>
            </Col>

          </Row>

          {/* Buttons */}
          {isEditing && (
            <div className="profile-actions">

              <Button
                type="primary"
                htmlType="submit"
                // icon={<SaveOutlined />}
              >
                Save
              </Button>

              <Button
                // icon={<CloseOutlined />}
                onClick={handleCancel}
              >
                Cancel
              </Button>

            </div>
          )}

        </Form>

      </Card>

    </div>
  );
}

export default Profile;









































// import React, { useState } from "react";
// import { Card, Avatar, Upload, Button, Form, Input, Row, Col, message } from "antd";
// import { CameraOutlined, EditOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";
// import "./common.css";

// function Profile() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [form] = Form.useForm();

//   const initialValues = {
//     fullName: "Alex ",
//     email: "alex@eventhub.com",
//     phone: "+91 98765 43210",
//     city: "Salem, Tamil Nadu",
//   };

//   const handleEdit = () => setIsEditing(true);

//   const handleCancel = () => {
//     form.setFieldsValue(initialValues);
//     setIsEditing(false);
//   };

//   const handleSave = (values) => {
//     console.log("Updated profile:", values);
//     message.success("Profile updated successfully");
//     setIsEditing(false);
//   };

//   const beforeUpload = (file) => {
//     const isImage = file.type.startsWith("image/");
//     if (!isImage) {
//       message.error("You can only upload image files");
//     }
//     return false; 
//   };

//   return (
//     <div className="parent-profile">
//     <Card className="profile-card" bordered={false}>
//       <div className="profile-header">
//         <span className="profile-title">My Profile</span>
//         {!isEditing && (
//           <Button icon={<EditOutlined />} type="primary" onClick={handleEdit}>
//             Edit
//           </Button>
//         )}
//       </div>

//       <div className="profile-avatar-row">
//         <div className="avatar-wrapper">
//           <Avatar size={68} className="profile-avatar">A</Avatar>
//           {isEditing && (
//             <Upload
//               showUploadList={false}
//               beforeUpload={beforeUpload}
//               accept="image/*"
//             >
//               <div className="avatar-edit-icon">
//                 <CameraOutlined />
//               </div>
//             </Upload>
//           )}
//         </div>
//         <div>
//           <div className="profile-name">{initialValues.fullName}</div>
//           <div className="profile-email">{initialValues.email}</div>
//         </div>
//       </div>

//       <Form
//         form={form}
//         layout="vertical"
//         initialValues={initialValues}
//         onFinish={handleSave}
//         disabled={!isEditing}
//       >
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               label="Full Name"
//               name="fullName"
//               rules={[{ required: true, message: "Please enter your name" }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="Email"
//               name="email"
//               rules={[{ required: true, type: "email", message: "Enter a valid email" }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item label="Phone Number" name="phone">
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item label="City" name="city">
//               <Input />
//             </Form.Item>
//           </Col>
//         </Row>

//         {isEditing && (
//           <div className="profile-actions">
//             <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
//               Save
//             </Button>
//             <Button icon={<CloseOutlined />} onClick={handleCancel}>
//               Cancel
//             </Button>
//           </div>
//         )}
//       </Form>
//     </Card>
//     </div>
//   );
// }

// export default Profile;