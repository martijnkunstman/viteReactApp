import './Item.css'
function Item(props) {
    const {data} = props;
    return(
      <>
          <div className="item">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>{data.date}</p>
            <p>{data.id}</p>
          </div> 
      </>
    )    
  }  
  export default Item
  