function Contact() {
	const contacts = [
		{
			name: 'Email',
			value: 'hugohaddenn@gmail.com',
			link: 'mailto:hugohaddenn@gmail.com',
		},
		{
			name: 'GitHub',
			value: 'hhaddenn',
			link: 'https://github.com/hhaddenn',
		},
		{
			name: 'LinkedIn',
			value: 'Hugo Hadden',
			link: 'https://www.linkedin.com/in/hugoahadden/',
		},
	];

	return (
		<section id="contact">
			<div className="mx-auto max-w-6xl px-6">
				<p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
					Contact
				</p>
				<h2 className="max-w-xs text-4xl font-bold tracking-tight">
					Where to find me
				</h2>
				<p className="mt-4 text-lg text-muted-foreground">
					Want to talk, collaborate, or just say hi?
				</p>
				<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
					{contacts.map((contact) => (
						<a
							key={contact.name}
							href={contact.link}
							className="block border-b py-4">
							<span className="block text-sm text-muted-foreground">
								{contact.name}
							</span>

							<span className="block text-lg text-muted-foreground transition-colors hover:text-foreground">
								{contact.value}
							</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default Contact;
