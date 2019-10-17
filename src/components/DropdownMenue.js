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
  const [open, setOpen] = React.useState(false);
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
  return (
    <div className={classes.root}>
      <div style={{ height: '88px', width: '30px' }}>
        <Button
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {open === false ? (
            <img
              src={require('../images/openNav.png')}
              style={{ background: 'green' }}
              width="64px"
              alt="Ouvrir"
            />
          ) : (
            <img
              src={require('../images/closeNav.png')}
              style={{ background: 'green' }}
              width="64px"
              alt="Fermer"
            />
          )}
        </Button>

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
                  <MenuList style={{ background: 'green', width: '100%' }}>
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
