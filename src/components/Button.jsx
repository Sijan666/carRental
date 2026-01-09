

const Button = ({className , btnText }) => {
    return (
        <>
        <button className={`cursor-pointer ${className}`}>{btnText}</button>
        </>
    )
}

export default Button