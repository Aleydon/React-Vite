import { useContext } from 'react';
import { Text } from './components/Text';
import { context } from './context/appProvider';

export default function App() {
	const { phrase } = useContext(context);

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-300 ">
			<h1 className="text-4xl text-bold">Hello World</h1>

			<Text>&darr;</Text>

			<a
				className="cursor-pointer underline"
				href="https://github.com/Aleydon"
				target="_blank"
				aria-label="github.com/Aleydon"
				rel="noreferrer"
			>
				{phrase}
			</a>
		</div>
	);
}
