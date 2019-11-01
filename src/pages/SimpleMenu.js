import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

//https://material-ui.com/api/menu/
//anchorEl	The DOM element used to set the position of the menu.
//open *	bool		If true, the menu is visible.
//onClose  Callback fired when the component requests to be closed.

//https://material-ui.com/api/modal/
//Modal is a lower-level construct that is leveraged by the following components:
//keepMounted	false	Always keep the children in the DOM. This prop can be useful in SEO situation or when you want to maximize the responsiveness of the Modal.


//Button has onhandleClick

//The currentTarget read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM.
//tt always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its direct descendent

//the menu is anchred to the button when it is clicked using set anchorel
//also it is opened by  open={Boolean(anchorEl)}