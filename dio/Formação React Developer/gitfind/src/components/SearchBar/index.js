import Button from "../Button";
import Input from "../Input";
import "./styles.css";

const SearchBar = () => {
	return (
		<div className="searchbar">
			<Input placeholder="@usuario" />
			<Button text="Buscar" />
		</div>
	);
};

export default SearchBar;
