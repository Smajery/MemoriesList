import {ROUTE_HOME, ROUTE_LOGIN, ROUTE_MEMORY} from "../utils/consts";
import HomePage from "../pages/HomePage";
import MemoryPage from "../pages/MemoryPage";
import LoginPage from "../pages/LoginPage";

export const publicRoutes = [
    {path: ROUTE_HOME, component: HomePage},
    {path: ROUTE_LOGIN, component: LoginPage},
    {path: ROUTE_MEMORY, component: MemoryPage},
]