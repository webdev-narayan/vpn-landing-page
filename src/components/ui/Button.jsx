/* eslint-disable react/prop-types */

const Button = ({ title, className }) => {
    return (
        <button className={`p-2 px-8 font-bold ${className}`}>
            {title}
        </button>
    )
}

export default Button
