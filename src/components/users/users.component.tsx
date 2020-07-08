import React, { FC } from 'react';

import { UsersProps } from './users.types';
import { Container, Total, MyName, OtherName } from './users.styles';

/* -------------------------------------------------------------------------- */

const Users: FC<UsersProps> = ({ users, name }) => (
  <Container>
    <Total>Users: {users.length}</Total>

    {users.map((user) =>
      user.name === name ? (
        <MyName key={user.id}>{`· ${user.name}`}</MyName>
      ) : (
        <OtherName key={user.id}>{`· ${user.name}`}</OtherName>
      ),
    )}
  </Container>
);

export default Users;
