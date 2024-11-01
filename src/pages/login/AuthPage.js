// src/pages/login/AuthPage.js
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { User, Lock, Mail } from "lucide-react";
import ChurchBackground from '../../components/animation/animation';
import Card from '../../components/ui/login/card';
import Button from '../../components/ui/login/button';
import Link from '../../components/ui/login/link';

const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.5 },
};

export default function AuthPage() {
  const [formType, setFormType] = useState('login'); // 'login', 'register', 'reset'

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      <ChurchBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex justify-center">
          <div className="max-w-md w-full"> {/* Limit the width of the card */}
            <AnimatePresence mode="wait">
              {formType === 'login' && (
                <motion.div {...pageTransition} key="login">
                  <Card>
                    <h2 className="text-3xl font-semibold text-center text-amber-800 mb-6">Iniciar Sesión</h2>
                    <form>
                      <div className="mb-4">
                        <label className="block text-amber-700 text-sm font-bold mb-2" htmlFor="username">
                          Nombre de Usuario
                        </label>
                        <div className="relative">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-amber-300 focus:border-amber-500"
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-amber-300 focus:border-amber-500"
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
                        <Link href="#" onClick={() => setFormType('reset')}>¿Olvidaste tu contraseña?</Link>
                      </div>
                      <p className="text-center">
                        ¿No tienes cuenta? <Link href="#" onClick={() => setFormType('register')}>Registrarse</Link>
                      </p>
                    </form>
                  </Card>
                </motion.div>
              )}

              {formType === 'register' && (
                <motion.div {...pageTransition} key="register">
                  <Card>
                    <h2 className="text-3xl font-semibold text-center text-amber-800 mb-6">Crear Cuenta</h2>
                    <form>
                      <div className="mb-4">
                        <label className="block text-amber-700 text-sm font-bold mb-2" htmlFor="username">
                          Nombre de Usuario
                        </label>
                        <div className="relative">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-amber-300 focus:border-amber-500"
                            id="username"
                            type="text"
                            placeholder="Tu nombre de usuario"
                            required
                          />
                          <User className="absolute left-3 top-2.5 h-5 w-5 text-amber-600" />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-amber-700 text-sm font-bold mb-2" htmlFor="email">
                          Correo Electrónico
                        </label>
                        <div className="relative">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-amber-300 focus:border-amber-500"
                            id="email"
                            type="email"
                            placeholder="tucorreo@ejemplo.com"
                            required
                          />
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-amber-600" />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-amber-700 text-sm font-bold mb-2" htmlFor="password">
                          Contraseña
                        </label>
                        <div className="relative">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-amber-300 focus:border-amber-500"
                            id="password"
                            type="password"
                            placeholder="******************"
                            required
                          />
                          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-amber-600" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <Button type="submit">Registrarse</Button>
                        <Link href="#" onClick={() => setFormType('login')}>¿Ya tienes cuenta? Inicia Sesión</Link>
                      </div>
                    </form>
                  </Card>
                </motion.div>
              )}

              {formType === 'reset' && (
                <motion.div {...pageTransition} key="reset">
                  <Card>
                    <h2 className="text-3xl font-semibold text-center text-amber-800 mb-6">Recuperar Contraseña</h2>
                    <p className="text-center text-gray-600 mb-6">Ingresa tu correo electrónico para recibir instrucciones de recuperación.</p>
                    <form>
                      <div className="mb-4">
                        <label className="block text-amber-700 text-sm font-bold mb-2" htmlFor="email">
                          Correo Electrónico
                        </label>
                        <div className="relative">
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-amber-300 focus:border-amber-500"
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
                        <Link href="#" onClick={() => setFormType('login')}>Volver al Inicio de Sesión</Link>
                      </div>
                    </form>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
