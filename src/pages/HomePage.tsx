
import RecipeCard from "../components/RecipeCard"
import { useEffect, useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import SearchField from "../components/SearchField";
import SkeletonList from "../components/SkeletonList";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

export default function HomePage() {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	async function fetchRecipes(searchQuery: string) {
		setLoading(true);
		setRecipes([]);

		try {
			const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`);
			const data = await res.json();
			setRecipes(data?.hits || []);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchRecipes("pasta");
	}, [])

	return (
		<ErrorBoundary>
			<div className="bg-[#fcfbf2] px-10 pb-10 flex-1">
				<div className="max-w-screen-lg mx-auto">
					<SearchField fetchRecipes={fetchRecipes} />

					<h1 className="font-bold text-3xl md:text-5xl">
						Recommended Recipes
					</h1>
					<p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
						Popular Choices
					</p>

					<div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
						{ loading 
							? <SkeletonList />
							: (	 recipes && recipes.length > 0 
									? recipes.map(({recipe}, index) => (
										<RecipeCard key={index} recipe={recipe} />
									))
									: <div>No recipes founded. Change the query text or Try later</div>
							)
						}
					</div>
				</div>
			</div>
		</ErrorBoundary>
	)
}

