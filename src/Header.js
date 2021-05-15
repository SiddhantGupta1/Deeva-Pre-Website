import React,{useState} from 'react';
import './Header.css'
import DeevaLogo from './icons/deeva purple 1.svg'
import Menu from './icons/Union.svg'
import Search from './icons/Search.svg'
import Mic from './icons/Mic.svg'
import Cart from './icons/Hanger.svg'
import DownArrow from './icons/Down Arrow.svg'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

function Header() {

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: 'none',
      borderRadius: '100px',
      overflow: 'auto',
      width: '300px',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#784E08'
    },
  }));

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
      <header>
        
        <button onClick={handleOpen} className="menu"> 
          <img src={Menu} alt=""/> 
        </button>
              
        <img className="deevaLogo" src={DeevaLogo} alt=""/>
        <div className="search-bar">
          <img className="search" src={Search} alt=""/>
          <input className="searching" type="text" placeholder="Search" />
        </div>
        <button onClick={handleOpen} className="voice-search">
            <img src={Mic} alt=""/>
        </button>
        <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1>Coming Soon</h1>
          </div>
        </Fade>

      </Modal>
      <div style={{width:"32%", display:"flex",alignItems:"center", justifyContent:"space-evenly"}}>
          <button onClick={handleOpen} className="user">
            <p className="user-text">Hiii Ankush</p>
            <img className="downArrow" src={DownArrow} alt="" />
          </button>

          <button onClick={handleOpen} className="budget-store">
            <p className="budget-store-text">Budget Store</p>
            <img className="downArrow" src={DownArrow} alt="" />
          </button>

          <button onClick={handleOpen} className="content">
            <p className="content-text">Content</p>
            <img className="downArrow" src={DownArrow} alt=""/>
          </button>
              
          <button onClick={handleOpen} className="cart">
              <img src={Cart} alt=""/>
              <p className="cart-items">2</p>
          </button>
        </div>
      </header>
  );
}

export default Header;
