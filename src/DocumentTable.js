import React, {useState} from 'react';
import DocumentRow from './DocumentRow';
import AddDocument from './AddDocument'
import docsData from './documents.json';


function DocumentTable(){

  const [docs, setDocs] = useState(docsData);


  /// EDITING existing docs
  const editDocItem = (e,index) => {

    const  {name, value} = e.target;
    var editedDocs = [...docs];
    editedDocs[index][name] = value;
    setDocs(editedDocs);
    //  console.log(editedDocs)
  };

  const saveNewDocData = (docName,docExpiryDate) => {

      console.log("docName" + docName + docExpiryDate);
    const len = docs.length;
    var newListOfDocs = [...docs];

      console.log(len);
      newListOfDocs.push({docName, docExpiryDate});

          console.log(newListOfDocs);
//    newListOfDocs[len]["docName"] = docName;
//    newListOfDocs[len]["docExpiryDate"] = docExpiryDate;

  //  existingDocs.push(newDoc);
    setDocs(newListOfDocs);

  };



  return(
    <div>
    {docs.map((doc, index) =>
     <DocumentRow
      doc={doc}
      index={index}
      key={index}
      editDocItem={editDocItem}/>
    )}

    <AddDocument
    save={saveNewDocData}/>
    </div>
);
}

// class DocumentTable extends React.Component{
//   constructor(){
//     super();
//     console.log(docsData);
//     this.state = {
//       docs : docsData
//     };
//   }
//
//   render(){
//     console.log(this.state.docs);
//     return(
//     this.state.docs.map((doc, index) =>
//       <DocumentRow key={index} doc={doc}/>
//       )
//     )
//
//   }
//
// }

export default DocumentTable;
