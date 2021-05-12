import React from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import {useSpeechSynthesis} from "react-speech-kit"

const Main = () => {
  const [value, setValue] = React.useState('');
  const{speak} = useSpeechSynthesis();
  console.log(speak)

  return (
    <div className="row text-center">
    <span className="mrginmain">TYPE YOUR TEXT:</span>
      <div className="">
        
        <textarea className="textboxid mr-2 mt-3" 
        value = {value} 
        onChange={(e) => setValue(e.target.value)}
        rows="4" cols="80"></textarea>
      </div>
      <div className="mrginmain">
      <VolumeUpIcon /><br />  <br />
        <h5>
        <button className= "btn btn-danger" onClick={()=> speak({text: value})}>PLAY </button>
          
        </h5>
       
      </div>
    </div>   
  );
};

export default Main;
