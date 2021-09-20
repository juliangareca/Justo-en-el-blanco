// import { reject, resolve } from "core-js/fn/promise";
import { useEffect, useState } from 'react';
import frazada from '../components/Carrousel/frazadas.svg'
import sabana from '../components/Carrousel/sabanas.svg'
import toalla from '../components/Carrousel/toallas.svg'
import ItemList from '../components/ItemList/ItemList'


function getList () {
    return new Promise ((resolve,reject) =>{
        setTimeout(() => resolve([
            {
            id: '1',
            name: 'frazada',
            description: '1 Plaza y Media',
            stock: '10',
            precio: '$3999,99',
            img: frazada,
            },
            {
            id: '2',
            name: 'sabana',
            description: '2 Plaza y Media',
            stock: '4',
            precio: '$1999,99',
            img: sabana,
            },
            {
            id: '3',
            name: 'toalla',
            description: 'mediana',
            stock: '30',
            precio: '$799,99',
            img: toalla,
            }
            ]), 2000
    )
    })
}




const ItemListContainer = (props) => {

    const [listItem, setListItem] = useState([])

    


    useEffect(() =>{
        const list = getList()
        list.then(list => {
            setListItem(list)
        })
    }, [])


    return (   
            
            <>
                <ItemList listItem={listItem}/>
             </> 
            )
}

export default ItemListContainer