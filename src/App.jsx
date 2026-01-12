import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import styles from './App.module.css';
import { Chat } from './components/Chat/chat';
import { Controls } from './components/Chat/Controls/Controls';

// const googleai = new GoogleGenAI(import.meta.env.VITE_GEMINI_API_KEY);
// const gemini = googleai.getGenerativeModel({model: "gemini-1.5-flash",});
// const chat = gemini.startChat({history: [],});

function App() {
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    try {
      const result = await chat.sendMessage(content);
      addMessage({ content: result.response.text(), role: "assistant" });
    } catch (error) {
      addMessage({ content: "Sorry ! I couldn't process your request. Please try again !", role: "system" });
    }
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/chatbot.png" className={styles.Logo} />
        <h2 className={styles.Title}>Darvey AI</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>
  );
}

export default App;
