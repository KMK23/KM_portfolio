// import React, { useContext } from "react";
import styles from "./LocaleSelect.module.scss";
import { useLocale, useSetLocale } from "./contexts/LocaleContext";

function LocaleSelect({ props }) {
  // const { locale, setLocale } = useContext(LocaleContext);
  const locale = useLocale();
  const setLocale = useSetLocale();

  const handleChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <select
      className={styles.LocaleSelect}
      onChange={handleChange}
      value={locale}
    >
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LocaleSelect;
