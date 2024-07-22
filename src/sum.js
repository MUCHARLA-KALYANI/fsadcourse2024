import First from "./first";
import Intro from "./intro";

export default function Sum(a, b) {
    return (
    <div>
        <h1>{a * b + b + 3}</h1>
        <First />
        <Intro />
        </div>);
}