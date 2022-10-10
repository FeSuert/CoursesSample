const Header = () => {
    return(
        <nav role="navigation" className="bg-blue-700 py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">
                <div className="flex justify-between items-center">
                    <a href="/" className="font-bold text-xl text-white" title="edX">edX</a>
                </div>

                <div className="md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
                    <a href="/" className="p-1 lg:px-4 md:mx-2 text-white rounded hover:font-medium">Home</a>
                    <a href="/" className="p-1 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300">Courses</a>
                    <a href="/" className="p-1 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300">Programms & Degrees</a>
                    <a href="/" className="p-1 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300">Schools & Partners</a>
                    <a href="/" className="p-1 lg:px-4 md:mx-2 text-slate-200 rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-300">Contact</a>
                    <a href="/" data-testid="login" className="p-1 lg:px-4 md:mx-4 text-white text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
                    <a href="/" data-testid="signup" className="p-1 lg:px-4 md:mx-4 text-white text-center border border-solid border-blue-600 rounded hover:border-blue-200  transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
                </div>
            </div>
        </nav>
    )
}

export default Header