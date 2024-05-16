'use client';

import React from 'react';
import { FormState as UserState } from "@/store/form/reducer";

const ItemList: React.FC<UserState> = (user) => {
    return (
    <tr>
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
    );
  };
  
  export default ItemList;

