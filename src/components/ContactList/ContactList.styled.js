import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 12px;
  box-shadow: 0px 0px 19px 0px rgba(69, 162, 158, 1);
  padding: 10px;
  border-radius: 10px;
  min-height: 300px;
`;

export const List = styled.ul`
  // width: 400px;
  // margin: 0 auto;
  position: relative;
  gap: 10px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Error = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${p => p.theme.colors.white};
  font-size: 40px;
  text-align: center;
  background-color: ${p => p.theme.colors.backgroundColors};
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: ${p => p.theme.sectionShadow};
  z-index: 2;
  width: 100%;
  height: 100%;
`;
