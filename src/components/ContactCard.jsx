import React, { useState } from "react";

export const ContactCard = (props) => {
  const { name, email, phone, image } = props;
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="cont" onClick={() => setActive(!active)}>
        {phone}
      </div>
    );
  }

  return (
    <>
      <div className="cont" onClick={() => setActive(!active)}>
        <div className="img">
          <image src={image}>{image}</image>
          <div className="text">
            <div>{name}</div>
            <div>{email}</div>
          </div>
        </div>
      </div>
    </>
  );
};
