// src/pages/landing/LandingPage.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cross, Award, Heart, Users } from "lucide-react";
import { Link } from 'react-router-dom';
import Card from '../../components/ui/landingpage/cards';
import Navbar from '../../components/Menu/nadvar';
import ChurchBackground from '../../components/animation/animation';

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-amber-50">
      {/* Fondo con un z-index bajo */}
      <div className="absolute inset-0 -z-10">
        <ChurchBackground />
      </div>

      {/* Navbar con z-index alto */}
      <div className="relative z-20">
        <Navbar />
      </div>

      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-amber-800 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1.5, type: "spring" }}
            >
              <Cross className="text-white w-32 h-32" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal con z-index alto */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="relative max-w-5xl mx-auto py-6 sm:px-6 lg:px-8 z-10"
      >
        <div className="px-4 py-6 sm:px-0">
          <div
            className="rounded-lg h-96 flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=400&width=800')" }}
          >
            <div className="bg-amber-800 bg-opacity-75 p-8 rounded-lg">
              <h1 className="text-4xl font-bold text-white text-center">
                Bienvenidos a la Parroquia San Francisco de Asís
              </h1>
              <p className="mt-4 text-xl text-amber-100 text-center">
                Un lugar de fe, comunidad y servicio
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="relative z-10 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Certificado Bautismal</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Solicita tu certificado de bautismo de manera sencilla y rápida.</p>
            </div>
            <div className="mt-3">
              <Link to="/certificado-bautismal" className="text-sm font-medium text-amber-600 hover:text-amber-500 transition duration-150 ease-in-out">
                Obtener certificado <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Card>

          <Card className="relative z-10 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Certificado de Matrimonio</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Solicita tu certificado de matrimonio en línea.</p>
            </div>
            <div className="mt-3">
              <Link to="/certificado-matrimonio" className="text-sm font-medium text-amber-600 hover:text-amber-500 transition duration-150 ease-in-out">
                Obtener certificado <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Card>

          <Card className="relative z-10 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Certificado de Confirmación</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Solicita tu certificado de confirmación fácilmente.</p>
            </div>
            <div className="mt-3">
              <Link to="/certificado-confirmacion" className="text-sm font-medium text-amber-600 hover:text-amber-500 transition duration-150 ease-in-out">
                Obtener certificado <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Card>
        </div>
      </motion.main>
    </div>
  );
}
