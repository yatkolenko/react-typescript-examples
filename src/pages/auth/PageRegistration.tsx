import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BaseInput from '@/components/base/BaseInput';
import BaseButton from '@/components/base/BaseButton';
import { Paths } from '@/routes/path.ts';
import { Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const { t } = useTranslation('auth');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validate = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!formData.name) newErrors.name = t('errors.required');
    if (!formData.email) newErrors.email = t('errors.required');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('errors.email');

    if (!formData.password) newErrors.password = t('errors.required');
    else if (formData.password.length < 8) newErrors.password = t('errors.password_length');

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('errors.password_match');
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Registration submitted', formData);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-center text-2xl font-bold">{t('register.title')}</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <BaseInput
            fullWidth
            label={t('register.name')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            errorMessage={errors.name}
            required
          />

          <BaseInput
            fullWidth
            label={t('register.email')}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            errorMessage={errors.email}
            required
          />

          <BaseInput
            fullWidth
            label={t('register.password')}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            errorMessage={errors.password}
            required
          />

          <BaseInput
            fullWidth
            label={t('register.confirm_password')}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword}
            required
          />

          <BaseButton type="submit" variant="primary" fullWidth>
            {t('register.submit')}
          </BaseButton>
        </form>

        <div className="text-center text-sm">
          {t('register.have_account')}{' '}
          <Link className="text-blue-600 hover:text-blue-800" to={Paths.LOGIN}>
            {t('register.login')}
          </Link>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">{t('login.social')}</span>
          </div>
        </div>

        <div className="space-y-3">
          <BaseButton variant="outline" fullWidth icon={<GoogleIcon />}>
            {t('social.google')}
          </BaseButton>

          <BaseButton variant="outline" fullWidth icon={<FacebookIcon />}>
            {t('social.facebook')}
          </BaseButton>

          <BaseButton variant="outline" fullWidth icon={<GitHubIcon />}>
            {t('social.github')}
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

const GoogleIcon = () => <span className="mr-2">G</span>;
const FacebookIcon = () => <span className="mr-2">F</span>;
const GitHubIcon = () => <span className="mr-2">GH</span>;

export default RegisterForm;
