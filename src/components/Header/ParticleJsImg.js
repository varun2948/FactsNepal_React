import React, { Component } from 'react';
import Fade from "react-reveal/Fade";
import Particles from "react-particles-js";


const ParticleJsImg = () => (

    <div style={{ height: "100%" }}>
        <Particles
            params={{
                particles: {
                    number: {
                        value: 8,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        speed: 3,
                        out_mode: "out"
                    },
                    shape: {
                        type: ["images", "circle"],
                        images: [
                            {
                                src: "/img/i1.png",
                                height: 30,
                                width: 30
                            },
                            {
                                src: "/img/i2.png",
                                height: 35,
                                width: 35
                            },
                            {
                                src: "/img/i3.png",
                                height: 20,
                                width: 20
                            },
                            {
                                src: "/img/i4.png",
                                height: 30,
                                width: 30
                            },
                            {
                                src: "/img/i5.png",
                                height: 25,
                                width: 25
                            }
                        ]
                    },
                    color: {
                        value: "#CCC"
                    },
                    size: {
                        value: 30,
                        random: false,
                        anim: {
                            enable: true,
                            speed: 4,
                            size_min: 10,
                            sync: false
                        }
                    }
                },
                retina_detect: false
            }}
        />
    </div>

);

export default ParticleJsImg;