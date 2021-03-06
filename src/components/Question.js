import { useState } from "react";


const Question = (props) => {

    // making a boolean check value
    // const [checked, setChecked] = useState(false);

    // a list to hold the id of each checkboxes 
    const [slider, setSlider] = useState([
        {id: 0, checked: false},
        {id: 1, checked: false},
        {id: 2, checked: false},
        {id: 3, checked: false},
    ]);

    const enableSlider = (id) => {
        for (let i=0; i<slider.length; i++) {

            // if the checked is false show the slider
            if (id == slider[i].id && slider[i].checked == true) {
                setSlider(prevState => [
                    ...prevState,
                    slider[i].checked=false
                ])
                console.log(slider);
            }

            // if the checked is true hide the slider
            if (id == slider[i].id && slider[i].checked == false) {
                setSlider(prevState => [
                    ...prevState,
                    slider[i].checked=true
                ])
                console.log(slider);
            }
            
        }
    }

    return (
        <div className="quest">
            <h2>{ props.question }</h2>
            
            <ol>
                <input type="checkbox" value={props.value1} id="0" onChange={() => enableSlider(0)}/>
                <label>{props.value1}</label>
                {slider[0].checked && <input type="range" min="0" max="10" />}
            </ol>
            
            <ol>
                <input type="checkbox" value={props.value2} id="1" onChange={() => enableSlider(1)}/>
                <label>{props.value2}</label>
                {slider[1].checked && <input type="range" min="0" max="10" />}
            </ol>

            <ol>
                <input type="checkbox" value={props.value3} id="2" onChange={() => enableSlider(2)}/>
                <label>{props.value3}</label>
                {slider[2].checked && <input type="range" min="0" max="10" />}
            </ol>

            <ol>
                <input type="checkbox" value={props.value4} id="3" onChange={() => enableSlider(3)}/>
                <label>{props.value4}</label>
                {slider[3].checked && <input type="range" min="0" max="10" />}
            </ol>

            <br/>


            <input type="text" placeholder="add your own points.."/>
        </div>
    );
}

export default Question;