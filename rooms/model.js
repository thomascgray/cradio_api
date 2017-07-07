const model = {};
const uuid = require('uuid/v4');
let rooms = [];

const roomStatuses = {
    "PLAYING" : 1,
    "PAUSED" : 2,
}

model.generate = () => {
    return {
        id: uuid(),
        status: roomStatuses.PAUSED,
    };
}

model.getAllRooms = () => {
    return rooms;
}

model.addRoom = (r) => {
    rooms.push(r);
}

model.getRoom = id => {
    return rooms.find(r => {
        return id === r.id;
    });
}

model.deleteRoom = id => {
    let rIndex = rooms.findIndex(r => {
        return id === r.id;
    });
    rooms.splice(rIndex, 1);
}

model.setRoomStatus = (id, status) => {
    rooms = rooms.map(r => {
        if (r.id === id) {
            r.status = status;
        }
        return r;
    });
};

model.roomStatuses = roomStatuses;

module.exports = model;
