import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
};

let id = 0;
function createData( temp, BP, HR, BreathFreq, Lactat) {
    id += 1;
    return { id, temp, BP, HR, BreathFreq, Lactat };
}

const data = [
    createData(35, 159, 6.0, 24, 4.0),
    createData(36, 237, 9.0, 37, 4.3),
    createData(39, 262, 16.0, 24, 6.0),
    createData(51, 305, 3.7, 67, 4.3),
    createData(42, 356, 16.0, 49, 3.9),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Patient id</TableCell>
                        <TableCell align="right">Temperature</TableCell>
                        <TableCell align="right">Blood Pressure</TableCell>
                        <TableCell align="right">Heart rate</TableCell>
                        <TableCell align="right">Breathing frequency</TableCell>
                        <TableCell align="right">Lactat</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => (
                        <TableRow key={n.id}>
                            <TableCell component="th" scope="row">
                                {n.id}
                            </TableCell>
                            <TableCell align="right">{n.temp}</TableCell>
                            <TableCell align="right">{n.BP}</TableCell>
                            <TableCell align="right">{n.HR}</TableCell>
                            <TableCell align="right">{n.BreathFreq}</TableCell>
                            <TableCell align="right">{n.Lactat}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);