import React, { FC } from 'react';

import FrontElement from './FrontElement';
import FlightsList from './FlightsList';

const Main: FC = () => {
  return (
    <>
    <FrontElement/>
    <FlightsList/>
    </>
  );
};

export default Main;
