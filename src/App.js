import { withLDProvider } from 'launchdarkly-react-client-sdk';
import HelloWord from './HelloWord'; //We will add this code in the next step

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <HelloWord />
       {/**/}
      </header>
    </div>
  );
}
// Update the export default to use your environment-specific client ID and a sample user:
export default withLDProvider({
  clientSideID: '6391d3615a5f060df9a4a991',

  user: {
      "key": "example_user",
      "name": "Example user",
      "email": "User@example.com",

     }
})(App)