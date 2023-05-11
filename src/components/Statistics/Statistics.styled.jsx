import styled, { css, keyframes } from 'styled-components';

const ulAnimation = keyframes`
    0% {
        transform: rotateX(-90deg)
    }
    70% {
        transform: rotateX(20deg) 
    }
    100% {
        transform: rotateX(0deg) 
    }

`

export const StatList = styled.ul`
  list-style  : none ;
  width: 250px;
  margin: 0;
  padding: 20px 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  animation: ${ulAnimation} 1s ease-in;
  transform-origin: top center
`


const baseLiStyles = css`
  
    font-family: inherit;
    font-size: 16px;
    line-height: 17px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;

    height: 40px;
    color: var(--black);
    background-color: var(--yellow);
    border:  transparent;
    border-radius: 10px;
    box-shadow: var(--shadow-four);
`;
export default baseLiStyles


export const StatItem = styled.li`
    ${baseLiStyles};
    
    justify-content: space-between;
    width: 150px;

    :last-child {
        width: 240px;
    }
`