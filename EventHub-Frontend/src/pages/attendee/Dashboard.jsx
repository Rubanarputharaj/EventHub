import React from 'react'
import {Card,Table} from 'antd';
import {useNavigate} from 'react-router-dom'
import {TagsOutlined,CalendarOutlined ,CheckCircleOutlined,LeftOutlined,RightOutlined,
  TeamOutlined,TikTokOutlined,PictureOutlined,CalendarTwoTone,EnvironmentOutlined
 } from '@ant-design/icons'
import './Attendee.css'
import { StatusTag } from '../../Constants/StatusTag';
function Dashboard() {
    const user=JSON.parse(localStorage.getItem("user"))
    console.log(user)

    const navigate=useNavigate();

    const featuredEvents = [
   {
     title: "Tech Summit 2026",
     category: "Technology",
         icon:<><LeftOutlined /><RightOutlined /></>,
     date: "Oct 18, 2026",
     location: "Bengaluru",
     price: "₹1,499",
     color: "linear-gradient(135deg, #1677ff, #69b1ff)",
   },
    {
     title: "Tech Summit 2026",
     category: "Technology",
     icon:<><LeftOutlined /><RightOutlined /></>,
     date: "Oct 18, 2026",
     location: "Bengaluru",
     price: "₹1,499",
 color: "linear-gradient(135deg, #16a34a, #b7f7c5)",
  },
  {
     title: "Business Leaders Meet",
     category: "Business",
     icon:<TeamOutlined />,
     date: "Nov 15, 2026",
     location: "Mumbai",
     price: "₹1,999",
 color: "linear-gradient(135deg, #e91e63, #ffb6d5 )", 
  },
   {
     title: "Indie Music Fest",
     category: "Music",
         icon:<TikTokOutlined />,
     date: "Nov 2, 2026",
     location: "Chennai",
     price: "₹999",
     color: "linear-gradient(135deg, #722ed1, #b37feb)",
   },
   {
     title: "Business Leaders Meet",
     category: "Business",
     icon:<TeamOutlined />,
     date: "Nov 15, 2026",
     location: "Mumbai",
     price: "₹1,999",
     color: "linear-gradient(135deg, #13c2c2, #5cdbd3)",
   },
   {
     title: "Sports Carnival 2026",
     category: "Sports",
     icon:<PictureOutlined />,
     date: "Dec 5, 2026",
     location: "Hyderabad",
     price: "₹799",
     color: "linear-gradient(135deg, #fa8c16, #ffc069)",
   },
   {
     title: "Tech Summit 2026",
     category: "Technology",
         icon:<><LeftOutlined /><RightOutlined /></>,
     date: "Oct 18, 2026",
     location: "Bengaluru",
     price: "₹1,499",
 color: "linear-gradient(135deg, #16a34a, #b7f7c5)",
  },
   {
     title: "Indie Music Fest",
     category: "Music",
     icon:<TikTokOutlined />,
     date: "Nov 2, 2026",
     location: "Chennai",
     price: "₹999",
     color: "linear-gradient(135deg, #722ed1, #b37feb)",
   },
   {
     title: "Business Leaders Meet",
     category: "Business",
     icon:<TeamOutlined />,
     date: "Nov 15, 2026",
     location: "Mumbai",
     price: "₹1,999",
 color: "linear-gradient(135deg, #e91e63, #ffb6d5 )", 
  },
   {
     title: "Sports Carnival 2026",
     category: "Sports",
     icon:<PictureOutlined />,
     date: "Dec 5, 2026",
     location: "Hyderabad",
     price: "₹799",
     color: "linear-gradient(135deg, #fa8c16, #ffc069)",
   },
 ];


    const columns=[
      {
        title:"Event",
        dataIndex:"event",
        key:"event"
      },
      {
        title:"Date",
        dataIndex:"date",
        key:"date",
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
        render:(status)=>(
          <StatusTag status={status} />
        )
      }
      ,{
        title:"",
        key:"action",
        render:()=>(
          <button className='view-ticket-btn' onClick={()=>navigate('/attendee/myTicket')}>View Ticket</button>
        )
      }
    ]

    const data=[
      {
        event:"Tech Summit 2026",
        date:"Oct 18, 2026",
        ticketCode:"TCK-8821-XA",
        status:"Active",

      },
      {
        event:"Indie Music Fest",
        date:"Nov 2, 2026",
        ticketCode:"TCK-4432-QW",
        status:"Active"
      }
    ]
  return (
    <div className='main'>

<section className='welcome-sec'>
  <div className='inner-welcome-sec1'>
  <h2 className='title-sec1'>Welcome Back {user.fullName}</h2>
<p className='desc-sec1'>Here's what's happening with your events
</p>
</div>
</section>


<section className='attendee-stat-card'>
  <Card className="stats-card">
   <div className='inner-card'>
    
     <div className="card-top">
      <span>Total Booked Tickets</span>
<span className='stat-icon-blue'>      <TagsOutlined className='icon-blue'/>
</span>    </div>

    <h2>4</h2>
    <p>All-time bookings</p>
   </div>
  </Card>


  <Card className="stats-card">
    <div className='inner-card'>
    <div className="card-top">
      <span >Total Booked Tickets</span>
      <span className='stat-icon-blue'><CalendarOutlined className='icon-green' /></span>
    </div>

    <h2>2</h2>

    <p>All-time bookings</p>
    </div>
  </Card>
  <Card className="stats-card">
    <div className='inner-card'>
    <div className="card-top">
      <span>Total Booked Tickets</span>
 <span className='stat-icon-blue'><CheckCircleOutlined className='icon-purple'/></span>
    </div>

    <h2>1</h2>

    <p>All-time bookings</p>
    </div>
  </Card>
</section>

{/* --------------------section3------------ */}

<section className='upcoming-event'>
  <div className='event-title'>  <h4>Your Upcoming Events</h4>
</div>
<Table columns={columns} dataSource={data}  pagination={false} className='upcoming-event-table'/>
</section>


{/* -----------------------------------section4------------ */}

<section className='recommended-section'>
<div className='recommended-title' >
  <h3 className='h3'>Recommended for You</h3>
</div>

<div className="events-grid-4">

  {featuredEvents.map((event) => (

    <Card
      className="event-card"
      key={event.title}
      styles={{ body: { padding: 0 } }}
    >

      <div
        className="event-cover"
        style={{ background: event.color }}
      >
        <span>{event.icon}</span>

        <span className="price-chip">
          {event.price}
        </span>
      </div>

      <div className="event-body">

        <span className="event-category">
          {event.category}
        </span>

        <h3 className="event-title">
          {event.title}
        </h3>

        <div className="event-meta">
          <span><CalendarTwoTone /></span>
          <span>{event.date}</span>
        </div>

        <div className="event-meta">
          <span><EnvironmentOutlined /></span>
          <span>{event.location}</span>
        </div>

        <button className="event-btn">
          View Details
        </button>

      </div>

    </Card>

  ))}

</div>

</section>
    </div>
  )
}

export default Dashboard
