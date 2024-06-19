import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
const TodoList = ({ list, delTodo, edTodo }) => {
  // console.log(list);
  if (list.length === 0) return <div>No Tasks added currently</div>;
  return (
    <div className={styles.TodoList}>
      {list.map(({ tsk, id }) => (
        <TodoItem
          keye={id}
          key={id}
          txt={tsk}
          delTodo={delTodo}
          edTodo={edTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
