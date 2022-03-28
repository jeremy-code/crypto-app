import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container py-4 d-flex justify-content-center">
        <p className="my-0 d-inline ">
          Made with <span className="heart">💜</span> by{" "}
          <a
            href="https://jeremynguyen.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Jeremy Nguyen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
