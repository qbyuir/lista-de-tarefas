import React from 'react'
import AddTask from './components/AddTask'
import Container from './components/Container'

const App = ()  => {
  return (
    
    <main>
      <h1 className='text-4xl text-center py-28 text-white drop-shadow-txt-shadow'>Lista de Tarefas</h1>
      <Container />
    </main>
  )
}

export default App