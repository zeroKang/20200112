import React, {useEffect} from 'react'
import { useParams , match} from  "react-router-dom";


const TodoList = ({match}) => {

    let page = useParams()

    console.log(page)


    return (
        <>
            <h3>TodoList</h3>

            <a href="/todo/list/2">2</a>
            <a href="/todo/list/3">3</a>
        </>
    )

}

export default TodoList