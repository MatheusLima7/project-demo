import axios from 'axios';
import { useState } from 'react';

const useControl = (): any => {
  const [edit, setEdit] = useState(false);
  const [textFilter, setText] = useState('');
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    descricao: 'Serviços de Beleza',
  });

  const setTextFilter = async (text: string) => {
    setText(text);
    await axios
      .get(
        `https://api-segmentos.touchone.com.br/api/v1/Segmento?Descricao=${text}&Page=1&PageSize=1`,
        {
          headers: {
            Domain: 'app.touchone.com.br',
          },
        }
      )
      .then((response) => {
        setData(response.data?.list ?? []);
      })
      .catch((error) => {
        console.error('Erro;', error);
      });
  };

  const clearData = () => {
    setData([]);
  };

  return {
    edit,
    setEdit,
    textFilter,
    setTextFilter,
    data,
    selected,
    setSelected,
    clearData,
  };
};

export default useControl;
