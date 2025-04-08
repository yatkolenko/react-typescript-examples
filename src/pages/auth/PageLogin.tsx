import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BaseInput from '@/components/base/BaseInput';
import BaseButton from '@/components/base/BaseButton';
import { Link } from 'react-router-dom';
import { Paths } from '@/routes/path.ts';

const LoginForm = () => {
  const { t } = useTranslation('auth');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validate = () => {
    const newErrors = {
      email: '',
      password: '',
    };

    if (!email) newErrors.email = t('errors.required');
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = t('errors.email');

    if (!password) newErrors.password = t('errors.required');
    else if (password.length < 8) newErrors.password = t('errors.password_length');

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Login submitted', { email, password });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-center text-2xl font-bold">{t('login.title')}</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <BaseInput
            label={t('login.email')}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            errorMessage={errors.email}
            required
            fullWidth
          />

          <BaseInput
            label={t('login.password')}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            errorMessage={errors.password}
            required
            fullWidth
          />

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              {t('login.forgot')}
            </a>
          </div>

          <BaseButton type="submit" variant="primary" fullWidth>
            {t('login.submit')}
          </BaseButton>
        </form>

        <div className="text-center text-sm">
          {t('login.no_account')}{' '}
          <Link className="text-blue-600 hover:text-blue-800" to={Paths.REGISTER}>
            {t('login.create')}
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

export default LoginForm;
