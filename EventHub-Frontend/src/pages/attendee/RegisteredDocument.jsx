import React from 'react'
import {Card} from 'antd';
import {CheckCircleOutlined } from '@ant-design/icons'
function RegisteredDocument() {
  return (
    <div className='parent'>

<section className='RD-section-1'>
  <p className='Document-name'> <span id='nav-ticket'>My Tickets / </span>Tech Summit 2026 · Documents</p>
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
 
 <section>

        <Card>
         
        </Card>
      </section>

 
    </div>
  )
}

export default RegisteredDocument
