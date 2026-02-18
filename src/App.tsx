import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter"

function App() {

  return (
    <>
      <CharacterCounter minWords={10} maxWords={100} targetReadingTime={0} />
    </>
  )
  
}

export default App
