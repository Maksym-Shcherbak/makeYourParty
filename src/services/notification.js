import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toastOptions = {
  position: 'top-right',
  autoClose: 3000,
  width: '460px',
  svgSize: '220px',
  fontSize: '16px',
};

export const toastSuccess = (message) => toast.success(message, toastOptions);

export const toastError = (message) => toast.error(message, toastOptions);
