import React from "react";

const WhyChooseUs = () => {
  return (
    <div className=" pt-40">
      {" "}
      <div className=" xl:w-2/3 mx-auto">
        <div className="flex justify-center ">
          <div className="w-full flex items-end ">
            <div>
              <h1 className=" text-5xl font-serif text-white mr-7 mb-5 text-right font-bold">
                Why Choose Us?
              </h1>
              <div className="bg-white/90  ">
                <p className="px-10 pt-10 pb-[100px] text-right  text-black/60   ">
                  <span className="text-xl text-black/70 font-semibold">
                    Having trouble to find best teachers? or want to earn in
                    your student life?
                  </span>
                  <br />
                  Become a tutor and start tutoring. Anyone can join with us and
                  start their teaching journey and{" "}
                  <span className="text-[#7839ff] text-xl">
                    Around 200 users have <br /> chosen us.
                  </span>{" "}
                  We are nurturing our teachers by providing batches to reach
                  them to their desired audiance. We're also providing best
                  teachers according to your need with our most enggaging search
                  results.
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 w-full bg-[#7839ff] rounded-t-lg p-5 md:p-10 lg:p-0 ">
            <div className=" text-white/90 lg:pl-10 lg:pt-10 font-sans  ">
              <h3 className="text-xl mb-3">Expert Educators:</h3>
              <p className=" text-justify">
                Our team of experienced and dedicated educators are experts in
                their respective fields. They are passionate about teaching and
                are committed to helping you grasp even the most complex
                concepts.
              </p>
            </div>
            <div className=" text-white/90 lg:pr-10 lg:pt-10 font-sans ">
              <h3 className="text-xl mb-3">Personalized Learning:</h3>
              <p className=" text-justify">
                We understand that every student has unique learning needs.
                That's why we tailor our teaching approach to suit your
                individual pace, learning style, and goals. Your success is our
                priority.
              </p>
            </div>{" "}
            <div className=" text-white/90 lg:pl-10 lg:pb-10 font-sans">
              <h3 className="text-xl mb-3">Comprehensive Curriculum:</h3>
              <p className=" text-justify">
                Our meticulously designed curriculum covers a wide range of
                subjects and topics. From foundational concepts to advanced
                lessons, we've got you covered.
              </p>
            </div>{" "}
            <div className=" text-white/90 lg:pb-10 lg:pr-10 font-sans">
              <h3 className="text-xl mb-3">Supportive Environment:</h3>
              <p className=" text-justify">
                Beyond academics, we foster a supportive and motivating
                environment. We believe in nurturing not only intellectual
                growth but also personal development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
