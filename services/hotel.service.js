import jsonData from '../json/hotel.json' assert { type: 'json' };

class HotelService {
    getHotel() {
        return jsonData;
    }

    getRooms() {
        return jsonData;
    }

    getRoom(id) {
        return jsonData.rooms.find(room => room.id === parseInt(id));
    }

    postReservation(id) {
        return "Votre réservation a bien était enregistrer pour la chambre " + parseInt(id)+ ".";
    }

    deleteReservation(id) {
        return "Votre réservation a bien était supprimé pour la chambre numéro " + parseInt(id) +".";
    }
}

export const hotelsService = new HotelService();