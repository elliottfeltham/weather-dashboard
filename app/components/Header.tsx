import React from "react";
import { Search } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
	return (
		<header className="flex flex-row w-11/12 justify-between my-6 p-6 items-center border rounded-2xl shadow-xs shadow-white">
			<span className="text-xl font-bold">
				Hello, welcome to <em>the weather</em>
			</span>
			<div className="flex flex-auto items-center border rounded-2xl mx-6 p-2">
				<Search size={20} />
				<span className="text-gray-400">Search City Name...</span>
			</div>
			<div>
				<DarkModeToggle />
			</div>
		</header>
	);
};

export default Header;
