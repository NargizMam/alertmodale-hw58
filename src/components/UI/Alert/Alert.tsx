import React from 'react';

interface Props {
    type: string;
    onDismiss? : () =>  void;
}

const Alert: React.FC<Props> = ({type, onDismiss}) => {
    return (
        <>
            <div className={`alert , alert-${type} col-6`}>
                <span className="CloseBtn" style={{display: onDismiss===undefined ?'none': 'block'}}
                >&times;</span>
                This is an alert box.
            </div>
        </>
    );
};

export default Alert;