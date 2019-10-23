import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMetric } from '../../../actions/clientActions';
import './healthMetricForm.scss';
import iconfastingBloodGlucose from '../../utils/assets/Blood.svg';
import iconbloodPressure from '../../utils/assets/bloodPressure.svg';
import iconweight from '../../utils/assets/weight.svg';
import { addMetric } from '../../../actions/clientActions';
import { translate } from '../../utils/language/translate';
import SubmitModal from './submitModal';
import moment from 'moment';

function HealthMetricForm(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [bpOver, setBpOver] = useState();
    const [bpUnder, setBpUnder] = useState();
    const [bS, setBS] = useState();
    const [weight, setWeight] = useState();
    const [metrics, setMetrics] = useState();
    const [show, setshow] = useState(false);
    
    const handleInputChange = e => {
        e.preventDefault();
        setBS(e.target.value);
    };
    const handleInputChange2 = e => {
        e.preventDefault();
        setBpOver(e.target.value);
    };
    const handleInputChange3 = e => {
        e.preventDefault();
        setBpUnder(e.target.value);
    };
    const handleInputChange4 = e => {
        e.preventDefault();
        setWeight(e.target.value);
    };

    useEffect(() => {
        setMetrics({
            records: [
                {
                    fields: {
                        Client_Name: state.clientinfo.id,
                        Date_time: moment().format(),
                        Blood_pressure_over: parseInt(bpOver),
                        Blood_pressure_under: parseInt(bpUnder),
                        Blood_sugar: parseInt(bS),
                        Weight: parseInt(weight)
                    }
                }
            ]
        });
        console.log('state', state.clientinfo)
    }, [bpOver, bpUnder, bS, weight]);

    const submitNewMetric = e => {
        e.preventDefault();
        dispatch(addMetric(metrics));
        setshow(!show);
    };
    const submitMetric = e => {
        props.history.push('/dashboard-client');
    };
    const failMetric = e => {
        setshow(!show);
    };

    return (
        <div className='metric-form-wrapper'>
            <SubmitModal
                show={show}
                onSubmit={submitMetric}
                bpOver={bpOver}
                bpUnder={bpUnder}
                bS={bS}
                weight={weight}
                failMetric={failMetric}
            />

            <h1>{translate('HMFtitle')}</h1>

            <form onSubmit={submitNewMetric}>
                <div className='input-label'>
                    <div className='img-wrapper'>
                        <img
                            className='icon'
                            alt='Blood Gluscose Icon'
                            src={iconfastingBloodGlucose}
                        ></img>
                    </div>
                    <h3>{translate('fastingGlucose')}</h3>
                </div>
                <div className='input-wrapper'>
                    <input
                        className='metric-input'
                        onChange={handleInputChange}
                        type='number'
                        value={bS}
                        name='Blood_sugar'
                        minLength='2'
                        pattern="[0-9]*" 
                        ng-model="vm.onlyNumbers"
                        min="0"
                    />
                    <p>mg/dL</p>
                </div>

                <div className='input-label'>
                    <div className='img-wrapper'>
                        <img
                            className='icon'
                            alt='Weight Icon'
                            src={iconweight}
                        ></img>
                    </div>
                    <h3>{translate('weight')}</h3>
                </div>
                <div className='input-wrapper'>
                    <input
                        className='metric-input'
                        onChange={handleInputChange4}
                        type='number'
                        value={weight}
                        name='Weight'
                        minLength='2'
                        pattern="[0-9]*" 
                        ng-model="vm.onlyNumbers"
                        min="0"
                    />
                    <p>lbs</p>
                </div>

                <div className='input-label'>
                    <div className='img-wrapper'>
                        <img
                            className='icon'
                            alt='Blood Pressure Icon'
                            src={iconbloodPressure}
                        ></img>
                    </div>
                    <h3>{translate('bp')}</h3>
                </div>
                <div className='blood-pressure-container'>
                    <div className='input-wrapper'>
                        <input
                            className='metric-input-pb'
                            onChange={handleInputChange2}
                            type='number'
                            value={bpOver}
                            name='Blood_pressure_over'
                            minLength='2'
                            pattern="[0-9]*" 
                            ng-model="vm.onlyNumbers"
                            min="0"
                        />
                        <span>/</span>
                        <input
                            className='metric-input-pb'
                            onChange={handleInputChange3}
                            type='number'
                            value={bpUnder}
                            name='Blood_pressure_under'
                            minLength='2'
                            pattern="[0-9]*" 
                            ng-model="vm.onlyNumbers"
                            min="0"
                        />
                        <p>mmHg</p>
                    </div>
                </div>

                <button>{translate('submitBtn')}</button>
            </form>
        </div>
    );
}

export default HealthMetricForm;
