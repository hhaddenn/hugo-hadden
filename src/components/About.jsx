function About() {
	return (
		<section id="about" className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
					About
				</p>

				<div className="grid mt-10 lg:grid-cols-2 gap-12">
					<h2 className="max-w-xs text-4xl font-bold tracking-tight">A bit about me</h2>
					<div className="space-y-4">
						<p className="text-lg leading-relaxed text-muted-foreground">
							I enjoy programming because I like solving problems, especially
							when they involve logic, creativity, and finding effective
							solutions. I enjoy the challenge of turning an idea into something
							that works and understanding the reasoning behind the solutions I
							build. I’m also motivated by learning new technologies and
							discovering how they can be applied to different problems.
						</p>

						<p className="text-lg leading-relaxed text-muted-foreground">
							When I come across a problem, I usually start by making sure I
							understand what needs to be solved and what the main constraints
							are. I then break it down into smaller parts and explore possible
							ways of approaching it before deciding how to implement the
							solution. Throughout the process, I like to test my ideas, learn
							from what doesn’t work, and refine the solution as my
							understanding develops.
						</p>

						<p className="text-lg leading-relaxed text-muted-foreground">
							Outside of coding, I like to keep challenging my curiosity in
							different ways. I enjoy solving puzzles, listening to music, and
							reading, especially fantasy books. I also follow and play rink
							hockey, which is one of my favorite ways to spend my free time.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
