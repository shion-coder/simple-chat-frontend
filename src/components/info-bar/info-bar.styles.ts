import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 0 4px 0 0;
  height: 60px;
  width: 100%;
`;

export const Left = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
`;

export const Right = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
`;

export const Online = styled.img`
  margin-right: 5%;
`;

export const Close = styled.img``;

export const Title = styled.h3``;
