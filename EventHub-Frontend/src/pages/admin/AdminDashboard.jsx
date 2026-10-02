import React from 'react'
import { Card, } from 'antd';
import {UserOutlined,CalendarOutlined ,DollarOutlined,
 ExclamationCircleOutlined , DeleteOutlined
} from '@ant-design/icons';
import {Table,Select,Avatar} from 'antd';
import './Admin.css'
import { StatusTag } from '../../Constants/StatusTag';
function AdminDashboard() {

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
      title:"User",
      dataIndex:"user",
      key:"user",
      render:(name)=>{
        
          const initial=name
          .split(" ")
          .map((data)=>data[0])
          .slice(0,2)
          .join("")
          .toUpperCase()
              const colorIndex = name.length % colors.length;

        return(
          <div className="name-cell">
        <Avatar style={{
            backgroundColor: colors[colorIndex],
          }}>{initial}</Avatar>
        <span>{name}</span>
      </div>
        )
      }
    },
    {
      title:"Email",
      dataIndex:"email",
      key:"email"
    },
    {
      title:"Role",
      dataIndex:"role",
      key:"role",
      render:(role)=>(
        <StatusTag status={role}/>
      )
    },
    {
      title:"Joined",
      dataIndex:"joined",
      key:"joined"
    },
    {
      title:"Actions",
      dataIndex:"actions",
      key:"actions",
      render:()=>(
        <div>
                <Select
                className='select-roles'
                placeholder={"All roles"}
                options={[
                  {
                    value:"Attendee",
                    label:"Attendee"
                  },
                  {
                    value:"organizer",
                    label:"Organizer"
                  },
                  {
                    value:"admin",
                    label:"Admin"
                  }
                ]}
                />

            <span className='suspend-btn'>
                  <StatusTag className="action-suspend" status={"Suspend"}  />
            </span>  
            
        </div>
      )
    }
  ]

  const data=[
    {
      user:"Priya Sharma",
      email:"priya@example.com",
      role:"Attendee",
      joined:"Jan 12, 2026",
    },
    {
      user:"Karan Mehta",
      email:"karan@example.com",
      role:"Organizer",
      joined:"Feb 3, 2026",
    },
    {
      user:"Admin User",
      email:"admin@eventhub.com",
      role:"Admin",
      joined:"Dec 1, 2025",
    },
    {
      user:"Rahul Verma",
      email:"rahul@example.com",
      role:"Attendee",
      joined:"Mar 21, 2026",
    },
    {
      user:"Sneha Kapoor",
      email:"sneha@example.com",
      role:"Organizer",
      joined:"Apr 9, 2026",
    }
  ]

// table2

const columns2=[
  {
    title:"Event",
    dataIndex:"event",
    key:"event"
  },
  {
    title:"Organizer",
    dataIndex:"organizer",
    key:"organizer"
  },
  {
    title:"Date",
    dataIndex:"date",
    key:"date"
  },
  {
    title:"Status",
    dataIndex:"status",
    key:"status",
    render:(status)=>(
      <StatusTag status={status} />
    )
  },
  {
    title:"Actions",
    dataIndex:"actions",
    key:"actions",
    render:()=>(
      <div className='action-parent-gap'>
       <span className='Aprrove-btn'><StatusTag status={"Approve"} /></span>
        <span className='Flag-btn'><StatusTag status={"Flag"}  /></span> 
        <DeleteOutlined  className='deleteIcon' />
      </div>
    )
  }
]

const data2=[
  {
    event:"Tech Summit 2026",
    organizer:"Karan Mehta",
    date:"Oct 18, 2026",
    status:"Approved",

  },
  {
    event:"Underground Beats Night",
    organizer:"DJ Collective",
    date:"Sep 20, 2026",
    status:"Pending",
  },
  {
    event:"Crypto Investment Seminar",
    organizer:"FinLearn Co",
    date:"Sep 15, 2026",
    status:"Flagged",
  },
  {
    event:"City Marathon Run",
    organizer:"RunIndia",
    date:"Oct 5, 2026",
    status:"Approved",
  },

]

  return (
    <div className='parent'>

  {/*-------------- Section-1 admin title */}

      <section className='admin-title-container'>
        <h3 className='admin-title'>Admin Dashboard</h3>
        <p>Platform-wide metrics and moderation</p>
      </section>

  {/*-------------- Section-2 Admin stat cards */}
      
      <section className='attendee-stat-card-4'>

        <Card className="stats-card">
        <div className='inner-card'>
           <div className="card-top">
              <span>Total Users</span>
              <span className='stat-icon-blue'><UserOutlined className='icon-blue'/>
              </span>   
           </div>
          <h2>12,480</h2>
          <p className='stat-footer1'>+340 this week</p>
        </div>
        </Card>


        <Card className="stats-card">
          <div className='inner-card'>
          <div className="card-top">
            <span >Total Events</span>
            <span className='stat-icon-blue'><CalendarOutlined className='icon-gold' /></span>
          </div>
          <h2>964</h2>
          <p>18 pending review</p>
          </div>
        </Card>

        <Card className="stats-card">
          <div className='inner-card'>
          <div className="card-top">
            <span>Platform Revenue</span>
             <span className='stat-icon-blue'>
               <DollarOutlined className='icon-green'/>
              </span>
          </div>
          <h2>₹2.1Cr</h2>
        <p>Across all organizer</p>
          </div>
        </Card>

        <Card className="stats-card">
          <div className='inner-card'>
          <div className="card-top">
            <span>Pending Moderation</span>
             <span className='stat-icon-blue'>
               <ExclamationCircleOutlined  className='icon-danger'/>
              </span>
          </div>
          <h2>4</h2>
          <p id='stat-footer4'>Needs attention</p>
          </div>
        </Card>
      </section>

  {/*------ Section-3 user Role Management Tbale */}

        <section className='admin-roles-table-container'>
            <h4 className='admin-title'>User Role Management</h4>
            <div className='admin-roles-table'>
              <Table columns={columns} dataSource={data} pagination={false} className='user-role-table'/>
            </div>

        </section>

  {/*-------- Section-4 Event Moderartion Table */}

        <section className='event-moderation-container'>
             <h3 className="admin-title">Event Moderation</h3>
                <div className='admin-table-container'><Table columns={columns2}
                  dataSource={data2} 
                  pagination={false} className='event-moderator-table'/>
                </div>
        </section>

    </div>
  )
}

export default AdminDashboard
