import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FunctionComponent = () => (
  <div className="py-8">
    <Outlet />
  </div>
);

export default Layout;
