// src/components/forms/login/ResetPasswordForm.js
import React from 'react';
import { Mail } from "lucide-react";
import Button from '../../ui/button';
import Link from '../../ui/login/link'; // Asegúrate de que este componente esté disponible

const ResetPasswordForm = ({ onSwitchForm }) => {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-amber-700 text-sm font-bold mb-2" htmlFor="email">
          Correo Electrónico
        </label>
        <div className="relative">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            required
          />
          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-amber-600" />
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <Button type="submit">Enviar Instrucciones</Button>
        <Link href="#" onClick={onSwitchForm} className="text-amber-600">
          Volver al Inicio de Sesión
        </Link>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
