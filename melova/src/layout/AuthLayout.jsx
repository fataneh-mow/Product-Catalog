import { Outlet } from "react-router-dom"

export default function AuthLayout () {
    return (
        <div>
            this is the auth Layout
            <main>
                <Outlet />
            </main>
        </div>
    )
}