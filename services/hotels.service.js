import jsonData from '../json/hotel.json' assert { type: 'json' };

class HotelsService {
    constructor() {
        this.hotel = jsonData;
    }
    getHotel() {
        return this.hotel;
    }

    getRooms() {
        return this.hotel.rooms;
    }

    getRoom(id) {
        return this.hotel.rooms.find(room => room.id === parseInt(id));
    }

    postReservation(id) {
        return "Votre réservation a bien était enregistrer pour la chambre" + parseInt(id) +".";
    }
}

export const hotelsService = new HotelsService();