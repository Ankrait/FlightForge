export interface HotelDetail{
    location: {
        country?: string,
        geo?: {
            lon: number,
            lat: number
        },
        state?: string,
        name?: string
    },
    priceAvg: number,
    hotelName: number,
    stars: number,
    locationId: number,
    hotelId: number,
    priceFrom: number
}