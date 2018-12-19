import React from 'react';
import { Link } from 'gatsby';

export const COLOR = {
  WHITE: '#ffffff',
  BLACK: '#000000',
  REBECCA_PURPLE: '#663399',
  BLUE: '#1a58cc',
};

const navItems = [{ to: '/', label: 'Index' }, { to: '/page-2', label: 'Page 2' }];

export const GLOBAL_NAV = navItems.map(({ to, label }) => (
  <Link key={label} to={to}>
    {label}
  </Link>
));
