import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                  <footer>
                    <div class="footer-area">
                        <div class="container">
                      
                            <div class="footer-bottom">
                                <div class="row d-flex justify-content-between align-items-center">
                                    <div class="col-xl-9 col-lg-8">
                                        <div class="footer-copy-right">
                                            <p>
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved EAITSOLUTION
            </p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-4">
                            
                                        <div class="footer-social f-right">
                                            <a>Stay Connected</a>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fas fa-globe"></i></a>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>
                </footer>
            <div id="back-top" >
                <a title="Go to Top" href="#"> <i class="fas fa-level-up-alt"></i></a>
            </div>
            </div>
        )
    }
}

export default Footer
