import useAlgoliaInsights from "../hooks/useAlgoliaInsights";

export default function Disparador (count = 0) {

    const { sendProductView } = useAlgoliaInsights();


    function getRandom() {
        return Math.floor(Math.random() * (20 - 1) + 1);
    }

    function timer () {
        const objectID = getRandom();
        setTimeout(()=>{
            sendProductView(objectID)
        },1000)
    }
    do{
        {count = count + 1}
        console.log(count)
        return (
            <div>
                {timer()}
                <h1>Disparando</h1>
                {Disparador(count)}
            </div>
        )
    } while (count < 1000)
}