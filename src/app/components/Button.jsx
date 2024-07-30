import React from "react"
import classNames from "classnames"

const Button = ({
  variant = "primary",
  size = "medium",
  children,
  type,
  onClick,
}) => {
  // Define the base classes for the button
  const baseClasses =
    "inline-flex items-center justify-center font-bodyRegular focus:outline-none"

  // Define classes for variants
  const variantClasses = {
    primary: "bg-primary text-white rounded-[10px]",
    ghost: "text-white border border rounded-[10px] border-white",
  }

  // Define classes for sizes
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-4 text-base",
    large: "px-6 py-3 text-lg w-full ",
  }

  // Combine all classes
  const classes = classNames(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size]
  )

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
