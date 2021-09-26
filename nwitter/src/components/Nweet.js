import { dbService } from "fbase";
import { useState } from "react";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까?");
        console.log(ok);
        if (ok) {
            console.log(nweetObj.id);
            const data = await dbService.doc(`nweets/${nweetObj.id}`).delete();
            console.log(data);
        }
    }

    const toggleEditing = () => setEditing((prev) => !prev);

    return (
        <div>
            {editing? (
                <>
                <form>
                    <input value={newNweet} required/>
                </form>
                <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                <h4>{nweetObj.text}</h4>
                {isOwner && (
                    <>
                    <button onClick={onDeleteClick}>Delete Nweet</button>
                    <button onClick={toggleEditing}>Edit Nweet</button>
                    </>
                )}
                </>
            )}
        </div>
    );
};

export default Nweet;