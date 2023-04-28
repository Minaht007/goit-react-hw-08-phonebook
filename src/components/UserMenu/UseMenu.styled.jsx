import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${p => p.theme.colors.colorText};
  margin-right: 20px;
`;

export const Button = styled.button`
  display: block;
  width: 130px;
  height: 35px;
  cursor: pointer;

  /* margin-left: auto;
  margin-right: auto; */
  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  border-radius: 20px;
  padding: 7px 10px;
  border: 0;
  font-size: 18px;
  transition: box-shadow 250ms ease, transform 250ms ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.sectionShadow};
  }
`;
