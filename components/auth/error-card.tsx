
import { CardWrapper } from "./card-wrapper";   
import { FaExclamationTriangle } from "react-icons/fa";

export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
        >
            <div className="w-full flex items-center justify-center">
                <FaExclamationTriangle className="text-red-500 text-5xl" />
            </div>
        </CardWrapper>
     );
}
