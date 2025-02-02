import { useContext } from "react";
import "./styles.css";
import { UserContext } from "../../pages/Home/UserContext";
const Button = ({ text }) => {
	const { user, setProfileData, setRepoData } = useContext(UserContext);
	async function handleClick() {
		const apiCallUser = await fetch(
			`https://api.github.com/users/${user.current.value}`
		);
		const userData = await apiCallUser.json();

		const apiCallRepo = await fetch(
			`https://api.github.com/users/${user.current.value}/repos`
		);
		const repoData = await apiCallRepo.json();

		setProfileData({
			profileImage: userData.avatar_url,
			username: userData.name,
			user: `@${userData.login}`,
			description: userData.bio,
		});

		console.log(repoData);

		setRepoData(repoData);
	}
	return <button onClick={handleClick}>{text}</button>;
};

export default Button;
