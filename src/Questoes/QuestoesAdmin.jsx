import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;

function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
class QuestoesAdmin extends React.Component {
  state = {
    value: 0,
  };
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {   
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell numeric>Ano</TableCell>
            <TableCell numeric>Numero</TableCell>
            <TableCell numeric>Módulo</TableCell>
            <TableCell numeric>Tipo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.calories}</TableCell>
                <TableCell numeric>{row.fat}</TableCell>
                <TableCell numeric>{row.carbs}</TableCell>
                <TableCell numeric>{row.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    )
  }
}

export default withStyles(styles)(QuestoesAdmin);