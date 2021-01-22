import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Redirect } from "react-router-dom";

function SearchBar(props) {
  const [inputText, setInputText] = useState("");
  const [showHidden, setShowHidden] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateInputText = (event) => setInputText(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText === "") {
      setShowHidden(true);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <OutlinedInput
        onChange={updateInputText}
        value={inputText}
        autoFocus={true}
      />
      <br />
      <Button type="submit" variant="containted" color="primary">
        Search
      </Button>
      {showHidden && <p>Please enter a user ID.</p>}
      {submitted ? <Redirect push to={`/player/${inputText.replace("#", "")}`} /> : null}
    </form>
  );
}

export default SearchBar;
