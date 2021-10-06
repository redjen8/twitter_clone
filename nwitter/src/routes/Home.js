 import { dbService, storageService } from "fbase";
 import { useEffect, useState } from "react";
 import Nweet from "components/Nweet";
 import { v4 as uuidv4 } from "uuid";
import NweetFactory from "components/NweetFactory";

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        });
    }, []);

    return (
        <>
        <NweetFactory userObj={userObj} />
        <div>
            {nweets.map((nweet) => (
                <Nweet
                key={nweet.id}
                nweetObj={nweet}
                isOwner={nweet.creatorId === userObj.uid}
                />
            ))}
        </div>
        </>
    );
};

export default Home;