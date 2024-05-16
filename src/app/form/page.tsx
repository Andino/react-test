// app/page.js
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { clearForm, setProps } from '@/store/form/reducer';

export default function FormPage() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.form);

  return (
    <div>
      <h1>Count: {count.name}</h1>
      <button onClick={() => dispatch(clearForm())}>Clear</button>
      <button onClick={() => dispatch(setProps({name:"test"}))}>default</button>
    </div>
  );
}