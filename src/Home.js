import { useContext } from "react";
import Twelve from "./Twelve";
import Navigation from "./Navigation";
import { globalContext } from "./App";

export default function Home() {
    const { globalIsLogin, globalsetIsLogin } = useContext(globalContext);

    return (
        <div>
            {globalIsLogin ? (
                <div>
                    <Navigation />
                    Welcome to the thread aura
                </div>
            ) : (
                <Twelve />
            )}
        </div>
    );
}
