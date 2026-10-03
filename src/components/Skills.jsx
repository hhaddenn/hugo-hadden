import { Badge } from '@/components/ui/badge';

function Skills() {
	const skills = [
		{
			title: 'Frontend',
			items: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
		},
		{
			title: 'Backend & APIs',
			items: ['Python', 'Django', 'Django REST Framework', 'REST APIs'],
		},
		{
			title: 'Data & Background Tasks',
			items: ['PostgreSQL', 'Redis', 'Celery'],
		},
		{
			title: 'DevOps & Deployment',
			items: ['Docker', 'Komodo', 'Git', 'GitHub Actions', 'CI/CD'],
		},
	];

	return (
		<section id="skills" className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
					Skills
				</p>

				<h2 className="mt-3 text-4xl font-bold tracking-tight">
					Technologies I work with.
				</h2>

				<div className="mt-10 grid gap-8 md:grid-cols-3">
					{skills.map((group) => (
						<div key={group.title} className="border-t pt-5">
							<h3 className="mb-4 text-lg font-semibold">{group.title}</h3>

							<div className="flex flex-wrap gap-2">
								{group.items.map((skill) => (
									<Badge key={skill} variant="outline">
										{skill}
									</Badge>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
