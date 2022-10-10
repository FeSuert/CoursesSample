
const Card = ({ course_id, name, org, start_display, image, short_description, blocks_url}) => {
    return(
    <div className="h-full container mx-auto p-6 hover:shadow-2xl max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <img className="object-cover h-48 w-96" src={image} alt={name} />
        <div className="p-5">
            <h5 data-testid="name" className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
        </div>
        <div className="inset-x-0 bottom-0">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{start_display}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{org}</span>
            <a data-testid="link" href={blocks_url} className="inline-flex items-center py-1 px-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </a>
        </div>
    </div>
    )
}

export default Card