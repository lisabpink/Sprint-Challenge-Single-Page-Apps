import React, { useState } from "react";
import { Button } from "semantic-ui-react";

export default function SearchForm({ onSearch }) {
  const [search, setSearch] = useState({ name: "" });
  const handleInputChange = event => {
    setSearch({ ...search, name: event.target.value });
  };

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(search.name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={search.name}
          name="name"
        />

        <Button content="Primary" primary type="submit">
          Search
        </Button>
      </form>
    </section>
  );
}
