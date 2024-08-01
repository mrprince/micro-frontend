import WujieReact from 'wujie-react'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"

function App() {

    const plugins = [
        {
            // 在子应用所有的js之前
            jsBeforeLoaders: [
                {
                    callback(appWindow: any) {
                        console.log("js-before-loader-callback", appWindow.__WUJIE.id);
                    }
                }
            ]
        }
    ];

    return (
        <>
            <>home page</>
            <div style={{display: 'fixed'}}>
                <div>
                    <WujieReact
                        name="sub-app"
                        url="//localhost:5174/"
                        plugins={plugins}
                    ></WujieReact>

                </div>
                <div>
                    <WujieReact
                        name="sub-app-1"
                        url="//localhost:5174/"
                        plugins={plugins}
                    ></WujieReact>
                </div>
            </div>
        </>
    )
}

export default App
