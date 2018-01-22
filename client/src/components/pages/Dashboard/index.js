import React from 'react';

import { Grid, Menu, Segment } from 'semantic-ui-react';
import NavMenu from '../../nav/dashboard/NavMenu';
import Routes from './Routes';

const Dashboard = ({ match }) => (

    <Grid className={"contentArea"}>
        <Grid.Column width={4} className={"sideMenu"}>

                <NavMenu />
        </Grid.Column>

        <Grid.Column stretched width={12} className={"mainArea"}>
            <Segment>
                <Routes />
            </Segment>
        </Grid.Column>
    </Grid>

);

export default Dashboard;