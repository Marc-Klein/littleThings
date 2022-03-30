import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
	const [isOpen, setOpen] = useState(0);
	const [isClosed, setClosed] = useState(0);

	const handleOpen = event => {
		setOpen(event.currentTarget);
	};

	const handleClose = event => {
		setClosed(event.currentTarget);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar variant="dense">
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={handleOpen}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" color="inherit" component="div">
						Little Projects
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
