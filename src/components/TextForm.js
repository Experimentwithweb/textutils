import React , { useState }from 'react'

export default function TextForm(props) {
  const [Text, setText] = useState('');
  //setText("Enter Text5:");
  const upHandleClick =( )=> {
  //console.log('Clicked');
  let newText = Text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to Upper Case",'success')

}
  const handleOnChange =( event)=> {
    //console.log('Clicked');
    setText(event.target.value);
  
  }
  const lower = ()=>{
    let nt = Text.toLowerCase();
    setText(nt);
    props.showAlert("Converted to Lower Case",'success')
  }

  const clear = ()=>{
    let new_text=''
    setText(new_text)
    props.showAlert("Text box cleared",'success')
  }

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('Tech').value],    
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert("Downloading Text file",'success')
  }




  return (
    <>    <div style={{color:props.mode==='light'?'black':'gray'}}>
    <h1> {props.heading}</h1>
    <div className="mb-3">
    
    <textarea style={{backgroundColor:props.mode==='light'?'white':'grey'}} className="form-control"  value= {Text} onChange={handleOnChange} id="Tech" rows="15"> </textarea>
    </div>
    <button className='btn btn-primary mx-1'  onClick={upHandleClick}> Convert to uppercase</button>

    <button className='btn btn-primary mx-1' onClick={lower}> Convert to lowercase </button>
    <button className='btn btn-primary mx-1' onClick={clear}> Clear Text </button>
    <button className='btn btn-primary mx-1'   onClick={downloadTxtFile}> Download </button>
        
</div>
<div style={{color:props.mode==='light'?'black':'gray'}}>
  <h1> Text summary</h1>
  <h3>Total Words:{Text.split(" ").length - 1}   Total Charecter:{Text.length}</h3>
  <h3>{0.08 * Text.split(" ").length-0.08} minutes is requried to read above text</h3>
</div>
<h1 style={{color:props.mode==='light'?'black':'gray'}}>PREVIEW</h1>
<p style={{color:props.mode==='light'?'black':'gray'}}>{Text.length>0?Text:"Enter text in chatbox to preview it"}</p>
</>

  )
}
