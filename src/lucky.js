import happy from './happy.svg'

const Lucky = () => {
    return ( 
        <div className="outcome">
            <p>You're lucky</p>
            <img src={happy} alt="happy" width="100%" height = "200px" />
        </div>
     );
}
 
export default Lucky;