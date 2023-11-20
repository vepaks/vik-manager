
import {classNames} from "../../../../../shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {Button} from "../../../../../shared/ui/Button";
import {Input} from "../../../../../shared/ui/Input";

export const LoginForm = ({className}) => {
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
          <Input type="text" className={cls.input}/>
          <Input type="text" className={cls.input}/>
          <Button className={cls.loginBtn} >
            Влез
          </Button>
        </div>
    );
};

