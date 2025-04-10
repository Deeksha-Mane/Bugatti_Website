import { FaHeart, FaCommentAlt } from "react-icons/fa";
import LiveCard from "./LiveCard";
import "../styles/LiveCard.css";
import "../styles/LiveCardSection.css";
import Img1 from "../assets/aesthetic-img-1.jpg";
import Img2 from "../assets/aesthetic-img-2.jpeg";
import Img3 from "../assets/aesthetic-img-3.jpg";
import Img4 from "../assets/aesthetic-img-4.jpg";
import Img5 from "../assets/aesthetic-img-5.jpg";
import Img6 from "../assets/aesthetic-img-6.jpg";

function LiveCardSection(){
    return(
        <div className="live-card-section">
            <LiveCard
            likes="165K"
            comments={300}
            image={Img1}
            />

            <LiveCard
            likes="97K"
            comments={208}
            image={Img2}
            />

            <LiveCard
            likes="130K"
            comments={245}
            image={Img3}
            />

            <LiveCard
            likes="64K"
            comments={172}
            image={Img4}
            />

            <LiveCard
            likes="189K"
            comments={440}
            image={Img5}
            />

            <LiveCard
            likes="20K"
            comments={137}
            image={Img6}
            />
        </div>
    );
}

export default LiveCardSection;