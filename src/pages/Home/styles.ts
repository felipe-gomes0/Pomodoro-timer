import styled from "styled-components";

export const HomeContainer = styled.main`
    flex:1;
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
     
    form {
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:3.5rem
    }

`;

export const FormContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:0.5rem;
    color: ${props => props.theme['gray-100']};
    font-size:1.125rem;
    font-weight:bold;
    flex-wrap:wrap;
`;

export const CountDownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${props => props.theme['gray-100']};
    
    display:flex;
    gap: 1rem;

    span {
        background: ${props => props.theme['gray-600']};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`;


export const Separator = styled.div`
    padding: 2rem 0;
    color: ${props => props.theme['blue-300']};
    
    width: 4rem;
    overflow:hidden;
    
    display:flex;
    justify-content:center;
    `;

const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1rem;
    padding: 0 0.5rem;
    color: ${props => props.theme['gray-100']};

    &:focus {
        box-shadow: none;
        border-bottom: 2px solid ${props => props.theme['blue-300']};
    }

    &::placeholder {
        color: ${props => props.theme['gray-500']};
        text-align: center;
    }
   
`;

export const TaskInput = styled(BaseInput)`
    flex: 1; 

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`;



export const BaseCountDownButton = styled.button ` 
    outline: 0;
    width: 100%;
    border:0;
    padding: 1rem;
    border-radius: 8px;

    display:flex;
    justify-content:center; 
    align-items:center;

    gap: 0.5rem;
    font-weight: bold;
    border: 1px solid transparent; 

    cursor: pointer;

    background: ${props => props.theme['blue-300']};
    color: ${props => props.theme['gray-100']};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

`;

export const StartCountDownButton = styled(BaseCountDownButton)`
    background: ${props => props.theme['blue-500']};
    color: ${props => props.theme['gray-100']};

    &:not(:disabled):hover { 
        border: 1px solid ${props => props.theme['blue-300']};
        background: ${props => props.theme['blue-500']};
    }
    
`
export const StopCountDownButton = styled(BaseCountDownButton)`
    background: ${props => props.theme['red-500']};
    color: ${props => props.theme['gray-100']};

    &:not(:disabled):hover { 
        border: 1px solid ${props => props.theme['blue-500']};
        background: ${props => props.theme['red-600']};
    }

`
