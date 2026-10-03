import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';

function App() {
	return (
		<>
			<Navbar />

			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
