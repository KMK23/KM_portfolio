import React, { useEffect, useState } from "react";
import styles from "./ColorInput.module.scss";

function ColorInput({ colorCodeValue, handleChange }) {
  const onChange = (e) => {
    handleChange(e.target.value);
  };

  const isValidColorCode = (colorCodeValue) => {
    // 첫자리 #, 뒤에 여섯자리는 영소문자 a-f, 영대문자 A-f, 숫자 0-9
    const regxp = /^#[a-fA-F0-9]{6}$/;
    return regxp.test(colorCodeValue);
  };
  const handleBlur = () => {
    if (!isValidColorCode(colorCodeValue)) {
      //잘못된 코드를 입력했을 때
      alert(
        "컬러코드는 '#'과 함께 영소문자 a-f, 영대문자 A-F, 숫자 0-9를 조합한 일곱자리를 입력하세요"
      );
      handleChange("#000000");
    }
  };
  return (
    <div className={styles.mbtiColorInputContainer}>
      <input
        className={styles.mbtiColorInput}
        value={colorCodeValue}
        maxLength={7}
        onChange={onChange}
        onBlur={handleBlur}
      />
      <span
        className={styles.mbtiColorInputChip}
        style={{ backgroundColor: colorCodeValue }}
      ></span>
    </div>
  );
}

export default ColorInput;
