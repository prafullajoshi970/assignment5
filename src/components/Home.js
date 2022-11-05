import Second from "./Second"
import photo from "./photo.png"
import photo2 from "./photo2.jpg"


const Home=() =>{
   const image= <img src={photo} alt="img" style={{height:130,width:140,borderradius:2}}></img>
   const image2=<img src={photo2} alt="img" style={{height:130,width:150}}></img>
   
   return(
        <>
        <Second image={image} name="Spiderman" time="127min" year={2022} para="With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.">.</Second>
        <Second image={image2} name="Bramhastra" time="185min" year={2022} para="This is the story of Shiva who sets out in search of love and self-discovery. During his journey, he has to face many evil forces that threaten our existence.">.</Second>
        
        </>
    )
} 
export default Home