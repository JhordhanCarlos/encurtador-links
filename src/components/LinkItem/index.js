import { FiX, FiClipboard } from 'react-icons/fi';
import './link-item.css';

export function LinkItem({closeModal}){
    return(
        <div className="modal-container">
            <div className="modal-header">
                <h1>Link Encurtado</h1>
                <button onClick={closeModal}>
                    <FiX size={28} color="#000" />
                </button>
            </div>

            <span>
                https://youtube.com
            </span>

            <button className="modal-link">
                https://bit.ly/3214
                <FiClipboard size={20} color="#FFF" />
            </button>
        </div>
    )
}