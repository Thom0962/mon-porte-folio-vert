import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <main className="flex-1 p-6">
                <section className="flex flex-col md:flex-row gap-6 items-center justify-center">
                    <div className="w-full md:w-1/2">
                        <Image
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
                        <h2 className="text-2xl font-bold mb-4">Bonjour, je m&apos;appelle Sontag Thomas</h2>
                        <p className="text-lg text-gray-400">
                            Je suis développeur en informatique. Actuellement en alternance chez Be Activ IT, je suis également étudiant en BUT informatique à l&apos;IUT de Lens.
                            <br></br><br></br>
                            Au cours de ma formation, j&apos;ai acquis une solide base en développement logiciel et j&apos;ai eu l&apos;opportunité de mettre en pratique mes connaissances sur des projets concrets.
                            <br></br><br></br>
                            J&apos;ai également eu l&apos;occasion de travailler en équipe et de développer mes compétences en communication. Je suis passionné par l&apos;informatique et j&apos;aimerais continuer à apprendre et à me développer dans ce domaine passionnant.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
