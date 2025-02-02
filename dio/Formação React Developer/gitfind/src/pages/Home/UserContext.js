import { createContext, useRef, useState } from "react";

// Criando o contexto
export const UserContext = createContext(); // Inicializando corretamente

// Criando o Provider para envolver os componentes
export const UserProvider = ({ children }) => {
	const user = useRef("");
	const [profileData, setProfileData] = useState();
	const [repoData, setRepoData] = new useState();

	return (
		<UserContext.Provider
			value={{ user, profileData, setProfileData, repoData, setRepoData }}
		>
			{children}
		</UserContext.Provider>
	);
};
