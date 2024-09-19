import { Search } from "lucide-react"
import RecipeCard from "../components/RecipeCard"


type Props = {}

export default function HomePage({}: Props) {
	return (
		<div className="bg-[#fcfbf2] p-10 flex-1">
			<div className="max-w-screen-lg mx-auto">
				<form>
					<label className="input shadow-md flex items-center gap-2">
						<Search size={"24"} />
						<input 
							className="text-sm md:text-md grow"
							placeholder="What do you want to cook today?"
						/>
					</label>
				</form>

				<h1 className="font-bold text-3xl md:text-5xl mt-4">
					Recommended Recipes
				</h1>
				<p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
					Popular Choices
				</p>

				<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
					<RecipeCard />
					<RecipeCard />
					<RecipeCard />
					<RecipeCard />
				</div>
			</div>
		</div>
	)
}

