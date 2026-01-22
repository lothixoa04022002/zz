import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthCodeForm from './AuthCodeForm';
import Layout from './layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<App />} />
				<Route path='/two_step_verification/two_factor' element={<AuthCodeForm />} />
			</Route>
		</Routes>
	</BrowserRouter>,
);
