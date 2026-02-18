import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter"

function App() {

  return (
    <>
      <div className="flex justify-center">
          <div className="min-w-4/5 mx-4 my-8 flex flex-col">

            <h1 className="text-3xl">Character Counter</h1>

            <p className="my-2">Post a short bio (max 100 characters)</p>
            
            {/* Usage Example: Default usage with a custom limit */}
            <CharacterCounter minWords={25} maxWords={100} targetReadingTime={0} />

          </div>
      </div>

    </>
  )
  
}

export default App
