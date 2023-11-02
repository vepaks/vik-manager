import {classNames} from "../../../../../shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {Input} from "../../../../../shared/ui/Input";
import {Button} from "../../../../../shared/ui/Button";

export const LoginForm = ({className}) => {
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input/>
            <Button>Влез</Button>
        </div>
    );
};

