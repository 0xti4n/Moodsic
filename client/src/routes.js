import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const load = (Component: any) => (props: any) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

/* const Page404 = load(lazy() => import('./views')) */
const Home = load(lazy(() => import('./views/Home/Home')));
const Login = load(lazy(() => import('./views/Login/Login')));
const Suggest = load(lazy(() => import('./views/Suggest/Suggest')));

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/Suggestion' component={Suggest}/>
      {/* <Route component={Page404}/> */}
    </Switch>
  )
}

export default Routes;