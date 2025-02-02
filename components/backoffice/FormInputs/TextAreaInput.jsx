import React from "react";

export const TextAreaInput = ({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 dark:text-slate-50 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          className="mt-1 block w-full px-3 py-3 border-0 text-gray-900 ring-1 ring-inset border-gray-300 dark:border-gray-700 rounded-md shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-lime-700 focus:border-indigo-500  dark:bg-gray-800 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
          defaultValue={defaultValue}
          autoComplete={name}
          placeholder={`Type the ${label.toLocaleLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
};
