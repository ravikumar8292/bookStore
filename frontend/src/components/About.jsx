import React from "react";
import outlet from "../../public/outlet.png";
// import aboutImg from "../../public/storewallpaper.jpg";

const About = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20">

        <div className="w-full md:w-1/2 order-1 py-8 ">
            <img src={outlet} className="w-[100%] h-[100%]" alt="" srcset="" />
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcomes to Ravi Book Store , {" "}
              <span className="text-pink-500">learn new something everyday!!!</span>
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              totam eius id non molestiae at quisquam illo quidem obcaecati,
              dolorum assumenda animi in possimus ea consequuntur cupiditate!
            </p>
           <div className="">
           <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Enter your email to login" />
            </label>
           </div>
          </div>
            <button className="btn mt-6 btn-secondary bg-pink-500 text-white hover:bg-black">Subscribe</button>
        </div>
    </div>
    <div className="mt-16 flex flex-col gap-4 max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="text-xl text-pink-500">About Us.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          eaque corrupti natus labore accusamus perferendis culpa commodi dolor
          quis laudantium, modi eveniet ad molestias eius nisi fuga tenetur
          quidem error unde nulla hic. Perferendis numquam laboriosam ipsam
          eveniet assumenda nesciunt hic excepturi id. Consequuntur incidunt
          nemo perspiciatis quae. Excepturi, in.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          laudantium, ad dolore harum cum suscipit iusto provident, odio dolores
          nostrum, laborum consequuntur? Inventore perspiciatis velit eius,
          architecto quibusdam atque exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius
          quae quas.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam
          quaerat quisquam quas, deleniti, praesentium veritatis reprehenderit,
          ab quo alias provident ipsum doloremque nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          aliquid nostrum ipsam quisquam, vitae reprehenderit, qui voluptas in
          eius a dolorum nobis illo, deserunt totam saepe ratione dolorem
          veritatis. Quia, asperiores! Recusandae, ut cupiditate?
        </p>
      </div>
    </>
  );
};

export default About;
