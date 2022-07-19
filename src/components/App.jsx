import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

const [newNote, newSetNote] = useState([]);
//const newArray =[{title: newAddTitle}, {content: newAddContent}];
//const [title: title, content: content] = newNote;



//console.log(newNote[1].title);



function handleClick(addTitle) {
  newSetNote(prevValue=>{
    return[...prevValue, addTitle];
    });
  }



function delNote(id) {
  //console.log(newNote);
  
  //console.log(id);
  
   newSetNote(prevValue=>{
     return prevValue.filter((note, index)=>{       
      return  index !== id;
     });
   });
}


  return (
    <div>
      <Header />
      <CreateArea click={handleClick} />
      {newNote.map((note, i) =>{
return <Note 
key={i} 
id={i}
noteTitle={note.title} 
noteContent={note.content} 
onbtnClick={delNote}
 /> 


})
}      
      <Footer />
    </div>
  );
}

export default App;