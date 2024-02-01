import express from "express";
import {FindClient, FindClients, UpdateClient, RemoveClient} from "../controllers/clients.controller.js";

export const router = express.Router();

router.get("", (req, res) => {
    FindClients(req, res);
});

router.get("/:id", (req, res) => {
    FindClient(req, res);
});

router.put("/:id", (req, res) => {
    UpdateClient(req, res);
});

router.delete("/:id", (req, res) => {
    RemoveClient(req, res);
});

// PUT
// POST
// PATCH
// DELETE
// GET
