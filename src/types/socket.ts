import { User } from 'types';

/* -------------------------------------------------------------------------- */

export enum SOCKET_EVENT {
  JOIN = 'join',
  MESSAGE = 'message',
  SEND_MESSAGE = 'sendMessage',
  ROOM_DATA = 'roomData',
}

export interface Message {
  user: string;
  text: string;
}

export interface RoomData {
  room: string;
  users: User[];
}
