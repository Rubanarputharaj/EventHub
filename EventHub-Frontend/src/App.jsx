import { Routes, Route } from 'react-router-dom';
import './App.css';


import Home from './pages/public/Home';
import EventDetails from './pages/public/EventDetails';
import BrowserEvents from './pages/public/BrowserEvents';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Dashboard from './pages/attendee/Dashboard';
import MyTickets from './pages/attendee/MyTickets';
import RegisteredDocument from './pages/attendee/RegisteredDocument';
import Organizer_Dashboard from './pages/organizer/Organizer_Dashboard';
import Create_Event from './pages/organizer/Create_Event';
import Attendees_Check from './pages/organizer/Attendees_Check';
import AttendeeLayout from './layout/AttendeeLayout';
import PublicHeader from "../src/components/common/PublicHeader"
import OrganizerLayout from './layout/OrganizerLayout';
import Profile from './components/common/Profile';
import AdminLayout from './layout/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <>
    
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<>
        <PublicHeader/>

        <Home />     
          </>
} />
        <Route path="/events" element={<>
         <PublicHeader/>

          <BrowserEvents/>
          </>
          } />
         <Route path="/event-details" element={
          <>
          <PublicHeader/>
          <EventDetails />
         </>} /> 
        <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>} />

        {/*=======================================================================================
                                           PRIVATE LAYOUT
         ======================================================================================== */}
       {/*  attendee role sidebar */}
        <Route path="/attendee" element={<AttendeeLayout/>}>
        
        <Route index element={<Dashboard/>} />
        <Route path="browserEvent" element={<BrowserEvents/>} />
       <Route path='myTicket' element={<MyTickets/>} />
        <Route path='registeredDocument' element={<RegisteredDocument/>} />
              <Route path='profile' element={<Profile/>}/>

        </Route>

        {/* orgainzer role sidebar */}

        <Route path='/organizer' element={<OrganizerLayout/>}>
        <Route index element={<Organizer_Dashboard/>}/>
        <Route path='createEvent' element={<Create_Event/>}/>
        <Route path='attendeesCheck' element={<Attendees_Check/>}/>
        <Route path='browserEvent' element={<BrowserEvents/>}/>
        </Route>

        <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<AdminDashboard/>}/>
        <Route path='browserEvent' element={<BrowserEvents/>}/>
        </Route>
      </Routes>
    </>
  );
}
export default App;