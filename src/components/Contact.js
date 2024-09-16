const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-xl">
                Have any questions? Feel free to reach out to us! We're here to help.
            </p>

            <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                        placeholder="Your Name"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                        placeholder="Your Email"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                        id="message"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                        rows="4"
                        placeholder="Your Message"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
