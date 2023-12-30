import ReactIcon from "../../assets/icons/react.png";
import BackendIcon from "../../assets/icons/backend.png";
import FullStackIcon from "../../assets/icons/full-stack.png";
import MobileDevIcon from "../../assets/icons/mobile-dev.png";
import "./StackChoice.scss";
import ProgrammingLanguageChoice from "../ProgrammingLanguageChoice";
const StackChoice = ({
    state,
    func,
    selectStack,
    setSelectStack,
    isPdfState,
    technologies,
    setTechnologies,
}) => {
    console.log(`Stack Choice ${technologies}`);
    return (
        <div className={isPdfState ? "display_none" : StackChoice}>
            <h1 className="StackChoice__title">ВЫБЕРИТЕ СТЭК</h1>
            <div className="StackChoice__stacks">
                <div
                    onClick={() =>
                        setSelectStack({
                            frontend: !selectStack.frontend,
                            backend: false,
                            fullStack: false,
                            mobileDev: false,
                        })
                    }
                    className="stacks-frontend"
                >
                    <img src={ReactIcon} alt="ReactIcon" />
                    <p>FRONTEND</p>
                </div>
                <div
                    onClick={() =>
                        setSelectStack({
                            frontend: false,
                            backend: !selectStack.backend,
                            fullStack: false,
                            mobileDev: false,
                        })
                    }
                    className="stacks-backend"
                >
                    <img src={BackendIcon} alt="" />
                    <p>BACKEND</p>
                </div>
                <div
                    onClick={() =>
                        setSelectStack({
                            frontend: false,
                            backend: false,
                            fullStack: !selectStack.fullStack,
                            mobileDev: false,
                        })
                    }
                    className="stacks-fullstack"
                >
                    <img src={FullStackIcon} alt="" />
                    <p>FULLSTACK</p>
                </div>
                <div
                    onClick={() =>
                        setSelectStack({
                            frontend: false,
                            backend: false,
                            fullStack: false,
                            mobileDev: !selectStack.mobileDev,
                        })
                    }
                    className="stacks-mobile/IOS"
                >
                    <img src={MobileDevIcon} alt="" />
                    <p>MOBILE DEV</p>
                </div>
            </div>
            <ProgrammingLanguageChoice
                technologies={technologies}
                setTechnologies={setTechnologies}
                func={func}
                state={state}
                dataState={selectStack}
            />
        </div>
    );
};

export default StackChoice;
