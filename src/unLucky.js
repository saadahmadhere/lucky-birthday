import unHappy from "./unhappy.svg"

const UnLucky = () => {
    return ( 
        <div className="outcome">
            <h3>Alas! Your Birthday is not a lucky number!</h3>
            <img src={unHappy} alt="happy" width="100%" height = "200px" />
        </div>
     );
}
 
export default UnLucky;