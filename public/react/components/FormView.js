import { FunkoForm } from "./FunkoForm"
import { Navigation } from "./Navigation";

export const FormView = () => {

    return (
        <>
        <Navigation />
            <div className="box">
                <div className="p-3 bg-success mx-auto">
                    <FunkoForm />
                </div>
            </div>
        </>
    );
};