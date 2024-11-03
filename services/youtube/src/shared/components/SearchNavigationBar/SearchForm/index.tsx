"use client";
import * as s from "./style.css";

export const SearchForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const queryInput = form.elements.namedItem("query") as HTMLInputElement;
    const queryValue = queryInput?.value ?? "";

    console.log("🚀 ~ handleSubmit ~ queryValue:", queryValue);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input name="query" type="text" placeholder="검색" className={s.input} />
      <button type="submit" className={s.button}>
        🔍
      </button>
    </form>
  );
};
