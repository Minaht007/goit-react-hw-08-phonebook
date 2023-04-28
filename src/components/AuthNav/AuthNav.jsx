import { Wrapper, NavItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <NavItem to="/register">Register</NavItem>
      <NavItem to="/login">Log In</NavItem>
    </Wrapper>
  );
};
