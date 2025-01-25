import React, {FC} from 'react';

import { StyledSection, StyledHotel, StyledInfo, StyledList } from './index.style';
import Heading from '../../../ui-kit/Heading';
import { useGetHotelsQuery } from '../../../store/api/hotelsApi';
import Loading from '../../Main/Loading';

interface IHotelRequstData{
    location: string | undefined;
    checkIn: string | undefined;
    checkOut: string | undefined; 
    currency: string | undefined; 
    limit: number | undefined;
};

const HotelsDetail: FC<IHotelRequstData> = ({location, checkIn, checkOut, currency, limit}) => {

    const { data, error, isLoading } = useGetHotelsQuery({location, checkIn, checkOut, currency, limit});

    if(error) {
        return <div>Ошибка</div>
    }

    if(isLoading) {
        return ( 
            <StyledSection>
                <Heading variant='h2'>Отели в этом городе</Heading>
                <Loading/>
            </StyledSection> 
        );
    }

    return (
        <StyledSection>
            <Heading variant='h2'>Отели в этом городе</Heading>
            <StyledList>
                {data?.map((hotel, index) => (
                    <StyledHotel key={index}>
                        <Heading variant='h3'>{hotel.hotelName}</Heading>
                        <StyledInfo>⭐ {hotel.stars} звезд</StyledInfo>
                        <StyledInfo>От {hotel.priceFrom} ₽ за весь период</StyledInfo>
                    </StyledHotel>
                ))}
            </StyledList>
        </StyledSection>
    );
}

export default HotelsDetail;