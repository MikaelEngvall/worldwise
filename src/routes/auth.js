import express from "express";
import { register, login } from "../auth/auth.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = await register(req.body.email, req.body.password);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { user, token } = await login(req.body.email, req.body.password);
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
