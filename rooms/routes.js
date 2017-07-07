const express = require('express');
const roomModel = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(roomModel.getAllRooms());
});

router.get('/generate', (req, res, next) => {
    roomModel.addRoom(roomModel.generate());
    res.status(201).send();
});

router.get('/:id', (req, res, next) => {
    res.send(roomModel.getRoom(req.params.id));
});

router.delete('/:id', (req, res, next) => {
    roomModel.deleteRoom(req.params.id);
    res.status(200).send();
});

router.get('/:id/play', (req, res, next) => {
    roomModel.setRoomStatus(req.params.id, roomModel.roomStatuses.PLAYING);
    res.status(200).send();
});

router.get('/:id/pause', (req, res, next) => {
    roomModel.setRoomStatus(req.params.id, roomModel.roomStatuses.PAUSED);
    res.status(200).send();
});

router.get('/:id/add-song', (req, res, next) => {
    roomModel.addSong(req.params.id, roomModel.roomStatuses.PAUSED);
    res.status(200).send();
});









module.exports = router;
