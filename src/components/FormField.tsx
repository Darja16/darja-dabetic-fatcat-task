import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

type FormFieldProps = {
    id: string;
    label: string;
    type?: string;
    register: UseFormRegister<any>;
    required?: boolean;
    error?: FieldError;
    errorMessage?: string;
    children?: React.ReactNode;
    minLength?: number;
    maxLength?: number;
};

const FormField: React.FC<FormFieldProps> = ({
    id,
    label,
    type,
    register,
    error,
    required,
    errorMessage,
    ...inputProps
}) => (
    <div className="mb-4">
        <label
            htmlFor={id}
            className="block text-gray-700 text-sm font-bold mb-2"
        >
            {label}:
        </label>
        {type === 'textarea' ? (
            <textarea
                {...register(id, {
                    required: 'Field is required',
                    ...inputProps,
                })}
                id={id}
                className="border rounded w-full py-2 px-3"
            />
        ) : (
            <input
                {...register(id, {
                    required: 'Field is required',
                    ...inputProps,
                })}
                id={id}
                type={type || 'text'}
                className="border rounded w-full py-2 px-3"
            />
        )}
        {error?.type === 'required' && (
            <p className="text-red-500 text-xs mt-1">
                {error.message || 'Field is required'}
            </p>
        )}
        {error?.type === 'maxLength' && (
            <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
        )}
    </div>
);

export default FormField;
