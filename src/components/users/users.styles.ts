import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

const Name = styled.span`
  margin-bottom: 8px;
  font-size: 11px;
  letter-spacing: 1px;
`;

export const Container = styled.div`
  height: 80%;
  width: 10%;
  background-color: lightsteelblue;
  border-radius: 8px 0 0 8px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  overflow: auto;
`;

export const Total = styled.p`
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 11px;
  margin-bottom: 12px;
  margin-left: 20px;
`;

export const MyName = styled(Name)`
  color: #2979ff;
`;

export const OtherName = styled(Name)``;
