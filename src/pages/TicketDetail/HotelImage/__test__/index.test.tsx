import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HotelImage from '..';

// Mock the no_hotel_photo import
jest.mock('./images/no_hotel_photo.png', () => 'test-file-stub');

describe('HotelImage Component', () => {
  it('should display the correct image when it loads successfully', () => {
    const hotelId = 123;  // Mock hotelId for testing

    const imageUrl = `https://photo.hotellook.com/image_v2/limit/h${hotelId}/220.jpg`;

    render(<HotelImage hotelId={hotelId} />);

    // Get the image element and check its src
    const img = screen.getByAltText('Фото отеля');
    expect(img).toHaveAttribute('src', imageUrl);
  });

  it('should display the fallback image when there is an error loading the image', () => {
    const hotelId = 123;  // Mock hotelId for testing

    render(<HotelImage hotelId={hotelId} />);

    // Simulate an error in image loading
    const img = screen.getByAltText('Фото отеля');
    fireEvent.error(img);

    // The image source should now be the fallback image
    expect(img).toHaveAttribute('src', 'test-file-stub');  // The fallback image mock
  });
});
