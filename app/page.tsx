"use client";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MyApproach from "@/components/MyApproach";
import RecentProjects from "@/components/RecentProjects";
import {FloatingNav} from "@/components/ui/FloatingNav";
import {navItems} from "@/data";
import Image from "next/image";
import {FaHome} from "react-icons/fa";

export default function Home() {
    return (
        <main className="relative bg-zinc-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} className="hidden md:flex" />
                <Hero />
                <Grid />
                <RecentProjects />
                <Clients />
                <Experience />
                <MyApproach />
                <Footer />
            </div>
        </main>
    );
}
