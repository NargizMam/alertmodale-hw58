import React from 'react';
import BackDrop from "../../BackDrop/BackDrop";

interface Props extends React.PropsWithChildren{
    show: boolean;
    title: string;
    onClose: React.MouseEventHandler
}
const Modal:React.FC<Props> = ({show,onClose, title, children}) => {
    return (
        <>
            <BackDrop show={show} />
            <div className="modal show"
                 style={{display: show ? 'block' : 'none'}}
                 onClick={onClose}>
                <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">
                                Some kinda title
                            </h1>
                            <button className="border" onClick={onClose}>X</button>
                        </div>
                        <p className="p-2">This is modal content</p>

                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;