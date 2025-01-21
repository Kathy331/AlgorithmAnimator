import { PathfindingProvider } from "./context/PathfindingContext"

function App() {

  return (
    <PathfindingProvider>
      <h1 className="text-3xl font-bold underline h-screen w-screen flex justify-center items-center bg-blue-200">
          Hello world!
      </h1>
    </PathfindingProvider>   

  )
}

export default App
