import gsap from "gsap";
import Draggable from "gsap/Draggable";

const drag = () => {
    gsap.registerPlugin(Draggable);
    Draggable.create(".drag", {type:"x,y", edgeResistance:0.65});
}

export default drag