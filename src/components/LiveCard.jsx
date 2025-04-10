import { FaHeart, FaCommentAlt } from "react-icons/fa";
import "../styles/LiveCard.css";

let like_icon={
    position:"relative",
    bottom:"0",
    left:"0",
    fontWeight:"600",
    marginLeft:"5px",
}

let comment_icon={
    position:"relative",
    bottom:"0",
    left:"0",
    fontWeight:"600",
    marginLeft:"5px",
}

function LiveCard({likes,comments,image}) {
    return(
        <>
        <div className="live-card" style={{backgroundImage: `url(${image})`}}>
            <FaHeart color="red" style={like_icon}/>&nbsp;&nbsp;
            <span>{likes}</span>
            <FaCommentAlt color="gray" style={comment_icon}/>&nbsp;&nbsp;
            <span>{comments}</span>
        </div>
        </>
    );
}

export default LiveCard;