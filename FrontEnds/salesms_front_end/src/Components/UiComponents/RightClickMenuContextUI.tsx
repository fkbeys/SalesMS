import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';


interface model {
    objA: JSX.Element | JSX.Element[];
}

const RightClickMenuContextUI = (props: model) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <div onContextMenu={handleContextMenu}>

            {props.objA}

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
            >
                <MenuItem onClick={handleCloseMenu}>Menu Item 1</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Menu Item 2</MenuItem>
            </Menu>
        </div>
    );
}

export default RightClickMenuContextUI;
