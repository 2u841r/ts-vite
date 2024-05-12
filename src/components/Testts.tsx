import React from "react";

type LekhaType = {
  text?: string;
  age: number;
  fx: () => void;
  erre: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[],
  css?: React.CSSProperties
};

const Testts = (props: LekhaType) => {
  {
    console.log(props.erre);
  }

  return (
    <div style={props.css}>
      <h1>
        {" "}
        {props.text} {props.age}{" "}
      </h1>
      <button onClick={props.fx}> xx </button>
      {props.erre.map((item, index) => (
        <p key={index}> {item.title} </p>
      ))}
    </div>
  );
};



export default Testts;
