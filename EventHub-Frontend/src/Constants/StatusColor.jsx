export const STATUS_CONFIG = {
  // Event status
  Published:  { 
     bg:"var(--success-light)",
     text:"var(--success-text)",
     border:"var(--success-border)",
    label: "Published" },


  Draft: { 
    bg:"var(--warning-light)",
    text:"var(--warning-text)",
    border:"var(--warning-border)",
    label: "Draft" },

  //Attendeee dashboard
  Active: { 
    bg:"var(--success-light)",
    text:"var(--success-text)",
    border:"var(--success-border)",
    label: "Active" 
  },

  Cancelled:{ 
  bg:"var(--danger-light)",
  text:"var(--danger-text)",
  border:"var(--danger-border)",
  label:"Cancelled"
   },

  // Attendee & check-in (organizer)
  "Checked-In":{ 
     bg: "var(--primary-light)",
    text: "var(--primary-text)",
    border: "var(--primary-border)",
    label: "Checked-In",
  },

  "Not Checked-In": {
    bg:"var(--warning-light)",
    text:"var(--warning-text)",
    border:"var(--warning-border)",
    label:"Not Checked-In"
  },

    //admin layout
    Pending: {
    bg:"var(--warning-light)",
    text:"var(--warning-text)",
    border:"var(--warning-border)",
    label:"Pending",
    },

    Approved: {
      bg:"var(--succes-light)",
      text:"var(--success-text)",
      border:"var(--success-border)",
      label:"Approved",
    },

    Flagged: {
       bg:"var(--danger-light)",
      text:"var(--danger-text)",
      border:"var(--danger-border)",
      label:"Flagged",
    },

    // =============================================================================================//
    //                                    ROLES COLORS                                              //
    // =============================================================================================//
   
    Admin: {
      bg:"var(--danger-light)",
      text:"var(--danger-text)",
      border:"var(--danger-border)",
      label:"Admin",
    },

    Attendee: {
      bg:"var(--primary-light)",
      text:"var(--primary-text)",
      border:"var(--primary-border)",
      label:"Attendee",
    },

    Organizer: {
      bg:"var(--purple-light)",
      text:"var(--purple-text)",
      border:"var(--purple-border)",
      label:"Organizer",
    },



// ================================================================================================//
//                                             ACTION_COLORS                                       //
//=================================================================================================//

Suspend: {
  bg:"var(--danger-light)",
  text:"var(--danger-text)",
  border:"var(--danger-border)",
  label:"Suspend,"
},

 Flag: {
  bg:"var(--card)",
  text:"var(--text)",
  border:"var(--border)",
  label:"Flag",


 },

 Approve: {
     bg:"var(--succes-light)",
      text:"var(--success-text)",
      border:"var(--success-border)",
      label:"Approve",
 },


//  event booking 
Technology: {
      bg:"var(--primary-light)",
      text:"var(--primary-text)",
      border:"var(--primary-border)",
      label:"Technology",
},

"Public Listing": {
      bg:"var(--succes-light)",
      text:"var(--success-text)",
      border:"var(--success-border)",
      label:"Public listing",
},

 "On Sale": {
      bg:"var(--succes-light)",
      text:"var(--success-text)",
      border:"var(--success-border)",
      label:"On sale",
 }


};

export const DEFAULT_STATUS = { color: "default", label: null };

