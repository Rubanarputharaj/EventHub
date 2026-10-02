import react from "react";
import { NavLink } from "react-router-dom";
import {InstagramOutlined,WhatsAppOutlined ,MailOutlined ,
    GithubFilled,PhoneOutlined ,ClockCircleOutlined } from '@ant-design/icons'
export const Footer=()=>{
    return(
        <div  className="fc-main">
        {/* section-1 */}

 <section className="footer-container">

        <div className="footer-card">
            
            <div className="logo-container">
                    <h3 id="logo">EH</h3>
                    <h4 className="fc-title-1">EventHub</h4>
                </div>
                    <div>            
                        <p className="footer-desc">Discover and book events that match your interests.
                             From local meetups toexciting experiences, EventHub makes event discovery
                              simple and easy.
                        </p>
                    </div>           
                <div className="fc-icons">
                    <span className="sm-icon"><InstagramOutlined /></span>
                    <span className="sm-icon"><WhatsAppOutlined /></span>
                    <span className="sm-icon"><GithubFilled /></span>
                    <span className="sm-icon"><MailOutlined  /></span>
                </div>

            </div>


    {/* -----------------card-2 */}

    <div className="footer-card">
       <div>
        <h3 className="fc-title">Explore </h3>
       </div>
        <div className="fc-link">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Browse Events </NavLink>
            <NavLink to="/">Categories </NavLink>
            <NavLink to="/">Upcoming Events</NavLink>
        </div>
    </div>

    {/* -----------------card-3 */}

    <div className="footer-card">
       <div>
        <h3 className="fc-title"> For Organizers </h3>
       </div>
        <div className="fc-link">
            <NavLink to="/signup">Create Event </NavLink>
            <NavLink to="/signup">Organizer sign up </NavLink>
            <NavLink to="/login">Organizer login </NavLink>
            <a href="mailto:arubantmr@gmail.com">Contact team</a>
        </div>
    </div>

    {/* -----------------card-4 */}

    <div className="footer-card">

      <div>
        <h3 className="fc-title"> EventHub Support </h3>
       </div>
            <div>            
                <p className="footer-desc">Need help with your booking ? We're here to help.</p>
             </div>
        <div className="fc-support-contact">
         <p><span><MailOutlined /></span> ruban.eventhub@gmail.com</p>
         <p>   For event and booking queries</p>
        </div>
        <div className="fc-support-contact">
            <p><span><PhoneOutlined /></span>+91 8056497936</p>
            <p><span><ClockCircleOutlined /></span> Mon - Fri, 9:00 AM - 6:00 PM</p>
        </div>

    </div>


        
</section>


<div className="fc-footer">
    <p>© 2026 EventHub. All rights reserved.</p>
    <p>Designed & Developed by Ruban.</p>
</div>
        </div>
    )
}