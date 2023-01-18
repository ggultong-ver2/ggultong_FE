import "../pages/reset.css"
import "../pages/style.css"

function WorldCup(){
    return(
        <>
        <div className="cup_container">
            <div className="cup_playing">
                <div className="play_text">
                    <h3>이번달 음식 월드컵</h3>
                    <button>하러가기</button>
                </div>
            </div>
            <div className="cup_ranking">
            <ul className="clearfix">
                <li>꿀통 유저 랭킹</li>
                <li>1위</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul>
        </div>

        </div>
        </>
    )
}
export default WorldCup