import { postFormData } from '../api';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { PostFormData } from '@homework-task/types';

const formGenerator = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PostFormData>();

    const {
        mutate: postOnSubmit,
        isError,
        isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: (formData: PostFormData) => {
            return postFormData(formData);
        },
    });

    return {
        register,
        handleSubmit,
        errors,
        isLoading,
        isSuccess,
        isError,
        postOnSubmit,
    };
};

export default formGenerator;
