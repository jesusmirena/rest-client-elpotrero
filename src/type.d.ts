interface Todo {
  id: number;
  name: string;
  desc?: string;
  isComplete: boolean;
}

interface User {
  name: string;
  userName: string;
  mail: string;
  password: string;
  password_repeat: string;
  birthday: string;
  dni: number;
  cellphone: number;
  image?: string;
  gender?: "FEMALE" | "MALE" | "UNDEFINED";
  player: { position: string; qualification: string };
}

interface Userstate {
  users: User[];
}

interface Canchastate {
  canchas: Cancha[];
}

interface Cancha {
  address: String;
  cost: Number;
  description: String;
  endTime: String;
  id: Number;
  image: string; //URL
  inicialTime: String;
  name: String;
  qualification: Number;
  votes: Number;
}

interface Actioncancha {
  type: string;
  payload: any;
}

interface Action {
  type: string;
  payload: User;
}

type User = {
  name: string;
  userName: string;
  gender: any;
  dni: number;
  birthday: string | null;
  cellphone: number;
  mail: string;
  image: string | null;
  password: string;
  playerId: number;
};

type DispatchType = (args: TodoAction) => TodoAction;
