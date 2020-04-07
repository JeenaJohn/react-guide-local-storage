import React from 'react';
import DatePicker from 'react-date-picker';


function DocumentRow(props){
//   console.log(props);

 return (
   <li className="doc-row">

       <input className="doc-text" type="text" id="docName" value={props.doc.docName}
       onChange={(e)=> props.editDocItem(e,props.index)}/>

      
        
<div className="doc-date">
      <label for="docExpiryDate">Doc Expires on </label>
      <input type="date" id="docExpiryDate" value={props.doc.docExpiryDate}
      onChange={(e)=> props.editDocItem(e,props.index)}/>
    </div>

    <div className="doc-date">
      <label for="docReminderDate">Remind me on </label>
      <input type="date" id="docReminderDate" value={props.doc.docExpiryDate}
      onChange={(e)=> props.editDocItem(e,props.index)}/>
    </div>





   </li>
 );
}

export default DocumentRow;
