import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './DropDown.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen, setButton] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  console.log('open : ', open);
  return (
    <div className={classes.root}>
      <div style={{ height: '13px', width: '42px' }}>
        <div
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ width: '44px', height: '44px', background: 'green' }}
        >
          {open == false ? (
            <img
              src={require('../icons/menu.svg')}
              style={{ background: 'green', width: '50px', height: '54px' }}
            />
          ) : (
            <img
              src={require('../icons/Exitmenu.svg')}
              style={{ background: 'green', width: '50px', height: '57px' }}
            />
          )}
        </div>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          keepMounted
          transition
          disablePortal
          style={{ width: '100%' }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    <MenuItem onClick={handleClose}>
                      <Link className="Header-menu-item" to="/">
                        Accueil
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link className="Header-menu-item" to="/notre-groupement">
                        Notre groupement
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <Link className="Header-menu-item" to="/nos-partenaires ">
                        Nos partenaires
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <Link className="Header-menu-item" to="/nos-partenaires ">
                        Nos promotions
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      {' '}
                      <Link className="Header-menu-item" to="/nos-partenaires ">
                        Notre blog
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
