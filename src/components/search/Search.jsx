import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import SearchPagination from "../pagination/searchpagination";
import Pagination from "../pagination/pagination";
import Lists from "../boards/lists/Lists";
import Searchtab from "./Searchtab";

function Search(){
    const[keyword, setKeyWord] = useState("");
    const [searchData, setSearchData] = useState([]);
    const params = useParams;

    useEffect(() => {
        async function fetchData(){
            const result = await axios.get(
                "/post/search?keyword=" + params.word
            );
            console.log(result.data.result);
            setSearchData(result.data.result);
        }
        fetchData();
    }, [])

    {searchData.map((post) => {
        return(
            <>
                {/* <ul>
                    <li key={post.id}>{post.content}</li>
                </ul> */}
                {/* <div post={post} key={post.id} getMutation="getSearch" /> */}



                {/* <Lists content={post.content.split(",")[0]}/> */}


                
                {/* <Pagination total={5} limit={5} page={10} setPage={setPage} /> */}

            </>
        )
    })}

    // return(
    //     <>
    //         <div>
    //             <div className="search_title">
    //                 {searchData.length === 0? (<strong>검색 결과가 없습니다</strong>) : (
    //                     <strong>{`${searchData}에 대한 검색 결과입니다`}</strong>
    //                 )}
    //             </div>
    //             <div className="">

    //             </div>
    //         </div>
    //     </>
    // )
}
export default Search;