import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
  box-shadow:  ${p => p.theme.sectionShadow};
  border-radius: 10px;
  background-color: rgba(11, 12, 16, 0.6);
`;
