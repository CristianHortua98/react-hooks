import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { use, useContext } from "react"
import { useNavigate } from "react-router";

export const ProfilePage = () => {

    // const { user } = useContext(UserContext);
    const { user, logout } = use(UserContext);
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl">Perfil del usuario</h1>
            <hr />

            <pre className="my-4 w-[80%] overflow-x-auto">
                { JSON.stringify(user, null, 2)}
            </pre>

            <Button variant="destructive" onClick={logout}>
                Salir
            </Button>
        </div>
    )
}
