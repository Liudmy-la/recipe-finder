import { Heart } from "lucide-react"
import ErrorBoundary from "../components/ErrorBoundary"
import RecipeCard from "../components/RecipeCard"

export default function FavoritesPage() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    return (
        <ErrorBoundary>
            <div className="bg-[#ffecdb] flex-1 p-10 min-h-screen">
                <div className="max-w-screen-lg mx-auto">
                    <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

                    { !favorites || favorites.length < 1
                        ? (
                            <div className="h-[80vh] flex flex-col items-center gap-4 py-10">
                                <p className="text-2xl text-center px-10">
                                    There are no saved recipes here. Go to the Home page and mark the most interesting recipes as {' '} 
                                    <Heart size={"20"} className='inline-flex items-center fill-red-500' />
                                </p>
                                <img src="/404.jpg" alt="404 image" className="h-3/4"/>
                            </div>
                        )
                        : ( 
                            <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                                { favorites.map((recipe: any, index: number) => (
                                    <RecipeCard key={index} recipe={recipe}/>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
        </ErrorBoundary>
    )
}