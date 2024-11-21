import { IoGiftSharp } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";


function UserCard({user, openEdit, deleteUser}) {
  return (
    <div className="card">
      <h3 className="card__name">{user?.first_name} {user?.last_name}</h3>
      <div className="card__info">
        <div>
          <span className="card__label">Correo</span>
          {user?.email}
        </div>
        <div>
          <span className="card__label">Cumpleaños</span>
          <span className="card__data"><IoGiftSharp  className="icon--gift" />{user?.birthday}</span>
        </div>
      </div>
      <div className="card__btns">
        <button className="btn btn--delete" onClick={()=> deleteUser(user?.id)}><FaTrashCan /></button>
        <button className="btn btn--edit" onClick={()=> openEdit(user)}><FaPencilAlt /></button>
      </div>
    </div>
  )
}

export default UserCard