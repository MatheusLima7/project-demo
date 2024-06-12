import { useContext } from 'react';
import ControlContext from '../../hooks/useControl/context';

export default () => {
  const control = useContext(ControlContext);

  return {
    selected: control.selected,
  };
};
