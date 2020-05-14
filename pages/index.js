import Link from 'next/link';
import Head from 'next/head';


const Index = () => (
    <div>
        <Head>
            <title>MziAshi Leitner</title>
            <link href='/website.css' rel="stylesheet"/>
        </Head>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container"><a className="navbar-brand" href="index.html"><img alt="Image placeholder" src="/logo.png" id="navbar-logo"/> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mt-4 mt-lg-0 ml-auto">
                        <li className="nav-item"><a className="nav-link" href="index.html">Overview</a></li>
                        <li className="nav-item"><a className="nav-link" href="docs/index.html">About</a></li>
                    </ul>
                    <Link href="/signup">
                        <button className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3">Get Started</button>
                    </Link>
                    <div className="d-lg-none text-center"><a href="https://webpixels.io/themes/quick-website-ui-kit" className="btn btn-block btn-sm btn-warning">See more details</a></div>
                </div>
            </div>
        </nav>

        <section className="slice py-7">
            <div className="container">
                <div className="row row-grid align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
                        <figure className="w-100"><img alt="Image placeholder" src="top-slider.png" className="img-fluid mw-md-120"/></figure>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5"><h1 className="display-4 text-center text-md-left mb-3">It's time to Learn <strong className="text-primary">Creatively and Smartly</strong></h1>
                        <p className="lead text-center text-md-left text-muted">The Leitner system is a widely used method of efficiently using flashcards.</p>
                        <div className="text-center text-md-left mt-5">
                            <Link href="/signup">
                                <button className="btn btn-primary btn-icon btn-inner--text">Get started</button>
                            </Link>
                            <Link href='/tutorial'>
                                <button className='btn btn-neutral btn-icon d-none d-lg-inline-block'>Take a Tour</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


export default Index
