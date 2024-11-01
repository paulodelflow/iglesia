// src/components/forms/login/LoginForm.js
import React from 'react';
import { User, Lock } from "lucide-react";
import Button from '../../ui/button';
import Link from '../../ui/login/link';

const LoginForm = ({ onSwitchForm }) => {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-amber-700 text-sm font-bold mb-2" htmlFor="username">
          Nombre de Usuario
        </label>
        <div className="relative">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Tu nombre de usuario"
            required
          />
          <User className="absolute left-3 top-2.5 h-5 w-5 text-amber-600" />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-amber-700 text-sm font-bold mb-2" htmlFor="password">
          Contraseña
        </label>
        <div className="relative">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            required
          />
          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-amber-600" />
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <Button type="submit">Iniciar Sesión</Button>
        <Link href="#" onClick={onSwitchForm}>¿Olvidaste tu contraseña?</Link>
      </div>
      <p className="text-center">
        ¿No tienes cuenta? <Link href="#" onClick={() => onSwitchForm('register')}>Registrarse</Link>
      </p>
    </form>
  );
};

export default LoginForm;
