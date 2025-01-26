import React, { FC } from 'react';

import { FlightDataResponse } from '../../../store/api/flightsApi/index.types';
import Flex from '../../../ui-kit/Flex';

import Index from './FlightCard';

interface FlightPanelProps {
  flights: FlightDataResponse['data'];
}

const FlightPanel: FC<FlightPanelProps> = ({ flights }) => {
  return (
    <Flex dir="column" gap={10}>
      {Object.values(flights).map((flight, index) => (
        <Index key={index} flight={flight} />
      ))}
    </Flex>
  );
};

export default FlightPanel;