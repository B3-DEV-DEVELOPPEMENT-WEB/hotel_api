import express from "express";
import {FindHotel, FindRooms, FindRoom, AddReservation, RemoveReservation} from "../controllers/hotel.controller.js";

export const router = express.Router();

router.get("", (req, res) => {
    FindHotel(req, res);
});

router.get("/rooms", (req, res) => {
    FindRooms(req, res);
});

router.get("/room/:id", (req, res) => {
    FindRoom(req, res);
});

router.post("/room/:id", (req, res) => {
    AddReservation(req, res);
});

router.delete("/room/:id", (req, res) => {
    RemoveReservation(req, res);
});

// PUT
// POST
// PATCH
// DELETE
// GET
