import React, { useState } from "react";
import { FaTrash, FaAngleDown, FaAngleUp } from "react-icons/fa";

export const Depends = () => {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <div className="tasks">
      <div className="task">
        <div>
          <h2>task title</h2>
          <FaAngleUp
            style={{ display: show ? "none" : "block" }}
            onClick={toggleShow}
          />
          <FaAngleDown
            style={{ display: show ? "block" : "none" }}
            onClick={toggleShow}
          />
          <FaTrash className="icon" />
        </div>
        {show && (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas minus
            placeat similique consequatur quod? Autem, consequatur. Voluptas sed
            vel at mollitia voluptates quibusdam nisi perspiciatis, porro in
            autem assumenda sunt.
          </p>
        )}
      </div>
    </div>
  );
};
