import express from "express";
import {FindHotelById, FindHotels} from "../controllers/hotels.controller.js";

export const router = express.Router();

router.get("", (req, res) => {
    FindHotels(req, res);
});

router.get("/:id", (req, res) => {
    FindHotelById(req, res);
});

// PUT
// POST
// PATCH
// DELETE
// GET
