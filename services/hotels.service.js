class HotelsService {
    getAllHotels() {
        const hotels = [
            "Thibaut",
            "Baptiste",
            "Hugo"
        ]
        return hotels;
    }

    getHotel(id) {
        const hotel = {
            "id": id,
            "name": "pierpoljak"
        }
        return hotel;
    }
}
export const hotelsService = new HotelsService();