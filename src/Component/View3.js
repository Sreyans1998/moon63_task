/*third MAINVIEW_HOLDER */

import React, { useState } from 'react'


/*This Method is use to render third MAINVIEW_HOLDER into jsx format 
Using onClick event it also use to store data on textarea in viewText variable 
using state hooks of react and display it on alert window.
*/

const View3 = (props) => {
    const [viewText, setViewText] = useState('')


    /*In this method we simply display alert with textarea value 
    i.e. stored in viewText using State hooks using onClick event */

    const sendData = (value) => {
        alert(`This your Text ${value}`)
    }
    return(
        <>
            <div className="card m-5 w-75 mx-auto shadow-lg">
                <h1 className="text-center m-3">
                    View3 Tab
                </h1>
                <div className="container card m-3 position-relative mx-auto h-50">
                    <h1 className="card-header">
                        Text Box
                    </h1>
                    <textarea class="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3">
                            {props.viewText}
                    </textarea>
                    <div class="position-relative card-body m-5">
                        <label for="exampleFormControlTextarea1" class="form-label fs-3">Write Your Text Here</label>
                        <textarea class="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        value={viewText}
                        onChange={(e) => setViewText(e.target.value)}
                        placeholder="Write Something here......">
                            {props.viewText}
                        </textarea>
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

export default View3;