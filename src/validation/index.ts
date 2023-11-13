import * as yup from 'yup';

const namesRegExp = /^[a-zA-Zа-яА-Я]+ [a-zA-Zа-яА-Я]+$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-а-яА-Я]{2,4}$/;
const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const mainValForm = yup.object().shape({
	fullName: yup.string()
		.required('Имената са задължителни.')
		.matches(namesRegExp, 'Въведете валиден формат на имената(Име, фамилия).'),
	email: yup.string()
		.required('Емейлът е задължителен.')
		.matches(emailRegex, 'Въведете валиден емейл формат.'),
	phone: yup.string()
		.required('Телефонът е задължителен!')
		.matches(phoneNumberRegex, 'Въведете валиден телефонен номер.'),
	subject: yup.string()
		.required('Липсва тема.')
		.min(3, 'Въведете поне три символа за тема.'),
	message: yup.string()
		.required('Въведете кратко описание.')
		.min(10, 'Въведте поне 10 символа.')
})
