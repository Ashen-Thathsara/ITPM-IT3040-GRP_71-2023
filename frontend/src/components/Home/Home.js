import React from "react";
import './Home.css';
import './HomeUI.js';

const Home = () => {
    return (
        <body>
            <div class="container">
                <section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
                    <h1 data-scroll data-scroll-speed="3">Change background colour with GSAP ScrollTrigger</h1>
                    <img src="https://images.pexels.com/photos/3062948/pexels-photo-3062948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </section>
                <section data-bgcolor="#eacbd1" data-textcolor="#536fae"><img src="https://images.pexels.com/photos/4467879/pexels-photo-4467879.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <h2 data-scroll data-scroll-speed="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                </section>

                <section data-bgcolor="#536fae" data-textcolor="#eacbd1"><img src="https://images.pexels.com/photos/5604966/pexels-photo-5604966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <h2 data-scroll data-scroll-speed="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                </section>
                <section data-bgcolor="#e3857a" data-textcolor="#f1dba7"><img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <h2 data-scroll data-scroll-speed="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                </section>
            </div>

            <div class="credit"><a href="https://thisisadvantage.com" target="_blank" />Made by Advantage</div>
        </body>
    )
}

export default Home