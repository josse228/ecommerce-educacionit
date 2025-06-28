import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from'@fortawesome/free-solid-svg-icons';

export default function User({ user, handleEdit, handleDelete }){
    return   <tr>
                <td>{user.user}</td>
                <td>{user.email}</td>
                <td>{user.rol}</td>
                <td>{user.password}</td>
                <td className="action-cell">
                    <button onClick={ () => handleEdit(user.id)} className="edit-btn"><i><FontAwesomeIcon icon={faPen}/></i></button>
                    <button onClick={ () => handleDelete(user.id)} className="delete-btn"><i><FontAwesomeIcon icon={faTrashCan} /></i></button>
                </td>
        </tr>
}