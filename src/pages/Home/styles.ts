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
    background: ${props => props.theme['blue-300']};
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
