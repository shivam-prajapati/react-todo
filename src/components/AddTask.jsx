import styles from "./AddTask.module.css";
const AddTask = ({ f, btnTxt, inTxt }) => {
  return (
    <form onSubmit={f}>
      <label className={styles.lb}>
        Enter your name:
        <input type="text" defaultValue={inTxt} />
      </label>
      <button className={styles.btn}>{btnTxt}</button>
    </form>
  );
};

export default AddTask;
