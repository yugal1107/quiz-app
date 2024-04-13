import express from "express";
import { Router } from "express";
import controllers from "../controllers/auth-controller.js";

const app = express();
const router = Router();

router.get("/", controllers.home);

module.exports = router;
