import React from 'react'
import {PlusOutlined,TagsOutlined,CalendarOutlined ,
  CheckCircleOutlined,UserOutlined ,FormOutlined 
} from '@ant-design/icons';
import { Button,Card, Progress,Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Column } from "@ant-design/charts";
import { StatusTag } from '../../Constants/StatusTag';

function Organizer_Dashboard() {

  const data = [
    { month: "April", revenue: 15000 },
    { month: "May", revenue: 20000 },
    { month: "June", revenue: 13000 },
    { month: "July", revenue: 11800 },
    { month: "August", revenue: 12500 },
    { month: "September", revenue: 13200 },
  ];
  const navigate=useNavigate();
  const handleCreate=()=>{
    navigate('/organizer/createEvent')
  }

  const handleEdit=()=>{
    navigate('/organizer/createEvent')
  }
   const handleUser=()=>{
    navigate('/organizer/attendeesCheck')
  }

const columns=[
  {
    title:"Event",
    dataIndex:"event",
    key:"event"
  },
  {
    title:"Date",
    dataIndex:"date",
    key:"date"
  },
  {title:"Sold Ticket",
    dataIndex:"soldTicket",
    key:"soldTicket"
  },
  {
    title:"Revenue",
    dataIndex:"revenue",
    key:"revenue"
  },
  {
    title:"Status",
    dataIndex:"status",
    key:"status",
    render:(status)=>(
      <StatusTag status={status}/>
    )
  },
  {
    title:"Action",
    dataIndex:"action",
    key:"action",
    render:()=>(
    <><FormOutlined onClick={handleEdit} /><UserOutlined style={{ marginLeft: 15 }} onClick={handleUser} /></>

    )
  }
]

const tableData=[
  {
    event:"Tech Summit 2026",
    date:"Oct 18, 2026",
    soldTicket:"342 / 500",
    revenue:"₹5,12,658",
    status:"Published",
    // action:<><FormOutlined onClick={handleEdit} /><UserOutlined onClick={handleUser} /></>
  },
   {
    event:"Indie Music Fest",
    date:"Nov 2, 2026",
    soldTicket:"1230 / 2000",
    revenue:"₹₹12,28,770",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Startup Founders Meetup",
    date:"Sep 25, 2026",
    soldTicket:"98 / 150",
    revenue:"₹0",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Marathon City Run",
    date:"Oct 5, 2026",
    soldTicket:"3400 / 5000",
    revenue:"₹16,96,600",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Contemporary Art Expo",
    date:"Sep 30, 2026",
    soldTicket:"120 / 400",
    revenue:"₹35,880",
    status:"Draft",
    // action:<><FormOutlined /><UserOutlined /></>
  },  {
    event:"Tech Summit 2026",
    date:"Oct 18, 2026",
    soldTicket:"342 / 500",
    revenue:"₹5,12,658",
    status:"Published",
    // action:<><FormOutlined onClick={handleEdit} /><UserOutlined onClick={handleUser} /></>
  },
   {
    event:"Indie Music Fest",
    date:"Nov 2, 2026",
    soldTicket:"1230 / 2000",
    revenue:"₹₹12,28,770",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Startup Founders Meetup",
    date:"Sep 25, 2026",
    soldTicket:"98 / 150",
    revenue:"₹0",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Marathon City Run",
    date:"Oct 5, 2026",
    soldTicket:"3400 / 5000",
    revenue:"₹16,96,600",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Contemporary Art Expo",
    date:"Sep 30, 2026",
    soldTicket:"120 / 400",
    revenue:"₹35,880",
    status:"Draft",
    // action:<><FormOutlined /><UserOutlined /></>
  },  {
    event:"Tech Summit 2026",
    date:"Oct 18, 2026",
    soldTicket:"342 / 500",
    revenue:"₹5,12,658",
    status:"Published",
    // action:<><FormOutlined onClick={handleEdit} /><UserOutlined onClick={handleUser} /></>
  },
   {
    event:"Indie Music Fest",
    date:"Nov 2, 2026",
    soldTicket:"1230 / 2000",
    revenue:"₹₹12,28,770",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Startup Founders Meetup",
    date:"Sep 25, 2026",
    soldTicket:"98 / 150",
    revenue:"₹0",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Marathon City Run",
    date:"Oct 5, 2026",
    soldTicket:"3400 / 5000",
    revenue:"₹16,96,600",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Contemporary Art Expo",
    date:"Sep 30, 2026",
    soldTicket:"120 / 400",
    revenue:"₹35,880",
    status:"Draft",
    // action:<><FormOutlined /><UserOutlined /></>
  },  {
    event:"Tech Summit 2026",
    date:"Oct 18, 2026",
    soldTicket:"342 / 500",
    revenue:"₹5,12,658",
    status:"Published",
    // action:<><FormOutlined onClick={handleEdit} /><UserOutlined onClick={handleUser} /></>
  },
   {
    event:"Indie Music Fest",
    date:"Nov 2, 2026",
    soldTicket:"1230 / 2000",
    revenue:"₹₹12,28,770",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Startup Founders Meetup",
    date:"Sep 25, 2026",
    soldTicket:"98 / 150",
    revenue:"₹0",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Marathon City Run",
    date:"Oct 5, 2026",
    soldTicket:"3400 / 5000",
    revenue:"₹16,96,600",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   {
    event:"Marathon City Run",
    date:"Oct 5, 2026",
    soldTicket:"3400 / 5000",
    revenue:"₹16,96,600",
    status:"Published",
    // action:<><FormOutlined /><UserOutlined /></>
  },
   
]

  return (
    <div className='parent'>
<section className='attendee-check-section1'>
  <div className='sec1-title'>
  <h3>Organizer Dashboard</h3>
<Button type='primary' onClick={handleCreate}><span className='icon'><PlusOutlined /></span>Create New Event</Button>
  </div>
  <p>Karan Mehta · 6 events hosted </p>
  </section>    
  
  {/* ------------------SECTION2 */}
  
  <section className='attendee-stat-card-4'>
  <Card className="stats-card">
   <div className='inner-card'>
    
     <div className="card-top">
      <span>Total Revenue</span>
<span className='stat-icon-blue'>      <TagsOutlined className='icon-blue'/>
</span>    </div>

    <h2>₹18.4L</h2>
    <p>+12.4% this month</p>
   </div>
  </Card>


  <Card className="stats-card">
    <div className='inner-card'>
    <div className="card-top">
      <span >Tickets Sold</span>
      <span className='stat-icon-blue'><CalendarOutlined className='icon-green' /></span>
    </div>

    <h2>7,190</h2>

    <p>Across 6 events</p>
    </div>
  </Card>
  <Card className="stats-card">
    <div className='inner-card'>
    <div className="card-top">
      <span>Total Events Hosted</span>
 <span className='stat-icon-blue'><CheckCircleOutlined className='icon-purple'/></span>
    </div>

    <h2>6</h2>

    <p>2 upcoming</p>
    </div>
  </Card>
  <Card className="stats-card">
    <div className='inner-card'>
    <div className="card-top">
      <span>Avg. Check-In Rate</span>
 <span className='stat-icon-blue'><CheckCircleOutlined className='icon-purple'/></span>
    </div>

    <h2>78%</h2>

    <p>Of registered attendees</p>
    </div>
  </Card>
</section>


{/* -------------------------section3---------------- */}
  
  <section className='revenue-container'>
    <Card className='chart-bar-container'>

      <div className='revenue-header'>
        <h3>Revenue Trend (6 months)</h3>
        <p>₹ thousands</p>
        </div>
        <div>
           <Column
      data={data}
      xField="month"
      yField="revenue"
      height={180}
        // columnWidthRatio={0.3}
        //  maxColumnWidth={10}
        style={{ maxWidth: 28 }}          // bar max width (px), straight rectangle
  scale={{ x: { padding: 0.5 } }}   // bars naduvula gap athigam → bar narrow aagum
  interaction={{ elementHighlight: false }}   // hover background remove
  tooltip={false}                              // price popover remove
  animate={false}          // grow-up animation remove

    />
        </div>
    </Card>
    <Card className='chart-bar-container'>
      <div className='progress-bar-container'>
        <h3>Check-In Progress</h3>
        <div>
          <Progress type='circle'   
  strokeWidth={10} percent={75} />
        </div>
      </div>
    </Card>
  </section>

  {/* -----------------organizer dashboard table */}

<section className='my-event'>
<div>
<h3>My Events</h3>
<div className='my-event-table'>

  <Table columns={columns} dataSource={tableData}/>
</div>
</div>

</section>

  </div>
  )
}

export default Organizer_Dashboard
