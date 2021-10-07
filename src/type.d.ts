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
  id: Number;
  number: String;
  inicialTime: String;
  endTime: String;
  cost: Number;
  image: string;
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
