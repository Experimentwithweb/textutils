import React from 'react'

function Alret(props) {
    const capitalize=(word)=>{
        const tem_string= word.toLowerCase()
        return (tem_string.charAt(0).toUpperCase() + tem_string.slice(1));

    }
  return (
    
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
            <strong>{capitalize(props.alert.type)} </strong>:{props.alert.msg}
            
             
         
            </div>
    
  )
}

export default Alret
