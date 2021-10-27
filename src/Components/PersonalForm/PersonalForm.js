import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import styles from "./PersonalForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getChildren, getFather } from "../../Redux/defaultRedux";
import {useHistory} from "react-router-dom";

export default function PersonalForm() {
  let history = useHistory()
  const family = useSelector((state) => state.default);
  const dispatch = useDispatch();

  const { register, handleSubmit, control, reset } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "baby",
  });
  const onSubmit = (data) => {
    sendData(data)
  };
  function sendData(data){
    let father = data.father
    let children = data.baby
    dispatch(getFather(father));
    dispatch(getChildren(children));
    reset()
    history.push('/preview')
  }
  const addForm = () => {
    append({ childName: "Andrey", childAge: "2" });
  };
  console.log(family)
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.header_wrapper}>
          <h2 className={styles.header}>Персональные данные</h2>
        </div>
        <label htmlFor="name" className={styles.label}>
          Имя
          <input
            type="text"
            id={"name"}
            className={styles.input}
            {...register('father.name',{
              pattern: /[A-Za-zА-Яа-яЁё]{3}/
            })}

          />
        </label>
        <label htmlFor="age" className={styles.label}>
          Возраст
          <input
            type="text"
            id={"age"}
            className={styles.input}
            {...register('father.age',{
              pattern: /[0-9]/
            })}
          />
        </label>
        <div className={styles.block}>
          <h2 className={styles.header}>Дети (макс. 5)</h2>
          {fields.length <= 4 && (
            <button className={styles.btn} onClick={addForm} type={"button"}>
              Добавить ребенка
            </button>
          )}
        </div>
        <ul className={styles.wrapper}>
          {fields.map((item, index) => (
            <li key={item.id} className={styles.item}>
              <label htmlFor={`childName${index}`} className={styles.label}>
                Имя
                <input
                    id={`childName${index}`}
                  {...register(`baby.${index}.childName`,{
                    pattern: /[A-Za-zА-Яа-яЁё]{3}/
                  })}
                  className={styles.input}
                />
              </label>
              <label htmlFor={`childAge${index}`} className={styles.label}>
                Возраст
                <input
                    id={`childAge${index}`}
                  {...register(`baby.${index}.childAge`,{
                    pattern: /[0-9]/
                  })}
                  className={styles.input}
                />
              </label>
              <button
                type="button"
                onClick={() => remove(index)}
                className={styles.btn__delete}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
        <button className={styles.btn__save}>Сохранить</button>
      </form>
    </>
  );
}
