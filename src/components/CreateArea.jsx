import React, {useState} from "react";



function CreateArea(props) {
const [addTitle, setTitle]= useState({
  title: "",
  content: ""
});

//console.log(addTitle);

function handleChange(event) {
  const {name, value}=event.target;
   setTitle(prevValue => 
   {return {
     ...prevValue,
      [name]: value
   };
   });
 }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={addTitle.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={addTitle.content}/>
        <button onClick={(e)=>{          
          props.click(addTitle);                           
          e.preventDefault();
          
setTitle({
  title: "",
  content: ""
});

                  
          }          
          }>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
