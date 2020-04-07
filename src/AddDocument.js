import React, {useState} from 'react';

function AddDocument(props){

  const buttonDisabled = true;
  const enableSave = ()=> {
    buttonDisabled = false;
  }


  const[newDocName, setNewDocName] = useState('');
  const[newDocExpiryDate, setNewDocExpiryDate] = useState('');


  const handleChange = (e) => {

    const  {name, value} = e.target;
    console.log(name);
    console.log(value);
    switch(name){
      case "docName":
        setNewDocName(value);
        break;
      case "docExpiryDate"  :
        setNewDocExpiryDate(value);
        break;
      default:
    }

    //  console.log(editedDocs)
  };

  return(
    <div>
    <h4>Add a document</h4>
     <div className="doc-row">
    <input className="doc-text" type="text" name="docName" placeholder="Enter document name" value={newDocName}
    onChange={(e)=>handleChange(e)}/>

    <input className="doc-date" type="date" name="docExpiryDate" value={newDocExpiryDate}
    onChange={(e)=>handleChange(e)}/>
     </div>
    <button type="submit"  onClick={()=>props.save(newDocName,newDocExpiryDate)}>
    Save
    </button>


    </div>
  )

}

export default AddDocument;
