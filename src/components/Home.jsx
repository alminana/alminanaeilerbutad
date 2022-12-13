import React, { Component } from 'react'
import Aiptdocket from '../../public/assets/img/hero/aiptdocket.png'
import Aiptpatent from '../../public/assets/img/hero/Aiptpatent.png'
class Home extends Component {
    render() {
        return (
            <div>
                  
   <main>

<div class="slider-area ">
    <div class="slider-active">
       
        <div class="single-slider slider-height d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-8">
                        <div class="hero__caption">
                            <h1 data-animation="fadeInUp" data-delay=".6s">I'm Self Taught Web Developer Eiler Alminana</h1>
                            <p data-animation="fadeInUp" data-delay=".8s" >Base in Saudi Arabia. I love exploring and developing beautiful interface,web application and everything in between.and also the upcoming new technologies.</p>
                          
                            <div class="hero__btn">
                                <a href="industries.html" class="btn hero-btn"  data-animation="fadeInLeft" data-delay=".8s">Learn More</a>
                                <a href="industries.html" class="btn border-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
  
    </div>
</div>




        <section class="about-area section-paddingt30">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-5">
                    <div class="about-caption2">
                    <h3>AiptDocket Web Application</h3>
                    <p class="pera1">I Completed this project for one of my Client. I used boostrap for the frontend and laravel Restful API for the backend and also to storing image data used Amazon ws3 bucket.</p>
                    <p>The function of this application to monitor all project application such as Trademark,Patent and Design.</p>
                    </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="about-caption2">
                        <a href="index.html"><img src={Aiptdocket} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-area section-paddingt30">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-5">
                        <a href="index.html"><img src={Aiptpatent} alt="" /></a>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="about-caption2">
                        <h3>Aiptpatent Website</h3>
                        <p class="pera1">I build this Project as part of the frontend and also used boostrap technology CSS ,javacscript</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="categories-area section-padding3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                    
                        <div class="section-tittle mb-70">
                            <h2>My Tools</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-pen"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Tools</a></h5>
                                <p>Photoshop</p>
                                <p>Github</p>
                                <p>Gitbash</p>
                                <p>npm</p>
                                <p>Visual Studio code</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                            <span class="flaticon-portfolio"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Web Design</a></h5>
                                <p>CSS</p>
                                <p>Bootstrap</p>
                                <p>Javacscript</p>
                                <p>React.js</p>
                                <p>React-Bootstrap</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-cat text-center mb-50">
                            <div class="cat-icon">
                                <span class="flaticon-speaker"></span>
                            </div>
                            <div class="cat-cap">
                                <h5><a href="services.html">Backend</a></h5>
                                <p>Laravel</p>
                                <p>Restful API</p>
                                <p>Amazon WS3</p>
                                <p>Firebase</p>
                                <p>nginx</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </main>
            </div>
            
        )
    }
}

export default Home
