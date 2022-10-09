import coursesApi from "../api.json"
import Card from "./Card"
const Dashboard = () => {
    console.log(coursesApi.results)
    return (
        <div className="pt-20">
            <h1 className="bg-blue-500 text-white">Courses:</h1>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
            {coursesApi.results.map((data) => (
                <Card
                    course_id={data.course_id}
                    name={data.name}
                    org={data.org}
                    start_display={data.start_display}
                    image={data.media.image.raw}
                    short_description={data.short_description}
                    blocks_url={data.blocks_url}
                />
            ))}
            </div>
            <div className="bg-blue-600"></div>
        </div>
    )
}

export default Dashboard