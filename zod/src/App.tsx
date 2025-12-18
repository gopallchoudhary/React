import z from "zod";

import "./App.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userFormSchema = z.object({
  firstName: z.string().optional(),
  email: z.email(),
  profileUrl: z.url(),
  age: z.number(),
  friends: z.array(z.string()).max(3),
  settings: z.object({
    isSubscribed: z.boolean(),
  }),
});

type UserForm = z.infer<typeof userFormSchema>;

function App() {
  const form = useForm<UserForm>({
    resolver: zodResolver(userFormSchema),
  });

  

  return <></>;
}

export default App;
