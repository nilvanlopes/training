const listaSalario = [
    { id: 1, nome: 'pyu', salario: 2000 },
    { id: 2, nome: 'daniels', salario: 1500 },
]
export default function Listas() {
    return listaSalario.map((item) => {
        return (
            <div key={item.id}>
                <h4>{item.nome} : {item.salario}</h4>
            </div>
        )
    }
    )
};
