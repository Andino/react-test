import * as yup from 'yup';
import professions from '@/generic-lists/professions.json';

export const formSchema = yup.object().shape({
  id: yup.number().required('ID es requerido').positive('ID debe ser positivo').integer('ID debe de ser un entero'),
  firstName: yup.string().matches(/^[a-zA-Z]+$/, 'First Name debe contener solo letras').required('First Name es requerido'),
  lastName: yup.string().matches(/^[a-zA-Z]+$/, 'Last Name debe contener solo letras').required('Last Name es requerido'),
  birthday: yup.string().required('Birthday es requerido'),
  gender: yup.string().required('Gender es requerido'),
  cellphone: yup.string().matches(/^\d{8}$/, 'Cellphone tiene que contener 8 digitos').required('Cellphone es requerido'),
  homePhone: yup.string().matches(/^\d{8}$/, 'HomePhone tiene que contener 8 digitos').required('Home Phone es requerido'),
  addressHome: yup.string().required('Address Home es requerido'),
  profession: yup.string().oneOf(professions, 'Profesión invalida').required('Profession es requerido'),
  incomes: yup
    .string()
    .matches(/^\d{1,5}\.\d{2}$/, 'Incomes solo puede ser un valor con formato decimal #####.##')
    .required('Incomes es requerido'),
});