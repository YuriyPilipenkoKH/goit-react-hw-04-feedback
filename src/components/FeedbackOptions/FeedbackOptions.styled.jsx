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
    ${baseLiStyles};
    
    justify-content: center;

    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.4s;
    width: 120px;

    :hover,
    :focus  {
    outline: none;
    background-color: var(--green);
    color: #fbf7f3;
    box-shadow: var(--shadow-two);    
    }
`