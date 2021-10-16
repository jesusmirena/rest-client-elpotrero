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

interface FormAlquiler {
  id: Number;
  endTime: any;
  inicialTime: any;
  timetable: any;
  name: String;
  cost: Number;
}

type DispatchType = (args: TodoAction) => TodoAction;
