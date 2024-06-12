import { useContext } from 'react';
import ControlContext from '../../hooks/useControl/context';

const useButton = () => {
  const control = useContext(ControlContext);

  const handleClick = () => {
    control.setEdit(true);
    control.clearData();
  };

  return {
    handleClick,
  };
};

export default useButton;
