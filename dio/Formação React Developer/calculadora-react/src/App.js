import Input from './components/Input';
import Button from './components/Button';
import History from './components/History';
import * as math from 'mathjs';
import { Container, Content, Row } from './styles';
import { FaBackspace, FaDivide, FaMinus, FaPercent, FaPlus, FaTimes } from 'react-icons/fa';
import { FaPlusMinus } from 'react-icons/fa6';
import { useState } from 'react';
const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [history, setHistory] = useState('');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    if (!isFinite(number)) {
      setHistory(prevHistory => `${prevHistory}${currentNumber}${number}`);
      setCurrentNumber('');
    } else {
      setCurrentNumber(prev => `${prev}${number}`);
      setOperation('');
    }
  }
  const handleClear = () => {
    setCurrentNumber('')
  }
  const handleClearAll = () => {
    setCurrentNumber('')
    setHistory('')
  }
  const handleClearLastDigit = () => {
    const removedlast = currentNumber.slice(0, -1);
    setCurrentNumber(removedlast)
  }
  const evaluate = () => {
    if (operation !== '') {
      console.log(operation);
      return;
    }
    let updatedHistory = `${history}${currentNumber}`;
    if (!isFinite(updatedHistory.charAt(updatedHistory.length - 1))) { updatedHistory = updatedHistory.slice(0, -1); }
    setHistory(updatedHistory);
    const result = math.evaluate(updatedHistory);
    setCurrentNumber(result);
    setOperation('=');
  }
  return (
    <Container>
      <Content>
        <History value={history} />
        <Input value={currentNumber} />
        <Row>
          <Button label={<FaPercent />} />
          <Button label='CE' onClick={handleClear} />
          <Button label='C' onClick={handleClearAll} />
          <Button label={<FaBackspace />} onClick={handleClearLastDigit} />
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')} />
          <Button label='8' onClick={() => handleAddNumber('8')} />
          <Button label='9' onClick={() => handleAddNumber('9')} />
          <Button label={<FaDivide />} onClick={() => handleAddNumber('/')} />
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')} />
          <Button label='5' onClick={() => handleAddNumber('5')} />
          <Button label='6' onClick={() => handleAddNumber('6')} />
          <Button label={<FaTimes />} onClick={() => handleAddNumber('*')} />
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')} />
          <Button label='2' onClick={() => handleAddNumber('2')} />
          <Button label='3' onClick={() => handleAddNumber('3')} />
          <Button label={<FaMinus />} onClick={() => handleAddNumber('-')} />
        </Row>
        <Row>
          <Button label={<FaPlusMinus />} />
          <Button label='0' onClick={() => handleAddNumber('0')} />
          <Button label='.' onClick={() => handleAddNumber('.')} />
          <Button label={<FaPlus />} onClick={() => handleAddNumber('+')} />
        </Row>
        <Row>
          <Button label='=' onClick={evaluate} />
        </Row>
      </Content>
    </Container >
  );
}

export default App;
