import { StackChoiceType } from "../../types/StackStype";
import "./PDFForm.scss";
import profileIcon from "../../assets/icons/profile.png"
const PDFForm = ({
    userFirstName,
    userLastName,
    position,
    technologies,
    description,
    image,
}: {
    userFirstName: string;
    userLastName: string;
    position: StackChoiceType;
    technologies: string[];
    description: string;
    image: string;
}) => {
    return (
        <div className="PDFForm">
            <div className="PDFForm__top">
                <h1 className="PDFForm__username">Имя: {userFirstName}</h1>
                <h2 className="PDFForm__lastname">Фамилия: {userLastName}</h2>
                <h3 className="PDFForm__position">
                    Позиция: {position.frontend && "Frontend"}{" "}
                    {position.backend && "Backend"}{" "}
                    {position.fullStack && "FullStack"}{" "}
                    {position.mobileDev && "MobileDev"}
                </h3>
                <h4 className="PDFForm__technologies"></h4>
            </div>
            <div className="PDFForm__bottom">
                <div className="bottom__left">
                    Технологии:
                    {technologies.map((lang: any) => {
                        return <div key={lang}>{lang}</div>;
                    })}
                </div>
                <div className="bottom__right">
                    <p>О себе: {description}</p>
                    <img src={image ? image : profileIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PDFForm;
