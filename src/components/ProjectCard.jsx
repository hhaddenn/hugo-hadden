import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function ProjectCard({ img, title, description, technologies, github, demo }) {
	return (
		<Card className={'flex flex-col gap-4'}>
			<img src={img} alt={title} className="aspect-video object-cover w-full" />

			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className={'flex flex-wrap gap-2'}>
				{technologies.map((technology) => (
					<Badge key={technology} variant="outline">
						{technology}
					</Badge>
				))}
			</CardContent>
			<CardFooter className={'mt-auto flex gap-2'}>
				{github && (
					<Button asChild>
						<a href={github}>Github</a>
					</Button>
				)}
				{demo && (
					<Button asChild>
						<a href={demo}>Demo</a>
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}

export default ProjectCard;
