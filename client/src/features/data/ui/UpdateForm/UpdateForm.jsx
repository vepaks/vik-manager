import axios from 'axios';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './CreateForm.module.scss';
import { Loader } from '../../../../shared/ui/Loader';
import { Input } from '../../../../shared/ui/Input';
import { Button } from '../../../../shared/ui/Button';
import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import usePostData from '../../models/postData';
import { useSelector } from 'react-redux';
import { AppLink } from '../../../../shared/ui/AppLink/AppLink';

export const UpdateForm = ({ className }) => {
    const { t } = useTranslation();
    const { postData, updateData } = usePostData(); // Assume you have a hook for updating data
    const [isUpdating, setIsUpdating] = useState(false); // Track whether it's an update operation

    const [address, setAddress] = useState('');
    const [chatId, setUserId] = useState('');
    const [additionalData, setAdditionalData] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const parentId = useSelector((state) => state.user.currentUser?.id);

    const [addressError, setAddressError] = useState('');
    const [chatIdError, setUserIdError] = useState('');
    const [additionalDataError, setAdditionalDataError] = useState('');

    const validInput = () => {
        let isValid = true;
        if (address.trim() === '') {
            setAddressError(t('Адресата е задължителен!'));
            isValid = false;
        }
        if (chatId.trim() === '') {
            setUserIdError(t('Номерът на потребителя е задължителен!'));
            isValid = false;
        }
        if (additionalData.trim() === '') {
            setAdditionalDataError(t('Полето за данни е задължително!'));
            isValid = false;
        }
        return isValid;
    };

    const handleClick = async () => {
        setAddressError('');
        setUserIdError('');
        setAdditionalDataError('');

        if (validInput()) {
            try {
                if (isUpdating) {
                    // Update logic - Adapt this part based on your actual update logic
                    await updateData(/* Pass the necessary parameters for update */);
                    setSuccessMessage(t('Успешно обновено!'));
                } else {
                    // Create logic
                    await postData(chatId, parentId, address, additionalData);
                    setSuccessMessage(t('Добавихте нови данни! Добави още?'));
                }
            } catch (error) {
                console.error('Error submitting data:', error.message);
            }
        }
    };

    return (
        <div className={classNames(cls, {}, [className])}>
            <Suspense fallback={<Loader />}>
                <div>
                    {/* ... (rest of the component remains the same) */}
                    <div className={classNames(cls.CreateForm, {}, [className, 'w-full px-6 py-4 mt-6 overflow-hidden shadow-md sm:max-w-md sm:rounded-lg'])}>
                        {/* ... (form input fields remain the same) */}
                        <div className="flex items-center justify-end mt-4">
                            <Button
                                className={classNames(cls.Button, {}, [
                                    'inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md active:bg-gray-900 false text-center',
                                ])}
                                type="submit"
                                onClick={handleClick}
                            >
                                {isUpdating ? t('Обнови') : t('Добави')}
                            </Button>
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};
