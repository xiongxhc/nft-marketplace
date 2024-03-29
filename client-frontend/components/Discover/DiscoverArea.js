import React, { useState, useEffect } from 'react';
import Pagination from '../Common/Pagination';
import DiscoverSidebar from './DiscoverSidebar';

const DiscoverArea = () => {

  //counter calculation
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const comingSoonTime = () => {
    let endTime = new Date('December 23, 2021 17:00:00 PDT');
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let countdays = Math.floor(timeLeft / 86400);
    let counthours = Math.floor((timeLeft - countdays * 86400) / 3600);
    let countminutes = Math.floor(
      (timeLeft - countdays * 86400 - counthours * 3600) / 60
    );
    let countseconds = Math.floor(
      timeLeft - countdays * 86400 - counthours * 3600 - countminutes * 60
    );
    if (counthours < '10') {
      counthours = '0' + counthours;
    }
    if (countminutes < '10') {
      countminutes = '0' + countminutes;
    }
    if (countseconds < '10') {
      countseconds = '0' + countseconds;
    }

    setDays(countdays);
    setHours(counthours);
    setMinutes(countminutes);
    setSeconds(countseconds);
  };

  useEffect(() => {
    setInterval(() => {
      comingSoonTime();
    }, 1000);
  }, []);

  return (
    <>
      <div className='discover-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Discover Assets</h2>
          </div>

          <div className='row pt-45'>
            <div className='col-lg-9'>
              <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6'>
                  <div className='featured-card box-shadow'>
                    <div className='featured-card-img'>
                      <a href='item-details.html'>
                        <img
                          src='../images/featured/featured-img1.jpg'
                          alt='Images'
                        />
                      </a>
                      <p>
                        <i className='ri-heart-line'></i> 122
                      </p>
                      <button type='button' className='default-btn border-radius-5'>
                        Place Bid
                      </button>
                    </div>

                    <div className='content'>
                      <h3>
                        <a href='item-details.html'>Industrial Revolution</a>
                      </h3>
                      <div className='content-in'>
                        <div className='featured-card-left'>
                          <span>100 ETH 12/14</span>
                          <h4>Bid 80 ETH </h4>
                        </div>

                        <a
                          href='item-details.html'
                          className='featured-content-btn'
                        >
                          <i className='ri-arrow-right-line'></i>
                        </a>
                      </div>
                      <a
                        href='author-profile.html'
                        className='featured-user-option'
                      >
                        <img
                          src='../images/featured/featured-user1.jpg'
                          alt='Images'
                        />
                        <span>Created by @Adison</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                  <div className='featured-card box-shadow'>
                    <div className='featured-card-img'>
                      <a href='item-details.html'>
                        <img
                          src='../images/featured/featured-img2.jpg'
                          alt='Images'
                        />
                      </a>
                      <p>
                        <i className='ri-heart-line'></i> 142
                      </p>
                      <div
                        className='featured-card-clock'
                        data-countdown='2021/10/10'
                      >{days}:{hours}:{minutes}:{seconds}</div>
                      <button type='button' className='default-btn border-radius-5'>
                        Place Bid
                      </button>
                    </div>

                    <div className='content'>
                      <h3>
                        <a href='item-details.html'>I Love In The Air</a>
                      </h3>
                      <div className='content-in'>
                        <div className='featured-card-left'>
                          <span>110 ETH 12/14</span>
                          <h4>Bid 70 ETH </h4>
                        </div>

                        <a
                          href='item-details.html'
                          className='featured-content-btn'
                        >
                          <i className='ri-arrow-right-line'></i>
                        </a>
                      </div>
                      <a
                        href='author-profile.html'
                        className='featured-user-option'
                      >
                        <img
                          src='../images/featured/featured-user2.jpg'
                          alt='Images'
                        />
                        <span>Created by @Maicel</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                  <div className='featured-card box-shadow'>
                    <div className='featured-card-img'>
                      <a href='item-details.html'>
                        <img
                          src='../images/featured/featured-img3.jpg'
                          alt='Images'
                        />
                      </a>
                      <p>
                        <i className='ri-heart-line'></i> 162
                      </p>
                      <div
                        className='featured-card-clock'
                        data-countdown='2021/09/09'
                      >{days}:{hours}:{minutes}:{seconds}</div>
                      <button type='button' className='default-btn border-radius-5'>
                        Place Bid
                      </button>
                    </div>

                    <div className='content'>
                      <h3>
                        <a href='item-details.html'>Become On Nature</a>
                      </h3>
                      <div className='content-in'>
                        <div className='featured-card-left'>
                          <span>120 ETH 12/14</span>
                          <h4>Bid 80 ETH </h4>
                        </div>

                        <a
                          href='item-details.html'
                          className='featured-content-btn'
                        >
                          <i className='ri-arrow-right-line'></i>
                        </a>
                      </div>
                      <a
                        href='author-profile.html'
                        className='featured-user-option'
                      >
                        <img
                          src='../images/featured/featured-user3.jpg'
                          alt='Images'
                        />
                        <span>Created by @Jekob</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                  <div className='featured-card box-shadow'>
                    <div className='featured-card-img'>
                      <a href='item-details.html'>
                        <img
                          src='../images/featured/featured-img4.jpg'
                          alt='Images'
                        />
                      </a>
                      <p>
                        <i className='ri-heart-line'></i> 192
                      </p>
                      <button type='button' className='default-btn border-radius-5'>
                        Place Bid
                      </button>
                    </div>

                    <div className='content'>
                      <h3>
                        <a href='item-details.html'>Twilight Fracture City</a>
                      </h3>
                      <div className='content-in'>
                        <div className='featured-card-left'>
                          <span>110 ETH 12/14</span>
                          <h4>Bid 90 ETH </h4>
                        </div>

                        <a
                          href='item-details.html'
                          className='featured-content-btn'
                        >
                          <i className='ri-arrow-right-line'></i>
                        </a>
                      </div>
                      <a
                        href='author-profile.html'
                        className='featured-user-option'
                      >
                        <img
                          src='../images/featured/featured-user4.jpg'
                          alt='Images'
                        />
                        <span>Created by @Jack</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                  <div className='featured-card box-shadow'>
                    <div className='featured-card-img'>
                      <a href='item-details.html'>
                        <img
                          src='../images/featured/featured-img5.jpg'
                          alt='Images'
                        />
                      </a>
                      <p>
                        <i className='ri-heart-line'></i> 142
                      </p>
                      <button type='button' className='default-btn border-radius-5'>
                        Place Bid
                      </button>
                    </div>

                    <div className='content'>
                      <h3>
                        <a href='item-details.html'>Walking On Air</a>
                      </h3>
                      <div className='content-in'>
                        <div className='featured-card-left'>
                          <span>130 ETH 12/14</span>
                          <h4>Bid 80 ETH </h4>
                        </div>

                        <a
                          href='item-details.html'
                          className='featured-content-btn'
                        >
                          <i className='ri-arrow-right-line'></i>
                        </a>
                      </div>
                      <a
                        href='author-profile.html'
                        className='featured-user-option'
                      >
                        <img
                          src='../images/featured/featured-user5.jpg'
                          alt='Images'
                        />
                        <span>Created by @Daniel</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                  <div className='featured-card box-shadow'>
                    <div className='featured-card-img'>
                      <a href='item-details.html'>
                        <img
                          src='../images/featured/featured-img6.jpg'
                          alt='Images'
                        />
                      </a>
                      <p>
                        <i className='ri-heart-line'></i> 172
                      </p>
                      <button type='button' className='default-btn border-radius-5'>
                        Place Bid
                      </button>
                    </div>

                    <div className='content'>
                      <h3>
                        <a href='item-details.html'>Supper Nuemorphism</a>
                      </h3>
                      <div className='content-in'>
                        <div className='featured-card-left'>
                          <span>140 ETH 12/14</span>
                          <h4>Bid 90 ETH </h4>
                        </div>

                        <a
                          href='item-details.html'
                          className='featured-content-btn'
                        >
                          <i className='ri-arrow-right-line'></i>
                        </a>
                      </div>
                      <a
                        href='author-profile.html'
                        className='featured-user-option'
                      >
                        <img
                          src='../images/featured/featured-user6.jpg'
                          alt='Images'
                        />
                        <span>Created by @Samuel</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                  <div className='featured-card box-shadow'>
                    <div className='featured-card-img'>
                      <a href='item-details.html'>
                        <img
                          src='../images/featured/featured-img7.jpg'
                          alt='Images'
                        />
                      </a>
                      <p>
                        <i className='ri-heart-line'></i> 182
                      </p>
                      <button type='button' className='default-btn border-radius-5'>
                        Place Bid
                      </button>
                    </div>

                    <div className='content'>
                      <h3>
                        <a href='item-details.html'>Dark-light Angel</a>
                      </h3>
                      <div className='content-in'>
                        <div className='featured-card-left'>
                          <span>160 ETH 12/14</span>
                          <h4>Bid 100 ETH </h4>
                        </div>

                        <a
                          href='item-details.html'
                          className='featured-content-btn'
                        >
                          <i className='ri-arrow-right-line'></i>
                        </a>
                      </div>
                      <a
                        href='author-profile.html'
                        className='featured-user-option'
                      >
                        <img
                          src='../images/featured/featured-user7.jpg'
                          alt='Images'
                        />
                        <span>Created by @Martina</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                  <div className='featured-card box-shadow'>
                    <div className='featured-card-img'>
                      <a href='item-details.html'>
                        <img
                          src='../images/featured/featured-img8.jpg'
                          alt='Images'
                        />
                      </a>
                      <p>
                        <i className='ri-heart-line'></i> 142
                      </p>
                      <button type='button' className='default-btn border-radius-5'>
                        Place Bid
                      </button>
                    </div>

                    <div className='content'>
                      <h3>
                        <a href='item-details.html'>Exe Dream Hight</a>
                      </h3>
                      <div className='content-in'>
                        <div className='featured-card-left'>
                          <span>170 ETH 12/14</span>
                          <h4>Bid 90 ETH </h4>
                        </div>

                        <a
                          href='item-details.html'
                          className='featured-content-btn'
                        >
                          <i className='ri-arrow-right-line'></i>
                        </a>
                      </div>
                      <a
                        href='author-profile.html'
                        className='featured-user-option'
                      >
                        <img
                          src='../images/featured/featured-user8.jpg'
                          alt='Images'
                        />
                        <span>Created by @Henry</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                  <div className='featured-card box-shadow'>
                    <div className='featured-card-img'>
                      <a href='item-details.html'>
                        <img
                          src='../images/featured/featured-img9.jpg'
                          alt='Images'
                        />
                      </a>
                      <p>
                        <i className='ri-heart-line'></i> 182
                      </p>
                      <button type='button' className='default-btn border-radius-5'>
                        Place Bid
                      </button>
                    </div>

                    <div className='content'>
                      <h3>
                        <a href='item-details.html'>Art Of The Infinity</a>
                      </h3>
                      <div className='content-in'>
                        <div className='featured-card-left'>
                          <span>160 ETH 12/14</span>
                          <h4>Bid 70 ETH </h4>
                        </div>

                        <a
                          href='item-details.html'
                          className='featured-content-btn'
                        >
                          <i className='ri-arrow-right-line'></i>
                        </a>
                      </div>
                      <a
                        href='author-profile.html'
                        className='featured-user-option'
                      >
                        <img
                          src='../images/featured/featured-user1.jpg'
                          alt='Images'
                        />
                        <span>Created by @Jack</span>
                      </a>
                    </div>
                  </div>
                </div>

                <Pagination />
              </div>
            </div>

            <div className='col-lg-3'>
              <DiscoverSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverArea;
