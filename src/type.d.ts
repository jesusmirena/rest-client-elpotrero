interface Todo {
  id: number;
  name: string;
  desc?: string;
  isComplete: boolean;
}

interface User {
  name: String;
  username: String;
  mail: String;
  password: String;
  birthday: String;
  dni: Number;
  cellphone: Number;
  image?: String;
  gender?: GenderEnum;
  player: { create: { position: string; qualification?: string } };
}

interface Userstate {
  users: User[];
}

interface Canchastate {
  canchas: Cancha[];
}

interface Cancha {
  id: Number;
  number: String;
  inicialTime: String;
  endTime: String;
  cost: Number;
  image: string; //URL
  description: String;
}

interface Actioncancha {
  type: string;
  payload: Cancha;
}

interface Action {
  type: string;
  payload: User;
}

type DispatchType = (args: TodoAction) => TodoAction;
