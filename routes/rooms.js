const express = require('express');
const roomStore = require('../rooms/roomStore');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(roomStore.getAllRooms());
});

router.get('/generate', (req, res, next) => {
    roomStore.addRoom(roomStore.generate());
    res.status(201).send();
});

router.delete('/', (req, res, next) => {
    console.log(req.params.id);
});

router.post('/delete', (req, res, next) => { roomStore.deleteRoom(req.body.id) });

module.exports = router;
