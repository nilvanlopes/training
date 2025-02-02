import { useContext } from "react";
import { UserContext } from "../../pages/Home/UserContext";
import SeparationBar from "../SeparationBar";
import "./styles.css";
const RepositoryData = () => {
	const { repoData } = useContext(UserContext);
	if (!repoData) return null;
	return (
		<>
			{repoData.map((repo) => (
				<div className="repositorydata">
					<div className="repo_name_and_description">
						<h3>{repo.name}</h3>
						<p>{repo.description}</p>
					</div>
					<SeparationBar />
				</div>
			))}
		</>
	);
};

export default RepositoryData;
