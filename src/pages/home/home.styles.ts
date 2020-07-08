import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1a1a1d;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

export const Form = styled.form`
  width: 20%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`;

export const Heading = styled.h1`
  color: white;
  font-size: 2.5em;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;

export const Input = styled.input`
  border-radius: 5px;
  padding: 15px 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 15px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  width: 100%;
  cursor: pointer;

  :focus {
    outline: 0;
  }
`;
