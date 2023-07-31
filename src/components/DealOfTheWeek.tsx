import React from 'react';

const DealOfTheWeek = () => {
  return (
    <section className="deal-of-week set-bg spad bg-cover bg-center" style={{ backgroundImage: "url('https://s.alicdn.com/@sc04/kf/UTB8.O4DNOaMiuJk43PTq6ySmXXa6.jpg_100x100xz.jpg')" }}>
      <div className="container">
        <div className="lg:w-1/2 mx-auto text-center">
          <div className="section-title">
            <h2 className="text-white">Deal Of The Week</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              <br />
              do ipsum dolor sit amet, consectetur adipisicing elit
            </p>
            <div className="product-price">
              $35.00
              <span className="text-white">/ HandBag</span>
            </div>
          </div>
          <div className="countdown-timer" id="countdown">
            <div className="cd-item">
              <span className="text-white">30</span> <p className="text-white">Days</p>{' '}
            </div>
            <div className="cd-item">
              <span className="text-white">01</span> <p className="text-white">Hrs</p>{' '}
            </div>
            <div className="cd-item">
              <span className="text-white">09</span> <p className="text-white">Mins</p>{' '}
            </div>
            <div className="cd-item">
              <span className="text-white">36</span> <p className="text-white">Secs</p>{' '}
            </div>
          </div>
          <a href="#" className="primary-btn">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheWeek;
