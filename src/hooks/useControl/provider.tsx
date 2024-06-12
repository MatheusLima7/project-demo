import React, { ReactElement } from 'react';
import ControlContext from './context';
import useControl from '.';

const ControlProvider = ({ children }: any): ReactElement => {
  const control = useControl();

  return (
    <ControlContext.Provider value={control}>
      {children}
    </ControlContext.Provider>
  );
};

export default ControlProvider;
