import { useRoutes } from 'react-router-dom';
import Login from './component/auth/login';
import Register from './component/auth/Register';
import Home from './component/home';
// import Pagenotfound from './component/Pagenotfound';
import Cakecomponent from './component/Cakecomponent';

export default function Router(){
    return useRoutes([
        {path:'/', Element:<Home/>},
        {path:'/signin', Element:<Login/>},
        {path:'/signup', Element:<Register/>},
        {path:'/cake', Element:<Cakecomponent/>},
    ]);
}