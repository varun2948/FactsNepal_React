import React,{ Component } from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

class HappyClient extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render () {
        return(
            <section className="happy-clients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="left-title">
                            <h4>Our Happy Clients</h4>
                            <p>several of them er asked how
                            satisfied they are with our services.
                            here are their statement
                            </p>
                        </div>
                        </div>
                        <div className="col-md-9">

                        <div className="row testomonial-wrapper">
                            <div className="col-lg-6 col-md-12">
                            <div className="testimonials">
                            <Fade bottom duration={1000} delay={500} distance={"30px"} >
                                <div className="testimonials__inner">
                                <div className="testimonials__image img-wrp">
                                    <img src="img/assets/e2.jpg" alt="user" />
                                </div>
                                <div className="testimonials__detail">
                                    <h6 className="mt-3"> krishna Prasad Sharma</h6>
                                    <div className="testimonials__label mb-2"> CEO Him Electronics</div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores repellat sed autem labore
                                    voluptas nulla nemo assumenda at mollitia sunt.
                                    </p>
                                </div>

                                </div>
                                </Fade>
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                            <Fade bottom duration={1000} delay={800} distance={"30px"} >
                            <div className="testimonials">
                                <div className="testimonials__inner">
                                <div className="testimonials__image img-wrp">
                                    <img src="img/assets/e3.jpg " alt=" user" />
                                </div>
                                <div className="testimonials__detail">
                                    <h6 className="mt-3"> krishna Prasad Sharma</h6>
                                    <div className="testimonials__label  mb-2"> CEO Him Electronics</div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores repellat sed autem labore
                                    voluptas nulla nemo assumenda at mollitia sunt.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </Fade>
                            </div>
                            <div className="col-lg-6 col-md-12">
                            <Fade bottom duration={1000} delay={1000} distance={"30px"} >
                            <div className="testimonials">
                                <div className="testimonials__inner">
                                <div className="testimonials__image img-wrp">
                                    <img src="img/assets/e1.jpg" alt=" user" />
                                </div>
                                <div className="testimonials__detail">
                                    <h6 className="mt-3"> krishna Prasad Sharma</h6>
                                    <div className="testimonials__label mb-2"> CEO Him Electronics</div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores repellat sed autem labore
                                    voluptas nulla nemo assumenda at mollitia sunt.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </Fade>
                            </div>
                            <div className="col-lg-6 col-md-12">
                            <Fade bottom duration={1000} delay={1200} distance={"30px"} >
                            <div className="testimonials">
                                <div className="testimonials__inner">
                                <div className="testimonials__image img-wrp">
                                    <img src="img/assets/e4.jpg " alt="user" />
                                </div>
                                <div className="testimonials__detail">
                                    <h6 className="mt-3"> krishna Prasad Sharma</h6>
                                    <div className="testimonials__label mb-2"> CEO Him Electronics</div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores repellat sed autem labore
                                    voluptas nulla nemo assumenda at mollitia sunt.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </Fade>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                    <Fade bottom duration={1200} delay={700} distance={"50px"} >
                    <div className="other-testimonials flex ">
                        <div className="other-testimonials__item img-wrp">
                        <img src="img/assets/ekantipur.png" alt="" />
                        </div>
                        <div className="other-testimonials__item img-wrp">
                        <img src="img/assets/restless.png" alt="" />
                        </div>
                        <div className="other-testimonials__item img-wrp">
                        <img src="img/assets/vchitra.png" alt="" />
                        </div>
                        <div className="other-testimonials__item img-wrp">
                        <img src="img/assets/wwf.png" alt="" />
                        </div>
                        <div className="other-testimonials__item img-wrp">
                        <img src="img/assets/bajekosekwa.png" alt="" />
                        </div>
                        <div className="other-testimonials__item img-wrp">
                        <img src="img/assets/philips.png" alt="" />
                        </div>
                        <div className="other-testimonials__item img-wrp">
                        <img src="img/assets/cocacola.png" alt="" />
                        </div>
                    </div>
                    </Fade>
                </div>
             </section>
        )
    }
}
export default HappyClient;