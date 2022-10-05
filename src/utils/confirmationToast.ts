import { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

const confirmationToast = (response: AxiosResponse['data']) => {
  const { name, favorite } = response;
  const toastStyle = {
    style: {
      color: '#0C1117',
      backgroundColor: favorite ? '#05fac9' : '#FF015B',
      fontSize: '12px',
    },
  };
  if (favorite) {
    return toast(`${name} added to favorites`, toastStyle);
  } else {
    return toast(`${name} removed from favorites`, toastStyle);
  }
};

export default confirmationToast;
