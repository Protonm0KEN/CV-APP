import "./GenratePDF.scss"
const GeneratePDF = ({func, state}) => {
  return (
    <div onClick={() => {
      if(state === true){
        return func(false)
      }else{
        return func(true)
      }
    }}>
        <button onClick={async() => {
          setTimeout(() => {
            return window.print()
          }, 1000)
        }} className={state ? "display_none" : "generatePdf_button"}>GENERATE PDF FILE</button>
    </div>
  )
}

export default GeneratePDF