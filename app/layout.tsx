import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
// @ts-ignore
    'og:title': "salary calculator, зарплата калькулятор, рубль доллар",
    'og:description': "Online tool for salary calculation",
    title: "salary calculator, зарплата калькулятор, рубль доллар",
    description: "Calculate your salary in dollars and rubles",
    keywords: "salary calculator, зарплата калькулятор, рубль доллар",
    icons: {
        icon: "/openai.svg",
    },

};

//        <meta name="description" content="Calculate your salary in dollars and rubles" />
//         <meta name="keywords" content="salary calculator, зарплата калькулятор, рубль доллар" />
//         <meta property="og:title" content={t.title} />
//         <meta property="og:description" content="Online tool for salary calculation" />
// import { useState, useEffect } from 'react';
import Head from 'next/head';
import SalaryCalculator from "@/app/page";
// export default SalaryCalculator;

export default function RootLayout({children}) {

    // Автоматическое обновление курса (заглушка)
    let language = 'ru'
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
        <html lang="en">
        <body className={inter.className}>
        <Head>
            <title>{t.title}</title>
        </Head>

        <div className="">
            <div className="max-w-md_ m-auto bg-white_ rounded-xl_ shadow-md_ overflow-hidden md:max-w-2xl_">
                <div className="p-8_">
                    <SalaryCalculator/>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
