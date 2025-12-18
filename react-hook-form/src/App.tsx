import { useForm, type SubmitHandler } from "react-hook-form";
import "./App.css";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Zod from "./components/Zod";
//type
type FormFields = {
  email: string;
  password: string;
};

// schema
const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

function App() {
  //use form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    // form fields
    defaultValues: {
      email: "test12@gmail.com",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      console.log(data);
      throw new Error("");
    } catch (error) {
      setError("root", { message: "This email already taken" });
    }
  };

  return (
    <>
      <div>
        <form action="submit" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="email"
            {...register("email", {
              required: "Email is required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must include @";
                }
                return true;
              },
            })}
          />
          {errors.email && (
            <div style={{ color: "red" }}>Email is required</div>
          )}
          <input
            type="text"
            placeholder="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have atleast 8 characters",
              },
              maxLength: {
                value: 8,
                message: "xyz"
              }
            })}
          />
          {errors.password && (
            <div style={{ color: "red" }}>Password is required</div>
          )}
          <br />
          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading" : "Submit"}
          </button>
          {errors.root && (
            <div style={{ color: "red" }}>{errors.root.message}</div>
          )}
        </form>
      </div>

      <Zod />
    </>
  );
}

export default App;
