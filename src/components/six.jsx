import "../styles/Six.css";
import picture from "./../assets/images/Beautiful 014.jpg";
const Six = () => {
    const array = [
        {id: 1,src: picture},
        {id: 2,src: picture},
        {id: 3,src: picture},
        {id: 4,src: picture},
        {id: 5,src: picture},
        {id: 6,src: picture},
        {id: 7,src: picture},
        {id: 8,src: picture}
    
    ];
    return ( 
        <div className="multiple">
        {array.map((img)=>{
            return(
                <div className="photo-container">
                    <img className="pic" src={img.src} key={img.id}/>
                    <h3>the hudo</h3>
                    <p>there are so many type of hudo</p>
                    <bottom>see more </bottom>
                </div>
            )
        }
        )}
        </div>
     );
}
 
export default Six;