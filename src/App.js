import DesktopLayout from './Desktop/DesktopLayout';
import MobileLayout from './Mobile/MobileLayout';
import './App.css';

function App() {
  const isMobile = window.innerWidth <= 500;

  return (
    <>
      {
        !isMobile ? <DesktopLayout /> : <MobileLayout />
      }
    </>

  )
}

export default App;
