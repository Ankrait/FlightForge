import React, { FC } from 'react';

import { FlightData } from '../../../store/api/flightsApi/index.types';
import Flex from '../../../ui-kit/Flex';

import FlightCard from './FlightCard';

interface FlightPanelProps {
  flights: FlightData[];
}

const FlightPanel: FC<FlightPanelProps> = ({ flights }) => {
  return (
    <Flex dir="column" gap={10}>
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </Flex>
  );
};

export default FlightPanel;