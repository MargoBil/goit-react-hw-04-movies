import React, {Suspense} from 'react';
import {Route, NavLink} from 'react-router-dom';

import s from './AdditionalInfo.module.css';

import routes from '../../routes/routes';

const AdditionalInfo = ({movie, props}) => {
  const stateBack = props.location.state;

  return (
    <React.StrictMode>
      <p>Additional information</p>
      <ul>
        <div className={s.options}>
          <NavLink
            to={{pathname: `/movies/${movie.id}/cast`, state: stateBack}}
          >
            <li>Cast</li>
          </NavLink>
          <NavLink
            to={{pathname: `/movies/${movie.id}/reviews`, state: stateBack}}
          >
            <li>Reviews</li>
          </NavLink>
        </div>
        <div className={s.additional}>
          <Suspense fallback={<div>Loading...</div>}>
            {routes.additionalPagesRoute.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Suspense>
        </div>
      </ul>
    </React.StrictMode>
  );
};

export default AdditionalInfo;
