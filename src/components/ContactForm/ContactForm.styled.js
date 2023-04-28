import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${p => p.theme.colors.backgroundColors};
  color: ${p => p.theme.colors.colorText};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  box-shadow: 0px 0px 19px 0px rgba(69, 162, 158, 1);
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-right: 10px;
  }
`;
export const Span = styled.span`
  margin-bottom: 2px;
`;

export const Input = styled.input`
  background-color: ${p => p.theme.colors.colorElement};
  color: ${p => p.theme.colors.btnСolorText};
  border: 1px solid ${p => p.theme.colors.white};
  padding: 5px;
  font-weight: 700;

  &:active,
  &:focus {
    background-color: ${p => p.theme.colors.white};
    outline: transparent;
  }
`;

export const Button = styled.button`
  display: block;
  min-width: 130px;
  height: 35px;
  margin-left: 20px;
  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  border-radius: 20px;
  padding: 7px 10px;
  border: 0;
  font-size: 18px;
  transition: box-shadow 250ms ease, transform 250ms ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: ${p => p.theme.boxShadow};
  }
`;
