

const Container = ({className , children}) => {
    return (
        <>
        <div className={`max-w-397.5 mx-auto ${className}`}>{children}</div>
        </>
    )
}

export default Container