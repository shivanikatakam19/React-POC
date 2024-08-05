import React from 'react';
import { useForm } from 'react-hook-form';

export default function UseFormHandling() {
    // Initialize the useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        alert(`name:${data.name}, email: ${data.email}`)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                    />
                </label>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'Invalid email format',
                            },
                        })}
                    />
                </label>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                    />
                </label>
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
