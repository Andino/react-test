// components/FormComponent.tsx
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '@/validations/user/userFormSchema';
import { FormState } from "@/store/form/reducer";
import professions from '@/generic-lists/professions.json';

interface FormComponentProps {
  values: any;
  updateActions: (data: Partial<FormState>) => void;
  clearAction: () => void;
}

const defaultProps: FormComponentProps = {
  updateActions: () => {},
  clearAction: () => {},
  values: {
    firstName: null,
    lastName: null,
    birthday: null,
    gender: null,
    cellphone: null,
    homePhone: null,
    addressHome: null,
    profession: null,
    incomes: null,
    id: 0
  },
};

export const FormComponent: React.FC<FormComponentProps> = (props = defaultProps) => {
  const router = useRouter();
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    defaultValues: {
      ...props.values,
    },
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    reset(props.values);
  }, [props.values, reset]);

  const onSubmit = (data: FormState) => {
    props.updateActions(data);
    router.push('/');
  }

  const handleCancel = async () => { 
    router.push('/');
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg"
      >
        <h3 className='text-3xl font-semibold mb-4'>Creación de usuario</h3>
        <div className='flex justify-between'> 
          <div className="m-2 w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">ID</label>
            <input
              {...register('id')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.id ? 'border-red-500' : ''}`}
              placeholder="ID"
              type="number"
            />
            {errors.id && <p className="text-red-500 text-xs italic">{errors.id.message as string}</p>}
          </div>
          <div className="m-2 w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <input
              {...register('firstName')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ? 'border-red-500' : ''}`}
              placeholder="Jhon"
            />
            {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message as string}</p>}
          </div>
        </div>
        <div className='flex justify-between'> 
          <div className="m-2 w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input
              {...register('lastName')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.lastName ? 'border-red-500' : ''}`}
              placeholder="Doe"
            />
            {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message as string}</p>}
          </div>
          <div className="m-2 w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Birthday</label>
            <input
              {...register('birthday')}
              type="date"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.birthday ? 'border-red-500' : ''}`}
              placeholder="Birthday"
            />
            {errors.birthday && <p className="text-red-500 text-xs italic">{errors.birthday.message as string}</p>}
          </div>
        </div>
        <div className='flex justify-between'> 
          <div className="m-2 w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <select
              {...register('gender')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.gender ? 'border-red-500' : ''}`}
            >
              <option value="">Selecciona el género</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender.message as string}</p>}
          </div>
          <div className="m-2 w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Cellphone</label>
            <input
              {...register('cellphone')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cellphone ? 'border-red-500' : ''}`}
              placeholder="2222 2222"
            />
            {errors.cellphone && <p className="text-red-500 text-xs italic">{errors.cellphone.message as string}</p>}
          </div>
        </div>
        <div className='flex justify-between'> 
          <div className="m-2 w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Home Phone</label>
            <input
              {...register('homePhone')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.homePhone ? 'border-red-500' : ''}`}
              placeholder="2222 2222"
            />
            {errors.homePhone && <p className="text-red-500 text-xs italic">{errors.homePhone.message as string}</p>}
          </div>
          <div className="m-2 w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address Home</label>
            <input
              {...register('addressHome')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.addressHome ? 'border-red-500' : ''}`}
              placeholder="Address Home"
            />
            {errors.addressHome && <p className="text-red-500 text-xs italic">{errors.addressHome.message as string}</p>}
          </div>
        </div>
        <div className='flex justify-between'> 
        <div className="m-2 w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Profession</label>
          <select
            {...register('profession')}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.profession ? 'border-red-500' : ''}`}
          >
            <option value="">Selecciona una profesión</option>
            {professions.map((profession, index) => (
              <option key={index} value={profession}>
                {profession}
              </option>
            ))}
          </select>
          {errors.profession && <p className="text-red-500 text-xs italic">{errors.profession.message as string}</p>}
        </div>
          <div className="m-2 w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Incomes</label>
            <input
              {...register('incomes')}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.incomes ? 'border-red-500' : ''}`}
              placeholder="Incomes"
            />
            {errors.incomes && <p className="text-red-500 text-xs italic">{errors.incomes.message as string}</p>}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <input
            type="submit"
            className="bg-blue-500 transition hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value="Guardar"
          />
          <button
            type="button"
            onClick={props.clearAction}
            className="bg-gray-500 transition hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
          >
            Limpiar
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 transition hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
