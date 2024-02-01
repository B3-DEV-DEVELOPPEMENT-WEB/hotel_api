import {hotelsService} from "../services/hotel.service.js";
import {clientsService} from "../services/clients.service.js";

export function FindHotel (req, res) {
    const hotel = hotelsService.getHotel();
    res.send(hotel)
}

export function FindRooms (req, res) {
    const rooms = hotelsService.getRooms();
    res.send(rooms)
}

export function FindRoom (req, res) {
    const room = hotelsService.getRoom(req.params.id);
    res.send(room);
}

export function AddReservation (req, res) {
    const reservation = hotelsService.postReservation(req.params.id);
    res.send(reservation);
}

export function RemoveReservation (req, res) {
    const reservation = hotelsService.deleteReservation(req.params.id);
    res.send(reservation);
}