type ButtonProps = {
    variant: string;
    text: string;
    link?: string;
};

const Button = ({variant, text, link}:ButtonProps) => {

    const primaryColor = "border-primary";
    const secondaryColor = "border-secondary";

    const getBackgroundColor = () => {
        return variant === "primary" ? primaryColor : secondaryColor;
    };

    const getHoverColor = () => {
        return variant === "primary" ? "hover:bg-primary" : "hover:bg-secondary";
    };

    return (
        <a
            href={`#${link}`}
            className={`py-4 px-5 outline-none font-semibold border-2 text-body rounded-lg duration-300 transition-all ease-in-out relative top-0 hover:-top-1 hover:hover:text-white ${getBackgroundColor()} ${getHoverColor()}`}
        >
            {text}
        </a>
    );
}

export default Button