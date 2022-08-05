import React,{useContext} from 'react'
import { Context } from '../../reducer';

const Text = () => {
    const { paragraph, setParagraph, disableText} = useContext(Context);
  return (
    <textarea placeholder="Paste sample text here ..." data-testid="text-input" rows="120"  cols="180" className="ui-autocomplete-input" 
    autoComplete="off" aria-autocomplete="list" onChange={(e)=>setParagraph(e.target.value)} value={paragraph} disabled={disableText} aria-haspopup="true">
     </textarea>
  )
}

export default Text