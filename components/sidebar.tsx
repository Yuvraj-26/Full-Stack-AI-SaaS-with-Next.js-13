"use client";

// global imports
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

// cn library
import { cn } from "@/lib/utils";
import {
    Code,
    ImageIcon,
    LayoutDashboard,
    MessageSquare,
    Music,
    Settings,
    VideoIcon,
} from "lucide-react";


// font Montserrat using import
// and append to title
const montserrat = Montserrat ({
    weight: "600",
    subsets: ["latin"]
});

// Create an array to hold all routes before rendering routes
// array created that holds objects
const routes = [
    // Dashboard route
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    // Conversation route
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    // Image Generation route
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
    },
    // Video Generation route
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
    },
    // Music Generation route
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
    },
    // Code Generation route
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700",
    },
    // Settings route
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },
];


// sidebar styling and logo positioning
const Sidebar =() => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full
        bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex
                items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className={cn ("text-2xl font-bold", 
                    montserrat.className)}> 
                        Genius
                    </h1>
                </Link>
                    <div className="space-y-1">
                        {routes.map((route) => (
                            <Link
                                href={route.href}
                                key={route.href}
                                // styling with opacity and hover effect for each route
                                className="text-sm group flex p-3 w-full
                                justify-start font-medium cursor-pointer
                                hover: text-white hover:bg-white/10 rounded-lg
                                transition"
                            >
                                <div className="flex items-center flex-1">
                                    <route.icon className={cn("h-5 w-5 mr-3", 
                                    route.color)} />
                                    {route.label}
                                </div>
                            </Link>                        
                        ))} 
                    </div>
            </div>
        </div>
    );
}

export default Sidebar;