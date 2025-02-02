import { useContext } from "react";
import { UserContext } from "./../../pages/Home/UserContext";
import "./styles.css";
const Input = ({ placeholder }) => {
	const { user } = useContext(UserContext);
	return <input type="text" placeholder={placeholder} ref={user} />;
};
export default Input;
