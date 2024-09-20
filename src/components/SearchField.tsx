import { Search } from "lucide-react";

interface SearchFieldProps {
    fetchRecipes: (searchQuery: string) => void;
}

export default function SearchField({fetchRecipes}: SearchFieldProps) {

	function handleSeachRecipe(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const input = e.currentTarget[0] as HTMLInputElement;
        fetchRecipes(input.value);
	}

	return (    
		<div className="sticky top-0 z-50 bg-[#fcfbf2] py-5">
			<form onSubmit={handleSeachRecipe}>
				<label className="input shadow-md flex items-center gap-2">
					<Search size={"24"} />
					<input 
						className="text-sm md:text-md grow"
						placeholder="What do you want to cook today?"
					/>
				</label>
			</form>
		</div>
	)
}