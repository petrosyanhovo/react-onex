import { v4 as uuidv4 } from "uuid";
import img1 from "../Slider/img/img1.jpg";
import img2 from "../Slider/img/img2.jpg";
import img3 from "../Slider/img/img3.jpg";
import img4 from "../Slider/img/img4.jpg";

let testId = uuidv4();
// console.log(testId);
const dataSlider = [
  {
    id: 1,
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: img1,
  },
  {
    id: 2,
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: img2,
  },
  {
    id: 3,
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: img3,
  },
  {
    id: 4,
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: img4,
  },
  {
    id: 5,
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: img2,
  },
];

export default dataSlider;
