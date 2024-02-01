import express from "express";
import {FindClient, FindClients, UpdateClient, RemoveClient} from "../controllers/clients.controller.js";
import {adminAuthMiddleware} from "../adminAuth.middleware.js";

export const router = express.Router();

router.get("", adminAuthMiddleware, (req, res) => {
    FindClients(req, res);
});

router.get("/:id", adminAuthMiddleware, (req, res) => {
    FindClient(req, res);
});

router.put("/:id", adminAuthMiddleware, (req, res) => {
    UpdateClient(req, res);
});

router.delete("/:id", adminAuthMiddleware, (req, res) => {
    RemoveClient(req, res);
});

// PUT
// POST
// PATCH
// DELETE
// GET
