import React from 'react';

const ImageList = (props) => {
  const { images } = props;

  return (
    <div>
      {images.map(({ urls, description, id }) => (
        <img
          src={urls.regular}
          alt={description}
          key={id}
        />
      ))}
    </div>
  );
};

export default ImageList;
