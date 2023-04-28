import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  padding: 20px 15px;
  max-width: 700px;
  max-height: 300px;
  background-color: ${p => p.theme.colors.backgroundColors};
  border-radius: 10px;
  box-shadow: ${p => p.theme.sectionShadow};
`;

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.colorElement};
  border: 1px solid ${p => p.theme.colors.colorElement};
  color: black;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &::before {
    content: '';
    position: absolute;
    background-color: black;
    left: 50%;
    top: 50%;
    width: 13px;
    height: 2px;
    transform: translate(-50%, -50%) rotate(-45deg);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: black;

    width: 13px;
    height: 2px;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.backgroundColors};
    box-shadow: ${p => p.theme.sectionShadow};

    transform: scale(1.2);
    &::after,
    &::before {
      background-color: black;
    }
  }
`;
