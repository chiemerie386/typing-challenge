import React from 'react'
import Text from '../text/Text'
import Scores from '../score/Scores'
import Controls from '../controls/Controls'
import Result from '../result/Result'

const dashboard = () => {
  return (
    <div>
        <div className="first-text" data-testid="main-text"> TYPING SPEED CHALLENGE </div>
        <div className='main-text'> Test your typing skills </div>
        <div className="main-body">
            <Text/>
            <Scores/>
            <Controls/>
            <Result/>
        </div>






    </div>
  )
}

export default dashboard
