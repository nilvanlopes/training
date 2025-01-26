import { HistoryContainer } from "./styles";

const History = ({ value }) => {
    return (
        <HistoryContainer>
            <input disabled value={value} />
        </HistoryContainer>
    );
}

export default History;
