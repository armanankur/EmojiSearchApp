import React, { useEffect, useState } from "react";
import emojiData from "../data.json";
const EmojiSearch = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newData);
  }, [search]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <h1>Emoji Search App </h1>
      <input
        type="text"
        placeholder=" search emoji here "
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        style={{}}
      />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "0.3rem"
        }}
      >
        {data.map((emoji) => (
          <button key={emoji.title}>{emoji.symbol}</button>
        ))}
      </div>
    </div>
  );
};
export default EmojiSearch;
