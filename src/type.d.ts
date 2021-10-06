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

type DispatchType = (args: TodoAction) => TodoAction;
