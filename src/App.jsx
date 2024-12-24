// 1. Mastering React Functional Components and Axios with useEffect
// Task 1: Sign Up for API Key

import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

const publicKey = 'd3ee3ded50e57e5d9cace17c30b9d77a';
const hash = 'eb6d157b816ba0f4968b2350df82cc5e';

function App() {

  return (
    <div id="thumnails">
      <CharacterList />
    </div>
  )
}

export default App
export { publicKey, hash }
