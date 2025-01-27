import React, {FC} from 'react';

import { StyledSection, StyledHotel, StyledInfo, StyledList, HotelContent } from './index.style';
import Heading from '../../../ui-kit/Heading';
import { useGetHotelsQuery } from '../../../store/api/hotelsApi';
import Loading from '../../Main/Loading';
import ErrorMessage from '../../Main/ErrorMessage';
import HotelImage from '../HotelImage';

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
        return <ErrorMessage error={error} citiesError={new Error()} />
    }

    if(isLoading) {
        return ( 
            <StyledSection>
                <Heading variant='h3'>Отели в этом городе</Heading>
                <StyledSection>
                    <Loading />
                </StyledSection>
            </StyledSection> 
        );
    }

    return (
        <div>
            <Heading variant='h3'>Отели в этом городе</Heading>
            <StyledSection>
                <StyledList>
                    {
                        data?.length == 0 ? <div>Нет данных об отелях в этом городе</div> : (
                            data?.map((hotel, index) => (
                                <StyledHotel key={hotel.hotelId}>
                                    <HotelImage hotelId={hotel.hotelId} />
                                    <HotelContent>
                                        <Heading variant='h3'>{hotel.hotelName}</Heading>
                                        <StyledInfo>⭐ {hotel.stars} звезд</StyledInfo>
                                        <StyledInfo>От {hotel.priceFrom} ₽ за весь период</StyledInfo>
                                    </HotelContent>
                                </StyledHotel>
                            ))
                        )
                    }
                </StyledList>
            </StyledSection>
        </div>
    );
}

export default HotelsDetail;