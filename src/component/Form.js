import React, { useState } from "react";
import Select from "react-select";

const data = [
    {
        value: "Short Answer",
        label: "Short Answer",
    },
    {
        value: "Multiple choice",
        label: "Multiple choice",
    },
    {
        value: "Checkboxes",
        label: "Checkboxes",
    },
];

const QuestionForm = () => {
    const [allOptions, setAllOptions] = useState([{ type: "text", value: "" }]);
    const handleChange = (e) => {
        console.log(e.value);
        if (e.value === "Short Answer")
            setAllOptions([{ type: "text", value: "" }]);
        else if (e.value === "Multiple choice") {
            setAllOptions([{ type: "radio", value: "" }]);
        } else {
            setAllOptions([{ type: "checkbox", value: "" }]);
        }
    };
    let option = allOptions.map((e) => {
        switch (e.type) {
            case "text":
                return (
                    <input
                        type="text"
                        className='short'
                        placeholder="Short answer text"
                    />
                );

            case "radio":
                return (
                    <div>
                        <input type="radio" id="rad" value={e} />
                        <input
                            type="text"
                            className='option_text'
                            placeholder="write something"
                        />
                    </div>
                );

            case "checkbox":
                return (
                    <div>
                        <input type="checkbox" id="rad" value={e} />
                        <input
                            type="text"
                            className='option_text'
                            placeholder="write something"
                        />
                    </div>
                );

            default:
                return null;
        }
    });

    const addSameOption = () => {
        // console.log(allOptions);
        setAllOptions([...allOptions, { type: allOptions[0].type, value: "" }]);
    };
    const addTextOption = () => {
        setAllOptions([...allOptions, { type: "text", value: "" }]);
    };
    let addOther =
        allOptions[allOptions.length - 1].type !== "text" &&
        allOptions.length < 5 ? (
            <div className='option'>
                <input type={allOptions[0].type} />
                <span
                    onClick={addSameOption}
                    className='option_item'
                    role="button"
                >
                    Add option or
                </span>
                <span
                   
                    onClick={addTextOption}
                    className='blue'
                    role="button"
                >
                    {" "}
                    add &quot;Other&quot;
                </span>
            </div>
        ) : null;

    return (
        <div className='question_root'>
            <div className='title_wrapper'>
                <input
                    id="form-title"
                    placeholder="Question title"
                    className='question_title'
                />
                {option}
                {addOther}
            </div>
            <div>
                <Select
                    defaultValue={data[0]}
                    options={data}
                    className='select_wrapper'
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default QuestionForm;