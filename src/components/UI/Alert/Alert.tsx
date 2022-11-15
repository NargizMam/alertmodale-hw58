import React from 'react';

interface Props {
    type: string;
    dismiss: undefined;
}

const Alert: React.FC<Props> = ({type, dismiss}) => {
    return (
        <>
            <div className={['alert', type].join(' ')}>
                <span className="CloseBtn" style={{display: dismiss ===undefined ?'none': 'block'}}
                      onClick={dismiss}
                >&times;</span>
                This is an alert box.
            </div>
        </>
    );
};

export default Alert;