const Button = ({color = "blue", fontSize = 12, text = "click me", handleClick}) => {
    const buttonStyle = { 
        color: color, 
        fontSize: fontSize + "px" 
    };

    return (
    <>
        <button style={buttonStyle} onClick={handleClick}>{text}</button>
    </>
    );
};

export default Button;
