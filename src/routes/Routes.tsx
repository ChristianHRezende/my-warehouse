import { Route, Routes as RRRoutes } from 'react-router';
import { SignIn } from '../modules';
import { Home } from '../modules/auth/pages/home';

const Routes = () => {
  return (
    <RRRoutes>
      <Route path="/" element={<SignIn />} />
      <Route path="/Home" element={<Home />} />
    </RRRoutes>
  );
};

export default Routes;
