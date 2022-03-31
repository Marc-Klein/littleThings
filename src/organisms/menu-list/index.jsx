import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";

const MenuList = () => {
	return (
		<Box maxWidth={100}>
			<ListItem>
				<Link href="/">Home</Link>
			</ListItem>
			<ListItem>
				<Link href="#">About me</Link>
			</ListItem>
		</Box>
	);
};

export default MenuList;
