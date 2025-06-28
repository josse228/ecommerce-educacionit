import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from'@fortawesome/free-solid-svg-icons';


export default function ProductAdmin({ product, handleEdit, handleDelete }){
    return   <tr>
                <td className="images-cell"><img src={product.image} alt="Celular-TCL" /></td>
                <td>{product.product}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.created}</td>
                <td className="action-cell">
                    <button onClick={ () => handleEdit(product.id)} className="edit-btn"><i><FontAwesomeIcon icon={faPen}/></i></button>
                    <button onClick={ () => handleDelete(product.id)} className="delete-btn"><i><FontAwesomeIcon icon={faTrashCan} /></i></button>
                </td>
    </tr>
}