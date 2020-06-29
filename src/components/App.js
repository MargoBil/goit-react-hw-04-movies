import React, {Suspense} from 'react';
import { Switch, Route  } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import NotFound from '../views/NotFound/NotFound';

import routes from '../routes/routes';

const App = () => {
  return (
    <>
      <Navigation/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
         {routes.homePagesRoute.map(route => <Route key={route.path} {...route}/>)}
         <Route component={NotFound}/>
        </Switch>
      </Suspense>
    </>
  )
}

export default App;