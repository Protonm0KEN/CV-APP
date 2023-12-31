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
    twoArrays?: Object[] | any;
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
            if (technologies.includes("JavaScript") === false) {
                setTechnologies([...technologies, "JavaScript"]);
            }
        } else if (language.languageName == "typeScript") {
            func({
                ...state,
                typeScript: true,
            });
            if (technologies.includes("typeScript") === false) {
                setTechnologies([...technologies, "typeScript"]);
            }
        } else if (language.languageName == "css") {
            func({
                ...state,
                css: true,
            });
            if (technologies.includes("css") === false) {
                setTechnologies([...technologies, "css"]);
            }
        } else if (language.languageName == "vue") {
            func({
                ...state,
                vue: true,
            });
            if (technologies.includes("vue") === false) {
                setTechnologies([...technologies, "vue"]);
            }
        } else if (language.languageName == "http") {
            func({
                ...state,
                http: true,
            });
            if (technologies.includes("http") === false) {
                setTechnologies([...technologies, "http"]);
            }
        } else if (language.languageName == "react") {
            func({
                ...state,
                react: true,
            });
            if (technologies.includes("react") === false) {
                setTechnologies([...technologies, "react"]);
            }
        } else if (language.languageName == "react-native") {
            func({
                ...state,
                ReactNative: true,
            });
            if (technologies.includes("react-native") === false) {
                setTechnologies([...technologies, "react-native"]);
            }
        } else if (language.languageName == "Java") {
            func({
                ...state,
                java: true,
            });
            if (technologies.includes("Java") === false) {
                setTechnologies([...technologies, "Java"]);
            }
        } else if (language.languageName == "python") {
            func({
                ...state,
                python: true,
            });
            if (technologies.includes("python") === false) {
                setTechnologies([...technologies, "python"]);
            }
        } else if (language.languageName == "Sql") {
            func({
                ...state,
                sql: true,
            });
            if (technologies.includes("Sql") === false) {
                setTechnologies([...technologies, "Sql"]);
            }
        } else if (language.languageName == "aspnet") {
            func({
                ...state,
                aspnet: true,
            });
            if (technologies.includes("aspnet") === false) {
                setTechnologies([...technologies, "aspnet"]);
            }
        } else if (language.languageName == "Php") {
            func({
                ...state,
                php: true,
            });
            if (technologies.includes("Php") === false) {
                setTechnologies([...technologies, "Php"]);
            }
        } else if (language.languageName == "html") {
            func({
                ...state,
                html: true,
            });
            if (technologies.includes("html") === false) {
                setTechnologies([...technologies, "html"]);
            }
        } else if (language.languageName == "webpack") {
            func({
                ...state,
                webpack: true,
            });
            if (technologies.includes("webpack") === false) {
                setTechnologies([...technologies, "webpack"]);
            }
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
