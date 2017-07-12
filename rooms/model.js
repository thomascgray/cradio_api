const model = {};
const uuid = require('uuid/v4');
let rooms = [];

const roomStatuses = {
    "PLAYING" : 1,
    "PAUSED" : 2,
    "LOADING" : 3,
    "FINISHED" : 4,
}

/**
 * create a new, generated room object and return it
 * - ID: a random uuid()
 * - status: defaults to roomStatuses.PAUSED
 * - songs: empty array
 *
 * @return {object} a generated room
 */
model.generate = () => {
    return {
        id: uuid(),
        status: roomStatuses.PAUSED,
        songs: [],
    };
}

/**
 * return all the rooms that currently exist
 * @return {array}
 */
model.getAllRooms = () => {
    return rooms;
}

/**
 * add a room to the pool
 * @param {room} r the room to add to the pool
 * @return {this}
 */
model.addRoom = (r) => {
    if (r.id == null) {
        return false;
    }
    rooms.push(r);
    return this;
}

/**
 * return a room by its id
 * @param  {string} id
 * @return {object} the room
 */
model.getRoom = id => {
    return rooms.find(r => {
        return id === r.id;
    });
}

/**
 * based on an id, remove a room from the room pool
 * @param  {string} id
 * @return {this}
 */
model.deleteRoom = id => {
    let rIndex = rooms.findIndex(r => {
        return id === r.id;
    });
    rooms.splice(rIndex, 1);
    return this;
}

/**
 * given a room id and a status, set that room's status
 * as the given status
 * @param {string} id
 * @param {int} status
 * @return {this}
 */
model.setRoomStatus = (id, status) => {
    rooms = rooms.map(r => {
        if (r.id === id) {
            r.status = status;
        }
        return r;
    });

    return this;
};

/**
 * given a room id and a song, add that song
 * to the rooms songs array
 * @param {string} id
 * @param {object} song
 * @return {this}
 */
model.addSong = (id, song) => {
    rooms = rooms.map(r => {
        if (r.id === id) {
            r.songs.push(song);
        }
        return r;
    });

    return this;
};

model.roomStatuses = roomStatuses;

module.exports = model;
