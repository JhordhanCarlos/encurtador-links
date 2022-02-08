import { FiX, FiClipboard } from 'react-icons/fi';
import './link-item.css';

export function LinkItem({closeModal, content}){
    async function copyLink  (){
        await navigator.clipboard.writeText(content.link)
        alert("URL copiada com sucesso!")
    }

    return(
        <div className="modal-container">
            <div className="modal-header">
                <h1>Link Encurtado</h1>
                <button onClick={closeModal}>
                    <FiX size={28} color="#000" />
                </button>
            </div>

            <span>
                {content.long_url}
            </span>

            <button className="modal-link" onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color="#FFF" />
            </button>
        </div>
    )
}