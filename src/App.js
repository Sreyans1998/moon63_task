import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ViewTabs from "./Utility/ViewTabs"


/*App method is use to render all the component in one frame which 
next get render in Index.js file*/

function App() {
  return (
    <>
      <div className="bg-light shadow-lg">
        <ViewTabs />
      </div>
      <div id="activity" className="d-flex m-5"></div>
    </>
  );
}

export default App;
