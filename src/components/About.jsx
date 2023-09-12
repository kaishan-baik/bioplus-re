import React from "react";
import { Parallax } from "react-parallax";

const About = () => {
  return (
    <Parallax strength={500}>
      <div
        name="about"
        className="flex w-full lg:h-screen bg-gradient-to-b from-emerald-800 to-green-200  items-center justify-center px-4 text-center py-20"
      >
        <div className="flex flex-col w-4/5">
          <div className="flex flex-row items-center justify-center w-full border-green-800 border-b-2 text-white">
            <h1 className="text-4xl uppercase font-bold w-auto my-4 mx-2 text-green-300 ">
              about
            </h1>
            <h1 className="text-4xl uppercase font-bold w-auto my-4 mx-2  ">
              us
            </h1>
          </div>
          <div className="text-justify my-4 text-black">
            <p>
              At Bioplus RE, we are passionate advocates for a sustainable and
              environmentally responsible future. We believe that the power of
              the EM can transform industries, improve products, and promote
              eco-friendly solutions for a better world. Our journey began with
              a vision: to harness the incredible potential of the EM to address
              some of the most pressing challenges facing our planet today. With
              unwavering dedication to research, innovation, and a commitment to
              excellence, we have become pioneers in the field of
              environmentally friendly microorganisms solutions. What sets us
              apart is our relentless pursuit of sustainable and environmentally
              friendly technologies. We work hand in hand with nature, striving
              to unlock the full potential of these remarkable biocatalysts to
              benefit industries ranging from agriculture and food production to
              waste management and beyond.
            </p>
            <br />
            <p>
              Our team of experts, including biochemists, biotechnologists, and
              environmental scientists, collaborates with partners across the
              globe to develop cutting-edge formulations that not only meet
              industry demands but also reduce environmental impact. We take
              pride in our role as catalysts for change, driving positive
              transformations in diverse sectors.
            </p>
            <br />
            <p>
              At Bioplus RE, we believe in a future where sustainability is not
              just a buzzword but a way of life. Our products are a testament to
              this belief, as they promote resource efficiency, reduce waste,
              and contribute to a healthier planet. Together with our partners
              and clients, we are creating a world where environmental
              responsibility and economic success go hand in hand. Join us on
              this transformative journey toward a more sustainable future.
              Together, we can redefine industries, elevate product quality, and
              ensure a thriving planet for generations to come. Welcome to
              Bioplus RE, where innovation meets environmental stewardship.
            </p>
            <div className="flex flex-col justify-center capitalize text-2xl mt-10 flex-wrap text-center">
              <p> - environmentally friendly microorganisms -</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default About;
