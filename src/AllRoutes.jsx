import { Route, Routes } from "react-router-dom";
import LandingPage from "./features/LandingPage";

const paths = [
    {
        path: "/",
        element: <LandingPage />
    }
];

const AllRoutes = () => {
    return (
        <Routes>
            {
                paths.map(obj => {
                    return (
                        <Route path={obj.path} element={obj.element} />
                    );
                })
            }
        </Routes>
    );
}

export default AllRoutes;