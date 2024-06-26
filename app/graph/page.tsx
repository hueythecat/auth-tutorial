
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
// import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Graph } from "@/components/ui/graph";

// import { LoginButton } from "@/components/auth/login-button";


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-500 
    bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 ">
       <div className="space-y-6 text-center ">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
        font.className
        )}>
        📊 Graph
        </h1>
        <p className="text-white text-lg">Graph dev page</p>
        <Graph  />
        <div>
            
            <Button variant="secondary" size="lg" >
              Something
            </Button>
   
            
        </div>
        </div>

      </main>
  );
}
