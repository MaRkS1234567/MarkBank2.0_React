import Button from "../../ui/button/Button";
import Field from "../../ui/field/Field";
import styles from "./Auth.module.scss";
import { useAuthPage } from "./useAuthPage";

const Auth = () => {
  const { setType, register, handleSubmit, errors, isLoading, onSubmit } =
    useAuthPage();

  return (
    <div className={styles.center}>
      <div className={styles.auth}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="transparent">
          <Field
            error={errors?.email?.message}
            type="email"
            name="email"
            register={register}
            options={{
              ...register("email", {
                required: "Email is required",
              }),
            }}
            placeholder="Enter email"
          />
          <Field
            error={errors?.password?.message}
            type="password"
            name="password"
            register={register}
            options={{
              ...register("password", {
                required: "Password is required",
              }),
            }}
            placeholder="Enter password"
          />
          <div className={styles.buttons}>
            <Button
              buttonText={"Sign In"}
              type={"purple"}
              width={50}
              height={50}
              clickHandler={() => setType("login")}
            />
            <Button
              buttonText={"Sign Up"}
              type={"common"}
              width={50}
              height={50}
              position={"right"}
              clickHandler={() => setType("register")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
