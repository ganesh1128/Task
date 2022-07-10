import './App.css';
import LongMenu from './mobile';
import CarouselRatio from './mobileContent';
import LabTabs from './Tabs';

function App() {
  return (
    <div className="App">
      <LabTabs></LabTabs>
      <LongMenu className="longMenu"></LongMenu>
      <CarouselRatio className="carouselRatio"></CarouselRatio>
      
    </div>
  );
}

export default App;
