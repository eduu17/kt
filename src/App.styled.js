import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`
	color: #4a99f8;
	font-size: min(4rem, 9vw);
`;

export const BoxCounter = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	padding: 24px;
	background-color: #ffffff;
	border-radius: 32px;

	img {
		width: 167px;
	}

	.group-btns {
		display: flex;
		gap: 2rem;
	}
`;

export const Button = styled.button`
	border-radius: 5px;
	background: ${(props) => (props.disabled ? "#ccc" : "#4a99f8")};
	color: #ffff;
	font-size: min(1.3rem, 2.5vw);
	font-weight: 600;
	padding: 12px 20px;
	cursor: pointer;
`;
