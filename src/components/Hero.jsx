import Norway from '../assets/norway.png'
import Location from '../assets/Fill 219 (1).png'
const Hero = (props) => {
    
    return(
        <div className="nav--container">
            <img src={Norway} alt="" className="norway--logo" />
            <img src={Location} alt="" className="location" />

            <h1 className="japan">Japan</h1>
            <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank" className="maps">View on google maps</a>
            <h2 className="mount">Mount Fuji</h2>
            <p className='date'>12 Jan, 2021 - 24 Jan, 2021</p>
            <p className="text1">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>

        </div>
    )
}

export default Hero