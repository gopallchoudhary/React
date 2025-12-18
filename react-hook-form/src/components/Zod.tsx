import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

function Zod() {
    //use form
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        // form fields
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((res) => setTimeout(res, 1000));
        console.log(data);
    };

    return (
        <>
            <div>
                <form action="submit" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="email" {...register("email")} />
                    {errors.email && (
                        <div style={{ color: "red" }}>Email is required</div>
                    )}

                    <input type="text" placeholder="password" {...register("password")} />
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
        </>
    );
}

export default Zod;
