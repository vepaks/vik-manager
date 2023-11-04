import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from "./Table.module.scss"

export const Table = ({className}) => {
    return (

    <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-left">
            <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Име и Фамилия
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                   Адрес
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Данни
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Действие
                </th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 ltr:text-left rtl:text-left">
            <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                <td className="whitespace-nowrap px-4 py-2">
                    <a
                        href="#"
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                        View
                    </a>
                </td>
            </tr>

            <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Jane Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
                <td className="whitespace-nowrap px-4 py-2">
                    <a
                        href="#"
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                        View
                    </a>
                </td>
            </tr>

            <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Gary Barlow
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
                <td className="whitespace-nowrap px-4 py-2">
                    <a
                        href="#"
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                        View
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    );
};

export default Table;
