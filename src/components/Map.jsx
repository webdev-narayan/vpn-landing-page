import { WorldMap } from "../constants/data"

const Map = () => {
    return (
        <section className="mt-24">
            <div className="flex flex-col gap-2">
                <h4 className="text-4xl font-semibold text-center text-app_text">Huge Global Network<br />of Fast VPN</h4>
                <p className="text-app_text_light text-center">See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move locations.</p>
            </div>
            <div className="my-28">
                <img src={WorldMap} alt="" />
            </div>
        </section>
    )
}

export default Map
