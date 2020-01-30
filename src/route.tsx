import React from 'react';
import { Route } from 'react-router-dom';
import Home from "./pages/Home";
import NewPartner from './pages/NewPartner';

export const routes = [
  {
    link: '/',
    component: Home,
    exact: true,
  },
 
  {
    link: '/new-partner',
    component: NewPartner,
    exact: true,
  },
  
]

const Routes = () => {
  return (
    <>
    {routes.map(route => (
      <Route
        exact={route.exact}
        key={route.link}
        path={route.link}
        component={route.component}
      />
    ))}
    </>
  )
}

export default Routes;
