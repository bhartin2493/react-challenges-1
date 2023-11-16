import React from 'react'

const CommonLeftComponent = (props) => {
    const { name, description, difficulty, sample_image_link } = props.data;
  return (
    <div className="left-content">
      <h2>{name}</h2>
      <p>{`Description : ${description}`}</p>
      <h3>{`Difficulty : ${difficulty}`}</h3>
      <h3>Sample Output (GIF representation)</h3>
      <img
        className="img-container"
        alt="sample-img"
        src={sample_image_link}></img>
    </div>
  );
}

export default CommonLeftComponent;