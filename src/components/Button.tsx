import { ButtonProps } from "../types"

const Button = ({color, children, onClick}: ButtonProps) => {
    return (
        <button className={`btn btn-${color}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
