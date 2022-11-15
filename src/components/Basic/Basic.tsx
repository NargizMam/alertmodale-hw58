import React, {useState} from 'react';
import Modal from "../UI/Modal/Modal";
import Alert from "../UI/Alert/Alert";

const Basic = () => {
    const [showModal, setShowModal] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [types] = useState(['primary', 'success', 'danger', 'warning']);
    const [title] = useState('Some kinda modal title');


    const openFirstPage = () => {
        setShowModal(true);
    };
    const openSecondPage = () => {
        setOpenAlert(true);
    };
    const cancel = () => setShowModal(false)

    const someHandler = () => {
        console.log('Функция передана!')
    };

    const alert = types.map(type => (
        <Alert type = {type}
               key = {type}
               onDismiss = {someHandler}
        />

    ));
    return (
        <>
            <div className="container-fluid m-5">
                <button className="btn btn-dark m-2 "
                        onClick={openFirstPage}
                >Уровень 1</button>
                <Modal show={showModal} title={title} onClose={cancel}/>
                <button className="btn btn-dark m-2"
                        onClick={openSecondPage}
                >Уровень 2</button>
                {openAlert ? alert : null}
            </div>

        </>
    );
};

export default Basic;