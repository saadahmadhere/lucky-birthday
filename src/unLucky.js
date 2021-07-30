import unHappy from "./unhappy.svg"

const UnLucky = () => {
    return ( 
        <div className="outcome">
            <p>You're Un lucky</p>
            <img src={unHappy} alt="happy" width="100%" height = "200px" />
        </div>
     );
}
 
export default UnLucky;