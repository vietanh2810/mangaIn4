import React from "react";



function Manga({ title,
                image_url, 
                score, 
                rank, 
                members}) {
    return (
        <div className="manga">
            <img src={image_url} alt={title}/>
            <div className="manga-info">
                <h3>{title}</h3>
                <span>{score}</span>
            </div>
            <div className="manga-more-infos">
                <h2>More infos:</h2>
                <h3>Rank: {rank ? rank : 'N/A' }</h3>
                <h3>Followers: {members}</h3>
            </div>
        </div>
    );
}

export default Manga;