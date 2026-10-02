import React from 'react'
import { useState } from "react";
import { Steps, Button, Input, Select, message, Divider,Checkbox } from "antd";
import "./Organizer.css";
import {useNavigate} from 'react-router-dom'
import TextArea from 'antd/es/input/TextArea';
import { Upload, Tag } from "antd";
import { CloudUploadOutlined , FilePdfOutlined, FileImageOutlined, DeleteOutlined } from "@ant-design/icons";
const { Dragger } = Upload;
function Create_Event() {
 
  const [current, setCurrent] = useState(0);
const navigate = useNavigate();

const handleSaveDraft = () => {
  message.success('Event saved as draft');
};

const handlePublish = () => {
  message.success('Event published successfully');
  navigate('/organizer/');   

};

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
              <div>
                <label className='form-label' ><span className='red-star'>*</span>City</label>
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
             <div>
              <label 
              className='form-label'>Capacity Preview</label>
              <Divider className='capacity-divider'/>
              <p className='capacity-desc'>0 / 500 registered — resets when event is published</p>
              <div>
                <span  className='capacity-cb-container'>    
                    <Checkbox className='checkbox-capaticty'/> 
                    <label className='price-desc'>Offer free tickets for this event (price = ₹0)</label>
                 </span>             
                 
               </div>
             </div>
          </div>
        )}

        {current === 3 && (

      <div>
            <label className="form-label">
              <span className="red-star">*</span>Event Collateral (PDF / Images)
            </label>

            <Dragger
              name="eventDocument"
              multiple={false}
              beforeUpload={() => false}
              showUploadList={true} className='dragger-main'
            >
             <div className='custom-file-upload'>
               <span><CloudUploadOutlined className='upload-icon' /></span>

              <p className="upload-text">
                Click or drag file to this area to upload
              </p>

              <p className="upload-hint">
                Upload event document in PDF or image format.
              </p>
             </div>
            </Dragger>
      </div>
        )}

  
       <div className="form-buttons">
            <Button onClick={current === 0 ? () => navigate('/organizer/') : previous}>
              Back
            </Button>

    <div className="form-buttons-right">
        <Button type="dashed" onClick={handleSaveDraft}>
          Save as Draft
        </Button>

          {current < 3 ? (
            <Button type="primary" onClick={next}>Next</Button>
          ) : (
            <Button type="primary" onClick={handlePublish}>Publish</Button>
          )}
     </div>
   </div>

      </div>
  </div>
  );
}

export default Create_Event
