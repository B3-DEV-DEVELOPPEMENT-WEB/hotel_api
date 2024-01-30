import {clientsService} from "../services/clients.service.js";

export function FindClients (req, res) {
    const clients = clientsService.getAllClients();
    res.send(clients)
}

export function FindClientById (req, res) {
    const client = clientsService.getClient(req.params.id);
    res.send(client);
}