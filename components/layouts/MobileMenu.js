import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import {useEffect} from 'react';
import MainMenu from './MainMenu';

const MobileMenu = () => {
    const handleMobileMenu = () => {
        const dropdownLinks = document.querySelectorAll(
                ".popup-mobile-manu .mainmenu .has-dropdown > a"
            ),
            submenus = document.querySelectorAll(
                ".popup-mobile-manu .mainmenu .has-dropdown .axil-submenu"
            );

        let bootstrapJs;
        if (document !== undefined) {
            bootstrapJs = require("bootstrap");
        }

        submenus.forEach((item) => {
            item.classList.add("collapse");
        });

        dropdownLinks.forEach((item) => {
            const submenu = item.nextElementSibling;

            item.addEventListener("click", (e) => {
                e.preventDefault();
                const collapsedItem = new bootstrapJs.Collapse(submenu);
                collapsedItem.toggle();

                submenus.forEach((menu) => {
                    if (menu.classList.contains("show")) {
                        const openedCollapse = new bootstrapJs.Collapse(menu);
                        openedCollapse.toggle();
                    }
                });
            });
        });
    };

    const toggleMobileMenu = () => {
        const body = document.querySelector("body"),
            submenus = document.querySelectorAll(
                ".popup-mobile-manu .mainmenu .has-dropdown .axil-submenu"
            );

        body.classList.toggle("popup-mobile-manu-visible");

        let bootstrapJs;
        if (document !== undefined) {
            bootstrapJs = require("bootstrap");
        }

        submenus.forEach((menu) => {
            if (menu.classList.contains("show")) {
                const openedCollapse = new bootstrapJs.Collapse(menu);
                openedCollapse.toggle();
            }
        });
    };

    const closeMobileMenu = () => {
        const body = document.querySelector("body");
        body.classList.remove("popup-mobile-manu-visible");
        if (body.classList.contains(".popup-mobile-manu-visible")) {
        }
    }

    useEffect(() => {
        handleMobileMenu();

        // Close menu while navigate to another page
        Router.events.on('routeChangeStart', closeMobileMenu);
        return () => {
            Router.events.off('routeChangeStart', closeMobileMenu);
        }
    }, []);

    return (
        <div
            className="popup-mobile-manu"
            onClick={(e) => {
                if (e.target == document.querySelector(".popup-mobile-manu")) {
                    toggleMobileMenu();
                }
            }}
        >
            <div className="inner">
                <div className="mobileheader">
                    <div className="logo">
                        <Link href="/home-01">
                            <a>
                                <Image
                                    width={250}
                                    height={60}
                                    src="/images/logo/keystoke.svg"
                                    alt="Logo images"
                                />
                            </a>
                        </Link>
                    </div>
                    <button
                        className="close-menu"
                        onClick={() => {
                            toggleMobileMenu();
                        }}
                    ></button>
                </div>
                <div className="menu-item">
                    <MainMenu/>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
