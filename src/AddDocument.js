import React from 'react';

function AddDocument(props){

  const buttonDisabled = true;
  const enableSave = ()=> {
    buttonDisabled = false;
  }

 let newDocName = "Lisa's passport";
 let newDocExpiryDate = "2025-01-01";

  return(
    <div>
    <h4>Add new document</h4>

    <input type="text" name="docType" placeholder="Enter document name" value={newDocName}
    />

    <input type="date" name="docExpiryDate" value={newDocExpiryDate}/>

    <button type="submit"  onClick={()=>props.save(newDocName,newDocExpiryDate)}>
    Save
    </button>
    <button type="reset">Discard</button>

    </div>
  )

}

export default AddDocument;
