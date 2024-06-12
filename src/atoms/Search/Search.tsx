import { Alert, TextField } from '@mui/material';
import React from 'react';

import { Wrapper } from './Search.styles';
import useSearch from './useSearch';
import DataList from '../DataList';
import useDataList from '../DataList/useDataList';

const Search = () => {
  const { data } = useDataList();
  const { onChange } = useSearch();
  return (
    <>
      <Wrapper>
        <TextField
          onChange={onChange}
          fullWidth
          label="Ex: Restaurante"
          variant="outlined"
        />

        {data?.length ? (
          <DataList />
        ) : (
          <Alert severity="info">informe acima o segmento para continuar</Alert>
        )}
      </Wrapper>
    </>
  );
};

export default Search;
