import FieldsFrame from "./components/FieldsFrame";
import StackChoice from "./components/StackChoice";
import "./styles/App.scss"
const App = () => {
  return (
    <div className="layout">
      <FieldsFrame />
      <StackChoice />
    </div>
  );
};

export default App;
