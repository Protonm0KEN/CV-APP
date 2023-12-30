import "./ProgrammingLanguageChoice.scss";
import { StackChoiceType } from "../../types/StackStype";
//Frontend
import javaScript from "../../assets/icons/js.png";
import typeScript from "../../assets/icons/typescript.png";
import react from "../../assets/icons/react.png";
import css from "../../assets/icons/css.png";
import vue from "../../assets/icons/vue.png";
import html from "../../assets/icons/html.png";
import webpack from "../../assets/icons/webpack.jpg";
import { languageType } from "../../types/LanguageType";
import LanguagesListComponent from "./LanguageListComponent";
//Backend
import python from "../../assets/icons/python.png";
import sql from "../../assets/icons/sql.png";
import php from "../../assets/icons/php.png";
import java from "../../assets/icons/java.png";
import aspnet from "../../assets/icons/aspnet.png";
import http from "../../assets/icons/http.png";
//Mobile Dev
import ReactNative from "../../assets/icons/react-native.jpg";
const ProgrammingLanguageChoice = ({
    dataState,
    func,
    state,
    technologies,
    setTechnologies,
}: {dataState: StackChoiceType, func: Function, state: any, technologies: any, setTechnologies: Function}) => {
    const languageIcons = {
        //Frontend
        javaScript,
        typeScript,
        react,
        css,
        vue,
        html,
        webpack,
        //Backend
        python,
        sql,
        php,
        java,
        aspnet,
        http,
        //Mobile Dev
        ReactNative,
    };
    const frontendLanguages: languageType[] = [
        {
            languageName: "JavaScript",
            image: languageIcons.javaScript,
        },
        {
            languageName: "typeScript",
            image: languageIcons.typeScript,
        },
        {
            languageName: "react",
            image: languageIcons.react,
        },
        {
            languageName: "css",
            image: languageIcons.css,
        },
        {
            languageName: "vue",
            image: languageIcons.vue,
        },
        {
            languageName: "html",
            image: languageIcons.html,
        },
        {
            languageName: "webpack",
            image: languageIcons.webpack,
        },
    ];
    const backendLanguages: languageType[] = [
        {
            languageName: "python",
            image: languageIcons.python,
        },
        {
            languageName: "Sql",
            image: languageIcons.sql,
        },
        {
            languageName: "Php",
            image: languageIcons.php,
        },
        {
            languageName: "Java",
            image: languageIcons.java,
        },
        {
            languageName: "aspnet",
            image: languageIcons.aspnet,
        },
        {
            languageName: "http",
            image: languageIcons.http,
        },
    ];
    const mobileDevLanguages: languageType[] = [
        {
            languageName: "python",
            image: languageIcons.python,
        },
        {
            languageName: "react-native",
            image: languageIcons.ReactNative,
        },
        {
            languageName: "Java",
            image: languageIcons.java,
        },
        {
            languageName: "HTTP",
            image: languageIcons.http,
        },
    ];
    return (
        <>
            <div className="Porgramming_Languages_Choice">
                <div className="Porgramming_Languages_Choice__cards">
                    {dataState.frontend && (
                        <LanguagesListComponent
                            technologies={technologies}
                            setTechnologies={setTechnologies}
                            func={func}
                            state={state}
                            arr={frontendLanguages}
                        />
                    )}
                    {dataState.backend && (
                        <LanguagesListComponent
                            technologies={technologies}
                            setTechnologies={setTechnologies}
                            func={func}
                            state={state}
                            arr={backendLanguages}
                        />
                    )}
                    {dataState.fullStack && (
                        <LanguagesListComponent
                            technologies={technologies}
                            setTechnologies={setTechnologies}
                            func={func}
                            state={state}
                            twoArrays={[backendLanguages, frontendLanguages]}
                        />
                    )}
                    {dataState.mobileDev && (
                        <LanguagesListComponent
                            technologies={technologies}
                            setTechnologies={setTechnologies}
                            func={func}
                            state={state}
                            arr={mobileDevLanguages}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default ProgrammingLanguageChoice;
