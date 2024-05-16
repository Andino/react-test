'use client';
import React from 'react';
import UserTable from '@/components/userTable';

export default function Home (){
  return (
    <div className='min-h-screen min-w-screen bg-white flex items-start justify-center'>
      <UserTable />
    </div>
  );
};
