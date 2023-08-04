import styles from "./App.module.scss";

import Adventures from "./components/adventures";
import CardContainer from "./components/cardContainer";
import Header from "./components/header";
import Hero from "./components/hero";
import Info from "./components/info";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CardContainer />
      <Info />
      <Adventures />
      <footer className={styles.footer}></footer>
    </>
  );
}

export default App;
