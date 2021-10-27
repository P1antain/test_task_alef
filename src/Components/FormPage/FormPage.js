import React from "react";
import PersonalForm from "../PersonalForm/PersonalForm";
import styles from "./formPage.module.css";
export default function FormPage() {
  return (
    <>
      <div className={styles.formPage}>
        <PersonalForm />
      </div>
    </>
  );
}
