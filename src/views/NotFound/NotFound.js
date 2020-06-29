import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../routes/routes';

const NotFound = () => (
    <p>
     Go to <Link to={routes.homePage}>home</Link> page!
    </p>
);

export default NotFound;