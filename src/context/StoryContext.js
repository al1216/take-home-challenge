const { createContext, useState } = require("react");

const StoryContext = createContext();

const Provider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const valueToShare = {
    title,
    setTitle,
    description,
    setDescription,
    file,
    setFile,
  };

  return (
    <StoryContext.Provider value={valueToShare}>
      {children}
    </StoryContext.Provider>
  );
};

export { Provider };

export default StoryContext;
