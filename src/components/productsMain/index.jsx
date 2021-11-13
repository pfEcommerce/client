
import ProductCard from "../productCard"
import {useTransition, animated} from 'react-spring'
import StyledButton from "../styles/styled_button/styledButton"
import { useState } from "react"

export default function ProductsMain({ mock }) {


    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-evenly;
    const [estado,setEstado] = useState(true)

    const transition = useTransition(estado,{
        from:{opacity:0 , y:'-200px'},
        enter:{opacity:1 , y:'0px'},
        leave:{opacity:0 , y:'-200px'},
        delay:400
    })


    return (
        <div style={{ display: 'flex', 'flex-wrap': 'wrap', 'justify-content': 'space-evenly', width: '80%', margin: 'auto' }}>
                {/* <StyledButton onClick={()=>setEstado(!estado)}>ASD</StyledButton> */}
                {transition((style,item)=> item ? mock.length > 0 ? mock.map(e => <animated.div style={style}><ProductCard key={e.id} p={e} /></animated.div>) : 'Not found' : '')}
        </div>
    )
}