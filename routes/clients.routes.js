import express from "express";
import {FindClientById, FindClients} from "../controllers/clients.controller.js";

export const router = express.Router();

router.get("", (req, res) => {
    FindClients(req, res);
});

router.get("/:id", (req, res) => {
    FindClientById(req, res);
});

// PUT
// POST
// PATCH
// DELETE
// GET
