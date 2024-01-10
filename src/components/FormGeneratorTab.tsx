import React, { useEffect, useState } from 'react';
import formGenerator from './formGenerator';
import Button from './Button';
import { PostFormData } from '@homework-task/types';
import clsx from 'clsx';
import FormField from './FormField';

const FormGeneratorTab = () => {
    const {
        register,
        handleSubmit,
        errors,
        isLoading,
        isSuccess,
        postOnSubmit,
    } = formGenerator();

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            setShowSuccessMessage(true);

            const timeoutId = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [isSuccess]);

    const onSubmit = (data: PostFormData) => {
        postOnSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
                label="Title"
                id="title"
                register={register}
                error={errors.title}
                errorMessage="Title must be at least 1 character and not exceed 50 characters"
                minLength={1}
                maxLength={50}
            />
            <FormField
                label="Body"
                id="body"
                register={register}
                error={errors.body}
                errorMessage="Body must be at least 1 character and not exceed 500 characters"
                minLength={1}
                maxLength={500}
                type="textarea"
            />
            <Button
                type="submit"
                disabled={isLoading}
                className={clsx(
                    'rounded-lg',
                    'px-4',
                    'py-2',
                    'bg-black',
                    'text-white'
                )}
            >
                {isLoading ? 'Submitting...' : 'Submit'}
            </Button>
            {showSuccessMessage && (
                <p className="text-green-500 text-xs mt-2">
                    Successfully added post!
                </p>
            )}
        </form>
    );
};

export default FormGeneratorTab;
