import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const PhotoList: React.FC = () => {
    const {...photos} = useTypedSelector(state => state.photos)
    const {fetchPhotos, setPhotosLimit} = useActions();

    useEffect(() => {
        fetchPhotos(photos.limit);
    }, [photos.limit]);

    if (photos.error) {
        return <h1>{photos.error}</h1>
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{display: "flex", justifyContent: "space-between", width: 200, marginBottom: 20}}>
                <button onClick={() => setPhotosLimit(photos.limit + 1)} style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: 5,
                    padding: "10px, 20px",
                    cursor: "pointer"
                }}>Add
                </button>
                {photos.limit > 0 && <button onClick={() => setPhotosLimit(photos.limit - 1)} style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: 5,
                    padding: "10px, 20px",
                    cursor: "pointer"
                }}>Remove</button>}
            </div>
            {
                photos.photos.map(photo =>
                    <div key={photo.id} style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: 400,
                        height: 400,
                        border: "1px solid #000",
                        marginBottom: 20,
                        padding: 10
                    }}>
                        <h1>{photo.id} - {photo.title}</h1>
                        <img src={photo.thumbnailUrl} alt={photo.title}/>
                    </div>
                )
            }
            {
                photos.loading && <h1>Loading...</h1>
            }
        </div>
    );
};

export default PhotoList;