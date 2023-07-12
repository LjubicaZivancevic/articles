import React from "react";
import style from "./modal.module.css";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Modal(props) {
	return (
		<>
			<div className={style.modal}>
				<div
					data-testid="modalOverlay"
					className={style.overlay}
					onClick={() => props.setIsModalOpen(!props.isModalOpen)}></div>
				<div className={style.modalContent}>
					<div>
						<img
							alt="Article Image"
							src={props.urlToImage}
							className={style.modalImage}
						/>
						<div>
							<p>
								Published by <span>{props.author} </span>
								at {props.publishedAt}
							</p>
						</div>
					</div>
					<h1>{props.title}</h1>
					<p>{props.content}</p>
					<Button
						inverted
						size="big"
						color="blue">
						<a
							href={props.url}
							target="blank">
							See full article <Icon name="right arrow" />
						</a>
					</Button>
					<button
						data-testid="modalCloseButton"
						className={style.closeModal}
						onClick={() => props.setIsModalOpen(!props.isModalOpen)}>
						<Icon name="close" />
					</button>
				</div>
			</div>
		</>
	);
}

export default Modal;
