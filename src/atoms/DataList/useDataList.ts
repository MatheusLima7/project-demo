import { useContext } from 'react';
import ControlContext from '../../hooks/useControl/context';

const useData = () => {
  const control = useContext(ControlContext);

  const onClick = (item: any) => {
    control.setSelected(item);
    control.setEdit(false);
    control.clearData();
  };

  return { data: control.data, onClick };
};

export default useData;
