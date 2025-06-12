import React from "react";

import { SunIcon } from "lucide-react";
import { MoonIcon } from "lucide-react";

type HeaderComponentProps = {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
};

const Header = ({ toggleDarkMode, isDarkMode }: HeaderComponentProps) => {
	return (
		<header className="flex flex-row w-full justify-between m-6 p-6 items-center border rounded-2xl shadow-xs shadow-white">
			<span className="text-xl font-bold">
				Hello, welcome to <em>the weather</em>
			</span>
			<div className="mr-20 border rounded-full p-2">
				{isDarkMode ? (
					<SunIcon onClick={toggleDarkMode} size={20} />
				) : (
					<MoonIcon onClick={toggleDarkMode} size={20} />
				)}
			</div>
		</header>
	);
};

export default Header;
