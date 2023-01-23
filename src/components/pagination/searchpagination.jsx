import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../../lib/axios";

function SearchPagination(){
    const [posts, setPosts] = useState([]);
    const [loading, SetLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState();

    useEffect(()=>{
        const fetchPosts = async () => {
            SetLoading(true);
            const res = await baseURL.get('/post/postlist')
            setPosts(res.data)
            SetLoading(false);
        }
        fetchPosts();
    },[])


    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = currentPage - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const numPages = Math.ceil(total / limit);

    const paginate = pageNum => setCurrentPage(pageNum);

    return(
        <div>
            <nav>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    &lt;
                </button>
                {Array(numpages)
                    .fill()
                    .map((_,i) => (
                        <button key={i+1} onClick={()=>setPage(i+1)} aria-current={page === i + 1 ? "page" : null}>
                            {i+1}
                        </button>
                    ))
                }
                <button onClick={() => setPage(page+1)} disabled={page === numPages}>
                    &gt;
                </button>
            </nav>
        </div>
    )
}

export default SearchPagination