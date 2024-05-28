import styles from "./TodoItem.module.css";

const TodoItem = ({ txt, delTodo, edTodo, keye }) => {
  // console.log(keye);
  return (
    <div className={styles.TodoItem}>
      <div>{txt}</div>
      <button className={styles.edit} onClick={(e) => edTodo(e, keye)}>
        edit
      </button>
      <button className={styles.delete} onClick={(e) => delTodo(e, keye)}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
