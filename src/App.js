import './App.css';
import Botton from './components/Botton.jsx';
import Display  from './components/Display.jsx';
import ClearBotton  from './components/ClearBotton.jsx';
import { useState } from 'react'; 
import { evaluate } from 'mathjs';

function App() {

	const [input, setInput] = useState('');

	const addInput = (value) => {
		setInput(input + value);
	}

	const result = () => {
		if(input){	
		 setInput(evaluate(input))
		}else{
			alert('Debes ingresar una operación')
		};
	}



	return(
		<div className='App'>
			<div className='calc-container'>
				<Display input ={input} />
				<div className='row'>
					<Botton handleClick={addInput}>1</Botton>
					<Botton handleClick={addInput}>2</Botton>
					<Botton handleClick={addInput}>3</Botton>
					<Botton handleClick={addInput}>+</Botton>
				</div>
				<div className='row'>
					<Botton handleClick={addInput}>4</Botton>
					<Botton handleClick={addInput}>5</Botton>
					<Botton handleClick={addInput}>6</Botton>
					<Botton handleClick={addInput}>-</Botton>
				</div>
				<div className='row'>
					<Botton handleClick={addInput}>7</Botton>
					<Botton handleClick={addInput}>8</Botton>
					<Botton handleClick={addInput}>9</Botton>
					<Botton handleClick={addInput}>*</Botton>
				</div>
				<div className='row'>
					<Botton handleClick={result}>=</Botton>
					<Botton handleClick={addInput}>0</Botton>
					<Botton handleClick={addInput}>.</Botton>
					<Botton handleClick={addInput}>/</Botton>
				</div>
				<ClearBotton handleClear ={ () => setInput('')} >
					Clear
				</ClearBotton>
			</div>
		</div>

	);
}

export default App;
