import React from "react";
import aboutImg from "../../public/storewallpaper.jpg";

const About = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 static bg-gradient-to-tl from-indigo-900">
        <img src={aboutImg} className="h-[78vh] w-[100vw] opacity-100 mix-blend-overlay" alt="" />
      </div>

      <div className="absolute bottom-72 left-80 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl mb-2">
          Ravi Book <span className="text-pink-500">Store :)</span>
        </h1>
        <p>
          hello everone Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque consequatur eveniet alias.
        </p>
        <p>
          hello everone Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          hello everone Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque consequatur.
        </p>
        <p>hello everone Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div className="mt-16 flex flex-col gap-4">
        <h1 className="text-xl">About Us.</h1>
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
    </div>
  );
};

export default About;
