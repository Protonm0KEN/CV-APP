import "./ProgrammingLanguageChoice.scss";
import { StackChoiceType } from "../../types/StackStype";
import LanguagesListComponent from "./LanguageListComponent";
import { backendLanguages, frontendLanguages, mobileDevLanguages } from "../features/languageConstants";
const ProgrammingLanguageChoice = ({
    dataState,
    func,
    state,
    technologies,
    setTechnologies,
}: {dataState: StackChoiceType, func: Function, state: any, technologies: any, setTechnologies: Function}) => {
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
