import { languageType } from "../../../types/LanguageType";

const LanguagesListComponent = ({
    arr,
    twoArrays,
    state,
    func,
    technologies,
    setTechnologies,
}: {
    arr?: languageType[];
    twoArrays?:  Object[] | any ;
    state?: {};
    func: Function;
    technologies?: any;
    setTechnologies: Function;
}) => {
    const setChosenLanguage = (language: languageType) => {
        if (language.languageName == "JavaScript") {
            func({
                ...state,
                javaScript: true,
            });
            setTechnologies([...technologies, "JavaScript"]);
        } else if (language.languageName == "typeScript") {
            func({
                ...state,
                typeScript: true,
            });
            setTechnologies([...technologies, "TypeScript"]);
        } else if (language.languageName == "css") {
            func({
                ...state,
                css: true,
            });
            setTechnologies([...technologies, "css"]);
        } else if (language.languageName == "vue") {
            func({
                ...state,
                vue: true,
            });
            setTechnologies([...technologies, "vue"]);
        } else if (language.languageName == "http") {
            func({
                ...state,
                http: true,
            });
            setTechnologies([...technologies, "http"]);
        } else if (language.languageName == "react") {
            func({
                ...state,
                react: true,
            });
            setTechnologies([...technologies, "react"]);
        } else if (language.languageName == "react-native") {
            func({
                ...state,
                ReactNative: true,
            });
            setTechnologies([...technologies, "react-native"]);
        } else if (language.languageName == "Java") {
            func({
                ...state,
                java: true,
            });
            setTechnologies([...technologies, "Java"]);
        } else if (language.languageName == "python") {
            func({
                ...state,
                python: true,
            });
            setTechnologies([...technologies, "python"]);
        } else if (language.languageName == "Sql") {
            func({
                ...state,
                sql: true,
            });
            setTechnologies([...technologies, "Sql"]);
        } else if (language.languageName == "aspnet") {
            func({
                ...state,
                aspnet: true,
            });
            setTechnologies([...technologies, "aspnet"]);
        } else if (language.languageName == "Php") {
            func({
                ...state,
                php: true,
            });
            setTechnologies([...technologies, "Php"]);
        } else if (language.languageName == "html") {
            func({
                ...state,
                html: true,
            });
            setTechnologies([...technologies, "html"]);
        } else if (language.languageName == "webpack") {
            func({
                ...state,
                webpack: true,
            });
            setTechnologies([...technologies, "webpack"]);
        }
    };
    if (twoArrays) {
        return (
            <>
                {twoArrays[0].map((language: languageType) => {
                    return (
                        <div
                            onClick={() => setChosenLanguage(language)}
                            key={language.languageName}
                        >
                            <p>{language.languageName}</p>
                            <img src={language.image} alt="" />
                        </div>
                    );
                })}
                {twoArrays[1].map((language: languageType) => {
                    return (
                        <div
                            onClick={() => setChosenLanguage(language)}
                            key={language.languageName}
                        >
                            <p>{language.languageName}</p>
                            <img src={language.image} alt="" />
                        </div>
                    );
                })}
            </>
        );
    } else if (arr) {
        return (
            <>
                {arr.map((language: languageType) => {
                    return (
                        <div
                            onClick={() => setChosenLanguage(language)}
                            key={language.languageName}
                        >
                            <p>{language.languageName}</p>
                            <img src={language.image} alt="" />
                        </div>
                    );
                })}
            </>
        );
    }
};

export default LanguagesListComponent;
