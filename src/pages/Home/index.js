import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import { LinkItem } from '../../components/LinkItem';
import Menu from '../../components/Menu';
import './home.css';

export default function Home() {
  const [link, setLink] = useState('')
  const [showModal, setShowModal] = useState(false)

  function handleShortLink(){
    setShowModal(true)
  }

    return(
      <div className="container-home">
        <div className="logo">
            <img src="/logo.png" alt="Sujeito Link Logo"/>
            <h1>Sujeito Link</h1>
            <span>Cole seu link para encuntar 👇</span>
        </div>

        <div className="area-input">
            <div>
                <FiLink size={24} color="#FFF"/>

                <input 
                    value={link}
                    placeholder="Cole seu link aqui"
                    onChange={(e) => setLink(e.target.value)}
                />
            </div>
            <button onClick={handleShortLink}>Encurtar link</button>
        </div>

        <Menu />
        {
          showModal && (
            <LinkItem 
              closeModal={() => setShowModal(false)}
            />
          )
        }
        
      </div>
    )
  }