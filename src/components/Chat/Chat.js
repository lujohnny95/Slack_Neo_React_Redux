import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { ChatContainer, Header, HeaderLeft, HeaderRight, ChatMessages, ChatBottom } from "./Chat.styles"
import { selectRoomId } from "../../features/appSlice"
import ChatInput from "./ChatInput"
import Message from "../Message/Message";
import { db } from "../../firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore"
import { useEffect, useRef } from "react";

const Chat = () => {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    );
    const [roomMessages, loading] = useCollection(
        roomId && 
            db
                .collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
    )

    console.log(roomDetails?.data());
    console.log(roomMessages);

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behaviour: "smooth",
        });
    },[roomId, loading]);

    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
            <>
                <Header>
                    <HeaderLeft>
                        <h4><strong>#{roomDetails?.data().name}</strong></h4>
                        <StarBorderOutlined />
                    </HeaderLeft>

                    <HeaderRight>
                        <p>
                            <InfoOutlined /> Details
                        </p>
                    </HeaderRight>
                </Header>

                <ChatMessages>
                    {roomMessages?.docs.map((doc) => {
                        const { message, timestamp, user, userImage } = doc.data();
                        return (
                            <Message 
                                key={doc.id}
                                message={message}
                                timestamp={timestamp}
                                user={user}
                                userImage={userImage}
                            />
                        );
                    })}
                    <ChatBottom ref={chatRef}/>
                </ChatMessages>

                <ChatInput 
                    channelId={roomId} 
                    ChannelName={roomDetails?.data().name}
                    chatRef={chatRef}
                />
            </>
            )}
        </ChatContainer>
    )
}

export default Chat;