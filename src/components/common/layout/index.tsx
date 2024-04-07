/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import LNB from './lnb';

const Layout = () => {
  return (
    <div
      css={{
        display: 'flex',
        height: '100%'
      }}
    >
      <LNB />

      <Outlet />
    </div>
  );
};

export default Layout;
