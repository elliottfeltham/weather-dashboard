"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const DarkModeToggle = () => {
	const mounted = useSyncExternalStore(
		subscribe,
		() => true,
		() => false,
	);
	const { theme, resolvedTheme, setTheme } = useTheme();

	if (!mounted) return null;

	return (
		<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
			{resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	);
};

export default DarkModeToggle;
