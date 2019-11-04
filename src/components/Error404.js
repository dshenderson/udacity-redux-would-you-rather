import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {StyledLinkForward} from './FormElements';
import {SubHeading} from './Headings';

const Wrapper = styled.div`
  padding: 1rem 2rem;
`;

const Error404 = () => {
  return (
    <Wrapper>
      <SubHeading>404 Error</SubHeading>
      <p>
        These aren't the pages you're looking for.
      </p>
      <StyledLinkForward as={Link} to="/">You can go about your business. Move along.</StyledLinkForward>
    </Wrapper>
  );
};

export default Error404;
