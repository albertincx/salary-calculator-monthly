"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';

const SalaryCalculator = () => {
    const [hourlyRate, setHourlyRate] = useState(15);
    const [hoursPerWeek, setHoursPerWeek] = useState(40);
    const [exchangeRate, setExchangeRate] = useState(87.5);
    const [language, setLanguage] = useState('ru');
    const [currency, setCurrency] = useState('USD');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Автоматическое обновление курса (заглушка)
    useEffect(() => {
        // Здесь можно добавить реальный API для курса валют
        const fetchExchangeRate = async () => {
            // Пример: fetch('https://api.exchangerate-api.com/v4/latest/USD')
            // В реальном приложении используйте актуальный API
        };
        fetchExchangeRate();
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const calculateSalary = () => {
        const weeklySalary = hourlyRate * hoursPerWeek;
        const monthlySalary = weeklySalary * 4;
        const salaryInRub = monthlySalary * exchangeRate;

        return {
            weekly: weeklySalary.toFixed(2),
            monthly: monthlySalary.toFixed(2),
            rub: salaryInRub.toFixed(2)
        };
    };

    const translations = {
        ru: {
            title: 'Калькулятор зарплаты',
            hourlyRate: 'Почасовая ставка ($)',
            hoursPerWeek: 'Часов в неделю',
            exchangeRate: 'Курс USD к RUB',
            calculate: 'Рассчитать',
            weeklySalary: 'Зарплата в неделю',
            monthlySalary: 'Зарплата в месяц',
            inRubles: 'В рублях',
            language: 'Язык',
            currency: 'Валюта'
        },
        en: {
            title: 'Salary Calculator',
            hourlyRate: 'Hourly rate ($)',
            hoursPerWeek: 'Hours per week',
            exchangeRate: 'USD to RUB rate',
            calculate: 'Calculate',
            weeklySalary: 'Weekly salary',
            monthlySalary: 'Monthly salary',
            inRubles: 'In rubles',
            language: 'Language',
            currency: 'Currency'
        }
    };

    const t = translations[language];

    return (
        <>
            <Head>
                <title>{t.title}</title>
                <meta name="description" content="Calculate your salary in dollars and rubles" />
                <meta name="keywords" content="salary calculator, зарплата калькулятор, рубль доллар" />
                <meta property="og:title" content={t.title} />
                <meta property="og:description" content="Online tool for salary calculation" />
            </Head>

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
                <div className="max-w-md mx-auto bg-white_ dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="p-8">
                        {/* Toggle Group */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{t.title}</h1>
                            <div className="flex gap-2">
                                {/* Language Toggle */}
                                <div className="flex border rounded overflow-hidden dark:border-gray-600">
                                    <button
                                        className={`px-3 py-1 focus:outline-none transition-colors ${language === 'ru' ? 'bg-blue-500 text-white dark:bg-blue-400 dark:text-gray-900' : 'bg-transparent text-gray-800 dark:text-gray-100'}`}
                                        onClick={() => setLanguage('ru')}
                                        type="button"
                                    >
                                        Русский
                                    </button>
                                    <button
                                        className={`px-3 py-1 focus:outline-none transition-colors ${language === 'en' ? 'bg-blue-500 text-white dark:bg-blue-400 dark:text-gray-900' : 'bg-transparent text-gray-800 dark:text-gray-100'}`}
                                        onClick={() => setLanguage('en')}
                                        type="button"
                                    >
                                        English
                                    </button>
                                </div>
                                {/* Currency Toggle */}
                                <div className="flex border rounded overflow-hidden dark:border-gray-600">
                                    <button
                                        className={`px-3 py-1 focus:outline-none transition-colors ${currency === 'USD' ? 'bg-green-500 text-white dark:bg-green-400 dark:text-gray-900' : 'bg-transparent text-gray-800 dark:text-gray-100'}`}
                                        onClick={() => setCurrency('USD')}
                                        type="button"
                                    >
                                        USD
                                    </button>
                                    <button
                                        className={`px-3 py-1 focus:outline-none transition-colors ${currency === 'EUR' ? 'bg-green-500 text-white dark:bg-green-400 dark:text-gray-900' : 'bg-transparent text-gray-800 dark:text-gray-100'}`}
                                        onClick={() => setCurrency('EUR')}
                                        type="button"
                                    >
                                        EUR
                                    </button>
                                </div>
                                {/* Theme Toggle */}
                                <button
                                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                    className="px-3 py-1 border rounded dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 flex items-center gap-1"
                                    title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                                >
                                    {theme === 'light' ? (
                                        <span role="img" aria-label="sun">🌞</span>
                                    ) : (
                                        <span role="img" aria-label="moon">🌙</span>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700_ dark:text-gray-300 mb-1">
                                    {t.hourlyRate}
                                </label>
                                <input
                                    type="number"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(parseFloat(e.target.value))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700_ dark:text-gray-300 mb-1">
                                    {t.hoursPerWeek}
                                </label>
                                <input
                                    type="number"
                                    value={hoursPerWeek}
                                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700_ dark:text-gray-300 mb-1">
                                    {t.exchangeRate}
                                </label>
                                <input
                                    type="number"
                                    value={exchangeRate}
                                    onChange={(e) => setExchangeRate(parseFloat(e.target.value))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                            <h2 className="text-lg font-medium text-gray-800 mb-2">{t.title}</h2>
                            <div className="space-y-2">
                                <p className="text-gray-600">
                                    {t.weeklySalary}: <span className="font-semibold">{calculateSalary().weekly} {currency}</span>
                                </p>
                                <p className="text-gray-600">
                                    {t.monthlySalary}: <span className="font-semibold">{calculateSalary().monthly} {currency}</span>
                                </p>
                                <p className="text-gray-600">
                                    {t.inRubles}: <span className="font-semibold">{calculateSalary().rub} RUB</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SalaryCalculator;
