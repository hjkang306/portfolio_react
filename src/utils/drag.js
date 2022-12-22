import $ from "jquery";
import 'jquery-ui'; 

const drag = () => {
    $(".drag").draggable({ opacity: 0.8 });
}

export default drag