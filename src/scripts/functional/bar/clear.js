import React, { useEffect } from 'react';

const Clear = () => {
  useEffect(() => {
    const handleHashChange = (e) => {
      window.history.replaceState(null, "", e.oldURL);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div></div>
  );
};

export default Clear;