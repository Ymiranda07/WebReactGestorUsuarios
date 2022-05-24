import { useState } from 'react';
import useForm from './hooks/useForm'

const App = () => {

  const [form, handleChange] = useForm({name: ''})

  return (
    <form>
      <input
        name='name'
        placeholder='Nombre'
        value={form.name}
        onChange={handleChange}
      />
      <input type='submit'/>
    </form>
  )
}

export default App;
