import React, { FC, useState, useEffect } from 'react';

import FadeIn from 'react-fade-in';

import { LOADING_DELAY, BOUNCE_DELAY } from 'config';

import { LoadingProps } from './loading.types';
import { Container, Spinner, Bounce, Text } from './loading.styles';

/* -------------------------------------------------------------------------- */

const Loading: FC<LoadingProps> = ({ text, color }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), LOADING_DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return !loading ? null : (
    <FadeIn>
      <Container>
        <Spinner>
          <Bounce />
          <Bounce delay={BOUNCE_DELAY} />
        </Spinner>

        {text && <Text color={color}>{text}</Text>}
      </Container>
    </FadeIn>
  );
};

export default Loading;
