import React from 'react'


function DocumentRow(props){
//   console.log(props);

 return (
   <div>

   <input type="text" name="docType" value={props.doc.docName}
   onChange={(e)=> props.editDocItem(e,props.index)}/>

   <input type="date" name="docExpiryDate" value={props.doc.docExpiryDate}
   onChange={(e)=> props.editDocItem(e,props.index)}/>
   </div>
 );
}

export default DocumentRow;
