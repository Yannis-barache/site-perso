import {Fragment, useState} from "react";
import '../static/aside.css';

function Aside() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = (event) => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <Fragment>
            <aside>
                <div className="aside">
                    <div className="photo">
                        <img
                            src="https://avatars.githubusercontent.com/u/112858061?s=400&u=04f18100f23f395b6455758ea30cdd60aea60242&v=4"
                            alt="profil"/>
                    </div>
                    <div className="description">
                        <p>
                            <code>BARACHE Yannis</code>
                        </p>
                    </div>
                    <div className="lien">
                        <a
                            className="App-link"
                            href="https://github.com/Yannis-barache"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="https://techstack-generator.vercel.app/github-icon.svg"
                                 alt="Logo de GitHub animé"
                            />
                            <p>GitHub</p>
                        </a>
                    </div>
                </div>
            </aside>
            <label className="hamburger" >
                <input type="checkbox" onClick={toggle}/>
                <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom"
                          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
            <div className={isOpen ? "dropdown-menuopen" : "dropdown-menu"}>
                <ul>
                    <li>
                        <a href="https://yannis-barache.github.io/site-perso/"
                            target="_blank"
                            rel="noopener noreferrer">Site personnel</a>
                    </li>
                    <li>
                        <a href="https://github.com/Yannis-barache" target="_blank"
                           rel="noopener noreferrer"> Github</a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default Aside;