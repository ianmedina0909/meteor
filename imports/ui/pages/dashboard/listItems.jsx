import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Contacts from '@material-ui/icons/Contacts';
import Sms from '@material-ui/icons/TextSms';
import Inbox from '@material-ui/icons/Inbox';
import Send from '@material-ui/icons/Send';
import Create  from '@material-ui/icons/Create';
import Notes  from '@material-ui/icons/Notes';
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Create />
      </ListItemIcon>
      <ListItemText primary="Compose" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Inbox />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Send  />
      </ListItemIcon>
      <ListItemText primary="Sent" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Sms />
      </ListItemIcon>
      <ListItemText primary="Sms" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Contacts />
      </ListItemIcon>
      <ListItemText primary="Contacts" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <Notes />
      </ListItemIcon>
      <ListItemText primary="Notes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Task" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);