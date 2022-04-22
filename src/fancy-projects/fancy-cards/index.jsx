import React, { useState } from "react";
import StyledBody from "../../organisms/body";
import styled from "@emotion/styled";
import Waterfall from "../fancy-cards/imgs/blake-verdoorn-cssvEZacHvQ-unsplash.jpg";
import SunsetCar from "../fancy-cards/imgs/jakob-rosen-HZXUBrOv8Ag-unsplash.jpg";
import Bicycle from "../fancy-cards/imgs/janosch-diggelmann-Uc6EeOLHkok-unsplash.jpg";
import Waves from "../fancy-cards/imgs/shifaaz-shamoon-9K9ipjhDdks-unsplash.jpg";
import Pyramids from "../fancy-cards/imgs/alex-azabache-MoonoldXeqs-unsplash.jpg";

const Container = styled.div`
	display: flex;
	width: 90vw;
`;

const Panel = styled.div`
	background-size: auto 100%;
	background-position: center;
	background-repeat: no-repeat;
	height: 80vh;
	border-radius: 50px;
	color: aliceblue;
	cursor: pointer;
	flex: 0.5;
	margin: 10px;
	position: relative;
	transition: flex 0.7s ease-in;
`;

const StyledHeading = styled.h3`
	font-size: 24px;
	position: absolute;
	bottom: 20px;
	left: 20px;
`;

const FancyCards = () => {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
		return setActive(!isActive);
	};
	return (
		<StyledBody>
			<Container>
				<Panel
					className={`${isActive ? "active" : ""}`}
					style={{ backgroundImage: `url(${Waterfall})` }}
					onClick={handleToggle}
				>
					<StyledHeading>Waterfall</StyledHeading>
				</Panel>
				<Panel
					className={`${isActive ? "active" : ""}`}
					style={{ backgroundImage: `url(${SunsetCar})` }}
					onClick={handleToggle}
				>
					<StyledHeading>Sunset Car</StyledHeading>
				</Panel>
				<Panel
					className={`${isActive ? "active" : ""}`}
					style={{ backgroundImage: `url(${Waves})` }}
					onClick={handleToggle}
				>
					<StyledHeading>Waves</StyledHeading>
				</Panel>
				<Panel
					className={`${isActive ? "active" : ""}`}
					style={{ backgroundImage: `url(${Bicycle})` }}
					onClick={handleToggle}
				>
					<StyledHeading>Bicycle</StyledHeading>
				</Panel>
				<Panel
					className={`${isActive ? "active" : ""}`}
					style={{ backgroundImage: `url(${Pyramids})` }}
					onClick={handleToggle}
				>
					<StyledHeading>Pyramids</StyledHeading>
				</Panel>
			</Container>
		</StyledBody>
	);
};

export default FancyCards;
