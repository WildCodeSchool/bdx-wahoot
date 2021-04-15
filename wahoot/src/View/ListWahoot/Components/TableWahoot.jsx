import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SupprimeModal from './SupprimeModal';
import PublicModal from './PublicModal';
import EditIconLink from './EditIcon';

const columns = [
  { id: 'id', label: 'ID'},
  { id: 'titre', label: 'Titre'},
  {
    id: 'statut',
    label: 'Statut'
  },
  {
    id: 'dateFin',
    label: 'Date fin'
  },
  
];

function createData(id, titre, statut, dateFin,modifications) {
  return { id, titre, statut, dateFin,modifications };
}

const rows = [
  createData(1, 'Javascript', 'Publié','17/07/2020'),
  createData(2, 'HTML', 'Publié','12/11/2020'),
  createData(3, 'CSS', 'Brouillon','22/01/2021'),
  createData(4, 'PHP', 'Brouillon','27/04/2021'),
  createData(5, 'Javascript', 'Publié','17/07/2020'),
  createData(6, 'HTML', 'Publié','12/11/2020'),
  createData(7, 'CSS', 'Brouillon','22/01/2021'),
  createData(8, 'PHP', 'Brouillon','27/04/2021'),

  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  icons: {
    display: "flex",
  }
});

const TableWahoot = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <h1>Liste des Wahoots</h1>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                  
                  align="center"
                >
                  Modifications
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                        
                      </TableCell>
                    );
                  })}
                  <TableCell align="center">
                    <div className={classes.icons}>
                    <EditIconLink /><PublicModal /><SupprimeModal />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}

export default TableWahoot;