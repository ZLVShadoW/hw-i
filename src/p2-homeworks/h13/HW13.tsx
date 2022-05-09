import React from 'react';
import {SectionWrapper} from '../../p1-main/m1-ui/SectionWrapper/SectionWrapper';
import {Request} from './Request';
import {Double} from './double';

export const HW13 = () => {
    return (
        <SectionWrapper>
            <h3>homework 13</h3>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '39%', border: '1px solid #000', padding: 15}}><Request/></div>
                <div style={{width: '39%', border: '1px solid #000', padding: 15}}><Double/></div>
            </div>
        </SectionWrapper>
    )
}

