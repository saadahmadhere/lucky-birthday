import happy from './happy.svg'

const Lucky = () => {
    return ( 
        <div className="outcome">
            <h3>You are a lucky person</h3>
            <img src={happy} alt="happy" width="100%" height = "200px" />
        </div>
     );
}
 
export default Lucky;