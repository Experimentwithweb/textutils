
import { useState } from 'react';
import './App.css';
import Alret from './components/Alret';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';
import './s.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
          const [mode,setMode]=useState('light');
          const [alert,setAlert]=useState(null);

          const showAlert=(message,type) =>{
            setAlert({
              msg:message,
              type:type
            })
            setTimeout ( () => {
              setAlert(null);},3000

            );
          }

          const [body_bcolor,setBodybColor] = useState(
            {
              backgroundColor : 'white'
            }
          )
          const toggleMode =() =>{
            if (mode==='light'){
              setMode('dark');
              //document.body.style.backgroundColor = 'dark';
              setBodybColor({
                backgroundColor :'#282c34' //'#096172'

              })
              showAlert("Dark Mode has been enabled","success");
              document.title="Dark Mode";
            //   setInterval(()=>{document.title="Text-Utility is Amazing";},1000);
            //   setInterval(()=>{document.title="Download Text-Utility Now";},1500);
             }
            else {
              setMode('light');
              //document.body.style.backgroundColor = 'white';
              setBodybColor({
                backgroundColor : 'white'
              });
              showAlert("Light Mode has been enabled","success");
              document.title="Text-Utility"
            
            }}


            const orangeBackground = () => {
              setBodybColor({
                backgroundColor : 'orange'
              });
              showAlert("Orange background has been enabled","success");
              document.title="Orange Mode"

            }


            const faintGreen=()=>{
              setBodybColor({
                backgroundColor : '#8FBC8F'
              });
              showAlert("FaintGreen background has been enabled","success");
              document.title="LightGreen Mode"
            }
            

            const gray=()=>{
              setBodybColor({
                backgroundColor : '#808080'
              });
              showAlert("Gray background has been enabled","success");
              document.title="Gray Mode"
              
            }


            
            const lightblue=()=>{
                                  setBodybColor({backgroundColor : '#B0E0E6'});
                                  showAlert("Lightblue background has been enabled","success");
                                  document.title="Light-blue Mode"
                                }


            const yellowbackground=()=>{
              setBodybColor({backgroundColor : 'yellow'});
              showAlert("Yellow background has been enabled","success");
              document.title="Yellow Mode"

            }

          
   

  
 return (
    <>
    <body style={body_bcolor}> 
    <Router>
      <Navbar mode={mode} orangeBackground={orangeBackground}   faintGreen={faintGreen} gray= {gray}  yellowbackground={yellowbackground} toggleMode={toggleMode} lightblue={lightblue} info="ABOUT US" name='TEXTUTILS'/>
      <Alret alert={alert}> </Alret> 
      <div className='container my-3'>  
    
          <Routes>
            {/* users/ --> component 1
            users/Home/ --component 2 */}
       
            <Route exact path="/about" element={ <About />} />
            <Route exact path="/" element={ <TextForm  mode={mode} showAlert={showAlert} heading="Enter text to analyse"/> } />
          </Routes>
      </div>
      
    </Router>
    </body>
</>
);
 
}

export default App;
