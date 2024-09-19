

type Props = {}

export default function FavoritesPage({}: Props) {
    const fav = false

    return (
        <div className="bg-[#fcf2f5] flex-1 p-10 min-h-screen">
            <div className="max-w-screen-lg mx-auto">
                <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

                {
                    !fav 
                    ? (
                        <div className="h-[80vh] flex flex-col items-center gap-4 py-10">
                            <p className="text-2xl text-center px-10">There are no saved recipes here. Go to the Home page and mark ♡ the most interesting recipes.</p>
                            <img src="/404.jpg" alt="404 image" className="h-3/4"/>
                        </div>
                    )
                    : (
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">

                        </div>
                    )
                }
            </div>
        </div>
    )
}