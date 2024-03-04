import {useLocation, useRoutes} from 'react-router-dom';
import routes from "./router";
import {useEffect} from "react";

export default function AppRouter() {
    let location = useLocation();

    const routesList = [];

    Object.entries(routes).forEach(([key, value]) => {
        routesList.push(...value);
    });

    function getAppNameByPath(path) {
        for (let key in routes) {
            if (routes[key].some(route => route.path === path)) {
                return key;
            }
        }
        // Return 'default' app  if the path is not found
        return 'default';
    }

    useEffect(() => {
        if (location.pathname === '/') {
            const path = getAppNameByPath(location.pathname);
            location.pathname = `/${path}`;
        } else {
            const path = getAppNameByPath(location.pathname);
            location.pathname = `/${path}${location.pathname}`;
        }
    }, [location]);

    return useRoutes(routesList);
}