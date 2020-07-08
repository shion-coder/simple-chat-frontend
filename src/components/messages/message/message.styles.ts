import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

const User = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
`;

const Name = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
`;

const Message = styled.div`
  background: #f3f3f3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`;

const Text = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;

  img {
    vertical-align: middle;
  }
`;

export const MyUser = styled(User)`
  justify-content: flex-end;
`;

export const OtherUser = styled(User)`
  justify-content: flex-start;
`;

export const MyName = styled(Name)`
  padding-right: 10px;
`;

export const OtherName = styled(Name)`
  padding-left: 10px;
`;

export const MyMessage = styled(Message)`
  background: #2979ff;
`;

export const OtherMessage = styled(Message)`
  background: #f3f3f3;
`;

export const MyText = styled(Text)`
  color: white;
`;

export const OtherText = styled(Text)`
  color: #353535;
`;

export const System = styled.span`
  letter-spacing: 1px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  padding: 10px;
`;
