import styled from 'styled-components';
import { darken } from 'polished';

import { COLOR } from '../../constants';

export const HeaderWrapper = styled.div`
  background-color: ${COLOR.REBECCA_PURPLE};
  border-bottom: 0.2rem solid ${darken(0.2, COLOR.REBECCA_PURPLE)};
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-flow: nowrap row;
`;

export const SiteTitle = styled.h1`
  margin: 0;
  color: ${COLOR.WHITE};
`;

export const Navigation = styled.div`
  margin-left: auto;
  display: flex;
  flex-flow: nowrap row;
  align-items: flex-end;

  & > * {
    margin-left: 1rem;
    color: ${COLOR.WHITE};
    cursor: pointer;

    &:focus,
    &:hover {
      color: ${darken(0.2, COLOR.WHITE)};
    }
  }

  & > *:first-child {
    margin-left: 0;
  }
`;
