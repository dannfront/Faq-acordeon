import HeadingFaq from "./components/HeadingFaq"
import ListQuestions from "./components/ListQuestions"

function Acordeon() {
    return (
        <main className="w-[350px] bg-White mx-auto p-5 mt-[-10rem] rounded-xl mb-10 md:w-[600px]">
            <HeadingFaq/>

            <ListQuestions />

        </main>
    )
}

export default Acordeon
