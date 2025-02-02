import { UserContext } from "../../pages/Home/UserContext";
import "./styles.css";
import { useContext } from "react";

const Profile = () => {
	const { profileData } = useContext(UserContext);
	if (!profileData) return null;
	return (
		<div className="profile">
			<div className="image">
				<img src={profileData.profileImage} alt="imagem de perfil do Github" />
			</div>
			<div className="name_and_description">
				<div className="name">
					<h2>{profileData.username}</h2>
					<p>{profileData.user}</p>
				</div>
				<div className="description">
					<p>{profileData.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
