function Navbar() {
	return (
		<nav>
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<a
					href="#"
					className="font-bold text-muted-foreground hover:text-foreground"
				>
					Hugo Hadden
				</a>

				<div className="flex gap-8">
					<a
						href="#about"
						className="text-muted-foreground hover:text-foreground"
					>
						About
					</a>
					<a
						href="#projects"
						className="text-muted-foreground hover:text-foreground"
					>
						Projects
					</a>
					<a
						href="#contact"
						className="text-muted-foreground hover:text-foreground"
					>
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
