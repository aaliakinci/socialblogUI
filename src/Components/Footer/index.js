import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="social-icons">
                            <li><a href="https://github.com/Kodluyoruz">Github</a></li>
                            <li><a href="https://www.youtube.com/channel/UCSnIf-v95OSGIv9H7d2R2lw">Youtube</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-12">
                        <div className="copyright-text">
                            <p>Kodluyoruz 2021 |
                                  <a href="https://www.kodluyoruz.org/" className="ml-1">Noas</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}