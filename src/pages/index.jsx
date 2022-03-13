import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="Little Projects" />
			</Head>
		</Layout>
	);
};

export default Page;
