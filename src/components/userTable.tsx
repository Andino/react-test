'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { FormState as UserState } from "@/store/form/reducer";
import EmptyState from './generic/emptyState';
import { useRouter } from 'next/navigation';

const UserTable: React.FC = () => {
    const router = useRouter();
    const users = useSelector((state: any) => state.form.users);
    const propValues = {
        title: 'cliente',
        route: '/form'
    }
    const handleCreateNew = () => {
        router.push(propValues.route);
    };
    return (
        <div className='mt-5'>
            <div className='flex items-center justify-between'>
                <h3 className='text-3xl font-semibold mb-4'>Listado de Usuarios</h3>
                {users.length > 0 &&
                <button
                    onClick={handleCreateNew}
                    className="bg-blue-500 transition hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                    Crear nuevo {propValues.title}
                </button>
                }
                
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                    <th className="py-2 px-4 border-b">First Name</th>
                    <th className="py-2 px-4 border-b">Last Name</th>
                    <th className="py-2 px-4 border-b">Birthday</th>
                    <th className="py-2 px-4 border-b">Gender</th>
                    <th className="py-2 px-4 border-b">Cellphone</th>
                    <th className="py-2 px-4 border-b">Home Phone</th>
                    <th className="py-2 px-4 border-b">Address Home</th>
                    <th className="py-2 px-4 border-b">Profession</th>
                    <th className="py-2 px-4 border-b">Incomes</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: UserState, index: number) => (
                    <tr key={index}>
                        <td className="py-2 px-4 border-b">{user.firstName}</td>
                        <td className="py-2 px-4 border-b">{user.lastName}</td>
                        <td className="py-2 px-4 border-b">{user.birthday}</td>
                        <td className="py-2 px-4 border-b">{user.gender}</td>
                        <td className="py-2 px-4 border-b">{user.cellphone}</td>
                        <td className="py-2 px-4 border-b">{user.homePhone}</td>
                        <td className="py-2 px-4 border-b">{user.addressHome}</td>
                        <td className="py-2 px-4 border-b">{user.profession}</td>
                        <td className="py-2 px-4 border-b">${user.incomes}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            {users.length === 0 &&
                <h2>
                    <EmptyState {...propValues} />
                </h2>
            }
        </div>
    );
  };
  
  export default UserTable;
