import avatar0 from "assets/img/faces/0.png";
import avatar1 from "assets/img/faces/1.png";
import avatar2 from "assets/img/faces/2.png";
import avatar3 from "assets/img/faces/3.png";
import avatar4 from "assets/img/faces/4.png";
import avatar5 from "assets/img/faces/5.png";
import avatar6 from "assets/img/faces/6.png";
import avatar7 from "assets/img/faces/7.png";
import avatar8 from "assets/img/faces/8.png";
import avatar9 from "assets/img/faces/9.png";

const avatars = [
    avatar0,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
];


export const getAvatar = id => {
    return avatars[id];
}