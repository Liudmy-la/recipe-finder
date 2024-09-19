import { Heart, HeartPulse, Soup } from "lucide-react"


export default function RecipeCard() {
	return (
		<div className="flex flex-col rounded-md bg-[#ffe9cc] overflow-hidden p-3 relative">
			<a href="#" className="relative h-32">
				<img 
					src="/1.jpg" alt="recipe image"
					className="rounded-md w-full h-full object-cover cursor-pointer"
				/>

				<div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
					<Soup size={"16"} /> 4 Servings
				</div>

				<div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer items-center">
					<Heart size={"20"} className="hover:fill-red-500 hover:text-red-500"/>
				</div>
			</a>

			<div className="flex mt-1">
				<p className="font-bold tracking-wide">Pasta Italiana</p>
			</div>
			<p className="my-2">Pasta Farfalla</p>

			<div className="flex gap-2 mt-auto">
				<div className="flex gap-1 bg-[#fcffcc] items-center p-1 rounded-md">
					<HeartPulse size={16}/>
					<span className="text-sm tracking-tighter font-semibold">With gluten</span>
				</div>
				<div className="flex gap-1 bg-[#fcffcc] items-center p-1 rounded-md">
					<HeartPulse size={16}/>
					<span className="text-sm tracking-tighter font-semibold">Vegeterian</span>
				</div>
			</div>
		</div>
	)
}
