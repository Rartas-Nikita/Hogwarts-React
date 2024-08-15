
import Header from './blocks/header/header';
import Main from './blocks/main/main';
import AboutUs from './blocks/about-us/about-us';
import News from './blocks/news/news';
import Teachers from './blocks/teachers/teachers';
import Price from './blocks/price/price';
import Contacts from './blocks/contacts/contacts';
import Footer from './blocks/footer/footer';
import Modal from './blocks/modal/modal';
import PopupAlert from './blocks/popup-alert/popup-alert';
import YourComponent from './scripts/functional/form/form';
import Clear from './scripts/functional/bar/clear';
import ModalFunctional from './scripts/functional/modal/modal';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <AboutUs />
      <News />
      <Teachers />
      <Price />
      <Contacts />
      <Footer />
      <Modal />
      <PopupAlert />

      <ModalFunctional/>
      <YourComponent/>
      <Clear/>
    </div>
  );
}

export default App;