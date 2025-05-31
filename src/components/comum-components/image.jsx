

const Img = ({imageUrl, styles, chose, name}) => {
   return chose === 1 ? <img src={imageUrl} style={styles} alt=""/> : 
   chose === 0 ? <img src={imageUrl} alt=""/> : <img src={imageUrl} alt="" className={name} /> 
}


export default Img