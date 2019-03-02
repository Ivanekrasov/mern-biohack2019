import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';
import styles from '../Layout/Layout';

class Dashboard extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Typography variant="h4" gutterBottom component="h2">
                    Input ur value
                </Typography>
                <div className={classes.tableContainer}>
                    <SimpleTable />
                </div>
                <Typography variant="h4" gutterBottom component="h2">
                    Stats
                </Typography>
                <Typography component="div" className={classes.chartContainer}>
                    <SimpleLineChart />
                </Typography>
            </main>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Dashboard;