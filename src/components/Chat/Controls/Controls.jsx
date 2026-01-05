
import { useState } from 'react';
import styles from './Controls.module.css';

export function Controls({onSend}) {

    const [content, setContent] = useState("");

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    function handleContentSend() {
        if (content.length > 0){
            onSend(content);
            setContent("");
        }
    }

    function handleEnterPress(event) {
        if (event.key === 'Enter' && !event.shiftKey){
            event.preventDefault();
            handleContentSend();
        }
    }

    return (
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer}>
                <textarea 
                className={styles.TextArea} 
                placeholder="Message AI ChatBot" 
                value={content}
                onChange={handleContentChange}
                onKeyDown={handleEnterPress}
                />
            </div>
            <button className={styles.Button} onClick={handleContentSend}>
                <SendIcon />
            </button>
        </div>
    );
}

function SendIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 21L23 12L2 3L2 10L17 12L2 14L2 21Z" fill="currentColor"/>
        </svg>
    )
}