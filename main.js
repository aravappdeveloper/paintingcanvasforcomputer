//start of definition section
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 1;
//end of definiton section
//start of mousedown section
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}
//start of mouseup section
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseup";
}
//end of mouseup section
//start of mouseleave section
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
//start of mouseleave section
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_pos_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_pos_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent = "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last positon of x and y coordinates: ");
        console.log("x = " + last_position_of_x + ", y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates: ");
        console.log("x = " + current_pos_of_mouse_x + ", y = " + current_pos_of_mouse_y);
        ctx.lineTo(current_pos_of_mouse_x, current_pos_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_pos_of_mouse_x;
    last_position_of_y = current_pos_of_mouse_y;
}
//end of mouseleave section
//start of clearArea section
function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
//end of clearArea section