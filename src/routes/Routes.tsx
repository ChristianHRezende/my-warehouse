

import { Route, Routes as RRRoutes } from "react-router";
import { SignIn } from "../modules";

const Routes = () => {
    return (
        <RRRoutes>
            <Route path="auth" >
                <Route path="/auth" element={<SignIn />} />
            </Route>
        </RRRoutes>
    )
}

export default Routes