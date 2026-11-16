import {
    CounterBox,
    CounterTitle,
    CounterValue,
    CounterControls,
    MinusButton,
    PlusButton
} from './Counter.styled';

export const Counter = () => {

    return (
        <>
        <CounterBox>
    <CounterTitle>Counter</CounterTitle>
    <CounterValue id="value" aria-live="polite">23</CounterValue>

    <CounterControls>
      <MinusButton type="button" id="plus" aria-label="Увеличить">
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="20"/>
          <path d="M24 14v20M14 24h20"/>
        </svg>
      </MinusButton>

      <PlusButton type="button" id="minus" aria-label="Уменьшить">
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="20"/>
          <path d="M14 24h20"/>
        </svg>
      </PlusButton>
    </CounterControls>
  </CounterBox>
  </>
    )
}