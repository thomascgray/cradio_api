const roomStore = {};
const uuid = require('uuid/v4');
let rooms = [];

roomStore.generate = () => {
    return {
        id: uuid(),
    };
}

roomStore.getAllRooms = () => {
    return rooms;
}

roomStore.addRoom = (r) => {
    rooms.push(r);
}

roomStore.deleteRoom = id => {
    let rIndex = rooms.findIndex(r => {
        return id === r.id;
    });
    rooms = rooms.splice(rIndex, 1);
}

module.exports = roomStore;
