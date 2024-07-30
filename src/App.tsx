import WujieReact from 'wujie-react'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"

function App() {
    return (
        <>
            <WujieReact
                name="sub-app"
                url="//localhost:5174/"
            ></WujieReact>
            <WujieReact
                name="sub-app-1"
                url="//localhost:5174/"
            ></WujieReact>
        </>
    )
}

export default App
