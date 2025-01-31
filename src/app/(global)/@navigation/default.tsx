import { UsersAPI } from "@/api/Users";
import Sidebar from "@/components/Navbar/Sidebar";

export default async function NavigationDefaultPage() {
    const user = await UsersAPI.getUser();
    return (
        <div>
            <Sidebar user={user} />
        </div>
    );
};