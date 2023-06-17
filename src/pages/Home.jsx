import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
const Home = () => {
    // Criando state que armazenará os posts da API
    const [posts, setPosts] = useState([]);

    // Função de busca na API
    const getPosts = async (url) => {
        // Realizando requisição na API
        const response = await fetch(url);
        // Convertendo os dados da resposta para json
        const data = await response.json();
        setPosts(data)
    }

    // Executando a função getPosts através de useEffect
    useEffect(() => {
        const url ="http://localhost:3000/posts";
        getPosts(url);
    }, [])
    return (
        <div className="home">
            <h1>Últimos posts</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.titulo}</h2>
                    <p>{post.corpo}</p>
                    <Link className="btn" to={`/posts/${post.id}`}>
                        Ler mais
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default Home;
// material icon theme 
