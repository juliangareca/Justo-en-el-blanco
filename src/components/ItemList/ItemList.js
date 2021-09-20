import Item from '../Item/Item'



const ItemList = ({ listItem }) =>{


    return ( 
        <div className="row cardText col-sm-10">
           {listItem.map( prod => (
               <Item key={prod.id}  lalista={prod} />
           ))}
        </div>
               
    )
    
}

export default ItemList;