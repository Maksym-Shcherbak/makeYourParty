import PropTypes from "prop-types";
import { StyledButton } from "./UserButton.styled";

const MainButton = ({ type = "button", onClick, title, disabled = false, propClass }) => {
	return (
		<StyledButton
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={propClass}
		>{title}
		</StyledButton>
	);
};

MainButton.propTypes = {
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	title: PropTypes.string.isRequired,
	propClass: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default MainButton;