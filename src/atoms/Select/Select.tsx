import React from 'react';
import Text from '../Text';
import { SelectProps } from './Select.types';
import useSelect from './useSelect';
import EditButton from '../EditButton';

const Select = ({ label }: SelectProps) => {
  const { selected } = useSelect();

  return (
    <>
      <Text variant="label">{label}</Text>
      <EditButton text={selected?.descricao ?? 'Nenhum segmento selecionado'} />
    </>
  );
};

export default Select;
