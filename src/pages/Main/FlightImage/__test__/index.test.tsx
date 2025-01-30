import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlightImage from '..';

jest.mock('./images/no_image.jpeg', () => 'test-file-stub');

describe('FlightImage Component', () => {
  it('should display the correct image when it loads successfully', () => {
    
    const cityCode = 'NYC';
    
    const imageUrl = `https://photo.hotellook.com/static/cities/960x720/${cityCode}.jpg`;
    
    render(<FlightImage cityCode={cityCode} />);
    
    const img = screen.getByAltText(cityCode);
    expect(img).toHaveAttribute('src', imageUrl);
  });

  it('should display the fallback image when there is an error loading the image', () => {
    const cityCode = 'NYC';

    render(<FlightImage cityCode={cityCode} />);

    const img = screen.getByAltText(cityCode);
    fireEvent.error(img);

    expect(img).toHaveAttribute('src', 'test-file-stub');
  });
});
