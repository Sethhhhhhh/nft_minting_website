import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout.page";

// Routes
import routes from './routes';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{routes.map((route) => (
					<Route
						key={route.path}
						index={route.index}
						path={!route.index ? route.path : '/'}
						element={<route.element />}
					/>
				))}
			</Route>
		</Routes>
	);
};

export default App;
