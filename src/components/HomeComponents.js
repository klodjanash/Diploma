import { Component, React } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Puzzle from "react-image-puzzle";
import History from "./HistoryComponents";
import CarouselComponent from "./CarouseComponent";
import AccordionComponent from "./AccordionComponent";
import DifficultComponent from "./DifficultComponents";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      fotot: [
        "assets/images/spongebob.jpg",
        "assets/images/borebardha.jpg",
        "assets/images/patriku.jpg",
      ],
      open: false,
      prova: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.doneCaptcha = this.doneCaptcha.bind(this);
    this.toggleModal1 = this.toggleModal1.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      prova: true,
    });
  }
  toggleModal1() {
    this.setState({
      open: !this.state.open,
      prova: false,
    });
  }
  toggleModal2() {
    this.setState({
      prova: !this.state.prova,
    });
  }

  doneCaptcha() {
    setTimeout(() => {
      this.toggleModal();
    }, 1000);
    setTimeout(() => {
      this.toggleModal1();
    }, 1000);
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render() {
    return (
      <div className="container">
        <div className="row align-items-start"></div>
        <div>
          <div className="row row-header">
            <div className="col-12" style={{ marginTop: "20px" }}>
              <h1 className="titull"> Captcha </h1>
              <p>
                CAPTCHA (Testi publik plotësisht i automatizuar për të
                diferencuar kompjuterat dhe njerëzit veçmas) është një lloj mase
                sigurie e njohur si vërtetimi i përgjigjes ndaj sfidës. CAPTCHA
                ju ndihmon të mbroheni nga spam dhe passwordet e dekriptuara
                duke ju kërkuar të kryeni një test të thjeshtë që vërteton se
                jeni njeri dhe jo një kompjuter që përpiqet të depërtojë në një
                llogari të mbrojtura me fjalëkalim. Një test CAPTCHA përbëhet
                nga dy pjesë të thjeshta: një sekuencë e gjeneruar rastësisht
                shkronjash dhe/ose numrash që shfaqen si një imazh i
                shtrembëruar dhe një kuti teksti. Për të kaluar një test dhe për
                të vërtetuar identitetin tuaj njerëzor, thjesht shkruani
                karakteret që shihni në imazh në kutinë e tekstit. Kjo formë e
                CAPTCHA kërkon që përdoruesit të vlerësojnë saktë dhe të fusin
                një sekuencë shkronjash ose numrash të perceptueshëm në një
                imazh të deformuar të shfaqur në ekranin e tyre.
                <br />
                Njeriut mesatar i duhen afërsisht 10 sekonda për të zgjidhur një
                CAPTCHA tipike. <hr />
              </p>
            </div>
            <div className="carousel" style={{ marginLeft: "-20px" }}>
              <CarouselComponent />
            </div>
          </div>

          <div className="row row-header">
            <div className="col-12">
              <h3 className="titull"> Historiku i Captcha</h3>
              <History />
            </div>
          </div>

          <div className="row row-header">
            <div className="col-12">
              <div>
                <hr />
                <h3 className="titull"> LLojet e Captcha </h3>
                <AccordionComponent />
                <hr />
                <div className="row row-header">
                  <div className="col-12">
                    <h3 className="titull"> Vështirësitë e captchas</h3>
                    <DifficultComponent />
                  </div>
                </div>

                <Button primary onClick={this.toggleModal}>
                  Shfaq captcha
                </Button>

                <Modal
                  isOpen={this.state.isModalOpen}
                  toggle={this.toggleModal}
                  style={{ width: "29%" }}
                >
                  <ModalHeader toggle={this.toggleModal}>PUPCHA </ModalHeader>
                  <ModalBody>
                    <p>Për të vazhduar më tej zgjidheni PUPCHA!</p>
                    <Puzzle
                      style={{ width: "100%" }}
                      image={this.state.fotot[this.getRndInteger(0, 2)]}
                      level={2}
                      onDone={this.doneCaptcha}
                    />
                  </ModalBody>
                </Modal>

                <Modal
                  isOpen={this.state.open}
                  toggle={this.toggleModal1}
                  style={{ width: "28%" }}
                >
                  <ModalHeader toggle={this.toggleModal1}>
                    {" "}
                    Suksese!{" "}
                  </ModalHeader>
                  <ModalBody>
                    <img
                      src="assets/images/right.jfif"
                      height="100%"
                      width="100%"
                      alt="Captcha"
                    />
                  </ModalBody>
                </Modal>

                {!this.state.isModalOpen && this.state.prova && (
                  <Modal
                    isOpen={this.state.prova}
                    toggle={this.toggleModal2}
                    style={{ width: "28%" }}
                  >
                    <ModalHeader toggle={this.toggleModal2}>
                      {" "}
                      Provo përsëri!{" "}
                    </ModalHeader>
                    <ModalBody>
                      <img
                        src="assets/images/incorrect-icon.webp"
                        height="100%"
                        width="100%"
                        alt="Captcha"
                      />
                    </ModalBody>
                  </Modal>
                )}
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
