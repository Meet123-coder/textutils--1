import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upperCase!" , "success");
  }

   const handleDownClick = ()=>{
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!" , "success");
  }

   const handleClearClick = ()=>{
    let newText =('');
    setText(newText)
    props.showAlert("Text was Cleared!" , "success");
  }

  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg); 
  props.showAlert("Text-to-Speech started!" , "success");
  }

  const Stopspeak = () => {
    window.speechSynthesis.cancel(); 
    props.showAlert("Text-to-Speech stopped!" , "success");
  };

  const handleOnChange = (event)=>{
   setText(event.target.value)
  }


  const [text , setText] = useState('');

  return (
    
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#061b2bff'}}>
      <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control "   value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#1a4161ff':'white' , color:props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    

    <button className=" btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className=" btn btn-primary mx-2"  onClick={handleDownClick}>Convert to LowerCase</button>
    <button className=" btn btn-primary mx-2"  onClick={speak}>Speak</button>
    <button className=" btn btn-primary mx-2"  onClick={Stopspeak}>Stop</button>
    <button className=" btn btn-primary mx-2"  onClick={handleClearClick}>Clear Text</button>
     

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h3>Your Text Summary</h3>
     <p>{text.split(" ").length}words and {text.length}character</p>
     <h3>Preview</h3>
     <p>{text}</p>
    </div> 

   </div>
     </>
  )
}
