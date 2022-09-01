import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.component";

const Layout = () => {
  	return (
		<div className="">
			<header className="bg-[#1b2226]/50 backdrop-filter backdrop-blur-lg z-50 fixed top-0 w-full">
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
			<footer className="mt-20">

			</footer>
		</div>
	);
};

export default Layout;
