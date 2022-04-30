import React from 'react';
import cn from './SectionWrapper.module.css'

type SectionWrapperPropsType = {
    forClass?: string
}

export const SectionWrapper: React.FC<SectionWrapperPropsType> = (
    {
        children,
        forClass
    }) => {

    const finalClassName = forClass ? `${cn.wrapperBlock} ${forClass}` : cn.wrapperBlock

    return (
        <div className={finalClassName}>
            {children}
        </div>
    );
}