import React,{useContext} from 'react'
import { Context } from '../../reducer';
import { getRandomSentence } from '../../utils/sentenceGenerator';

const Controls = () => {
    const { setParagraph, status, time, setTime, setStatus,  setDisableText, setDisableResultText } = useContext(Context);


    const handleStart = () =>{
        setDisableText(true)
        setDisableResultText(false)
        setStatus("ONGOING")
    }

    const selectRandomSentence = ()=>{
        setParagraph(getRandomSentence())
    }
  return (
    (status === "DEFAULT") && (<div className="button-box">
        <button className="button" data-testid="select-random-text"  onClick={()=>selectRandomSentence()}>Select Random Text</button>
        <button className="button" data-testid="start"  onClick={()=>handleStart()}>Start</button>
        
        <div className="time-selector">
        <div> Choose Time</div>
            <button className="button small" data-testid="one-min"  onClick={()=>setTime(60)}>1m</button>
            <button className="button small" data-testid="two-min" onClick={()=>setTime(120)}>2m</button>
            <button className="button small" data-testid="five-min" onClick={()=>setTime(300)}>5m</button>
            <input className="time-input" data-testid="time-input"  type="text" value={time/60} onChange={(e)=>setTime(e.target.value * 60)}/>
        </div>
    </div>)
  )
}

export default Controls