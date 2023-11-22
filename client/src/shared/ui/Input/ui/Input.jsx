import {classNames} from "../../../lib/classNames/classNames";
import cls from './Input.module.scss'

export const Input = (props) => {
    return (

        <input className={classNames(cls.Input, {}, ["block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-7" ])}
               onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>
    );
};

