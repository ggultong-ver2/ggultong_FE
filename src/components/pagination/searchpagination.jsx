import axios from "axios";
import { useEffect, useState } from "react";

function SearchPagination(){
    const [posts, setPosts] = useState([]);
    const [loading, SetLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState();

    useEffect(()=>{
        const fetchPosts = async () => {
            SetLoading(true);
            const res = await axios.get('/api/post/postlist')
            setPosts(res.data)
            SetLoading(false);
        }
        fetchPosts();
    },[])


    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = currentPage - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => setCurrentPage(pageNum);

    return(
        <div>
            
        </div>
    )
}

export default SearchPagination