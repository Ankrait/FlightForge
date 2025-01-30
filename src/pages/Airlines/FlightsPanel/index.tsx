import React, { FC } from 'react';

import { FlightData } from '../../../store/api/flightsApi/index.types';

import FlightCard from './FlightCard';
import { FlightPanelWrapper } from './FlightCard/indxe.style';

interface FlightPanelProps {
  flights: FlightData[];
}

const FlightPanel: FC<FlightPanelProps> = ({ flights }) => {
  return (
    <FlightPanelWrapper>
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </FlightPanelWrapper>
  );
};

export default FlightPanel;