import React from 'react'
import './Attendee.css';
import {Table,Button,Modal,QRCode} from 'antd'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StatusTag } from '../../Constants/StatusTag';
function MyTickets() {
   const [activeTab, setActiveTab] = useState("All");
   const [showModal,setShowModal]=useState(false);
   const [selectTicket,setSelectTicket]=useState(null);
   const navigate=useNavigate();
const columns=[{
  title:"Event",
  dataIndex:"event",
  key:"event"
},
{
  title:"Date",
  dataIndex:"date",
  key:"date"
},
{
  title:"Ticket Code",
  dataIndex:"ticketCode",
  key:"ticket code"
},
{
  title:"Status",
  dataIndex:"status",
  key:"status",
  render:(status)=>(
    <StatusTag status={status} />
  )
  // render:(status)=>(
  //   <span className={`status_${status.toLowerCase()}`}>{status}</span>
  // )
},{
  title:"Action",
  dataIndex:"action",
  key:"action",
  render:(_,result)=>(
<>
<button className='view-QR' onClick={()=>{
  setShowModal(true)
setSelectTicket(result)
}
 } >View QR</button>
<button className='document-btn' onClick={()=>navigate('/attendee/registeredDocument')}>Document</button>
</>
  )
}



]

const data=[{
      key: "1",
      event: "Tech Summit 2026",
      date: "Oct 18, 2026",
      ticketCode: "TCK-8821-XA",
      status: "Active",
    },
    {
      key: "2",
      event: "Indie Music Fest",
      date: "Nov 2, 2026",
      ticketCode: "TCK-4432-QW",
      status: "Active",
    },
    {
      key: "3",
      event: "Startup Founders Meetup",
      date: "Sep 25, 2026",
      ticketCode: "TCK-1190-ZP",
      status: "Checked-In",
    },
    {
      key: "4",
      event: "Summer Jazz Night",
      date: "Aug 14, 2026",
      ticketCode: "TCK-0032-LM",
      status: "Cancelled",
    },]

  return (
    <div className='ticket-page'>
      <section className='ticket-header'>
 <h3 className='ticket-title'>My Tickets</h3> 
    <p className='desc-sec1'>All tickets booked under rubana@example.com</p>
      </section>
    
    {/* ----------------section2--------------- */}
    <section className='ticket-nav'>
      <nav className='table-nav'>
         <ul>
          <li
            className={activeTab === "All" ? "active" : ""}
            onClick={() => setActiveTab("All")}
          >
            All (4)
          </li>

          <li
            className={activeTab === "Active" ? "active" : ""}
            onClick={() => setActiveTab("Active")}
          >
            Active (2)
          </li>

          <li
            className={activeTab === "Checked-In" ? "active" : ""}
            onClick={() => setActiveTab("Checked-In")}
          >
            Checked-In (11)
          </li>

          <li
            className={activeTab === "Cancelled" ? "active" : ""}
            onClick={() => setActiveTab("Cancelled")}
          >
            Cancelled (1)
          </li>
        </ul>
      </nav>
    </section>


    {/* -----------------------------TICKET TABLE----------------------------- */}
    {/* <section className='table-sec'>
      <table>
    <thead>
      <tr>
        <th>Event</th>
        <th>Date</th>
        <th>Ticket Code</th>
        <th>Status</th>
        <th>Action</th>
      </tr>

    </thead>
    <tbody>
      <tr>
        <td className='event-col'>Tech Summit 2026</td>
        <td>Oct 18, 2026</td>
        <td>TCK-8821-XA</td>
        <td><button className='status_active'>Active</button></td>
        <td><button className='view-QR'>View QR</button> <button className='document-btn'>Document</button></td>
      </tr>
       <tr>
        <td className='event-col'>Indie Music Fest</td>
        <td>Nov 2, 2026</td>
        <td>TCK-4432-QW</td>
        <td> <button className='status_active'>Active </button></td>
        <td><button className='view-QR'>View QR</button> <button className='document-btn'>Document</button></td>
      </tr>
       <tr>
        <td className='event-col'>Startup Founders Meetup</td>
        <td>Sep 25, 2026</td>
        <td>TCK-1190-ZP</td>
        <td><button className='status_checked-in'>Checked-In</button></td>
        <td><button className='view-QR'>View QR</button> <button className='document-btn'>Document</button></td>
      </tr>
       <tr>
        <td className='event-col'>Summer Jazz Night</td>
        <td>Aug 14, 2026</td>
        <td>TCK-0032-LM</td>
        <td><button className='status_cancelled'>Cancelled</button></td>
        <td><button className='view-QR'>View QR</button> <button className='document-btn'>Document</button></td>
      </tr>

    </tbody>


      </table>
    </section> */}

    <section>
      <Table className="ticket-table" columns={columns} pagination={false} dataSource={data}/>
    </section>




<Modal
className='ticket-qr-modal'
  open={showModal}
  onCancel={() => setShowModal(false)}
  footer={null}
  width="50vw"
>
  <div className="qr-modal">

    <h2 className='modal-header-title'>Check-In QR Code</h2>
  <div className="modal-divider-top"></div>

    <QRCode value={selectTicket?.ticketCode} className='qr-image' />

    <div className='qr-content-container'><h3>Indie Music Fest</h3>

    <p>
      Ticket Code: TCK-4432-QW
    </p>
</div>
   
   <div className='qr-content-container-2'> <p>
      Present this code at the venue entrance for check-in
    </p>

    <span onClick={()=>navigate('/attendee/registeredDocument')}>
      View exclusive event documents →
</span>
</div>
 <div className="modal-divider"></div>
    <div className="modal-footer">
      <Button
      className='done-btn'
        type="primary"
        onClick={() => setShowModal(false)}
      >
        Done
      </Button>
    </div>

  </div>
</Modal>


    </div>

    
  )
}

export default MyTickets
