import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import onlineIcon from 'assets/icons/online-icon.png';
import closeIcon from 'assets/icons/close-icon.png';

import { InfoBarProps } from './info-bar.types';
import { Container, Left, Right, Online, Close, Title } from './info-bar.styles';

/* -------------------------------------------------------------------------- */

const InfoBar: FC<InfoBarProps> = ({ room }) => (
  <Container>
    <Left>
      <Online src={onlineIcon} alt="Online Icon" />
      <Title>{room}</Title>
    </Left>

    <Right>
      <Link to="/">
        <Close src={closeIcon} alt="Close Icon" />
      </Link>
    </Right>
  </Container>
);

export default InfoBar;
