import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Rose';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 15,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'A',
      amenities: 'May lanh cac thu cac kieu',
      price: 120,
      photos: 'http://gido',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('11-Nov-2022'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'A',
      amenities: 'May lanh cac thu cac kieu',
      price: 120,
      photos: 'http://gido',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('11-Nov-2022'),
      rating: 4.5,
    },
    {
      roomNumber: 3,
      roomType: 'A',
      amenities: 'May lanh cac thu cac kieu',
      price: 120,
      photos: 'http://gido',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('11-Nov-2022'),
      rating: 4.5,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'B',
      amenities: 'May lanh cac thu cac kieu',
      price: 120,
      photos: 'http://gido',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('11-Nov-2022'),
      rating: 4.5,
    };

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
