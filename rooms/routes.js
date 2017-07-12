const express = require('express');
const roomModel = require('./model');
const router = express.Router();

// return all the rooms
router.get('/', (req, res, next) => {
    res.send(roomModel.getAllRooms());
});

// generate a new room, add it to the room pool and return it
router.get('/generate', (req, res, next) => {
    let tempRoom = roomModel.generate();
    roomModel.addRoom(tempRoom);
    res.status(201).send(tempRoom);
});

// get a room
router.get('/:id', (req, res, next) => {
    res.send(roomModel.getRoom(req.params.id));
});

// delete a room
router.delete('/:id', (req, res, next) => {
    roomModel.deleteRoom(req.params.id);
    res.status(200).send();
});

// attempt to set a room as playing
router.get('/:id/action/play', (req, res, next) => {
    roomModel.setRoomStatus(req.params.id, roomModel.roomStatuses.PLAYING);
    res.status(200).send();
});

// attempt to set a room as paused
router.get('/:id/action/pause', (req, res, next) => {
    roomModel.setRoomStatus(req.params.id, roomModel.roomStatuses.PAUSED);
    res.status(200).send();
});

router.get('/:id/report/song-finished', (req, res, next) => {
    roomModel.setRoomStatus(req.params.id, roomModel.roomStatuses.PAUSED);
    res.status(200).send();
});


router.get('/:id/action/add-song', (req, res, next) => {
    roomModel.addSong(req.params.id, roomModel.roomStatuses.PAUSED);
    res.status(200).send();
});

module.exports = router;
