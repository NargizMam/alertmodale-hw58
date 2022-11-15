import React, {useState} from 'react';
import Modal from "../UI/Modal/Modal";

const Basic = () => {
    const [showModal, setShowModal] = useState(false);


    const openFirstPage = () => {
        setShowModal(true);
    };
    const cancel = () => setShowModal(false)

    return (
        <>
            <div className="container-fluid m-5">
                <button className="btn btn-dark m-2 "
                        onClick={openFirstPage}
                >Уровень 1</button>
                <Modal show={showModal} title='New modal window' onClose={cancel}/>
                <button className="btn btn-dark m-2">Уровень 2</button>
            </div>

        </>
    );
};

export default Basic;