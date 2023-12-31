"use client";
import DealOfTheWeek from "@/components/DealOfTheWeek";
import HomeCarousel from "@/components/HomeCarousel";

export default function HomePage() {
  return (
    <>
      <div className="m-0 p-0 box-border font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center p-20">
            <div className="logo">
              <img src="images/logo.png" alt="logo" width="125px" />
            </div>
            <nav className="flex-1 text-right">
              <ul className="inline-block list-none">
                <li className="inline-block mr-5">
                  <a className="no-underline text-gray-500" href="">
                    Home
                  </a>
                </li>
                <li className="inline-block mr-5">
                  <a className="no-underline text-gray-500" href="">
                    Products
                  </a>
                </li>
                <li className="inline-block mr-5">
                  <a className="no-underline text-gray-500" href="">
                    About
                  </a>
                </li>
                <li className="inline-block mr-5">
                  <a className="no-underline text-gray-500" href="">
                    Contact
                  </a>
                </li>
                <li className="inline-block mr-5">
                  <a className="no-underline text-gray-500" href="">
                    Account
                  </a>
                </li>
              </ul>
            </nav>
            <img
              className="max-w-full py-10"
              src="images/cart.png"
              width="30px"
              height="30px"
            />
          </div>
          <div className="flex items-center flex-wrap justify-around inline-block">
            <div className="flex-basis-1/2 w-1/2">
              <h1 className="text-4xl leading-15 my-6">
                Give Your Workout <br />A New Style
              </h1>
              <p>
                Success isn't always about greatness. Its's about consistency.
                Consistent
                <br />
                hard work gains success. Greatness will come.
              </p>
              <a href="" className="btn">
                Explore Now →
              </a>
            </div>
            <div className="flex-basis-1/2 w-1/2">
              <img
                className="offer-img p-20  py-10"
                src="images/image1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* -----------------featured categories --------------------- */}
      <div className="my-18">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center flex-wrap justify-around">
            <div className="flex-basis-30 min-w-250px mb-30 w-1/3">
              <img className="w-full" src="/images/category-1.jpg" />
            </div>
            <div className="flex-basis-30 min-w-250px mb-30 w-1/3">
              <img className="w-full" src="/images/category-2.jpg" />
            </div>
            <div className="flex-basis-30 min-w-250px mb-30 w-1/3">
              <img className="w-full" src="/images/category-3.jpg" />
            </div>
          </div>
        </div>
      </div>
      {/* -----------------featured products --------------------- */}
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="title">Featured Products</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="W-1/4">
            <img src="images/product-1.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="W-1/4">
            <img src="images/product-2.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="W-1/4">
            <img src="images/product-3.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="W-1/4">
            <img src="images/product-4.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
        </div>
        {/* ///////////////////// */}
        <h2 className="title">Latest Products</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-4">
            <img src="images/product-1.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-2.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-3.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-4.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-4">
            <img src="images/product-5.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-6.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-7.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-8.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-4">
            <img src="images/product-12.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-11.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-10.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-9.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <p>$50.00</p>
          </div>
        </div>
        {/* ------------------------offer----------- */}
        <div className="offer">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex items-center flex-wrap justify-around">
              <div className="col-2 w-1/2">
                <img src="images/exclusive.png" className="offer-img" />
              </div>
              <div className="w-1/2">
                <p>Exclusive Available on RedStore</p>
                <h1>Smart Band 4</h1>
                <small>
                  The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                  AMOLED color full-touch display with adjustable brightness, so
                  everything is clear as can be.
                </small>
                <a
                  href=""
                  className="inline-block bg-[ff523b] text-white py-2 px-8 my-8 rounded-full transition duration-500 hover:bg-[563434]"
                >
                  Buy Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------testimonial---------------------------------- */}
      <div className="testimonial">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center flex-wrap justify-around">
            <div className="flex-basis-30 min-w-250px mb-30 w-1/3">
              <i className="fa fa-quote-left" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
              <img src="images/user-1.png" />
              <h3>Sean Parker</h3>
            </div>
            <div className="flex-basis-30 min-w-250px mb-30 w-1/3">
              <i className="fa fa-quote-left" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
              <img src="images/user-2.png" />
              <h3>Mike Smith</h3>
            </div>
            <div className="flex-basis-30 min-w-250px mb-30 w-1/3">
              <i className="fa fa-quote-left" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
              <img src="images/user-3.png" />
              <h3>Mobel Joe</h3>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------brands--------------- */}
      <div className="brands">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center flex-wrap justify-around">
            <div className="col-5">
              <img src="images//logo-godrej.png" />
            </div>
            <div className="col-5">
              <img src="images//logo-oppo.png" />
            </div>
            <div className="col-5">
              <img src="images//logo-coca-cola.png" />
            </div>
            <div className="col-5">
              <img src="images//logo-paypal.png" />
            </div>
            <div className="col-5">
              <img src="images//logo-philips.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
