import { AppProps } from 'next/app';
import Layout from "@/app/layout";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <main className="flex-1 p-6">
                <section className="flex flex-col md:flex-row gap-6 items-center justify-center">
                    <div className="w-full md:w-1/2">
                        <img
                            alt="Profile Picture"
                            className="w-full h-auto rounded-full"
                            height="500"
                            src="/moi.jpg"
                            style={{
                                aspectRatio: "500/500",
                                objectFit: "cover",
                            }}
                            width="500"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Bonjour, je m'appelle Sontag Thomas</h2>
                        <p className="text-lg text-gray-400">
                            Je suis développeur en informatique. Actuellement en alternance chez Be Activ IT, je suis également étudiant en BUT informatique à l'IUT de Lens.
                            <br></br><br></br>
                            Au cours de ma formation, j'ai acquis une solide base en développement logiciel et j'ai eu l'opportunité de mettre en pratique mes connaissances sur des projets concrets.
                            <br></br><br></br>
                            J'ai également eu l'occasion de travailler en équipe et de développer mes compétences en communication. Je suis passionné par l'informatique et j'aimerais continuer à apprendre et à me développer dans ce domaine passionnant.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
