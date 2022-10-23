import {ROUTE_HOME, ROUTE_LOGIN, ROUTE_MEMORY, ROUTE_MEMORY_ITEM} from "../utils/consts";
import loadable from "@loadable/component";
import Loader from "../components/UI/Loader/Loader";

const HomePage = loadable(() => import("../pages/HomePage"), {
    fallback: <Loader/>
    });
const MemoryPage = loadable(() => import("../pages/MemoryPage"), {
    fallback: <Loader/>
});
const LoginPage = loadable(() => import("../pages/LoginPage"), {
    fallback: <Loader/>
});
const ItemPage = loadable(() => import("../pages/ItemPage"), {
    fallback: <Loader/>
});


export const publicRoutes = [
    {path: ROUTE_HOME, component: HomePage},
    {path: ROUTE_LOGIN, component: LoginPage},
]

export const privateRoutes = [
    {path: ROUTE_HOME, component: HomePage},
    {path: ROUTE_MEMORY, component: MemoryPage},
    {path: ROUTE_MEMORY_ITEM + '/:id', component: ItemPage},
]