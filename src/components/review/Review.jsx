import InputV2 from "../views/InputV2";

const Review = () => {
    return (
        <>
            <h1>Create a New Review</h1>
            <form>
                <label>
                    <p>Username</p>
                    <InputV2 element="input"  placeholder='Enter your Username'/>
                </label>
                <label>
                    <p>Review</p>
                    <InputV2 element="textarea" resize={false} placeholder="Write your Review"/>
                </label>
            </form>
        </>
    );
};

export default Review;
