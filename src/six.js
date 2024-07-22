export default function Six() {
    // const names = ["uha", "kalyani", "chinna"];
    // const namesList = names.map((review, index) => <li key={index}>{review}</li>);
    // const reviews = ["good", "nice", "beautiful"];
    // const reviewsList = reviews.map((review, index) => <li key={index}>{review}</li>);
    let review={"uha":"good product","kalyani":"nice product","varsha":"bad product"};
    return (
        <div>
            <ul>{Object.keys(review).map((key) => (
                <li key={key}>
                    <h2> {key}</h2>
                    <p>{review[key]}</p>
                </li>
            ))}
            </ul>

            <img src="../Strawberry-Tarts.png" alt="" width={200} />
        </div>
    );
}