import React, { useState, useRef, useEffect } from 'react';
import './SignUpForm.scss';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = Record<keyof FormData, string>;

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

const initialFormErrors: FormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

const fieldLabels: Record<keyof FormData, string> = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  phoneNumber: 'Phone number',
  password: 'Password',
  confirmPassword: 'Confirm password',
};

const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, '').slice(0, 10);
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

  return match
    ? `${match[1]}${match[2] ? `-${match[2]}` : ''}${
        match[3] ? `-${match[3]}` : ''
      }`
    : '';
};

const isPasswordValid = (password: string) => {
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  return regex.test(password);
};

const validateFormData = (formData: FormData) => {
  let valid = true;
  const errors: FormErrors = { ...initialFormErrors };

  Object.entries(formData).forEach(([fieldName, rawValue]) => {
    const key = fieldName as keyof FormData;
    const value = rawValue.trim();

    if (!value) {
      errors[key] = `${fieldLabels[key]} is required.`;
      valid = false;
      return;
    }

    if (key === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(value)) {
        errors.email = 'Please enter a valid email address.';
        valid = false;
      }
    }

    if (key === 'phoneNumber') {
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      if (!phoneRegex.test(value)) {
        errors.phoneNumber =
          'Please enter a valid phone number (xxx-xxx-xxxx).';
        valid = false;
      }
    }

    if (key === 'password' && !isPasswordValid(value)) {
      errors.password =
        'Use 8+ chars with uppercase, lowercase, number, and symbol.';
      valid = false;
    }

    if (key === 'confirmPassword' && value !== formData.password) {
      errors.confirmPassword = 'Passwords do not match.';
      valid = false;
    }
  });

  return { valid, errors };
};

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] =
    useState<FormErrors>(initialFormErrors);
  const [submitMessage, setSubmitMessage] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()<>/|';
    let fontSize = 14;
    let columns = canvas.width / fontSize;
    let drops: number[] = Array(Math.floor(columns)).fill(1);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );

      fontSize = Math.max(canvas.width / 100, 10);
      columns = canvas.width / fontSize;
      drops = Array(Math.floor(columns)).fill(1);
    };

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px 'VT323', monospace`;

      drops.forEach((drop, index) => {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        ctx.fillText(text, index * fontSize, drop * fontSize);

        if (drop * fontSize > canvas.height || Math.random() > 0.975) {
          drops[index] = 0;
        }
        drops[index] += 1;
      });
    };

    const handleResize = () => {
      resizeCanvas();
      drawMatrix();
    };

    resizeCanvas();
    drawMatrix();

    const matrixInterval = window.setInterval(drawMatrix, 50);
    window.addEventListener('resize', handleResize);

    return () => {
      window.clearInterval(matrixInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const fieldName = name as keyof FormData;
    const nextValue =
      fieldName === 'phoneNumber' ? formatPhoneNumber(value) : value;

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: nextValue,
    }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
    setSubmitMessage('');
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { valid, errors } = validateFormData(formData);

    setFormErrors(errors);
    setSubmitMessage(valid ? 'Demo form validated successfully.' : '');
  };

  return (
    <div className='sign-up-form-container'>
      <canvas ref={canvasRef} id='canvas' aria-hidden='true' />
      <div className='left-side'>
        <div className='logo'>
          <img
            src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFmOGFiODQxZWY0N2Q5ODNhYmIzZGZmMDk5NTg5ZTJhNzQwNjcwMSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/2p1ng5ek9qIR8wzPn5/giphy.gif'
            alt='Animated matrix-style logo'
          />
          <h1 className='logo-text'>Sign-up Form</h1>
        </div>
      </div>
      <div className='right-side'>
        <form onSubmit={handleFormSubmit} noValidate>
          <label htmlFor='firstName'>First Name *</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
            autoComplete='given-name'
            aria-invalid={Boolean(formErrors.firstName)}
            aria-describedby='firstName-error'
          />
          <div id='firstName-error' className='error'>
            {formErrors.firstName}
          </div>

          <label htmlFor='lastName'>Last Name *</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
            autoComplete='family-name'
            aria-invalid={Boolean(formErrors.lastName)}
            aria-describedby='lastName-error'
          />
          <div id='lastName-error' className='error'>
            {formErrors.lastName}
          </div>

          <label htmlFor='email'>Email *</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            autoComplete='email'
            aria-invalid={Boolean(formErrors.email)}
            aria-describedby='email-error'
          />
          <div id='email-error' className='error'>
            {formErrors.email}
          </div>

          <label htmlFor='phoneNumber'>Phone Number *</label>
          <input
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleInputChange}
            autoComplete='tel'
            inputMode='numeric'
            placeholder='123-456-7890'
            aria-invalid={Boolean(formErrors.phoneNumber)}
            aria-describedby='phoneNumber-error'
          />
          <div id='phoneNumber-error' className='error'>
            {formErrors.phoneNumber}
          </div>

          <label htmlFor='password'>Password *</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            autoComplete='new-password'
            aria-invalid={Boolean(formErrors.password)}
            aria-describedby='password-error'
          />
          <div id='password-error' className='error'>
            {formErrors.password}
          </div>

          <label htmlFor='confirmPassword'>Confirm Password *</label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleInputChange}
            autoComplete='new-password'
            aria-invalid={Boolean(formErrors.confirmPassword)}
            aria-describedby='confirmPassword-error'
          />
          <div id='confirmPassword-error' className='error'>
            {formErrors.confirmPassword}
          </div>

          <button type='submit'>Create Account</button>
          {submitMessage && <p className='success-message'>{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
