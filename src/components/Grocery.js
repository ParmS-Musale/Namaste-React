const Grocery = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Grocery List</h1>
            <ul className="list-disc list-inside bg-white shadow-md rounded-lg p-6">
                <li className="text-lg text-gray-700 mb-2">Apples</li>
                <li className="text-lg text-gray-700 mb-2">Milk</li>
                <li className="text-lg text-gray-700">Bread</li>
            </ul>
        </div>
    )
}

export default Grocery;
