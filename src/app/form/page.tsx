'use client';

import { useDispatch, useSelector } from 'react-redux';
import { clearForm, setProps } from '@/store/form/reducer';
import { FormComponent } from '@/components/registerForm';
import { FormState } from "@/store/form/reducer";

export default function FormPage() {
  const dispatch = useDispatch();
  const count = useSelector((state:any) => state.form.currentUser);

  const handleUpdate = (data: Partial<FormState>) => dispatch(setProps(data));
  const handleClear = () => {
    dispatch(clearForm());
  }

  return (
    <div>
      <FormComponent
        values={count}
        updateActions={handleUpdate}
        clearAction={handleClear}
      />
    </div>
  );
}