import react from 'react'
import React, {useState} from 'react'

function Body(props) {
    const {text,size} = props
    let textmin = text.slice(0,size)
    const[isbody, setState] = react.useState(false)
    const textsrc = isbody ? text:textmin
    const btntext = isbody? 'Readless':'ReadMore...'
    
    function TogglebtnState(){
        setState(!isbody)
    }

    return (

        <div style={{
            backgroundColor: 'lightgray',
            height: 363,
            width: '30%',
            padding: '5%',
            textAlign: 'center',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            

        }}>

            <h1 style={{ color: 'black', textAlign: 'center' }}>Bio</h1>

                <p style={{ marginTop: '80', fontFamily: 'sans-serif', fontSize: 20, lineHeight: 1.5 }}>{textsrc}

                <button onClick={TogglebtnState} style={{color:'blue',borderStyle:'none',backgroundColor:'lightgray'}}>{btntext}</button>
            
                </p>
                {/* <div style={{display:'flex',justifyContent:   'space-between'}}>

                    <h3 style={{textDecorationLine:'underline'}}>View Skills</h3>
                    <h3>Joined: 15-08-2021</h3>
                </div> */}
            

        </div>

    )

}
export default Body;