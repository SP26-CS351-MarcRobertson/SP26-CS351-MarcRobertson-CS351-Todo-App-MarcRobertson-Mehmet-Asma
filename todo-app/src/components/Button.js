function Button({text, onClick, type = "button"}) {
    // Text - will ve text displayed on the button
    // onClick - function to be called when click (optional)
    // type - button type (default: button or submit; for submit think forms)

    return (
        <button type={type} onClick={onClick}>
            {text}
        </button>
    );
}
export default Button;

