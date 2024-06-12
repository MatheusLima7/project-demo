import React, { useContext } from 'react';

import { Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';

import { Row } from './Footer.styles';
import ControlContext from '../../hooks/useControl/context';

const Footer = () => {
  const control = useContext(ControlContext);
  return (
    <Row>
      {control.data.length === 0 && (
        <Button
          style={{ marginRight: 15 }}
          variant="outlined"
          startIcon={<ArrowBack />}
        >
          Voltar
        </Button>
      )}
      {control.edit ? null : (
        <Button
          onClick={() => console.log('selected item ==>', control.selected)}
          variant="contained"
          startIcon={<CheckCircleOutline />}
        >
          Finalizar Cadastro
        </Button>
      )}
    </Row>
  );
};

export default Footer;
