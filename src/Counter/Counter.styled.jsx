import styled from "styled-components";

export const CounterBox = styled.section`
      width: 100%;
      max-width: 520px;
      padding: 28px 24px 32px;
      text-align: center;
      color: var(--text);
      background: var(--card);
      border: 1px solid #fff;
      border-radius: 6px;
`;

export const CounterTitle = styled.h1`
      margin: 0;
      font-size: 40px;
      font-weight: 500;
      line-height: 1.2;
`;

export const CounterValue = styled.p`
     margin: 28px 0 36px;
     font-size: 88px;
     font-weight: 300;
     line-height: 1;
`;

export const CounterControls = styled.div`
    display: flex;
    justify-content: center;
    gap: clamp(48px, 16vw, 128px);
`;

export const CounterButton = styled.button`
    width: 84px;
    height: 90px;
    padding: 0;
    display: grid;
    place-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    transition: background-color 150ms ease, color 150ms ease;

        svg{
        width: 48px;
        height: 48px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.6;
        stroke-linecap: round;
        }
`;

export const MinusButton = styled(CounterButton)`
    color: #2f9e6f;
  border-color: rgba(47, 158, 111, 0.45);

    &:hover,
    &:focus-visible {
        background: #2f9e6f;
        color: #fff;
    }
 
`;

export const PlusButton = styled(CounterButton)`
    color: #dc4c46;
    border-color: rgba(220, 76, 70, 0.45);

    &:hover,
    &:focus-visible {
        background: #dc4c46;
        color: #fff;
    }
  
`;
