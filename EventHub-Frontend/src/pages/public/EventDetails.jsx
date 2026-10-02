import React, { useState } from 'react';
import { Button, Card, Tag, Progress, Modal, QRCode, Alert } from 'antd';
import {
  CalendarOutlined,
  EnvironmentOutlined,
  EnvironmentFilled,
  TeamOutlined,
FileTextOutlined ,
  DownloadOutlined,
LeftOutlined , 
RightOutlined ,
 MailOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Public.css';
import { StatusTag } from '../../Constants/StatusTag';

const forecast = [
  { day: 'Today', high: 31, low: 23, icon: '☀️' },
  { day: 'Sat', high: 29, low: 22, icon: '⛅' },
  { day: 'Sun', high: 27, low: 21, icon: '🌧️' },
  { day: 'Mon', high: 30, low: 22, icon: '☀️' },
  { day: 'Tue', high: 28, low: 21, icon: '⛅' },
];

const documents = [
  { name: 'Event Agenda.pdf', size: '840 KB', color: 'var(--danger, #ff4d4f)' },
  { name: 'Venue Map.pdf', size: '1.2 MB', color: 'var(--primary)' },
];

function EventDetails() {
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);
const isLogin = localStorage.getItem('isLogin') === 'true';

const handleTicketBooking=()=>{
 if( !isLogin){
    navigate('/login')
  }
   setShowBooking(true)

}


  return (
    <div className="event-parent">
      {/* ---------- breadcrumb ---------- */}
     <p className="event-breadcrumb" ><span className='title-nav' onClick={() => navigate('/')}>Home /</span>
     <span className='title-nav' onClick={() => navigate('/events')}> Events / </span>
     <span className='title-nav-1'>Tech Summit 2026</span>
     </p>
        

      <div className="event-layout">
        {/* ================= LEFT ================= */}
        <div className="event-left">
          <div className="event-cover">
            <span className="event-cover-icon"><LeftOutlined /><RightOutlined /></span>
            <span className="event-price-chip">₹1,499 onwards</span>
          </div>

          <div className="event-tags">
           <span><StatusTag  status={"Technology"}/></span> 
           <span className='gap-left'><StatusTag  status={"Public Listing"}/></span>
              </div>

          <h1 className="event-details-title">Tech Summit 2026</h1>

          <div className="event-meta">
            <div className="event-meta-row">
              <CalendarOutlined /> Oct 18, 2026 · 9:00 AM
            </div>
            <div className="event-meta-row">
              <EnvironmentOutlined /> World Trade Center, Bengaluru
            </div>
            <div className="event-meta-row">
              <TeamOutlined /> 342 / 500 registered
            </div>
          </div>

          <div className="event-divider" />

          <h3 className="event-section-title">About this eventent</h3>
          <p className="event-about">
            Join 500+ engineers, founders and product leaders for a full day of keynotes,
            hands-on workshops and networking. Tech Summit 2026 brings together the region's
            most influential voices in cloud infrastructure, AI, and de veloper tooling.
            Includes lunch, swag kit and access to all recorded sessions post-e vent.
          </p>

          <div className="event-divider" />

          <h3 className="event-section-title">Venue</h3>
          <div className="event-map-box">
            <EnvironmentFilled  className="event-map-icon" />
            <span>Map preventiew — World Trade Center, Bengaluru</span>
          </div>

          <div className="event-divider" />

          <div className="event-doc-header">
            <h3 className="event-section-title">Public Event Documents</h3>
            <span className="event-hint">Visible to everyone</span>
          </div>

          <div className="event-doc-list">
            {documents.map((doc) => (
              <div className="event-doc-item" key={doc.name}>
                <FileTextOutlined  className="event-doc-icon" style={{ color: doc.color }} />
                <div className="event-doc-info">
                  <div className="event-doc-name">{doc.name}</div>
                  <div className="event-hint">{doc.size}</div>
                </div>
                <span className="event-icon-btn">
                  <DownloadOutlined />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="event-right">
          {/* ---------- booking card ---------- */}
          <Card className="event-side-card">
            <div className="event-flex-between">
              <span className="event-hint">Starting from</span>
              <StatusTag status={"On Sale"} />
            </div>

            <div className="event-price">₹1,499</div>

            <div className="event-hint">Capacity</div>
            <Progress percent={68} showInfo={false} size="small" />
            <div className="event-flex-between event-hint">
              <span>342 booked</span>
              <span>500 total</span>
            </div>

            <Button
              type="primary"
              size="large"
              block
              className="event-book-btn"
              onClick={handleTicketBooking}
            >
              Book Ticket
            </Button>
            <div className="event-hint event-center">You'll receive an email with a QR code ticket</div>
          </Card>

          {/* ---------- weather card ---------- */}
          <Card className="event-side-card">
            <div className="event-flex-between">
              <b>5-Day Weather Forecast</b>
              <span className="event-hint">OpenWeatherMap</span>
            </div>
            <div className="event-hint event-weather-place">World Trade Center, Bengaluru</div>

            <div className="event-weather">
              {forecast.map((f) => (
                <div className="event-weather-day" key={f.day}>
                  <div className="event-weather-d">{f.day}</div>
                  <div className="event-weather-icon">{f.icon}</div>
                  <div className="event-weather-t">
                    {f.high}° <span className="event-weather-lo">{f.low}°</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* ================= BOOKING MODAL ================= */}
      <Modal
        open={showBooking}
        title="Booking Confirmed"
        onCancel={() => setShowBooking(false)}
        width={420}
        centered
        footer={[
          <Button key="close" onClick={() => setShowBooking(false)}>
            Close
          </Button>,
          <Button
            key="tickets"
            type="primary"
            onClick={() => {
              setShowBooking(false);
              navigate('/attendee/myTickets');
            }}
          >
            Go to My Tickets
          </Button>,
        ]}
      >
        <div className="event-qr-wrap">
          <QRCode value="TCK-9034-RT" />
          <div className="event-center">
            <div className="event-doc-name">Tech Summit 2026</div>
            <div className="event-hint">Ticket Code: TCK-9034-RT</div>
          </div>
          <Alert
            type="info"
            showIcon
            icon={<MailOutlined />}
            style={{ width: '100%' }}
            message="A confirmation email with this QR ticket has been sent to priya@example.com"
          />
        </div>
      </Modal>
    </div>
  );
}

export default EventDetails;
