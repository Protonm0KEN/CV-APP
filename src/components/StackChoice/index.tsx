import ReactIcon from "../../assets/icons/react.png";
import BackendIcon from "../../assets/icons/backend.png";
import FullStackIcon from "../../assets/icons/full-stack.png";
import MobileDevIcon from "../../assets/icons/mobile-dev.png";
import JavaScript from "../../assets/icons/js.png";
import Typescript from "../../assets/icons/typescript.png";
import "./StackChoice.scss";
const StackChoice = () => {
    return (
        <div className="StackChoice">
            <h1 className="StackChoice__title">ВЫБЕРИТЕ СТЭК</h1>
            <div className="StackChoice__stacks">
                <div className="stacks-frontend">
                    <img src={ReactIcon} alt="ReactIcon" />
                    <p>FRONTEND</p>
                </div>
                <div className="stacks-backend">
                    <img src={BackendIcon} alt="" />
                    <p>BACKEND</p>
                </div>
                <div className="stacks-fullstack">
                    <img src={FullStackIcon} alt="" />
                    <p>FULLSTACK</p>
                </div>
                <div className="stacks-mobile/IOS">
                    <img src={MobileDevIcon} alt="" />
                    <p>MOBILE DEV</p>
                </div>
            </div>
            <div className="StackChoice__slider">
                <div className="slider__div JavaScript">
                    <img src={JavaScript} alt="" />
                </div>
                <div className="slider__div Typescript">
                    <img src={Typescript} alt="" />
                </div>
            </div>
        </div>
    );
};

export default StackChoice;
