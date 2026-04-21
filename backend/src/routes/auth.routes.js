import express from "express";

const router = express.Router();

router.get('/signup', (req, res) => {
    res.send('Sign up');
});

router.get('/login', (req, res) => {
    res.send('login');
});

router.get('/logout', (req, res) => {
    res.send('logout');
});     


export default router;