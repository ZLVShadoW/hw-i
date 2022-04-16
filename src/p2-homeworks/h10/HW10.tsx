import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC, StateType} from './bll/loadingReducer';
import {SectionWrapper} from '../../p1-main/m1-ui/SectionWrapper/SectionWrapper';

function HW10() {
    const {isLoading} = useSelector<AppStoreType, StateType>(state => state.loading)
    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1000)
    }

    return (
        <SectionWrapper>
            <h3>homeworks 10</h3>

            {isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

        </SectionWrapper>
    )
}

export default HW10
