import {clientsService} from "../services/clients.service.js";

export function FindClients (req, res) {
    const clients = clientsService.getClients();
    res.send(clients)
}

export function FindClient (req, res) {
    const client = clientsService.getClient(req.params.id);
    res.send(client);
}

export function UpdateClient (req, res) {
    const client = clientsService.putClient(req.params.id);
    res.send(client);
}

export function RemoveClient (req, res) {
    const client = clientsService.deleteClient(req.params.id);
    res.send(client);
}