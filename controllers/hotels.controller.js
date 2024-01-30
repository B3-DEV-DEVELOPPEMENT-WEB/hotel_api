import {hotelsService} from "../services/hotels.service.js";

export function FindHotels (req, res) {
    const hotels = hotelsService.getAllHotels();
    res.send(hotels)
}

export function FindHotelById (req, res) {
    const hotel = hotelsService.getHotel(req.params.id);
    res.send(hotel);
}