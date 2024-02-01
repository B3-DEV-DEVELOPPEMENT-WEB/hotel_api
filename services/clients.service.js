import jsonData from '../json/clients.json' assert { type: 'json' };

class ClientsService {

    getClients() {
        return jsonData;
    }

    getClient(id) {
        return jsonData.clients.find(client => client.id === parseInt(id));
    }

    putClient(id) {
        return "Le client " + parseInt(id) +" a bien était ajouter.";
    }

    deleteClient(id) {
        return "Le client " + parseInt(id) +" a bien était supprimé.";
    }
}
export const clientsService = new ClientsService();