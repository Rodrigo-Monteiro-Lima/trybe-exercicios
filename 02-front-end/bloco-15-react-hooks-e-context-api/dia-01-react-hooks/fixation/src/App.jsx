import { useState } from 'react'

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState();

  return (
    <form>
      <label htmlFor="name"> Nome completo:
        <input type="text" id="name" name='name' value={name}  onChange={({ target }) => setName(target.value)}/>
      </label>
      <label htmlFor="age"> Idade:
        <input type="number" name="age" id="age" value={age}  onChange={({ target }) => setAge(target.value)}/>
      </label>
      <label htmlFor="city"> Cidade:
        <input type="text" id="city" name='city' value={city}  onChange={({ target }) => setCity(target.value)}/>
      </label>
      <section className='radios'>
        <label htmlFor="fundamentals">
          <input 
            type="radio" 
            name="module" 
            id="fundamentals" 
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}/> Fundamentos
        </label>
        <label htmlFor="frontend">
          <input 
          type="radio" 
          name="module" 
          id="frontend"
          value="Front-end"
          checked={module === 'Front-end'}
          onChange={({ target }) => setModule(target.value)} 
          /> Front-end
        </label>
        <label htmlFor="backend">
          <input 
          type="radio" 
          name="module" 
          id="backend" 
          value="Back-end"
          checked={module === 'Back-end'}
          onChange={({ target }) => setModule(target.value)}
          /> Back-end
        </label>
        <label htmlFor="science">
          <input 
          type="radio" 
          name="module" 
          id="science"
          value="Ciência da Computação"
          checked={module === 'Ciência da Computação'}
          onChange={({ target }) => setModule(target.value)}
          /> Ciência da Computação        
        </label>
      </section>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App
