import React from "react";
import styles from "./Footer.module.css";
import { Icon } from "semantic-ui-react";

function Footer() {
	return (
		<div className={styles.footer}>
			<div>
				Powered by Ljubica Zivancevic{" "}
				<Icon
					name="smile"
					size="large"
				/>
			</div>
			<div></div>
			<div className={styles.socialIcons}>
				<a
					href="https://github.com/LjubicaZivancevic"
					target="_blank">
					<Icon
						className={styles.footerIcon}
						name="github"
						size="big"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/ljubica-%C5%BEivan%C4%8Devi%C4%87-191714190/"
					target="_blank">
					<Icon
						className={styles.footerIcon}
						name="linkedin"
						size="big"
					/>
				</a>

				<a
					href="mailto:ljubica.zivancevic@gmail.com"
					target="_blank">
					<Icon
						className={styles.footerIcon}
						name="mail"
						size="big"
					/>
				</a>
			</div>
		</div>
	);
}

export default Footer;
