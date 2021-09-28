/*second MAINVIEW_HOLDER */

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import View3 from './View3'


/*This Method is use to render second MAINVIEW_HOLDER into jsx format
Using onClick even it also use to store data on textarea in viewText variable 
using state hooks of react and
render third MAINVIEW_HOLDER with a props name viewText.
*/

const View2 = (props) => {
    const [viewText, setViewText] = useState('')


    /*
        In sendData method we simply render the third MAINVIEW_HOLDER using onClick event 
        and change the state of view buttons
    */

    const sendData = async (value) => {
        await ReactDOM.render(<View3 viewText={value} />, document.querySelector('#activity'))
        props.setView2Btn(false)
        props.setView3Btn(true)
    }

    /*Here we returns the VIEWMENU_HOLDER in jsx format. */

    return(
        <>
            <div className="card m-5 w-75 mx-auto shadow-lg">
                <h1 className="text-center m-3">
                    View2 Tab
                </h1>
                <div className="container card m-3 position-relative mx-auto h-50">
                    <h1 className="card-header mt-2">
                        Text Box
                    </h1>
                    <textarea class="form-control mt-4" 
                        id="exampleFormControlTextarea1" 
                        rows="3">
                            {props.viewText}
                    </textarea>
                    <div class="position-relative card-body m-5">
                        <label for="exampleFormControlTextarea1" class="form-label fs-3">Write Your Text Here</label>
                        <textarea class="form-control mb-5" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        value={viewText}
                        onChange={(e) => setViewText(e.target.value)}
                        placeholder="Write Something here......"></textarea>
                    </div>
                    <button className="position-relative mt-5 w-25 btn btn-primary mx-auto" onClick={() => {
                        sendData(viewText)}    
                    }>
                    Submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default View2;