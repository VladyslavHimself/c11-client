import {LoginForm} from "@/components/LoginForm/LoginForm";
import {api} from "@/api";
export default async function Home() {
    const user = await api.get("/api/users/profile").then(({ data }) => data)
    return (
      <>
          <LoginForm />
          <h1 style={{color: 'white'}}>asdfsd: {JSON.parse(user).email}</h1>
      </>
  );
}

