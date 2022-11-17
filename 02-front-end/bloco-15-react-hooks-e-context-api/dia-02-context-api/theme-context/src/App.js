import Footer from './components/Footer';
import Header from './components/Header';
import ThemeProvider from './context/ThemeProvider';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className={`app`}>
        <Header />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
