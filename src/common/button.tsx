type ButtonProps = {
    variant: "primary" | "secondary";
    text: string;
};

const Button = ({variant, text}:ButtonProps) => {
    const primaryColor = "bg-primary";
    const secondaryColor = "bg-secondary";

    const getBackgroundColor = () => {
        return variant === "primary" ? primaryColor : secondaryColor;
    };

    const getHoverColor = () => {
        return variant === "primary" ? "hover:bg-primary/90" : "hover:bg-secondary/90";
    };

    return (
        <a
            href="#"
            className={`py-4 px-5 text-white rounded-lg duration-300 transition-all ease-in-out relative top-0 hover:-top-1 ${getBackgroundColor()} ${getHoverColor()}`}
        >
            {text}
        </a>
    );
}

export default Button