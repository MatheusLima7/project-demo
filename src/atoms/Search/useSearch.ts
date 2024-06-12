import { useContext } from 'react';
import ControlContext from '../../hooks/useControl/context';

const useSearch = () => {
  const control = useContext(ControlContext);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    control.setTextFilter(event.target.value);
  };

  return { onChange };
};

export default useSearch;
