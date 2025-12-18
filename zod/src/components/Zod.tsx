import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import "./App.css";

function Zod() {
    const formSchema = z.object({
        name: z.string(),
        email: z.email(),
        password: z.string().min(8).max(20),
    });

    const user = {
        name: "gopal",
    };

    console.log(formSchema.safeParse(user));

    type formFields = z.infer<typeof formSchema>;

    // use form
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<formFields>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<formFields> = async (data) => {
        await new Promise((res) => setTimeout(res, 1000));
        console.log(data);
    };

    return (
        <>
            <form action="submit" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="name" {...register("name")} />
                <input type="text" placeholder="email" {...register("email")} />
                <input
                    type="password"
                    placeholder="password"
                    {...register("password")}
                />

                <button disabled={isSubmitting} type="submit">
                    {isSubmitting ? "Loading" : "Submit"}
                </button>
            </form>
        </>
    );
}

export default Zod;
