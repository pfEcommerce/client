import { Link } from "react-router-dom"

export default function CardAdmin ({props}) {
    return (
        <Link to ={`/spAdmin/admin/${props.email}`}>
            <div>
                <br/>
                FirstName:
                {props.firstName}
                LastName:
                {props.lastName}
                <br/>
            </div>
        </Link>
    )
}