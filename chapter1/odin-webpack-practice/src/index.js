import "./styles.css";
import { greeting } from "./greeting.js";
import testImage from "./test.png";

function main(){
    console.log(greeting);
    const image = document.createElement("img");
    image.src = testImage;
    document.body.appendChild(image);
}

main();


