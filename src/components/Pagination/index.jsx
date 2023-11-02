import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from "./pagination.module.scss";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/slices/filteredSlice'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fe5f1e',
    },
   
  },
});

const PaginationBlock = () => {

  const dispatch = useDispatch()
  return (
    <div className={styles.root}>
      <ThemeProvider theme={theme}>
        <Stack spacing={3}>
          <Pagination
            count={3}
            color="primary"
            size="large"
            onChange={(e, page) => dispatch(setCurrentPage(page))}
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default PaginationBlock;
