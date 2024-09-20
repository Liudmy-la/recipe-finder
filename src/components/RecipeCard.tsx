import { Heart, HeartPulse, Soup } from "lucide-react";
import ErrorBoundary from "./ErrorBoundary";
import { useEffect, useState } from "react";

interface Recipe {
	label: string;
	image: string;
	yield: number;
	cuisineType: string[];
	healthLabels: string[];
}

interface RecipeCardProps {
	recipe: Recipe;
}
  
function getTwoValuesFromArray(arr: any) {
	return arr.length >= 2 ? [arr[0], arr[1]] : arr.slice(0, 2); 
}

export default function RecipeCard({recipe}: RecipeCardProps) {
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
		const isRecipeInFavorites = favorites.some((fav: any) => fav.label === recipe.label);
		setIsFavorite(isRecipeInFavorites);
	}, [recipe.label]);

	function toggleFavorite() {
		let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

		if (isFavorite) {
			favorites = favorites.filter((fav: any) => fav.label !== recipe.label);
			setIsFavorite(false);
		} else {
			favorites.push(recipe);
			setIsFavorite(true);
		}

		localStorage.setItem('favorites', JSON.stringify(favorites));
	}

	const twoRecipeLabels = getTwoValuesFromArray(recipe.healthLabels) || [];

	return (
		<ErrorBoundary>
			<div className="flex flex-col rounded-md bg-[#A1D6B2] overflow-hidden p-3 relative hover:shadow-2xl hover:shadow-lime-300">
				<a 
					href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
					target="_blank"
					className="relative h-32"
				>
					<div className="skeleton absolute inset-0" />
					<img 
						src={recipe.image} alt="recipe image"
						className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-400"
						onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
							e.currentTarget.style.opacity = '1';
							const previousSibling = e.currentTarget.previousElementSibling as HTMLElement | null;
							if (previousSibling) {
								previousSibling.style.display = 'none';
							}
						}}
					/>

					<div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
						<Soup size={"16"} /> {recipe.yield} Serving(s)
					</div>

					<div 
						onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
							e.preventDefault();
							toggleFavorite();
						}}
						className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer items-center"
					>
						<Heart size={"24"} className={`${isFavorite ? 'fill-red-500' : ''} hover:fill-red-500 hover:text-red-500`} />
					</div>
				</a>

				<div className="flex mt-1">
					<p className="font-bold tracking-wide">{recipe.label}</p>
				</div>
				<p className="my-2">
					{recipe.cuisineType?.[0]?.charAt(0).toUpperCase() + recipe.cuisineType?.[0]?.slice(1)} Kitchen
				</p>

				<div className="flex gap-2 mt-auto">
					{ twoRecipeLabels.map((label: string, index: number) => (
							<div key={index} className="flex gap-1 bg-[#fcffcc] items-center p-1 rounded-md">
								<HeartPulse size={16}/>
								<span className="text-sm tracking-tighter font-semibold">{label}</span>
						</div>
						))
					}
				</div>
			</div>
		</ErrorBoundary>
	)
}
