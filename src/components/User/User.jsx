import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from'@fortawesome/free-solid-svg-icons';

export default function User({ user, handleEdit, handleDelete }){
    return   <tr>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>{user.rol}</td>
                <td className="action-cell">
                    <button onClick={ () => handleEdit(user._id)} className="edit-btn"><i><FontAwesomeIcon icon={faPen}/></i></button>
                    <button onClick={ () => handleDelete(user._id)} className="delete-btn"><i><FontAwesomeIcon icon={faTrashCan} /></i></button>
                </td>
        </tr>
}