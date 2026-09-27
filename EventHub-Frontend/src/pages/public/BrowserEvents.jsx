import React from 'react'
import { useState } from 'react';
import {CalendarTwoTone,TeamOutlined ,
  UserOutlined,EnvironmentOutlined,RightOutlined, LeftOutlined  ,CoffeeOutlined 
,TikTokOutlined ,PictureOutlined } from "@ant-design/icons";
import './Public.css'
import {Select} from 'antd'
import { useNavigate } from 'react-router-dom';
function BrowserEvents() {
const [price, setPrice] = useState(0);
const navigate=useNavigate()

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
 
 const stats = [
   {
     label: "Live Events",
     value: "1,248",
     icon: <span className="icon"><CalendarTwoTone /></span>,
     className: "blue",
   },
   {
     label: "Happy Attendees",
     value: "86,400+",
     icon: <span><TeamOutlined /></span>,
     className: "green",
   },
   {
     label: "Cities Covered",
     value: "42",
     icon: <span><EnvironmentOutlined /></span>,
     className: "gold",
   },
   {
     label: "Partner Organizers",
     value: "310",
     icon: <span><UserOutlined /></span>,
     className: "purple",
   },
 ];

const categories = [
  "Technology",
  "Music",
  "Business",
  "Sports",
  "Arts & Culture",
  "Food & Drink",
];
  return (
    <div className='main-container'>
      <div className='inner-container'>
        <section id='event-section-1'>
        <h1 className='title'>Browse Events</h1>
        <p>Find events by category, city, date or price</p>
      </section>

{/* ----------------section 2----------- */}

      <section className='event-section-2'>
       
       
       <div className='filter-card'> 
    <div className='filter-header'>
      <h3>Filters</h3>
    <button className='reset-btn'>Reset</button>
    </div>
     <div className='search-city'>
      <label htmlFor="">City</label>
<input type="text" name="" id="" placeholder='e.g. Bengalore' />    </div>

<div className='category-section'>
 <h3>Category</h3>
<div> <input type="checkbox" name="" id="" /><label htmlFor="">Technology</label></div>
<div>  <input type="checkbox" name="" id="" /><label htmlFor="">Music</label></div>
<div> <input type="checkbox" name="" id="" /><label htmlFor="">Business</label></div>
<div> <input type="checkbox" name="" id="" /><label htmlFor="">Sports</label></div>
<div>  <input type="checkbox" name="" id="" /><label htmlFor="">Arts & Culture</label></div>
<div> <input type="checkbox" name="" id="" /><label htmlFor="">Foods & Dinner</label></div>

</div>


{/* range section */}
<div className='range-section'>
  <h3>Price Range</h3>

  <input type="range" name="" 
  id="range" min={0} max={2000}
  value={price}
  onChange={(e) => setPrice(e.target.value)}/>

 <div className="price-bottom">
      <span>₹0</span>
      <span>₹{price}</span>
    </div>
</div>

<div className="date-section">
  <h3>Date Range</h3>

  <div className="date-inputs">
    <input type="type" placeholder="From" />
    <input type="type" placeholder="To" />
  </div>

  <button className='filter-btn'>Apply Filters</button>
</div>

    </div>

<div className='events-main'>
  <div id='events-toolbar'>
    <p>Showing 6 of 128 events</p>
    <div className='sort-group'>
      <p>Sort by</p>
    
 <Select placeholder={"Most Popular"} options={[
{
  label:"Most Popular",
  value:"Most popular"
},
{
  label:"Date:Soonest",
  value:"Date:Soonest"
},
{label:"Price:Low to High",
  value:"Price:Low to High"
}


]}
/></div>
    
  </div>
        <div className="events-grid-3">

          {featuredEvents.map((event) => (
            <div className="event-card" key={event.title} onClick={()=>navigate('/event-details')}>

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

                <h3 className="event-title">{event.title}</h3>

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

            </div>
          ))}

        </div>
         </div>


      </section>
      </div>
      

    </div>
  )
}

export default BrowserEvents
