import React from 'react';
import styled from '@emotion/styled';

const Container = styled.span`
  display: inline-block;
  position: relative;
  margin: 0 0.25rem;
  padding-left: 2rem;
  line-height: 2rem;
`;

const Avatar = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 2rem;
`;

const Name = styled.span`
  font-weight: bold;
`;

const User = ({user: {avatarURL, name}}) => {
  return (
    <Container>
      <Avatar src={avatarURL} alt="" aria-hidden="true"/>
      <Name>{name}</Name>
    </Container>
  );
}

export default User;
