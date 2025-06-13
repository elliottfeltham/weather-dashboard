"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
			{resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	);
};

export default DarkModeToggle;
