import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByType, getType, filterByCreated, filterByName, filterByAttack, filterMenorCien } from "../../actions";

export default function Filter({setCurrentPage, setOrder}) {
   
    const dispatch = useDispatch();
    const type=useSelector((state) =>state.types) 


    useEffect(()=> {
        dispatch(getType())
    }, [dispatch])

    function handleFilterType(e) {
      setCurrentPage(1)
      dispatch(filterByType(e.target.value))
     };

    function handleFilterByCreated(e){
      setCurrentPage(1)
      dispatch(filterByCreated(e.target.value))
    };

    function handleFilterByName(e){
      e.preventDefault();
      dispatch(filterByName(e.target.value))
      setCurrentPage(1);
      setOrder(e.target.value)
    };

    function handleFilterByAttack(e){
      e.preventDefault();
      dispatch(filterByAttack(e.target.value))
      setCurrentPage(1);
      setOrder(e.target.value)
    }
    function handleFilterMenorCien(e) {
      e.preventDefault()
      dispatch(filterMenorCien(e.target.value))
      setCurrentPage(1)
      setOrder(e.target.value)
    }



    return (
        <div>
          <select onChange={e=>handleFilterType(e)}> 
           <option value="All Types">all types</option> 
                {
                    type.map( type => (
                        <option value={type.name} key={type.name}>{type.name}</option>
                    ))
                }  
            
            
          </select>
          <select onChange={e=> handleFilterByName(e)}>
            <option value ='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
          </select>
          <select onChange={e=>handleFilterByCreated(e)}>
            <option value= 'Api'>Api</option>
            <option value = 'Created'>Created</option>
            <option value = 'All'>All</option>
          </select>
          <select onChange={e=>handleFilterByAttack(e)}>
            <option value = 'Hight'>Hight Attack</option>
            <option value = 'Low'>Low Attack</option>
          </select>
          <select onChange={e=>handleFilterMenorCien(e)}>
            <option value ='all Pokes'>all Pokes</option>
            <option value='menor a cien'>Menor a Cien</option>
          </select>
    </div>
    )
}
