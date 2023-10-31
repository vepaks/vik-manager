import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from './RegisterForm.module.scss'
import {Input} from "../../../shared/ui/Input";
import {Button} from "../../../shared/ui/Button";

export const RegisterForm = ({className}) => {
    return (
        <div className={classNames(cls.RegistrationForm, {}, [className])}>
            <Input/>
            <Button>Регистрирай се</Button>
        </div>
    );
};

