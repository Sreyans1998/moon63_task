/* This is the VIEWMENU_HOLDER */


import { ControlPointRounded } from '@mui/icons-material';
import { Backdrop, Button } from '@mui/material';
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import View1 from '../Component/View1';
import View2 from '../Component/View2';
import View3 from '../Component/View3';


/*
    Here the function ViewTabs is use to render VIEWMENU_HOLDER 
*/

const ViewTabs = () => {
    const [view1Btn, setView1Btn] = useState(false);
    const [view2Btn, setView2Btn] = useState(false);
    const [view3Btn, setView3Btn] = useState(false);
    const [popUp, setPopUp] = useState(false);

    /* 
        Here we toggle from one view to another and also we 
        change the style of the buttons in the VIEWMENU_HOLDER 
    */

    const tabToggel = (value) => {
        console.log(value);


        /*
            Here we check the condition where the button that we clicked is view1, 2 or 3
            according to that we renders their respective MAINVIEW_HOLDER.
         */

        if(value === "view1"){
            ReactDOM.render(<View1 viewText="" viewBtn={view1Btn} setBtn={setView2Btn} />, document.querySelector('#activity'))
            setView1Btn(true)
            setView2Btn(false)
            setView3Btn(false)
        }
        else if(value === "view2"){
            ReactDOM.render(<View2 viewText="" viewBtn={view2Btn} setBtn={setView3Btn} />, document.querySelector('#activity'))
            setView1Btn(false)
            setView2Btn(true)
            setView3Btn(false)
        }
        else if(value === "view3"){
            ReactDOM.render(<View3 viewText="" viewBtn={view3Btn} setBtn={setView3Btn} />, document.querySelector('#activity'))
            setView1Btn(false)
            setView2Btn(false)
            setView3Btn(true)
        }
        else{
            ReactDOM.render(<View1 viewText="" viewBtn={view2Btn} setBtn={setView2Btn} />, document.querySelector('#activity'))
        }
    }


    /*
        This method is use for display the popup menu on onClick event 
    */
    const popupOpen = () => {
        setPopUp(true)
    }


    /*
        This method is use for stop displaying the popup menu on onClick event
    */
    const popupClose = () => {
        setPopUp(false)
    }


    /*
        Here we returns the VIEWMENU_HOLDER in jsx format.
        We use Backdrop tag from material ui for displaying Popup Menu properly.
     */
    return(
        <>
            <div className="w-100">
                <button className={view1Btn ? "btn btn-danger m-2" : "btn btn-primary m-2"} id="tab" onClick={() => {
                    tabToggel("view1")
                }}>View 1</button>
                <button className={view2Btn ? "btn btn-danger m-2" : "btn btn-primary m-2"} id="tab" onClick={() => {
                    tabToggel("view2")
                }}>View 2</button>
                <button className={view3Btn ? "btn btn-danger m-2" : "btn btn-primary m-2"} id="tab" onClick={() => {
                    tabToggel("view3")
                }}>View 3</button>
                <Button variant="contained" onClick={popupOpen}>
                    <ControlPointRounded />
                </Button>

                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={popUp}
                    onClick={popupClose}
                >
                    <div class={popUp ? "card bg-light d-inline w-25 m-5 mb-5 shadow-lg" : "d-none"}>
                        <div className="popup text-center">
                            <button className={view1Btn ? "btn btn-danger my-3 w-75" : "btn btn-primary my-3 w-75"} id="tab" onClick={() => {
                                tabToggel("view1")
                            }}>View 1</button>
                            <button className={view2Btn ? "btn btn-danger my-3 w-75" : "btn btn-primary my-3 w-75"} id="tab" onClick={() => {
                                tabToggel("view2")
                            }}>View 2</button>
                            <button className={view3Btn ? "btn btn-danger my-3 w-75" : "btn btn-primary my-3 w-75"} id="tab" onClick={() => {
                                tabToggel("view3")
                            }}>View 3</button>
                        </div>
                    </div>
                </Backdrop>
            </div>
               
        </>
    )
}

/*
    Below line exports the method so that we can use it in any other file. 
*/
export default ViewTabs;