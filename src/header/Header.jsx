import React from 'react';
import styles from './Header.module.css';


function Header() {
  return (
      <div className={styles.header}>
          <div className={styles.container}>
              <div className={styles.headerMenu}>
                  <a>Главная</a>
                  <a>Скилы</a>
                  <a>Проекты</a>
                  <a>Контакты</a>
              </div>
          </div>

      </div>
  );
}

export default Header;
