import Image from "next/image";
import styles from "./styles.module.scss";

import Briefcase from "../../assets/briefcase.svg";
import Github from "../../assets/github.svg";
import Globe from "../../assets/globe.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Mail from "../../assets/mail.svg";
import MapPin from "../../assets/map-pin.svg";
import Twitter from "../../assets/twitter.svg";

export function SideBar() {
  return (
    <aside className={styles.container}>
      <div className={`${styles.profile} card`}>
        <div className="avatar">
          <div className="tape-section" />
          <img
            src="https://github.com/saymondamasio.png"
            alt="Saymon Damásio"
          />
          <div className="tape-section" />
        </div>
        <strong>Saymon Damásio</strong>
        <small>Full Stack Developer</small>
      </div>

      <div className={`${styles.contact} card`}>
        <ul>
          <li>
            <a
              href="https://www.google.com.br/maps/place/Guaxup%C3%A9,+MG"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin />

              <span>Guaxupé, MG - Brasil</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.rocketseat.com.br"
              target="_blank"
              rel="noreferrer"
            >
              <Briefcase />

              <span>Rocketseat</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/saymondamasio"
              target="_blank"
              rel="noreferrer"
            >
              <Github />

              <span>saymondamasio</span>
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/saymondamasio"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />

              <span>saymondamasio</span>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/saymondamasio"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />

              <span>saymondamasio</span>
            </a>
          </li>

          <li>
            <a
              href="https://instagram.com/saymondamasio"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />

              <span>saymondamasio</span>
            </a>
          </li>
          {/* 
          <li>
            <a
              href="https://saymondamasio.github.io"
              target="_blank"
              rel="noreferrer"
            >
              <Globe />

              <span>saymondamasio.github.io</span>
            </a>
          </li> */}

          <li>
            <a href="mailto:saymondamasio95@gmail.com">
              <Mail />

              <span>saymondamasio95@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>

      <div className={`${styles.techs} card`}>
        <strong>Tecnologias</strong>

        <div className="technologies-grid">
          <div className="tag">Javascript</div>
          <div className="tag">Typescript</div>
          <div className="tag">ReactJS</div>
          <div className="tag">React Native</div>
          <div className="tag">NodeJS</div>
          <div className="tag">Git</div>
          <div className="tag">GitHub</div>
          <div className="tag">HTML</div>
          <div className="tag">CSS</div>
        </div>
      </div>

      <div className={`${styles.experiencies} card`}>
        <strong>Experiências</strong>

        <ul>
          {/* <li>
            <b>Rocketseat</b>
            <p className="period">2019 - Atualmente</p>
            <p className="role">Community Experience</p>
          </li> */}
        </ul>
      </div>

      <div className={`${styles.education} card`}>
        <strong>Educação</strong>

        <ul>
          <li>
            <b>Rocketseat</b>
            <p className="period">2021 - Atualmente</p>
            <p className="course">Ignite Pro</p>
          </li>

          <li>
            <b>IFPA</b>
            <p className="period">2012 - 2016</p>
            <p className="course">Tecnico de Informática</p>
          </li>
        </ul>
      </div>
    </aside>
  )
}
