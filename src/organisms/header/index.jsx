import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
	//test
`;

const StyledHeader = styled.header`
	display: flex;
	height: 40px;
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: black;
	color: aliceblue;
`;

const Header = () => {
	return (
		<StyledHeader>
			<StyledNav data-test-id="navigation">
				<Link href="/">Home</Link>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
