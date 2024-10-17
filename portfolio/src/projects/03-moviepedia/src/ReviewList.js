import React, { useState } from "react";
import Rating from "./Rating";
import styles from "./ReviewList.module.scss"; // 모듈 CSS를 가져옵니다.
import ReviewForm from "./ReviewForm";
import useTranslate from "./hooks/useTranslate";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, handleDelete, handleEdit }) {
  const handleDeleteClick = () => {
    handleDelete(item.docId, item.imgUrl);
  };

  const handleEditClick = () => {
    handleEdit(item.id);
  };
  const t = useTranslate();
  return (
    <div className={styles.moviePediaReviewListItem}>
      <img
        className={styles.moviePediaReviewListItemImg}
        alt=""
        src={item.imgUrl}
      />
      <div className={styles.moviePediaReviewListItemRows}>
        <h1 className={styles.moviePediaReviewListItemTitle}>{item.title}</h1>
        <Rating
          className={styles.moviePediaReviewListItemRating}
          hoverRating={item.rating}
        />
        <p className={styles.moviePediaReviewListItemDate}>
          {formatDate(item.createdAt)}
        </p>
        <p className={styles.moviePediaReviewListItemContent}>{item.content}</p>
        <div className={styles.moviePediaReviewListItemButtons}>
          <button
            className={styles.moviePediaReviewListItemEditButton}
            onClick={handleEditClick}
          >
            {t("edit button")}
          </button>
          <button
            className={styles.moviePediaReviewListItemDeleteButton}
            onClick={handleDeleteClick}
          >
            {t("delete button")}
          </button>
        </div>
      </div>
    </div>
  );
}

function ReviewList({ items, handleDelete, onUpdate, onUpdateSuccess }) {
  const [editingId, setEditingId] = useState(null);

  return (
    <ul className={styles.moviePediaReviewList}>
      {items.map((item) => {
        if (item.id === editingId) {
          const { title, rating, content, imgUrl, docId } = item;
          const initailValues = { title, rating, content, imgUrl: null };

          const handleSubmit = (collectionName, dataObj) => {
            const result = onUpdate(collectionName, dataObj, docId);
            return result;
          };

          const handleSubmitSuccess = (result) => {
            onUpdateSuccess(result);
            setEditingId(null);
          };
          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initailValues}
                initialPreview={imgUrl}
                handleCancel={setEditingId}
                onSubmit={handleSubmit}
                handleSubmitSuccess={handleSubmitSuccess}
              />
            </li>
          );
        }

        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              handleDelete={handleDelete}
              handleEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
