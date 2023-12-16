import Image from 'next/image';
import {useEffect, useState} from 'react';

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);

        if (darkMode) {
            window.localStorage.setItem('theme', 'light');
        } else {
            window.localStorage.setItem('theme', 'dark');
        }
    };

    useEffect(() => {
        const body = document.querySelector('body'),
            theme = window.localStorage.getItem('theme');

        if (theme === 'dark') {
            setDarkMode(true);
            body.classList.add('active-dark-mode');
            body.classList.remove('active-light-mode');
        } else {
            setDarkMode(false);
            body.classList.add('active-light-mode');
            body.classList.remove('active-dark-mode');
        }
    }, [darkMode]);

    return (
        <div className="my_switcher">
            <ul>
                <li>
                    <button
                        type="button"
                        data-theme="light"
                        className={`setColor light ${darkMode ? '' : 'active'}`}
                        onClick={() => toggleTheme()}
                    >
                        <Image
                            width={18}
                            height={18}
                            src="/images/about/sun-01.svg"
                            alt="Sun images"
                        />
                        <span className="title" title="Light Mode">
                          Light
                        </span>
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        data-theme="dark"
                        className={`setColor dark ${darkMode ? 'active' : ''}`}
                        onClick={() => toggleTheme()}
                    >
                        <Image
                            width={18}
                            height={18}
                            src="/images/about/vector.svg"
                            alt="Vector Images"
                        />
                        <span className="title" title="Dark Mode">
                          Dark
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ThemeSwitcher;
