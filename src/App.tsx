import './App.css';
import { MuiButtons } from './components/buttons/Buttons';
import { ButtonToggle } from './components/buttons/ToggleButton';
import MuiTypography from './components/typography/MuiTypography';

function App() {
  return (
    <div className="App">
      <h1>Hi, This is the Demo React MUI Project</h1>
      <p>More changes coming soon....</p>
      <MuiTypography />
      <hr />
      <MuiButtons />
      <hr />
      <ButtonToggle />
    </div>
  );
}

export default App;