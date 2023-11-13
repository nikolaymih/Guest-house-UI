import React from 'react';
import {useField, FieldConfig} from "formik";
import {Form, FormControlProps} from 'react-bootstrap';

interface InputFieldProps {
	type?: FormControlProps['type'];
	label?: string;
	focus?: boolean;
	onChange?: (v: any) => void;
	value?: string | number;
	placeholder?: string;
	style?: object;
	name: string
}

const InputField = ({
						type,
						focus,
						label,
						onChange = undefined,
						value = undefined,
						placeholder,
						...props
					}: InputFieldProps) => {
	const [field, {error, touched}] = useField(props);

	const handleChange = !!onChange ? onChange : field.onChange;
	const inputValue = !!value ? value : field.value;

	return (
		<Form.Group>
			{label && <Form.Label htmlFor={field.name}>{label}</Form.Label>}
			{type && type !== 'textarea' ? <Form.Control
				{...field}
				{...props}
				className="form-input-field"
				onChange={handleChange}
				value={inputValue}
				placeholder={placeholder}
				type={type}
				id={field.name}
			/> : (
				<Form.Control
					{...field}
					{...props}
					className="form-input-field"
					onChange={handleChange}
					value={inputValue}
					placeholder={placeholder}
					as="textarea"
					id={field.name}
				/>
			)
			}
			{error && touched && <div className="text-danger">{error}</div>}
		</Form.Group>

	);
};

export default InputField;