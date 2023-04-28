import styled from 'styled-components';

export const Item = styled.li`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.backgroundColors};
  font-weight: 700;
  font-style: italic;
  display: grid;
  grid-template-columns: 30px auto 180px 30px 30px;
  grid-column-gap: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  transition: box-shadow 250ms ease, transform 250ms ease;
  height: 20px;
  flex-basis: calc(100% / 2 - 30px);
  margin: 5px;
  width: 100%;
  &:hover {
    transform: scale(1.05);
    box-shadow: ${p => p.theme.sectionShadow};
  }
`;

export const Span = styled.span`
  font-weight: 500;
`;

export const Button = styled.button`
  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 3px 3px;
  border: 0;
  transition: box-shadow 250ms ease, transform 250ms ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.sectionShadow};
  }
`;
