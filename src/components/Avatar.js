import React from 'react';

function Avatar(props) {
  return (
    <img src={props.src} alt={props.alt} height={props.height} width={props.width} />
  );
}

export default Avatar;
