import { getUsers, delUser } from '../../Redux/actions/utilityActions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function DelUsers () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    
    const data = useSelector(state=>state.rootReducer.users);
    function handleClick (e) {
        e.preventDefault();
        dispatch(delUser(e.target.name));
        window.location.reload();
    }
    return (
        <div>
            {
                data?.length>0 ?
                    data?.map(e=>
                    <div>
                        <p>
                        {e.firstName}
                        </p>
                        <p>
                        {e.email}
                        </p>
                        <button name={e.email} onClick={e=>handleClick(e)}>DEL USER</button>
                    </div>):''
            }
        </div>
    );
};