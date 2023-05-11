import styled from 'styled-components';
import baseLiStyles from 'components/Statistics/Statistics.styled';

export const BtnWrapper = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 16px;
    border: none;
    background-color: transparent;
    padding: 20px 4px;

`

export const Btn = styled.button`
  position: relative;
  overflow: hidden;

    ${baseLiStyles};
    
    justify-content: space-between;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    transition: all 0.4s;
    width: 160px;
    height: 44px;

    :hover,
    :focus  {
    outline: none;
    background-color: var(--green);
    color: #fbf7f3;
    box-shadow: var(--shadow-two);  
    
     & >svg {
        fill: #eee;

     }

     &:active {
    transform: scale(0.98);
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #2b02a5 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.4s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
    }
`