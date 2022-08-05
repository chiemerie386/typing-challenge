import React,{useContext} from 'react'
import { Context } from '../../reducer';

const Result = () => {

    const { result, setResult, disableResultText } = useContext(Context);

  return (
    <textarea placeholder="Practice here..." data-testid="result-input"  rows="120"  cols="180" className="ui-autocomplete-input" 
    autoComplete="off" aria-autocomplete="list" onChange={(e)=>setResult(e.target.value)} value={result} disabled={disableResultText} aria-haspopup="true">
     </textarea>
  )
}

export default Result