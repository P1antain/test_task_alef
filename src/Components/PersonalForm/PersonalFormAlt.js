import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import styles from "./PersonalForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getChildren, getFather } from "../../Redux/defaultRedux";

export default function PersonalFormAlt() {
  const family = useSelector((state) => state.default);
  const dispatch = useDispatch();

  const [inState, setState] = React.useState(0);
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const addForm = () => {
    // setState(inState + 1);
    append({ childName: "Andrey", childAge: "2" });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.header}>Персональные данные</h2>
        <label htmlFor="name" className={styles.label}>
          Имя
          <input
            type="text"
            id={"name"}
            className={styles.input}
            {...register("name")}
          />
        </label>
        <label htmlFor="age" className={styles.label}>
          Возраст
          <input
            type="text"
            id={"age"}
            className={styles.input}
            {...register("age")}
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
              <label htmlFor="" className={styles.label}>
                Имя
                <input
                  {...register(`test.${index}.childName`)}
                  className={styles.input}
                />
              </label>
              <label htmlFor="" className={styles.label}>
                Возраст
                <Controller
                  render={({ field }) => (
                    <input {...field} className={styles.input} />
                  )}
                  name={`test.${index}.childAge`}
                  control={control}
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
