import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        description: ''
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            setErrors((prev) => ({ ...prev, email: 'Email is required' }));
            return false;
        } else if (!emailRegex.test(formData.email)) {
            setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
            return false;
        } else {
            setErrors((prev) => ({ ...prev, email: '' }));
            return true;
        }
    };

    const validateSubject = () => {
        if (!formData.subject.trim()) {
            setErrors((prev) => ({ ...prev, subject: 'Subject is required' }));
            return false;
        } else {
            setErrors((prev) => ({ ...prev, subject: '' }));
            return true;
        }
    };

    const validateDescription = () => {
        if (!formData.description.trim()) {
            setErrors((prev) => ({ ...prev, description: 'Description is required' }));
            return false;
        } else {
            setErrors((prev) => ({ ...prev, description: '' }));
            return true;
        }
    };

    const validateForm = () => {
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isDescriptionValid = validateDescription();
        return isEmailValid && isSubjectValid && isDescriptionValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs.send(
                'Itspriya123',
                'template_b1sp1bw',
                formData,
                'Cgbsrd-l7hOwaVewT'
            ).then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessage('Message sent successfully!');
                setErrors({});
                setFormData({
                    email: '',
                    subject: '',
                    description: ''
                });
            }).catch((error) => {
                console.log('FAILED...', error);
                setMessage('Failed to send the message. Please try again.');
            });
        }
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen bg-cover bg-center p-4' style={{ backgroundImage: 'url("your-background-image-url.jpg")' }}>
            <div className='bg-white bg-opacity-75 p-6 rounded-md shadow-lg'>
                <h1 className='text-center text-4xl text-blue-900 font-semibold mb-6'>Contact me</h1>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <input
                        className={`bg-blue-900 text-white rounded text-center h-12 w-96 p-2 ${errors.email ? 'border-red-500' : ''}`}
                        type='text'
                        name='email'
                        placeholder='Enter your email'
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={validateEmail}
                    />
                    {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

                    <input
                        className={`bg-blue-900 text-white rounded text-center h-12 w-96 p-2 ${errors.subject ? 'border-red-500' : ''}`}
                        type='text'
                        name='subject'
                        placeholder='Your subject of message'
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={validateSubject}
                    />
                    {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}

                    <textarea
                        className={`bg-blue-900 text-white rounded text-center h-48 w-96 p-2 ${errors.description ? 'border-red-500' : ''}`}
                        name='description'
                        placeholder='Description'
                        value={formData.description}
                        onChange={handleChange}
                        onBlur={validateDescription}
                    ></textarea>
                    {errors.description && <p className='text-red-500 text-sm'>{errors.description}</p>}

                    <button
                        type='submit'
                        className='bg-blue-900 text-white rounded-md py-2 px-4 text-lg font-semibold hover:bg-blue-800 transition duration-300'
                    >
                        Submit
                    </button>
                </form>
                {message && <p className='text-center mt-4'>{message}</p>}
            </div>
        </div>
    );
};

export default Contact;
