import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeC, StateType} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';
import {SectionWrapper} from '../../p1-main/m1-ui/SectionWrapper/SectionWrapper';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const {theme} = useSelector<AppStoreType, StateType>((state) => state.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (option: string) => {
        dispatch(changeThemeC(option))
    }

    return (
        <SectionWrapper forClass={s[theme]}>
            <h3 className={s[theme + '-text']}>homeworks 12</h3>
            <div className={s[theme]}>
                <div><br/></div>
                <SuperRadio value={theme} options={themes} onChangeOption={onChangeCallback}/>
            </div>
        </SectionWrapper>
    );
}

export default HW12;
