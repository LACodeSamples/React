import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.3rem;
    background: var(--input-background);
    border: 0.063rem solid #D7D7D7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {

    

    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.313rem;

    margin-top: 1.5rem;

    background-color: var(--green);
    color: var(--shape);

    border: none;

    font-weight: 600;
    font-size: 1rem; 

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  
`

export const OperationContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    margin: 1rem 0;

    

  
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc94',
  red: '#E52E4D',
}

export const RadioBox = styled.button<RadioBoxProps>`

display: flex;
align-items: center;
justify-content: center;


width: 100%;
padding: 0 1.5rem;
height: 4rem;
border-radius: 0.313rem;
border: 0.063rem solid #D7D7D7;
max-width: 14.75rem;



background-color: ${({ isActive, activeColor }) => isActive
    ? transparentize(0.8, colors[activeColor])
    : 'transparent'
  };


img{
  width: 1.5rem;
  height: 1.5rem;
}

span {

  font-weight: 400;
font-size: 1rem;
color: var(--text-title);

margin: 1rem;

}

&:hover {
  border-color: ${darken(0.1, "#D7D7D7")};
}
`