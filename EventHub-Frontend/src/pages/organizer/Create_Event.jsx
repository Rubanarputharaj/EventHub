import React from 'react'
import { useState } from "react";
import { Steps, Button, Input, Select } from "antd";
import "./Organizer.css"
import TextArea from 'antd/es/input/TextArea';
import { Upload, Tag } from "antd";
import { InboxOutlined, FilePdfOutlined, FileImageOutlined, DeleteOutlined } from "@ant-design/icons";
const { Dragger } = Upload;
function Create_Event() {
 
  const [current, setCurrent] = useState(0);
const [fileList, setFileList] = useState([]);
const uploadProps = {
  name: 'file',
  multiple: true,
  accept: '.pdf,.png,.jpg,.jpeg',
  showUploadList: false,
  beforeUpload: (file) => {
    setFileList(prev => [...prev, { uid: file.uid, name: file.name, size: file.size }]);
    return false;   // network call pogaathu, local state la mattum add aagum
  },
};

const removeFile = (uid) => setFileList(prev => prev.filter(f => f.uid !== uid));

const getFileIcon = (name) =>
  name.toLowerCase().endsWith('.pdf')
    ? <FilePdfOutlined style={{ color: '#ff4d4f', fontSize: 20 }} />
    : <FileImageOutlined style={{ color: '#fa8c16', fontSize: 20 }} />;

const formatSize = (bytes) =>
  bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(0)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  const next = () => {
    setCurrent(current + 1);
  };

  const previous = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="create-event-container">

     <section className='create-section1'>
      <h3>Create New Event</h3>
      <p>Fill in the details below to publish your event</p>
     </section>
      

      {/* FORM CONTAINER */}
      <div className="event-form">
     <Steps
        current={current}
        items={[
          {
            title: "Basic Info",
            description: "Title & category",
          },
          {
            title: "Venue & Date",
            description: "Location & timing",
          },
          {
            title: "Ticket & Capacity",
            description: "Pricing",
          },
          {
            title: "Documents",
            description: "Upload documents",
          },
        ]}
      />

        {current === 0 && (
          <div>
            {/* <h2>Basic Info</h2> */}

            <label className='form-label'><span className='red-star'>*</span>Event Title</label>
            <Input className='input' placeholder="Enter event title" />

            <div className='row2-parent'>
              <div><label className='form-label' ><span className='red-star'>*</span>Category</label>
            <Select
            className='input'
              placeholder="All category"
              style={{ width: "100%" }}
              options={[
                {
                  value: "technology",
                  label: "Technology",
                },
                {
                  value: "music",
                  label: "Music",
                },
                {
                  value: "business",
                  label: "Business",
                },
              ]}
            /></div>
            <div>
              <label className='form-label'>Tags</label>
              <Input placeholder='enter tags'  className='input'/>
            </div>
            </div>
            <label className='form-label'><span className='red-star'>*</span>Description</label>
            <TextArea className='textarea'/>
          </div>
        )}

        {current === 1 && (
          <div>
            {/* <h2>Venue & Date</h2> */}

<div className='row2-parent'>
              <div><label className='form-label' ><span className='red-star'>*</span>City</label>
                         <Input placeholder='enter th city'  className='input'/>

           </div>
            <div>
              <label className='form-label'><span className='red-star'>*</span>Venue</label>
              <Input placeholder='enter Venue'  className='input'/>
            </div>
            </div>
            <div className='row2-parent'>
              <div><label className='form-label' ><span className='red-star'>*</span>Event Date</label>
                         <Input placeholder='enter th city'  className='input'/>

           </div>
            <div>
              <label className='form-label'><span className='red-star'>*</span>Start Date</label>
              <Input placeholder='enter Venue'  className='input'/>
            </div>
            </div>

            <label className='form-label'>Full Address</label>
            <Input type="text"  className='input'/>
          </div>
        )}

        {current === 2 && (
          <div>
            {/* <h2>Ticket & Capacity</h2> */}
             <div className='row2-parent'>
              <div>
                <label className='form-label' ><span className='red-star'>*</span>Ticket Price</label>
                <Input placeholder='Enter ticket price'  className='input'/>

           </div>
            <div>
              <label className='form-label'><span className='red-star'>*</span>Capacity</label>
              <Input placeholder='Enter maximum capacity'  className='input'/>
            </div>
            </div>

          </div>
        )}

        {/* {current === 3 && (
          <div>
             <h2>Documents</h2> 

            <label className='form-label'><span className='red-star'>*</span>Event Document</label>
            <Input type="file" />
          </div>
        )} */}

        {current === 3 && (
  <div>
    <label className='form-label'><span className='red-star'>*</span>Event Document</label>

    <Dragger {...uploadProps}>
      <p className="ant-upload-drag-icon"><InboxOutlined /></p>
      <p className="ant-upload-text">Click or drag files to this area to upload</p>
      <p className="ant-upload-hint">Supports PDF, PNG, JPG</p>
    </Dragger>

    <div className="uploaded-file-list">
      {fileList.map(file => (
        <div className="uploaded-file-row" key={file.uid}>
          <div className="uploaded-file-left">
            {getFileIcon(file.name)}
            <div>
              <div className="uploaded-file-name">{file.name}</div>
              <div className="uploaded-file-meta">Uploaded · {formatSize(file.size)}</div>
            </div>
          </div>
          <div className="uploaded-file-right">
            <Tag color="green">Public</Tag>
            <DeleteOutlined onClick={() => removeFile(file.uid)} style={{ cursor: 'pointer', color: 'var(--text-tertiary)' }} />
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        <div className="form-buttons">

          {current > 0 && (
            <Button onClick={previous}>
              Previous
            </Button>
          )}

          {current < 3 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}

          {current === 3 && (
            <Button type="primary">
              Submit
            </Button>
          )}

        </div>

      </div>
    </div>
  );
}

export default Create_Event
