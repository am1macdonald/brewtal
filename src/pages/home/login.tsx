import styles from "./login.module.scss";

interface props {
  hello: string | undefined;
}

const Login = ({ hello }: props) => {
  return (
    <>
      <div>
        <h1>Brewtal</h1>
        <p className={styles.subText}>
          <del>Stop</del>
          <span className={styles.caretSpacer}>^</span>the grind.
        </p>
        <p className={styles.slanted}>Love</p>
      </div>
      <div className="form-container">
        <p>
          Sign-up for our newsletter to stay up to date with development. `$
          {hello}`
        </p>
        <form className={styles.form} id="newsletter-signup">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
          <input className="btn" type="submit" value="enter"></input>
        </form>
      </div>
    </>
  );
};

export default Login;
