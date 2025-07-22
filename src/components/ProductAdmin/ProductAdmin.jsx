import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from'@fortawesome/free-solid-svg-icons';

const FILE_URL = import.meta.env.VITE_FILE_API


export default function ProductAdmin({ product, handleEdit, handleDelete }){
    
    return   <tr>
                <td className="images-cell"><img src={`${FILE_URL}/products/${product.image}`} alt={product.name} /></td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.created}</td>
                <td className="action-cell">
                    <button onClick={ () => handleEdit(product._id)} className="edit-btn"><i><FontAwesomeIcon icon={faPen}/></i></button>
                    <button onClick={ () => handleDelete(product._id)} className="delete-btn"><i><FontAwesomeIcon icon={faTrashCan} /></i></button>
                </td>
    </tr>
}