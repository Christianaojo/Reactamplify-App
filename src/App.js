import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div>
    <Welcome to OpenReplay />
    My App
    </div>
  );
}

export default withAuthenticator(App, true);
