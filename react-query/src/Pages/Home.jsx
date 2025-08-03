
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate("/products")}>Products</button>
        </div>
    )
}

export default Home