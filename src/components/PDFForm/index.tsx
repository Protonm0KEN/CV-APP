import "./PDFForm.scss";
const PDFForm = ({
    userFirstName,
    userLastName,
    position,
    technologies,
    autoBiography,
    image,
}) => {
    console.log(`PDFForm ${technologies}`);
    console.log(image);
    console.log(typeof image);
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
                    {technologies.map(lang => {
                        return <div key={lang}>{lang}</div>;
                    })}
                </div>
                <div className="bottom__right">
                    <img src={image} alt="" />
                    <p>О себе: {autoBiography}</p>
                </div>
            </div>
        </div>
    );
};

export default PDFForm;
