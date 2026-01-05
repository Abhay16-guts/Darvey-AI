import { useState } from 'react';
import styles from './App.module.css';
import { Chat } from './components/Chat/chat';

function App() {
  const [messages, setMessages] = useState(MESSAGES);

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/chatbot.png" className={styles.Logo}/>
        <h2 className={styles.Title}>Darvey AI</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
    </div>
  );
}

const MESSAGES = [
  {
    role: 'user',
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, blanditiis, aspernatur in impedit, animi eum dolore porro autem non totam velit dicta asperiores quaerat qui dolores earum veritatis repellat quis illum consequuntur assumenda! Tempore, qui?",
  },
  {
    role: 'assistant',
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, blanditiis, aspernatur in impedit, animi eum dolore porro autem non totam velit dicta asperiores quaerat qui dolores earum veritatis repellat quis illum consequuntur assumenda! Tempore, qui?",
  },
  {
    role: 'user',
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, blanditiis, aspernatur in impedit, animi eum dolore porro autem non totam velit dicta asperiores quaerat qui dolores earum veritatis repellat quis illum consequuntur assumenda! Tempore, qui?",
  },
  {
    role: 'assistant',
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, blanditiis, aspernatur in impedit, animi eum dolore porro autem non totam velit dicta asperiores quaerat qui dolores earum veritatis repellat quis illum consequuntur assumenda! Tempore, qui?",
  },
  {
    role: 'user',
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, blanditiis, aspernatur in impedit, animi eum dolore porro autem non totam velit dicta asperiores quaerat qui dolores earum veritatis repellat quis illum consequuntur assumenda! Tempore, qui?",
  },
  {
    role: 'assistant',
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, blanditiis, aspernatur in impedit, animi eum dolore porro autem non totam velit dicta asperiores quaerat qui dolores earum veritatis repellat quis illum consequuntur assumenda! Tempore, qui?",
  },
  {
    role: 'user',
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, blanditiis, aspernatur in impedit, animi eum dolore porro autem non totam velit dicta asperiores quaerat qui dolores earum veritatis repellat quis illum consequuntur assumenda! Tempore, qui?",
  },
  {
    role: 'assistant',
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, blanditiis, aspernatur in impedit, animi eum dolore porro autem non totam velit dicta asperiores quaerat qui dolores earum veritatis repellat quis illum consequuntur assumenda! Tempore, qui?",
  },
]

export default App
