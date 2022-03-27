const Footer = () => {
  const styles = {
    textDecoration: "text-decoration-skip",
    color: "#463acb",
  };

  return (
    <footer>
      <div className="container py-4 d-flex justify-content-center">
        <p className="my-0 d-inline ">
          Made with <span className="heart">💜</span> by{" "}
          <a
            href="https://jeremynguyen.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={styles}
          >
            Jeremy Nguyen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
