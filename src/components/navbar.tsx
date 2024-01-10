import Link from "next/link";
import { JSX, SVGProps } from "react";
import {Project} from "@/components/component/project";

export default function Component() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow">
            <div className="flex items-center space-x-4">
                <MountainIcon className="h-6 w-6" />
                <h1 className="text-lg font-semibold text-white">Sontag Thomas</h1>
            </div>
            <nav className="space-x-4">
                <Link legacyBehavior href="/">
                    <a className="text-white">Accueil</a>
                </Link>
                <Link legacyBehavior href="/competence">
                    <a className="text-white">Mes compétences</a>
                </Link>
                <Link legacyBehavior href="/project">
                    <a className="text-white">Mes projets</a>
                </Link>
            </nav>
        </header>
    );
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}
