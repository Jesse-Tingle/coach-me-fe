import React from 'react';
import './MotiveModal.scss';
import { ReactComponent as Xicon } from '../../../../utils/assets/Xicon.svg';

const MotiveModal = props => {
    const { show, toggleModal, motivation } = props;

    if (show) {
        return (
            <div className='motive-container'>
                <div className='motive-box'>
                    <Xicon className='x' onClick={() => toggleModal(show)} />
                    <div className='label'>
                        <label>Motivations</label>
                    </div>
                    <p>{motivation}</p>
                    <button onClick={() => toggleModal(show)}> close</button>
                </div>
            </div>
        );
    }
    return null;
};
export default MotiveModal;
