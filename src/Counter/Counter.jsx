import { useReducer } from 'react';

import {
    CounterBox,
    CounterTitle,
    CounterValue,
    CounterControls,
    MinusButton,
    PlusButton
} from './Counter.styled';

function reducer(prevState, action){
        switch(action.state){
            case 'minus':
            return prevState - 1;
           
            case 'plus':
            return prevState + 1;

            default:
            return prevState;
        }
    }

export const Counter = () => {

    const[total, dispatch] = useReducer(reducer, 0);
    const handleClickMinus = () => dispatch({state: 'minus'});
    const handleClickPlus = () => dispatch({state: 'plus'});

    return (
        
        <CounterBox>
    <CounterTitle>Counter</CounterTitle>
    <CounterValue id="value" aria-live="polite">
        {total}
    </CounterValue>

    <CounterControls>
      <MinusButton type="button" id="mius" aria-label="Уменьшить"
      onClick = {handleClickMinus}
      >
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="20"/>
          <path d="M14 24h20"/>
        </svg>
      </MinusButton>

      <PlusButton type="button" id="plus" aria-label="Увеличить"
      onClick = {handleClickPlus}
      >
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="20"/>
          <path d="M24 14v20M14 24h20"/>
        </svg>
        
      </PlusButton>
    </CounterControls>
  </CounterBox>
 
    )
}