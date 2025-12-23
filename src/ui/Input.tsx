import type { ComponentProps } from "react";
import type React from "react";

interface InputTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  placeholder: string;
  name: string;
  props?: ComponentProps<"input">;
}

function Input({ icon, placeholder, name, ...props }: InputTypes) {
  return (
    <div className="py-4 shadow-[0_0_2px] shadow-dark-gray flex items-center gap-4 px-4 rounded-sm w-full sm:w-96">
      {icon && icon}
      <input
        className="outline-none h-full w-full"
        placeholder={placeholder}
        name={name}
        {...props}
      />
    </div>
  );
}

export default Input;
