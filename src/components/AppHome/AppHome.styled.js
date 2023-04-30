import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 20px 150px 20px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;
export const Box = styled.div`
  text-align: center;
  padding: 30px;
  width: 800px;
  font-size: 30px;
  margin: 0 auto;
`;

export const NavItem = styled(NavLink)`
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
  color: ${p => p.theme.colors.colorText};
  margin-left: 20px;
  transition: color 250ms ease;
  text-shadow: 1px 1px 1px rgba(123, 250, 243, 0.93);

  &:hover {
    color: ${p => p.theme.colors.colorAccent};
  }
`;
