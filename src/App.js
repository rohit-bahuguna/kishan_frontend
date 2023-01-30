import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactInfo from './components/ContactInfo';
import Main from './components/Main';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/contactinfo/:number" element={<ContactInfo />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
