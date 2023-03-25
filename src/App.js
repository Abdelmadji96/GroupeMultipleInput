import logo from './logo.svg';
import './App.css';
import MultiInput from './Components/Common/MultiInput';
import { useState } from 'react';

function App() {
  const [titule, setTitule] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(undefined);

  const [payload, setPayload] = useState([]);

  const addMethod = () => {
    const newObject = { titule, price, description, image }
    setPayload(oldArray => [...oldArray, newObject]);
    resetState();
  }

  const removeMethod = (title) => {
    const newPayload = payload.filter((item) => item.titule !== title);
    setPayload(newPayload);
  }

  const resetState = () => {
    setTitule('');
    setPrice('');
    setDescription('');
    setImage(undefined);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MultiInput
          groupeTitle='groupeTitle'
          titule={titule}
          setTitule={setTitule}
          price={price}
          setPrice={setPrice}
          description={description}
          setDescription={setDescription}
          image={image}
          setImage={setImage}
          payload={payload}
          addMethod={addMethod}
          removeMethod={removeMethod}
        />
      </header>

    </div>
  );
}

export default App;
