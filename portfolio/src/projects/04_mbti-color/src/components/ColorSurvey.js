import React from "react";
import styles from "./ColorSurvey.module.scss";

function ColorSurvey({ mk }) {
  const { id, mbti, colorCode, createdAt, updatedAt } = mk;
  return (
    <div className={styles.mbtiColorSurvey}>
      <div className={styles.mbtiColorId}>{id}</div>
      <div className={styles.mbtiColorMbti}>{mbti}</div>
      <div className={styles.mbtiColorArrow}>
        <img className={styles.mbtiColorArrowIcon} src="/images/arrow.svg" />
      </div>
      <div
        className={styles.mbtiColorChip}
        style={{ backgroundColor: colorCode }}
      ></div>
      <div className={styles.mbtiColorCode}>{colorCode}</div>
    </div>
  );
}

export default ColorSurvey;
