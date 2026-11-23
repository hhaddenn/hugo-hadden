import ProjectCard from "@/components/ProjectCard";
import financeAppImage from "@/assets/FinanceApp.png";
import placeholderImage from "@/assets/Placeholder.png";

function Projects() {
	const projects = [
		{
			img: financeAppImage,
			title: "Finance App",
			description:
				"Track your accounts and transactions in one place, organised by category.",
			status: "done",
			technologies: [
				"React",
				"Django",
				"PostgreSQL",
				"Redis",
				"Celery",
				"Docker",
			],
			github: "https://github.com/hhaddenn/financeWebApp",
			demo: "https://finance.hugo-hadden.com",
		},
		{
			img: placeholderImage,
			title: "Ticktask",
			description:
				"Manage your projects and tasks on a kanban board, and track the time spent on each one.",
			status: "in-progress",
			technologies: ["React", "Django", "PostgreSQL", "Docker"],
			github: "https://github.com/hhaddenn/ticktask",
			demo: null,
		},
		{
			img: placeholderImage,
			title: "Pawtrait",
			description:
				"Turn a photo into a graphite, ink or watercolour drawing, sketched stroke by stroke by a cat's paw.",
			status: "in-progress",
			technologies: ["React", "Canvas API"],
			github: "https://github.com/hhaddenn/pawtrait",
			demo: null,
		},
	];

	return (
		<section id="projects" className="py-24">
			<div className="mx-auto max-w-6xl px-6">
				<p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
					Projects
				</p>
				<h2 className="mt-3 text-4xl font-bold tracking-tight">
					Things I've built and problems I've enjoyed solving.
				</h2>
				<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
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
