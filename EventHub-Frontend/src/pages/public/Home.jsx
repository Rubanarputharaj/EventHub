import React from "react";
import {CalendarTwoTone,TeamOutlined ,CalendarOutlined ,
  UserOutlined,EnvironmentOutlined,RightOutlined, LeftOutlined  ,CoffeeOutlined 
,TikTokOutlined ,PictureOutlined ,SearchOutlined  } from "@ant-design/icons";
import {Card} from 'antd'
import { getCategoryColor } from '../../Constants/CategoryColor';
import CategoryTag from "../../Constants/CategoryTag";
import "./Public.css";
import { useNavigate } from "react-router-dom";

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
  "All",
  "Technology",
  "Music",
  "Business",
  "Sports",
  "Arts & Culture",
  "Food & Drink",
];

function Home() {
  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate('/events');
      window.scrollTo(0, 0);

  }
  return (
    <div className="public-home">

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover events happening near you</h1>

          <p>
            Book tickets, get live venue weather, and access exclusive
            event documents — all in one place.
          </p>

          <div className="search-box">

            <div className="search-field ">
              <span className="search-icon"><SearchOutlined /></span>
              <input
                type="text"
                placeholder="Search events, artists, topics..."
              />
            </div>

            <div className="search-field ">
             <span className="location-icon"><EnvironmentOutlined /></span>
              <input
                type="text"
                placeholder="City"
              />
            </div>

            <button className="search-btn">
              Search
            </button>

          </div>
        </div>
      </section>


      {/* Popular Categories */}
      <section className="popular-section">
        <span className="popular-label">Popular:</span>

        {categories.map((category, index) => (
          <span
            key={category}
            className={`category-tag ${
              index === 0 ? "active" : ""
            }`}
          >
            {category}
          </span>
        ))}
      </section>

      {/* Statistics */}

  <section className="public-stat">

    <div className="stat-parent"><div className="inner-stat">
        <div className="stat-row1">
          <p>Live Events</p>
          <span className="stat-icon-blue"><CalendarTwoTone /></span>
       </div>

      <div className="stat-row2">
        <h3>1,248</h3>
      </div>

    </div></div>

     <div className="stat-parent"><div className="inner-stat">
        <div className="stat-row1">
          <p>Happy Attendees</p>
          <span className="stat-icon-green"><TeamOutlined /></span>
       </div>

      <div className="stat-row2">
        <h3>86,400+</h3>
      </div>

    </div></div>

     <div className="stat-parent"><div className="inner-stat">
        <div className="stat-row1">
          <p>Cities Covered</p>
          <span className="stat-icon-gold"><EnvironmentOutlined /></span>
       </div>

      <div className="stat-row2">
        <h3>42</h3>
      </div>

    </div></div>

     <div className="stat-parent"><div className="inner-stat">
        <div className="stat-row1">
          <p>Partner Organizers</p>
          <span className="stat-icon-purple"><UserOutlined /></span>
       </div>

      <div className="stat-row2">
        <h3>310</h3>
      </div>

    </div></div>

  </section>



      {/* Featured Events */}
 <section className="featured-section">

        <div className="section-heading">
          <h2>Featured Events</h2>

          <button className="view-all-btn" onClick={handleNavigate}>
            View all
            <span>→</span>
          </button> 
           {/* <Link to="/event" onClick={() => window.scrollTo(0, 0)}>
  View All
</Link> */}
         </div> 
</section>


         <div className="events-grid-4">

  {featuredEvents.map((event,index) => (

    <Card
      className="event-card"
      key={index}
      styles={{ body: { padding: 0 } }}
    >

      <div className="event-cover"  style={{ background: getCategoryColor(event.category) }} >
        <span>{event.icon}</span>

        <span className="price-chip">
          {event.price}
        </span>
      </div>

      <div className="event-body">

        <span>
    <CategoryTag category={event.category} />
        </span>

        <h3 className="event-title">
          {event.title}
        </h3>

        <div className="event-meta">
          <span><CalendarOutlined /></span>
          <span>{event.date}</span>
        </div>

        <div className="event-meta">
          <span><EnvironmentOutlined /></span>
          <span>{event.location}</span>
        </div>

        <button className="event-btn" onClick={()=>navigate('/event-details')}>
          View Details
        </button>

      </div>

    </Card>

  ))}

</div>


    </div>
  );
}

export default Home;


