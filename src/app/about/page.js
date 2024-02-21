"use client";
import Footer from "@/src/components/footer";
import Header from "@/src/components/Header/Header.js";

const Page = () => {
  return (
    <>
      <Header active="about" />
      <div className="flex flex-col px-8 sm:px-20 py-6 gap-8">
        <div className="flex bg-[#FFF4F8] flex-col px-8 md:px-16 py-8 rounded-2xl gap-3">
          <p className="text-[#FE508D] text-2xl font-medium">About AKGEC</p>
          <img src="./akg.png"></img>
          <p>
            Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, Uttar
            Pradesh is approved by AICTE and affiliated to Dr. A.P.J. Abdul
            Kalam Technical University, Lucknow. The college, established in
            1998, has six Engineering Departments offering B.Tech programs in
            twelve disciplines. The college also offers postgraduate programs in
            Computer Application (MCA) and M.Tech. in four disciplines. All five
            major B.Tech. programs are accredited by NBA. The college strives
            for excellence and has been consistently maintaining excellent
            academic results and placements. The college has the distinction of
            being the first and only college in UP to receive the Academic
            Excellence Award for the Best Engineering College in UPTU (now AKTU)
            from H.E. the Governor of UP for two successive years. The college
            has been consistently having a large number of students in
            university merit lists. The College students have the honor of being
            awarded the Chancellor&#39;s Medal for highest marks across all
            B.Tech. programs for five consecutive years since the inception of
            this Award in 2016. The college places special emphasis on
            collaboration with industries to groom the students for meeting the
            industry standards. The college has established a number of Centres
            of Excellence in collaboration with eminent multinational
            industries. The primary objective of these centres is to provide
            industry relevant training in inter-disciplinary state-of art
            technologies as well as to promote applied research and industrial
            consultancy.
          </p>
        </div>
        <div className="flex bg-[#FFF4F8] flex-col px-8 md:px-16 py-8 rounded-2xl gap-3">
          <p className="text-[#FE508D] text-2xl font-medium">About Women in Power Conference</p>
          <img src="./girlpower.png"></img>
          <p>
          The conference on &quot;Women in Power&quot; is driven by a profound motivation to acknowledge
 and celebrate the invaluable contributions of women in engineering, technology, research,
 and innovation. Through a dedicated showcase of their achievements, the conference seeks to
 amplify awareness of the substantial impact the women have had on the industry, academics
 and society at large. Beyond recognition, the event is committed to fostering career
 development and mentorship opportunities, recognizing the critical role mentorship plays in
 the professional growth of women. By facilitating interactions between established
 professionals and aspiring women, the conference aims to cultivate mentorship relationships
 that significantly contribute to career advancement. Moreover, the conference serves as a
 platform to openly address and discuss the unique challenges and barriers that women may
 encounter in pursuing careers in power-related fields, with a focus on generating meaningful
 solutions and support systems. Emphasizing knowledge sharing and collaboration, the
 conference provides a space for women professionals, aspiring women, students and
 researchers to exchange ideas, experiences, and collectively contributing to advancements in
 the society. Additionally, the conference plays a pivotal role in promoting role models by
 highlighting successful women leaders in the STEM field, aiming to inspire and motivate the
 next generation of women to pursue careers in these fields. The overarching theme of
 &quot;Women in Power&quot; encompasses a multifaceted approach, combining recognition,
 mentorship, problem-solving, collaboration, and inspiration to empower women in the
 dynamic and vital domain of science and technology.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
