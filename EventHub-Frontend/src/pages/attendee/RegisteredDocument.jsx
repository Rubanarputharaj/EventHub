import React from 'react'
import {Card} from 'antd';
import {useNavigate} from 'react-router-dom'
import {CheckCircleOutlined,FileOutlined,SearchOutlined,DownloadOutlined  } from '@ant-design/icons'
function RegisteredDocument() {
  const navigate=useNavigate()
  return (
    <div className='RD-parent'>

<section className='RD-section-1'>
  <p className='Document-name'> <span id='nav-ticket' onClick={()=>navigate('/attendee/myTicket')}>My Tickets / </span>Tech Summit 2026 · Documents</p>
  <h3 className='RD_Title'>Registered Documents Portal</h3>
  <p className='RD-Description'>Exclusive files for confirmed attendees only
</p>
</section>


{/* ---------------------scetion2 ------------- */}
 
      <section className='RD-section-2'>

        
        <div className='ticket-verification-message'>
          <div><CheckCircleOutlined  className='check-icon'/></div>
          <div>
            <strong className='verification-status' >Ticket verified — access granted.</strong>
           <p className='verification-info'>Showing registered-only documents for ticket <strong className='ticket-number'>TCK-8821-XA.</strong></p>
</div> 
        </div>
      </section>
 
 {/* -----------------------section3---------- */}
 
 <section className='RD-section-3'>

        {/* ----left side(document name & size) */}

          <Card className='document-card'>
           <div className='document-list'>
             <FileOutlined className='document-icon-blue' />
            <div>
              <h4 className='file-title'>Speaker Slides.pdf</h4>
              <p className='file-size'>2.4 MB</p>
           </div>
           </div>


           <div className='document-list-1'>
             <FileOutlined className='document-icon-red' />
            <div>
              <h4 className='file-title'>VIP Schedule.pdf</h4>
              <p className='file-size'>310 KB</p>
           </div>


           </div><div className='document-list-1'>
             <FileOutlined className='document-icon-orange'/>
            <div>
              <h4 className='file-title'>Venue Guide.pdf</h4>
              <p className='file-size'>1.1 MB</p>
           </div>
           </div>

          </Card>

       {/* ---------right sied (document download) */}

          <div className='download-card'>
         <div className='file-download-header'>
          <p className='file-header-pages'>Speaker Slides.pdf · Page 1 of 24</p>
          <div className='file-header-icons'>
            <span><SearchOutlined className='file-header-search-icon'/></span>
            <span><DownloadOutlined className='file-header-download-icon' /></span>
            </div>
         </div>

        <div className='parent-body'>
           <div className='body-download'>
          <div className='element-style'></div>
          <div className='element-style2'></div>
          <div className='element-style3'></div>
          <div className='element-style4'></div>
          <div className='element-style5'></div> 
          <div className='element-style6'></div> 
          <div className='element-style7'></div> 

         </div>
        </div>
          
          </div>
       
      </section>

 
    </div>
  )
}

export default RegisteredDocument
