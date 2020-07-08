import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

export const Input = styled.input`
  border: none;
  border-radius: 0;
  padding: 3%;
  width: 80%;

  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  display: inline-block;
  border: none;
  border-radius: 0 0 8px 0;
  width: 20%;
`;
