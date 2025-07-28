import { useState } from "react";

function TextRepeaterButton(props){
  const [repetitions, setRepetitions] = useState(1);
  let newArray = [];
  for (let i = 0; i < repetitions; i++){
    newArray.push(<span key={i}>I like this text </span>)
  }
  
  const handleClick =() => {
    setRepetitions(repetitions+1)
    props.increaseAnger(0.1);
  }

    return (
    <button onClick={handleClick} className="TextRepeaterButton">
      {newArray}
    </button>
  )
}

export default TextRepeaterButton;