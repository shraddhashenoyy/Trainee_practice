import React, { useEffect, useState } from 'react';


const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <div>
      <h1>Photos</h1>
      <div>
        {photos.map(photo => (
          <div key={photo.id} className="photo-card" >
          <img src={photo.thumbnailUrl} alt={photo.title} />
            <h2>{photo.title}</h2>
            <a href={photo.url}>View Full Image</a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Photos;