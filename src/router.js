import { Route, Routes } from "react-router-dom";
import Homepage from "./page/user/homepage";
import { ROUTERS } from "./util/router";
import Masterlayout from "./page/user/theme/masterlayout";
import Profilepage from "./page/user/profilepage";

const renderUserRouter = () =>{
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <Homepage/>,
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <Profilepage/>,
        },
    ];
    return (
        <Masterlayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key = {key} path ={item.path} element={item.component} />
                ))}
            </Routes>
        </Masterlayout>
    );
};
const RouterCustom = () =>{
    return renderUserRouter();
};
export default RouterCustom;