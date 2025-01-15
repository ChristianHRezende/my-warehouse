

import { Route, Routes as RRRoutes } from "react-router";
import { SignIn } from "../modules";

const Routes = () => {
    return (
        <RRRoutes>
            <Route path="/" >
                <Route index element={<SignIn />} />
            </Route>
        </RRRoutes>
    )
}

export default Routes