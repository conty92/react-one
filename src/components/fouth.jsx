import "../styles/Fouth.css";
import Photo from "./../assets/images/Beautiful 010.jpg";
const Fouth = () => {
    const array = [
        {id: 1,src: Photo },
        {id: 2,src: Photo },
        {id: 3,src: Photo },
        {id: 4,src: Photo },
        {id: 5,src: Photo },
        {id: 6,src: Photo },
        {id: 7,src: Photo },
        {id: 8,src: Photo },
        {id: 9,src: Photo }
    ];
    

    return ( 
        <div className="array-container">
            {array.map((img) => {
                return (
                    <div className="img-container">
                        <img className="img" src={img.src} key={img.id}/>
                    </div>
                )
            }
            )}
        </div>
     );
}
 
export default Fouth;











