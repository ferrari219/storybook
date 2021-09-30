// import { ReactComponent as Colors } from '../assets/colors.svg';
import { ReactComponent as Colors } from '@assets/colors.svg';

const Button = ({ ...props }) => {
	console.log(Colors);
	return (
		<div>
			<Colors />
		</div>
	);
};

export default Button;
