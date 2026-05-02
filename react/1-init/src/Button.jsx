import { useState } from "react";


const Button = ({ text = "grey" }) => {
    const [cnt, setCnt] = useState(0);
    const [bgColor, setBg] = useState(text);

    const handleClick = () => {
        setCnt(cnt + 1);
        setBg(text);
        document.body.style.backgroundColor = text;
    }

    return (
        <>
            <button style={{ backgroundColor: bgColor }} onClick={handleClick}></button>
        </>
    );
};

export default Button;
