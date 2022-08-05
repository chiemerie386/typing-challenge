import React,{useContext, useState, useEffect} from 'react'
import { Context } from '../../reducer';

const Scores = () => {

    const {  setParagraph, status, time, setTime, setStatus, score, setResult, accuracy, setDisableText, setDisableResultText} = useContext(Context);

    const  [minuites, setMinuites] = useState('')
    const  [seconds, setSeconds] = useState('')

    function handleSubmit () {
        setStatus("DEFAULT")
        setTime(60)
        setParagraph('')
        setDisableText(false)
        setDisableResultText(true)
        setResult('')
    }

    useEffect(()=>{
        let id 
        const changetime = () =>{
            setTime (time - 1)
        }
        if (time <= 0 && status === "ONGOING") {
            setStatus("FINISHED")
            setDisableResultText(true)
            return;
        }

        let mins = (time/60 | 0).toString().padStart(2,'0')
        let secs = (time - ((time/60 | 0)*60)).toString().padStart(2,'0')
        setMinuites(mins)
        setSeconds(secs)

        if(status === "ONGOING"){
             id = setInterval(changetime, 1000);
        }
        return () => clearInterval(id);

    },[time, status])

  return (
 
    <div className="score-box">
    { (status === "ONGOING") && ( 
        <>
        <div>
            <div className="score-card" data-testid="time-card">{minuites}:{seconds}</div>
        </div>
        <div>
            <button className="submit yellow" data-testid="done" onClick={()=>{setStatus("FINISHED"); setDisableResultText(true)}}>Done</button>
        </div>
        </>
        )}
        {(status === "FINISHED") && ( 
        <>
            <div>
                <div className="score-card" data-testid="score">{score}</div>
                Score
            </div>
            <div>
                <div className="score-card" data-testid="accuracy">{accuracy}%</div>
                Accuracy
            </div>
            <div>
            <button className="submit yellow" data-testid="restart" onClick={()=>handleSubmit()}>Restart</button>
        </div>
        </>
        )}
    </div> 
        
  )
}

export default Scores