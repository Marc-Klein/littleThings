import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "../menu-list";
import { useState } from "react";

const Header = () => {
	const [isOpen, setOpen] = useState("");

	const handleOpenMenu = event => {
		setOpen(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setOpen(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						noWrap
						variant="h6"
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						Lil Projects
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
							onClick={handleOpenMenu}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							keepMounted
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							id="menu-appbar"
							anchorEl={isOpen}
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(isOpen)}
							sx={{
								display: { xs: "block", md: "none" },
							}}
							onClose={handleCloseMenu}
						>
							<MenuItem>
								<MenuList />
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						noWrap
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
					>
						Little Projects
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<MenuList />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;
