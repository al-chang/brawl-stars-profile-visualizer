import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { FilledInput } from "@material-ui/core";

function SearchBar() {
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

  const style = {
    color: "#ffffff",
    "margin-bottom": "50px",
  };

  return (
    <div className="center container">
      <form onSubmit={handleSubmit} className="form">
        <FilledInput
          onChange={updateInputText}
          value={inputText}
          autoFocus={true}
          style={style}
          placeholder="Enter User ID"
        />
        <br />
        <Button
          style={style}
          color="primary"
          type="submit"
          variant="containted"
        >
          Search
        </Button>

        {showHidden && (
          <p style={{ color: "#ffffff" }}>Please enter a user ID.</p>
        )}
        {submitted ? (
          <Redirect push to={`/player/${inputText.replace("#", "")}`} />
        ) : null}
      </form>
    </div>
  );
}

export default SearchBar;
