

const Button = ({ btnText, className, ...rest }) => {
    return (
        <button className={`cursor-pointer ${className}`} {...rest}>
            {btnText}
        </button>
    )
}

export default Button