import React from "react";
import styles from "./PreviewPage.module.css";
import { useSelector } from "react-redux";
export default function PreviewPage() {
  const getFamily = useSelector((state) => state.default);
  return (
    <>

            <div className={styles.previewPage}>
                <div className={styles.block}>
                    <h2 className={styles.header}>Персональные данные</h2>
                    <p className={styles.text}>
                        {getFamily.father.name} {getFamily.father.age}
                    </p>
                </div>
                <ul className={styles.lists}>
                    <h2 className={styles.header}>Дети</h2>
                    {getFamily.children.map((el, index)=>{

                        return(
                            <li key={index} className={styles.item}>
                                {el.childName} {el.childAge}
                            </li>
                        )
                    })}
                </ul>
            </div>


    </>
  );
}
