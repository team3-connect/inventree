import { FunkoForm } from "./FunkoForm"
import { Navigation } from "./Navigation";

export const FormView = () => {

    return (
        <>
        <Navigation />
            <div className="add-form">
                <div className="">
                    <FunkoForm />
                </div>
            </div>
        </>
    );
};