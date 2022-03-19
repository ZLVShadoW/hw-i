import React from 'react';
import cn from './SectionWrapper.module.css'

export const SectionWrapper:React.FC = ({children}) => {
    return (
        <div className={cn.wrapperBlock}>
            {children}
        </div>
    );
}