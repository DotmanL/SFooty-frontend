import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as UILink, LinkProps as UILinkProps } from '@material-ui/core';

type LinkProps = {
  to: string;
} & UILinkProps;

export const Link: React.FC<LinkProps> = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <UILink
    style={{ color: 'white', margin: '0px' }}
    component={RouterLink}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </UILink>
);
