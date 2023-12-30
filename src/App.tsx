import { useState } from "react";
import FieldsFrame from "./components/FieldsFrame";
import StackChoice from "./components/StackChoice";
import "./styles/App.scss";
import { StackChoiceType } from "./types/StackStype";
import { UserData } from "./types/userDataType";
import GeneratePDF from "./components/GeneratePDF";
import PDFForm from "./components/PDFForm";
const App = () => {
    const [selectedLanguagesFromList, setSelectedLanguagesFromList] = useState({
        javaScript: false,
        typeScript: false,
        react: false,
        css: false,
        vue: false,
        html: false,
        webpack: false,
        //Backend
        python: false,
        sql: false,
        php: false,
        java: false,
        aspnet: false,
        http: false,
        //Mobile Dev
        ReactNative: false,
    });
    const [selectStack, setSelectStack] = useState<StackChoiceType>({
        frontend: true,
        backend: false,
        fullStack: false,
        mobileDev: false,
    });
    const [userData, setUserData] = useState<UserData>({
        firstName: "",
        lastName: "",
        autoBiography: "",
        date: "",
        discordLink: "",
        email: "",
        phoneNumber: 0,
        githubLink: "",
        telegramLink: "",
        youtubeLink: "",
        image: "",
        dateOfBirth: "",
    });
    const [technologies, setTechnologies] = useState([]);
    const [isPdf, setIsPdf] = useState(false);
    console.log(`Ap ${technologies}`)
    return (
        <div className="layout">
            <FieldsFrame
                isPdfState={isPdf}
                state={userData}
                func={setUserData}
            />
            <StackChoice
                technologies = {technologies}
                setTechnologies = {setTechnologies}
                isPdfState={isPdf}
                selectStack={selectStack}
                setSelectStack={setSelectStack}
                state={selectedLanguagesFromList}
                func={setSelectedLanguagesFromList}
            />
            <GeneratePDF func={setIsPdf} state={isPdf} />
            <PDFForm
                technologies={technologies}
                userFirstName={userData.firstName}
                userLastName={userData.lastName}
                position={selectStack}
                autoBiography = {userData.autoBiography}
                image = {userData.image}
            />
        </div>
    );
};

export default App;
