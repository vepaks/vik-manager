import {classNames} from "../../../lib/classNames/classNames";
import cls from './Button.module.scss'

export class ThemeButton {
    static CLEAR = new ThemeButton('clear');
    constructor(Button) {
        this.Button = Button;
    }
    toString() {
        return this.Button;
    }
}


export const Button = (props) => {

    const {
        children,
        className,
        theme,
        ...otherProps
    } = props;

    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps} >
           {children}
        </button>
    );
};

