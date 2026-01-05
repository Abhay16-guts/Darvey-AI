import styles from './chat.module.css';

const WELCOME_MESSAGE = {
    role: "assistant",
    content: "Hello ! How Can I Assist You ?",
}

export function Chat({ messages }) {
    return (
        <div className={styles.Chat}>
            {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
                <div
                    key={index}
                    data-role={role}
                    className={styles.Message}
                >
                    {content}
                </div>
            ))}
        </div>
    );
}