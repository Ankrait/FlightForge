export interface HotelDetail{
    location: {
        country: string | undefined,
        geo: {
            lon: number | undefined,
            lat: number | undefined
        },
        state: string | undefined,
        name: string | undefined
    },
    priceAvg: number | undefined,
    hotelName: number | undefined,
    stars: number | undefined,
    locationId: number | undefined,
    hotelId: number | undefined,
    priceFrom: number | undefined
}