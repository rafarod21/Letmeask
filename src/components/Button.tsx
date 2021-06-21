import { useState } from 'react';

export const Button: React.FC = () => {
  const [count, setCount] = useState(0);

  function handleClickButton() {
    setCount(count + 1);
  }

  return <button onClick={handleClickButton}>{count}</button>;
};
