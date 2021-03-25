import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Photo from '../Assets/App-Icon.png';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import {ReactComponent as MyChat} from '../Assets/Chat.svg'
import {ReactComponent as MyExit} from '../Assets/exit.svg'
import {ReactComponent as MyExpenses} from '../Assets/Expenses.svg';
import {ReactComponent as MyHome} from '../Assets/Home.svg'
import {ReactComponent as MyReports} from '../Assets/Reports.svg'
import {ReactComponent as MyUserInfo} from '../Assets/User-Info.svg'
import {ReactComponent as MyIncomes} from '../Assets/Income.svg'
import clsx from 'clsx';
import DashboardComponent from './Dashboard';
import Expenses from './Expenses';
import Income from './Income';
import Reports from './Reports';
import Chats from './Chats';
const drawerWidth=240;
var messages=0;
var notifications=0; 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
      backgroundColor:"#473A42", 
      boxShadow:"0px 0px 0px 0px",

      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor:"#473A42", 
    boxShadow:"0px 0px 0px 0px",
    color:"white",
    border: "0 0 0 0",

  },
  drawerOpen: {
    backgroundColor:"#473A42", 
    boxShadow:"0px 0px 0px 0px",
    color:"white",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor:"#473A42", 
    boxShadow:"0px 0px 0px 0px",
    color:"white",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    backgroundColor:"#473A42", 
    boxShadow:"0px 0px 0px 0px",

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    color: "inherit",
    margin: "0px 0px 0px 0px"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontWeight: 'bold'
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 100,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(20),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      '&:hover':{
        width: '30ch'
      }
    },
      '&:focus': {
        width: '40ch'
      },
     
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  listStyle:{
    marginBottom: "250px",
    marginTop:"20px",
  },
  listItemStyle:{
    marginBottom: "20px",
    marginTop: '20px',
  }
  
}));
function Copyright() {
  return (
    <Typography variant="body2" style={{color:"white", fontWeight: 'bold', fontSize: '14px', lineHeight: '17px'}}>
      
      {new Date().toLocaleTimeString()}
      {'.'}
    </Typography>
  );
}

export default function Header() {
  const classes = useStyles();
  const theme=useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [header, setHeader]=React.useState('Dashboard')
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
      <MenuItem onClick={handleMenuClose}> <Link to='/signup' style={{color: 'black', textDecoration:"none"}}> Profile</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}> <Link to='/signup' style={{color: 'black', textDecoration:"none"}}>My account</Link></MenuItem>
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={messages} color="secondary" variant='dot'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={notifications} color="secondary" variant='dot'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const searchElement =(
    <>
    <div className={classes.search}>
    <div className={classes.searchIcon}>
      <SearchIcon />
    </div>
    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
    />
  </div>
 
  </>
  );
  function renderSearch(){
    switch(header){
      case "Dashboard": return searchElement;
    }
  }

    function renderComponents(){
      console.log(header);
      switch(header){
        case "Dashboard": return <DashboardComponent/>
        case "Income": return <Income/>
        case "Expenses": return <Expenses/>
        case "Chats": return <Chats/>
        case "Reports": return <Reports/>

      }
    }
  return (
    <div className={classes.grow}>

      <AppBar className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
           
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            
          >
           <Badge variant="dot" badgeContent={4}><img src={Photo}/></Badge>
            
          </IconButton>
          
          <Typography className={classes.title} variant="h6" noWrap>
            {header}
          </Typography>
          {renderSearch()}
             
  <div className={classes.grow} />
  <div className={classes.sectionDesktop}>
  <Copyright/>
    <IconButton aria-label="show 0 new mails" color="inherit">
      <Badge badgeContent={10} color="purple" variant="dot">
        <MailIcon />
      </Badge>
    </IconButton>
    <IconButton aria-label="show 0 new notifications" color="inherit">
      <Badge badgeContent={notifications} color="purple" variant='dot'>
        <NotificationsIcon />
      </Badge>
    </IconButton>
    <IconButton
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  </div>
  <div className={classes.sectionMobile}>
    <IconButton
      aria-label="show more"
      aria-controls={mobileMenuId}
      aria-haspopup="true"
      onClick={handleMobileMenuOpen}
      color="inherit"
    >
      <MoreIcon />
    </IconButton>
  </div>

        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} color="inherit">
            <ChevronRightIcon /> 
          </IconButton>
        </div>
        
        <List className={classes.listStyle}>
          {['Dashboard', 'Income',  'Expenses','Reports', 'Chats'].map((values, index) => (
            <ListItem button key={values} onClick={()=>(setHeader(values))} className={classes.listItemStyle}>
              <ListItemIcon>{index === 0 && <MyHome/>} {index === 1 && <MyExpenses/>} {index ===2 && <MyIncomes/>} {index === 3 && <MyReports/>} {index === 4 && <Badge badgeContent={4} variant="dot"><MyChat/></Badge>}</ListItemIcon>
              <ListItemText primary={values}/>
            </ListItem>
          ))}
        </List>
        
        <List>
          {['Profile', 'Logout'].map((values, index) => (
            <ListItem button key={values} onClick={()=>(setHeader(values))} classes={classes.listItemStyle}>
              <ListItemIcon>{index===0 && <MyUserInfo/>} {index===1 && <MyExit/>} </ListItemIcon>
              <ListItemText primary={values} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      {renderComponents()}
      {renderMobileMenu}
      {renderMenu} 

      </div>
   
  );
}
