class ClientsService {
    getAllClients() {
        const clients = [
            "Thibaut",
            "Baptiste",
            "Hugo"
        ]
        return clients;
    }

    getClient(id) {
        const client = {
            "id": id,
            "name": "pierpoljak"
        }
        return client;
    }
}
export const clientsService = new ClientsService();