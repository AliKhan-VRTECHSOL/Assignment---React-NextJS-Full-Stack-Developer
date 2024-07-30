import React, { useState } from "react"
import { Controller } from "react-hook-form"

const CustomInput = ({ name, control, placeholder, error, type, style }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input
          {...field}
          type={type}
          placeholder={placeholder}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          className={`pl-4 py-2 rounded-[10px] transition-colors duration-300 w-full ${style} ${
            error
              ? "border-error border bg-white"
              : isActive
              ? "border-inputColor"
              : "border-transparent"
          } ${isActive ? "bg-white focus:outline-none" : "bg-inputColor"}`}
        />
      )}
    />
  )
}

export default CustomInput
