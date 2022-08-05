import { createContext, useState, useEffect} from "react";
import sentenceChecker from "./utils/sentence-checker";



const Context = createContext()

function AppContextProvider (props) {
    const [paragraph, setParagraph] = useState('')
    const [disableText, setDisableText] = useState(false)
    const [disableResultText, setDisableResultText] = useState(true)
    const [status, setStatus] = useState("DEFAULT")
    const [result, setResult] = useState("")
    const [score, setScore] = useState("")
    const [accuracy, setAccuracy] = useState("")
    const [time, setTime] = useState(60)

    useEffect(()=>{
        const resultDetail =  sentenceChecker(paragraph, result)
        setScore(resultDetail.score)
        setAccuracy(resultDetail.percentage)
    },[status,paragraph,result])

    return (
        <Context.Provider
        value={{
            paragraph,
            setParagraph,
            disableText,
            setDisableText,
            disableResultText,
            setDisableResultText,
            status,
            setStatus,
            result,
            setResult,
            accuracy,
            score,
            time,
            setTime
        }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {AppContextProvider, Context}
