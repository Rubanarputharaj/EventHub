import {React,useState} from 'react'
import {Button,Table,Input,Modal,Switch,Avatar} from 'antd';
import {useNavigate} from 'react-router-dom';
import {SearchOutlined,QrcodeOutlined,VideoCameraOutlined } from "@ant-design/icons";
import { StatusTag } from '../../Constants/StatusTag';
function Attendees_Check() {
   const [showScanner, setShowScanner] = useState(false);

  const handleQR = () => {
    setShowScanner(true);
  };

  const closeScanner = () => {
    setShowScanner(false);
  };
  const navigate=useNavigate();
 const colors = [
  "#1677ff",
  "#722ed1",
  "#13c2c2",
  "#52c41a",
  
  "#fa8c16",
  "#eb2f96",
  
];

  const columns=[
    {
      title:"Attendee",
      dataIndex:"attendee",
      key:"attendee",
      render: (name) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    const colorIndex = name.length % colors.length;

    return (
      <div className="name-cell">
        <Avatar style={{
            backgroundColor: colors[colorIndex],
          }}>{initials}</Avatar>
        <span>{name}</span>
      </div>
    );
  },
    },
   
    {
      title:"Email",
      dataIndex:"email",
      key:"email"
    },
     {
      title:"Ticket Code",
      dataIndex:"ticketCode",
      key:"ticketCode"
    },
    {
      title:"Status",
      dataIndex:"status",
      key:"status",
       render: (status) => <StatusTag status={status} />, 
    },
    {
      title:"Check-In",
      dataIndex:"checkIn",
      key:"checkIn",
      render: (checked, record) => (
    <Switch
    className='switch-btn'
      checked={checked}
      onChange={(e) => {
        console.log(record);
        console.log(e.target.checked);
      }}
    />
  ),

    }
  ]

const data=[
  {
    attendee:"Priya Sharma",
    email:"priya@example.com",
    ticketCode:"TCK-8821-XA",
    status:"Checked-In",
  },
  {
    attendee:"Rahul Verma",
    email:"rahul@example.com",
    ticketCode:"TCK-7712-BB",
    status:"Not Checked-In",
      },
  {
    attendee:"Ananya Iyer",
    email:"ananya@example.com",
    ticketCode:"TCK-6620-QC",
    status:"Checked-In",   
},
  {
    attendee:"Vikram Nair",
    email:"vikram@example.com",
    ticketCode:"TCK-5591-DD",
    status:"Not Checked-In",   
},
  {
    attendee:"Sneha Kapoor",
    email:"sneha@example.com",
    ticketCode:"TCK-4483-EE",
    status:"Checked-In",
    checkIn:true
},
  {
    attendee:"Arjun Rao",
    email:"arjun@example.com",
    ticketCode:"TCK-3372-FF",
    status:"Not Checked-In",
},
]

  return (
    <div className='parent'>
<section className='attendee-check-section1'>
  <div className='sec1-title'>
  <h3>Tech Summit 2026 — Attendees</h3>
<Button type='primary' onClick={handleQR}><span className='icon'><QrcodeOutlined /></span>Scan QR Code</Button>
  </div>
  <p>342 registered · 267 checked in </p>
  </section>   
  
  <section className='attendee-checkin-table'>
    <Input   prefix={<SearchOutlined style={{ marginRight: 8 }} />}
  className='attendee-search-input'  placeholder="Search by name or email"></Input>
  <div className='attendee-table-container'>
    <Table className='attendee-table' columns={columns} dataSource={data} pagination={false} />
  </div>
  </section>


   <Modal
        open={showScanner}
        onCancel={closeScanner}
        footer={null}
        centered
        className='modal-container'
      >

        <div className="scanner-content">

          <h3 className="scanner-title">
            Scan Attendee's QR code
          </h3>

          <div className="scanner-box">

            {/* Scanner corners */}
            <div className="scanner-corners">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Scanning animation */}
            <div className="scanner-line"></div>

            <VideoCameraOutlined className="camera-icon" />

          </div>

          <p className="scanner-text">
           Point the attendee's ticket QR code at the camera to check them in automatically</p>

         <div className='QR-btn-section'>  <Button className='qr-cancel-btn'>Cancel</Button>
          <Button
            type="primary"
            onClick={closeScanner}>
              Simulate Successful Scan</Button></div>

        </div>

      </Modal>
  
   </div>
  )
}

export default Attendees_Check
