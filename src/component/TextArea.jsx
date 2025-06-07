import React, { useRef } from 'react';
import Button from "./button"

const TextArea = (props) => {
    const editorRef = useRef(null);

    // Make selected text bold using execCommand
    const handleBoldSelection = () => {
        document.execCommand('bold', false, null);
    };

    // Make selected text italic
    const handleItalicSelection = () => {
        document.execCommand('italic', false, null);
    };

    // Make selected text underlined
    const handleUnderlineSelection = () => {
        document.execCommand('underline', false, null);
    };

    // Toggle selected text as heading (h1), remove heading if already h1 or h2
    const handleHeadingSelection = () => {
        const sel = window.getSelection();
        if (!sel.rangeCount) return;
        let node = sel.anchorNode;
        // Traverse up to find the block element
        while (node && node.nodeType === 3) node = node.parentNode;
        if (node && (node.nodeName === 'H1' || node.nodeName === 'H2')) {
            // If already H1 or H2, change to normal (div)
            document.execCommand('formatBlock', false, 'div');
        } else {
            document.execCommand('formatBlock', false, 'h1');
        }
    };
    // Toggle selected text as heading (h2), remove heading if already h1 or h2
    const handleHeading2Selection = () => {
        const sel = window.getSelection();
        if (!sel.rangeCount) return;
        let node = sel.anchorNode;
        // Traverse up to find the block element
        while (node && node.nodeType === 3) node = node.parentNode;
        if (node && (node.nodeName === 'H1' || node.nodeName === 'H2')) {
            // If already H1 or H2, change to normal (div)
            document.execCommand('formatBlock', false, 'div');
        } else {
            document.execCommand('formatBlock', false, 'h2');
        }
    };

    // Convert selected text to uppercase
    const handleUppercaseSelection = () => {
        const sel = window.getSelection();
        if (!sel.rangeCount) return;
        const range = sel.getRangeAt(0);
        if (range.collapsed) return;
        const selectedText = range.toString();
        const upperText = selectedText.toUpperCase();
        range.deleteContents();
        range.insertNode(document.createTextNode(upperText));
    };

    // Convert selected text to lowercase
    const handleLowercaseSelection = () => {
        const sel = window.getSelection();
        if (!sel.rangeCount) return;
        const range = sel.getRangeAt(0);
        if (range.collapsed) return;
        const selectedText = range.toString();
        const lowerText = selectedText.toLowerCase();
        range.deleteContents();
        range.insertNode(document.createTextNode(lowerText));
    };
    // Capitalize the first letter of each word after a period ('.') in the selected text
    const handleCamelcaseSelection = () => {
        const sel = window.getSelection();
        if (!sel.rangeCount) return;
        const range = sel.getRangeAt(0);
        if (range.collapsed) return;
        const selectedText = range.toString();
        // Regex: after a period and optional spaces, capitalize the next letter
        const capitalized = selectedText.replace(/(\.[\s]*)([a-z])/g, (match, sep, char) => sep + char.toUpperCase());
        // Also capitalize the very first character if it's a letter
        const result = capitalized.replace(/^([a-z])/, (m, c) => c.toUpperCase());
        range.deleteContents();
        range.insertNode(document.createTextNode(result));
    };

    const buttons =[
                    { name: 'B', onClick: handleBoldSelection },
                    { name: 'I', onClick: handleItalicSelection },
                    { name: 'H1', onClick: handleHeadingSelection },
                    { name: 'H2', onClick: handleHeading2Selection },
                    { name: 'U', onClick: handleUnderlineSelection },
                    { name: 'AA', onClick: handleUppercaseSelection },
                    { name: 'aa', onClick: handleLowercaseSelection },
                    { name: 'Aa', onClick: handleCamelcaseSelection },
                ]
    return (
        <div className="container mt-5 background-light p-3 rounded" style={{ backgroundColor: props.mode === 'dark' ? '#222' : '#f8f9fa', color: props.mode === 'dark' ? '#fff' : '#000' }}>
            <h2 className="mb-3">Rich Text Editor</h2>
            <div
                ref={editorRef}                className="form-control"
                id="richTextEditor"
                contentEditable={true}
                style={{ minHeight: '160px', outline: 'none', whiteSpace: 'pre-wrap', backgroundColor:props.mode === 'dark' ? '#333' : '#fff', color: props.mode === 'dark' ? '#fff' : '#000' }}
                suppressContentEditableWarning={true}
            ></div>
            <div className="container mx-2 mt-2">
                {buttons.map((btn) => (
                    <Button key={btn.name} onClick={btn.onClick} mode={props.mode}>{btn.name}</Button>
                ))}
            </div>
        </div>
    );
}
export default TextArea;