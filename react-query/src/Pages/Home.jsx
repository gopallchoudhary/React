import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-1 my-[30vh] w-full">
            <button
                className="text-white bg-blue-700 w-fit rounded-md px-4 py-2 shadow-md mx-auto"
                onClick={() => navigate("/products")}
            >
                Products
            </button>
            <button
                className="text-white bg-blue-700 w-fit rounded-md px-4 py-2 shadow-md mx-auto"
                onClick={() => navigate("/paginated")}
            >
                Paginated
            </button>
        </div>
    );
};

export default Home;
