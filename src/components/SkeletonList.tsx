export default function SkeletonList() { 
    return  (
        <>
            {[...Array(9)].map((_, index) => (
                <div key={index} className="flex w-65 flex-col gap-3 mb-6">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            ))}
        </>
    )
}