import React, { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span onClick={() => setCount(count => count + 1)}>{count}</span>
    </div>
  );
};

export default Count;
