import React from 'react';
import {Form} from "react-bootstrap";

type InputElement = HTMLInputElement | HTMLTextAreaElement;

interface TextFieldProps {
	onChange?: (newValue: string) => void;
	placeholder?: string;
	autoFocus?: boolean;
	name?: string;
	type?: string;
	textarea?: boolean;
	className?: string;
	size?: "sm" | "lg" | undefined;
	icon?: string;
	id?: string;
	disabled?: boolean;
	value?: string;
	autoComplete?: string;
	defaultValue?: string | any;
	style?: any;
	rows?: number
}

const TextField = React.forwardRef<InputElement, TextFieldProps>(
	({
		 onChange,
		 className,
		 size,
		 type,
		 placeholder = "",
		 icon,
		 defaultValue,
		 style,
		 disabled,
		 id,
		 rows,
		 ...rest
	 }, ref) => {
		return (
			<Form.Control
				as="textarea"
				id={id}
				disabled={disabled}
				className={className}
				style={style}
				rows={rows || 3}
				onChange={(e) => onChange && onChange(e.target.value)}
				value={defaultValue}
				placeholder={placeholder}
			/>
		)
	}
);
export default TextField;