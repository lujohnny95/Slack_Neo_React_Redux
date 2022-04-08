import { Button } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";

const ChatInput = ({ ChannelName, channelId, chatRef }) => {
    const [textInput, setTextInput] = useState("");

    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }        

        db.collection("rooms").doc(channelId).collection("messages").add({
            messages: textInput,
            user: "Johnny Lu",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth"
        });

        setTextInput("");
    };

    return (
        <ChatInputContainer>
            <form>
                <input 
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder={`Message #${ChannelName}`}
                />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;