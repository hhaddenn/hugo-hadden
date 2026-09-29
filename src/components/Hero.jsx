import { Button } from '@/components/ui/button';
import profilePic from '@/assets/profile_pic.jpeg';

function Hero() {
	return (
		<section>
			<div className="grid min-h-[calc(100vh-64px)] grid-cols-1 items-center gap-12 mx-auto max-w-6xl px-6 lg:grid-cols-2">
				<div className="max-w-3xl">
					<p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
						Software Developer · Portugal
					</p>

					<h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
						Hi, I'm Hugo.
					</h1>

					<p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
						I like solving problems and building things.
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						<Button size="lg" asChild>
							<a href="#projects">See my work</a>
						</Button>

						<Button size="lg" variant="outline" asChild>
							<a href="#about">Get to know me</a>
						</Button>
					</div>
				</div>
				<div className="flex justify-left lg:justify-end">
					<img
						src={profilePic}
						alt="Hugo Hadden"
						className="w-full max-w-xs rounded-2xl"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
