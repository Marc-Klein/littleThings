import React, {useState} from "react";
import StyledBody from "../../organisms/body";
import styled from "@emotion/styled";
import Waterfall from "../../fancy-projects/fancy-cards/imgs/blake-verdoorn-cssvEZacHvQ-unsplash.jpg"

const Container = styled.div`
	display: flex;
	width: 90vw;
`;

const Panel = styled.div`
	background-size: auto 100%;
	background-position: center;
	background-repeat: no-repeat;
	height:80vh;
	border-radius: 50px;
	color:aliceblue;
	cursor: pointer;
	flex: 0.5;
	margin: 10px;
	position: relative;
	transition: flex 0.7s ease-in;
`;

const FancyCards = () => {
	const [isActive, setActive] = useState("false")

	const handleToggle = ()=> {
		return setActive(!isActive);
	}

	<StyledBody>
		<Container>
			<Panel className={`${isActive ? "active" : ""}`} style={} onClick={handleToggle}/>
			<Panel className={`${isActive ? "active" : ""}`} style={} onClick={handleToggle}/>
			<Panel className={`${isActive ? "active" : ""}`} style={} onClick={handleToggle}/>
			<Panel className={`${isActive ? "active" : ""}`} style={} onClick={handleToggle}/>
			<Panel className={`${isActive ? "active" : ""}`} style={} onClick={handleToggle}/>
		</Container>
	</StyledBody>;
};

export default FancyCards;
