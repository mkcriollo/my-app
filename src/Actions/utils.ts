// import { IPhoto } from "../Types";

// // get
// export const drag = (ev: any, photo: IPhoto) => {
//   ev.dataTransfer.setData("text", ev.target.id);
// };

// export const drop = (ev: any) => {
//   ev.preventDefault();
//   console.log(ev.dataTransfer);
//   const data = ev.dataTransfer.getData("text");
//   console.log(document.getElementById(data));
//   // ev.target.appendChild(document.getElementById(data));
// };

export const allowDrop = (ev: any) => {
  ev.preventDefault();
};
