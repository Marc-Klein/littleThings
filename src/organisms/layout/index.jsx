import React from "react";
import Footer from "../footer";
import Header from "../header";
import styled from "@emotion/styled";

const CenteredMain = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<CenteredMain>{children}</CenteredMain>
			<Footer />
		</>
	);
};

export default Layout;
