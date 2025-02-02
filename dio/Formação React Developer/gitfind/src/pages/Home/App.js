import Header from "./../../components/Header/index";
import background from "./../../assets/image.png";
import "./styles.css";
import SearchBar from "../../components/SearchBar";
import SeparationBar from "../../components/SeparationBar";
import Profile from "../../components/Profile";
import RepositoryData from "../../components/RepositoryData";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="conteudo">
				<img src={background} className="background" alt="logo do github" />
				<div className="info">
					<SearchBar />
					<Profile />
					<SeparationBar />
					<div className="repolist">
						<h2>Repositórios</h2>
						<RepositoryData />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
