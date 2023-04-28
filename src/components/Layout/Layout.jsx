import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { ContainerToast } from '../UI/ToastContainer/ToastContainer';
import { Wrapper } from './Layout.styled';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <Wrapper>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Wrapper>
      <ContainerToast />
    </>
  );
};
export default Layout;
