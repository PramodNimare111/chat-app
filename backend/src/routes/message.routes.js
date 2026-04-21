import express from "express";

const router = express.Router();

router.get('/send', (req, res) => {
    res.send('send messages');
});

router.get('/receive', (req, res) => {
    res.send('receive messages');
});

export default router;