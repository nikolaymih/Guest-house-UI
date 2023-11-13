import {toast, ToastOptions} from 'react-toastify';

const CLOSE_TIME = 5000; // milliseconds

export const notifySuccess = (message: string, options?: ToastOptions) => {
	toast.success(message, {
		autoClose: CLOSE_TIME,
		...options
	});
}

export const notifyError = (message: string, options?: ToastOptions) => {
	toast.error(message, {
		autoClose: CLOSE_TIME,
		...options
	});
}