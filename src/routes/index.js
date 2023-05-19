import { lazy } from "libraries";

const DriverPage = lazy(() => import('pages/Driver'));

const routes = [
    { title: 'Driver Management', element: <DriverPage />, exact: true, path: '/' },
];

export default routes;