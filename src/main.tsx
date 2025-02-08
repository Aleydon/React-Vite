import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './index.css';
import App from './App';

import { AppProvider } from './context/appProvider';
import { NotFound } from './components/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '*',
		element: <NotFound />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	</React.StrictMode>
);
