import React from "react";
import { motion } from "framer-motion"


const About_Us = () => {
  return (
    <div>
      <div className="flex pt-10 font-poppins justify-center">
        <hr style={{ border: 'none', height: '4px', background: '#05345E' }} className="xl:w-72 lg:w-56 md:w-44 w-24 mt-[15px] md:mt-[28px] " />
        <div className="flex justify-center text-[#0B0B51]"><h1 className="sm:text-4xl text-sm pb-10 font-poppins uppercase  p-2">How We Make A Difference</h1></div>
        <hr style={{ border: 'none', height: '4px', background: '#05345E', float: 'left' }} className=" xl:w-72 lg:w-56 md:w-44 w-24 mt-[15px] md:mt-[28px] " />
      </div>
      <div className="md:flex  font-poppins">
        <div className="md:w-1/2 w-full flex md:justify-start justify-center items-center p-10">
          <img src="/tkm-engineering-college.jpg" className="h-96 w-96" />
        </div>

        <div className="flex flex-col md:w-1/2 w-full pt-10 md:text-right text-left p-10" >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
          >
            <h1 className="font-bold text-3xl pb-5 text-justify">About TKM</h1>
            <p className="break-words text-justify">TKM College of Engineering, Kerala's first government-aided engineering institution, boasts a six-decade legacy as a flagship for technical education. Situated in Kollam's cashew hub and guided by the TKM College Trust led by Janab Shahal Hassan Musaliar, it is renowned as a premier technical institution in India. Offering diverse academic programs, including eight undergraduate engineering branches, architecture, ten specialized postgraduate programs, and an MCA program, the college adapts to modern education demands through collaborations with industry leaders.</p>
            <div className="flex justify-end  pt-10"><button className=" bg-[#0B0B51] text-white w-48 h-10 rounded-3xl" ><a href="https://www.tkmce.ac.in/">More Info</a></button></div>
          </motion.div>
        </div>

      </div>
      <div className="md:flex hidden font-poppins">

        <div className="flex flex-col md:w-1/2 w-full pt-10 md:text-left text-left p-10" >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
          >
            <h1 className="font-bold text-3xl pb-5">About STEPS</h1>
            <p className="break-words text-justify">STEPS (Students of TKMCE for the Empowerment of People and Society), is a student-run philanthropic organisation with the motto "Where Engineering meets Humanity." It aims to instil social responsibility and compassion for fellow beings among professional college students.</p>
            <p className="break-words text-justify">For the past years, STEPS has been leading and orchestrating a variety of programmes that connect technology with social elements. STEPS has consistently extended a helping hand to anyone in need, ensuring they feel valued and included in our society.</p>
          </motion.div>
        </div>
        <div className="md:w-1/2 w-full flex md:justify-end justify-center items-center p-10">
          <img src="/background/photo4.jpg" className="h-96 w-96" />
        </div>
      </div>
      <div className="md:hidden  font-poppins">
        <div className="md:w-1/2 w-full flex md:justify-end justify-center items-center p-10">
          <img src="/background/photo4.jpg" className="h-96 w-[400px]" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
        >
          <div className="flex flex-col md:w-1/2 w-full pt-10 md:text-right text-left p-10" >
            <h1 className="font-bold text-3xl pb-5">About Steps</h1>
            <p className="break-words">STEPS (Students of TKMCE for the Empowerment of People and Society), is a student-run philanthropic organisation with the motto "Where Engineering meets Humanity." It aims to instil social responsibility and compassion for fellow beings among professional college students.</p>

            <p className="break-words">For the past years, STEPS has been leading and orchestrating a variety of programmes that connect technology with social elements. STEPS has consistently extended a helping hand to anyone in need, ensuring they feel valued and included in our society.</p>


          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About_Us;
