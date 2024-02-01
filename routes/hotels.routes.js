import express from "express";
import {FindHotel, FindRooms, FindRoom, createReservation} from "../controllers/hotels.controller.js";

export const router = express.Router();

router.get("", (req, res) => {
    FindHotel(req, res);
});

router.get("/rooms", (req, res) => {
    FindRooms(req, res);
});

router.get("/:id", (req, res) => {
    FindRoom(req, res);
});

router.post("/:id", (req, res) => {
    createReservation(req, res);
});

// PUT
// POST
// PATCH
// DELETE
// GET
