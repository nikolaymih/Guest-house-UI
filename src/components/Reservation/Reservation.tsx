import React from 'react';
import axios from "axios";
import {Button} from "react-bootstrap";
import {Form, Formik, FormikValues} from "formik";

import {mainValForm} from "../../validation";
import InputField from "../Formik/InputField";
import {notifyError, notifySuccess} from "../ToastNotifications";

const API_URI = import.meta.env.DEV ? import.meta.env.VITE_API_DEV : import.meta.env.VITE_API_PROD;

const Reservation = () => {
	const [isFormChecked, setIsFormChecked] = React.useState<boolean>(false);
	const [loading, setLoading] = React.useState<boolean>(false);

	const handleSubmit = async (values: FormikValues, {resetForm}: any) => {
		setLoading(true);
		try {
			await axios.post(`${API_URI}/request`, {
				...values
			});

			notifySuccess('Успешно попълнена форма, очаквайте да се свържем с вас!');
		} catch (e) {
			if (e instanceof Error) {
				notifyError(e.message);
			}
		} finally {
			setIsFormChecked(false);
			resetForm({});
			setLoading(false);
		}
	}

	return (
		<section className="main-form d-flex justify-content-center m-auto">
			<Formik
				initialValues={{fullName: '', email: '', phone: '', subject: '', message: ''}}
				validationSchema={mainValForm}
				onSubmit={handleSubmit}
			>
				<Form className="shadow card pt-4 pb-5 p-3 w-100">
					<InputField type="text"
								placeholder="Вашите имена"
								name="fullName"
								style={{marginTop: '1rem'}}
					/>
					<InputField type="email"
								placeholder="Вашият имейл"
								name="email"
								style={{marginTop: '1rem'}}
					/>
					<InputField type="text"
								placeholder="Вашият телефон"
								name="phone"
								style={{marginTop: '1rem'}}
					/>
					<InputField type="text"
								placeholder="Тема"
								name="subject"
								style={{marginTop: '1rem'}}
					/>

					<InputField type="textarea"
								placeholder="Съобщение"
								name="message"
								style={{marginTop: '1rem'}}
					/>
					<div
						className="d-flex flex-column flex-md-row align-items-start align-items-md-center mt-3">
						<input className="mb-md-3" type="checkbox" checked={isFormChecked}
							   onChange={() => setIsFormChecked(prevState => !prevState)}/>
						<p className="text-start m-0 ms-md-2 mb-3">С натискане на "Изпрати" се съгласявам
							данните ми да бъдат обработени.</p>
					</div>
					<Button disabled={!isFormChecked || loading} type="submit">Изпрати</Button>
				</Form>
			</Formik>
		</section>
	);
};

export default Reservation;