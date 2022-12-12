import { useFlags, withLDProvider } from 'launchdarkly-react-client-sdk';
import HelloWord from './HelloWord'; //We will add this code in the next step

function App() {
  const userDomain = userEmail.split('@').pop(),  
  const value = configCatClient.getValue(key, defaultValue, callback, userObject);


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
  const value = configCatClient.getValue(key, defaultValue, callback, countryObject);

  clientSideID: '6391d3615a5f060df9a4a991',
  countryObject:{
    country: 'india'
  },
  user: {
      "key": "example_user",
      "name": "Example user",
      "email": "User@example.com",
      custom: {country: countryObject},
      email: userEmail,
      country: country,

     }
})(App)