import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({submitForm}) => {
const {handleChange, values, handleSubmit, errors } 
= useForm(
    submitForm,
    validate
    );

    return (
        <div className='form-content-right'>
        <form className="form" onSubmit={handleSubmit}>
            <h1>Add User</h1>
            <div className="form-inputs">
                <label htmlFor='firstname'
                className='form-label'>
                   First Name
                </label><br />
                 <input 
                 id='firstname'
                 type='firstname' 
                    name='firstname'
                    className='form-input'
                    placeholder="enter your firstname"
                    value={values.firstname}
                    onChange={handleChange} 
                    />
                    {errors.firstname && <p>{errors.firstname}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor='lastname'
                className='form-label'>
                   Last Name
                </label><br />
                 <input 
                 id='lastname'
                 type='lastname' 
                    name='lastname'
                    className='form-input'
                    placeholder="enter your lastname" 
                    value={values.lastname}
                    onChange={handleChange}
                    />
                    {errors.lastname && <p>{errors.lastname}</p>}
            </div> 
            <div className="form-inputs">
                <label htmlFor='profiles'
                className='form-label'>
                    profiles
                </label><br />
                <input
                id='profiles'
                type='text' 
                    name='profiles'
                    className='form-input'
                    placeholder="select.."
                    value={values.profiles}
                    onChange={handleChange} />
            </div>
            <div className="form-inputs">
                <label htmlFor='username'
                className='form-label'>
                    Username
                </label><br />
                <input
                id='username'
                type='text' 
                    name='username'
                    className='form-input'
                    placeholder="enter your username"
                    value={values.username}
                    onChange={handleChange}
                     />
                     {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor='email'
                className='form-label'>
                   Email Address
                </label><br />
                 <input 
                 id='email'
                 type='email' 
                    name='email'
                    className='form-input'
                    placeholder="enter your email"
                    value={values.email}
                    onChange={handleChange} 
                    />
                    {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor='password'
                className='form-label'>
                   Password
                </label><br />
                 <input 
                 id='password'
                 type='password' 
                    name='password'
                    className='form-input'
                    placeholder="enter your password"
                    value={values.password}
                    onChange={handleChange} 
                    />
                    {errors.password && <p>{errors.password}</p>}
            </div>
        
        <button className='form-input-btn'
        type='reset'>
            Cancel
        </button>
        <button className='form-input-btn'
        type='submit'>
            Add
        </button>
        </form>
        </div>
    )
}

export default FormSignup;
