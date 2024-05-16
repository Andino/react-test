'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { create } from 'domain';
interface DynamicTitle {
    title: string
    route: string
}
const EmptyState: React.FC<DynamicTitle> = ({title, route}) => {
    const router = useRouter();

    const handleCreateNew = () => {
        router.push(route);
    };
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <svg
        className="w-24 h-24 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6 0a9 9 0 11-6-8.28"
        ></path>
        </svg>
        <h5 className="text-gray-700 text-xl mt-4">No hay {title}/es registrados</h5>
        <small className="text-gray-700 text-md mt-4">No tienes ningun {title} creado para mostrar en esta sección, si deseas crear un nuevo registro, usa el siguiente botón</small>
        <button
        onClick={handleCreateNew}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        Crear nuevo {title}
        </button>
    </div>
    );
  };
  
  export default EmptyState;
