import * as Unicons from "@iconscout/react-unicons";
import { useEffect, useState } from "react";

const Services = () => {
  const [modalViews, setModalViews] = useState(null);
  const [modalBtns, setModalBtns] = useState(null);
  const [modalCloses, setModalCloses] = useState(null);

  useEffect(() => {
    setModalViews(document.querySelectorAll(".services__modal"));
    setModalBtns(document.querySelectorAll(".services__button"));
    setModalCloses(document.querySelectorAll(".services__modal-close"));
  }, []);

  if (modalViews && modalBtns && modalCloses) {
    const modal = (modalClick) => {
      console.log(modalViews[modalClick]);
      modalViews[modalClick].classList.add("active-modal");
    };

    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener("click", () => {
        modal(i);
      });
    });

    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
          modalView.classList.remove("active-modal");
        });
      });
    });
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        {/* ---SERVICES 1--- */}
        <div className="services__content">
          <div>
            <Unicons.UilWebGrid className="services__icon" />
            <h3 className="services__title">
              Web <br /> Development{" "}
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More
            <Unicons.UilArrowRight className="button__icon" />
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Web <br /> Development
              </h4>
              <Unicons.UilTimes className="services__modal-close" />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>I develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>I create ux element interactions.</p>
                </li>
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ---SERVICES 1 END--- */}

        {/* ---SERVICES 2--- */}
        <div className="services__content">
          <div>
            <Unicons.UilArrow className="services__icon" />
            <h3 className="services__title">
              XR <br /> Development{" "}
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More
            <Unicons.UilArrowRight className="button__icon" />
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                XR <br /> Development
              </h4>
              <Unicons.UilTimes className="services__modal-close" />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>I develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>I create ux element interactions.</p>
                </li>
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ---SERVICES 2 END--- */}

        {/* ---SERVICES 3--- */}
        <div className="services__content">
          <div>
            <Unicons.UilPen className="services__icon" />
            <h3 className="services__title">
              iOS <br /> Development{" "}
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More
            <Unicons.UilArrowRight className="button__icon" />
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                iOS <br /> Development
              </h4>
              <Unicons.UilTimes className="services__modal-close" />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>I develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>I create ux element interactions.</p>
                </li>
                <li className="services__modal-service">
                  <Unicons.UilCheckCircle className="services__modal-icon" />
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ---SERVICES 3 END--- */}
      </div>
    </section>
  );
};

export default Services;
