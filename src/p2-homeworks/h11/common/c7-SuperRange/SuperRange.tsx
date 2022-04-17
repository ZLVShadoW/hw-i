import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value?: number
    max: number
    bcolor?: string
    bsc?: string
    st?: React.CSSProperties | undefined
    po?: React.CSSProperties
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        value, max, bcolor, bsc, st, po,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    let w = value! * 100 / max
    let forbColor = bcolor ? bcolor : 'olive'
    let forbsc = bcolor ? bcolor : 'olive'

    return (
        <div className={s.range} style={st ? st : undefined}>
            <div className={s.progressOverlay} style={po}>
                <div className={s.progress} style={{
                    background: `${forbColor}`, width: `${w}%`, boxShadow: `3px 0 0 0 ${forbsc}`
                }}/>
            </div>
            <input
                max={max}
                value={value}
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </div>
    )
}

export default SuperRange
