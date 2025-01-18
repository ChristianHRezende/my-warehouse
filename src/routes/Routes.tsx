import { Route, Routes as RRRoutes } from 'react-router';
import { SignIn } from '../modules';
import { Home } from '../modules/auth/pages/home';
import { Items } from '../modules/management';

const Routes = () => {
  return (
    <RRRoutes>
      <Route path="/" element={<SignIn />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/management" element={<Items />} />
    </RRRoutes>
  );
};

export default Routes;
