import ProjectCard from '@/components/ProjectCard';
import financeAppImage from '@/assets/FinanceApp.png';
import placeholderImage from '@/assets/Placeholder.png';

function Projects() {
	const projects = [
		{
			img: financeAppImage,
			title: 'Finance App',
			description: 'A web application to manage your finances',
			technologies: [
				'React',
				'Django',
				'PostgreSQL',
				'Redis',
				'Celery',
				'Docker',
			],
			github: 'https://github.com/hhaddenn/financeWebApp',
			demo: 'https://finance.hugo-hadden.com',
		},
		{
			img: placeholderImage,
			title: 'Recipe App',
			description: 'A web application to manage your recipes',
			technologies: ['Still to be decided'],
			github: null,
			demo: null,
		},
	];

	return (
		<section id="projects" className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
					Projects
				</p>
				<h2 className="mt-3 text-4xl font-bold tracking-tight">
					Things I've built and problems I've enjoyed solving.
				</h2>
				<div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-6">
					{projects.map((project) => (
						<ProjectCard
							key={project.title}
							img={project.img}
							title={project.title}
							description={project.description}
							technologies={project.technologies}
							github={project.github}
							demo={project.demo}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
