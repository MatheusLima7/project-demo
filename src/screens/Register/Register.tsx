import React, { useContext } from 'react';
import Header from '../../atoms/Header';
import Select from '../../atoms/Select';
import ControlContext from '../../hooks/useControl/context';
import { Wrapper } from './Register.styles';
import Search from '../../atoms/Search';
import Footer from '../../atoms/Footer';

const Register = () => {
  const control = useContext(ControlContext);
  return (
    <Wrapper>
      <Header
        title="Segmento da Empresa"
        subtitle="Confirme o segmento que sua empresa atua para personalizarmos sua
        experiência em nosso aplicativo."
      />

      {control.edit ? <Search /> : <Select label="Segmento Selecionado:" />}

      <Footer />
    </Wrapper>
  );
};

export default Register;
