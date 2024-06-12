import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import React from 'react';
import useDataList from './useDataList';

const DataList = () => {
  const { data, onClick } = useDataList();
  return (
    <List>
      {data.map((item: { id: string; descricao: string }) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton onClick={() => onClick(item)}>
            <ListItemText primary={item.descricao} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default DataList;
