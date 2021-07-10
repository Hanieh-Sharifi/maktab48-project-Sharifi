import React from 'react';
import MUIRichTextEditor from 'mui-rte';



function TextEditor({ explanation, handleExplanation}) {

    // component can accept this as value
    const test = `{"blocks":[{"key":"b76h6","text":"${explanation ? explanation : ""}","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"MY-STYLE"}],"entityRanges":[],"data":{}}],"entityMap":{}}`;

    return (
        <MUIRichTextEditor
            label="توضیحات"
            toolbarButtonSize="small"
            defaultValue={test}
            controls={["bold", "italic", "underline", "strikethrough", "numberList", "bulletList", "undo", "redo", "image", "quote"]}
            onChange={(state) => handleExplanation(state)}
        />
    )
}

export default TextEditor
