import LightBulb from "../../assets/images/442815932.jpeg";
import PageImage from "../../components/PageImage";
import AuroraImage from "../../assets/images/167720513.jpeg";

const About = () => {
  return (
    <div className="pageContent">
      <div className="bannerImage">
        <PageImage image={LightBulb} />
      </div>
      <h1>About Us</h1>

      <p>
        Founded in September 2024, Aurora Rising Ltd. is dedicated to providing
        high-quality psychological services and behavioural consulting that
        empower individuals and families. We are passionate about supporting the
        growth and development of people of all ages, from children to adults,
        using a trauma-informed approach that prioritizes well-being and
        resilience.
      </p>
      <p>
        At Aurora Rising, we believe in the power of collaboration. We work
        closely with families and multidisciplinary teams, recognizing that
        families and individuals are the experts in their own lives. Our goal is
        to build strong connections and relationships with you, offering
        guidance and support every step of the way. We understand that
        parenting, life, and emotions can present challenges, and we are here to
        navigate those complexities together.
      </p>
      <p>
        Our approach is grounded in evidence-based practices, incorporating
        methodologies such as Applied Behaviour Analysis (ABA), Dialectical
        Behavior Therapy (DBT) skills, and trauma-informed care. We value the
        uniqueness of each person we work with, tailoring our services to meet
        their specific needs and aspirations. Our comprehensive offerings
        include behavioural consultations, assessments, and counseling in
        partnership with a licensed psychologist, ensuring holistic support for
        all family members.
      </p>
      <p>
        At Aurora Rising, we strive to present our authentic selves within our
        practice, combining our life experiences and professionalism into our
        supports while encouraging you to explore new ideas through honest and
        compassionate support. We believe that every individual has the
        potential to rise to their goals, and we are committed to helping you on
        that journey. Together, we can navigate the complexities of life and
        celebrate the growth that comes from overcoming challenges.
      </p>
      <p>
        Thank you for considering Aurora Rising Ltd. as your partner in growth.
        We look forward to walking alongside you and your family as we embark on
        this journey together.
      </p>

      <h1>Meet our Team</h1>

      <div className="lrContainer">
        <div className="left">
          <PageImage image={AuroraImage}/>
        </div>
        <div className="right">
          <h1>Jessica Bist (M.Sc.)</h1>
          <h4>Behavior Specialist</h4>
          <p>
            Jessica has been working with individuals with disabilities since 2014,
            with a passion for helping clients reach their goals. She holsds two Master of Science
            degrees: one in Neuroscience and one in Psychology with a concentration in
            Applied Behavior Analysis, and she is currently pursuing BCBA certification.
            Jessica enjoys spending time with her husband and their baby, playing board games,
            and grabbing a coffee with friends. She is dedicated to using evidence-based strategies
            to support her communication, emotional regulation, and skill-building for her clients.
          </p>
        </div>
      </div>

      <div className="lrContainer">
        <div className="left">
          <h1>Kayla Mellies (M.Sc.)</h1>
          <h4>Behavior Specialist</h4>
          <p>
            Kayla holds a Master's degree in Psychology with a specialization in Applied Behavior Analysis
            and has worked in the disability field since 2011. She has extensive experience with children,
            adolescents, and adults with intellectual and developmental disabilities, as well as mental
            health diagnosis. Currently pursuing credentials as a Board Certified Behavior Analyst (BCBA),
            Kayla is dedicated to empowering individuals through evidence-based strategies. Outside of work,
            she is a Toronto Maple Leafs fan and enjoys time with her pets, including her cat, Bagheera,
            and her dog, Oogie Boogie. A Haloween enthusiast, she loves celebrating the season with all things spooky.
          </p>
        </div>
        <div className="right">
          <PageImage image={AuroraImage}/>
        </div>
      </div>

      <div className="lrContainer">
        <div className="left">
          <PageImage image={AuroraImage}/>
        </div>
        <div className="right">
          <h1>Rosemarie Fabre (M.Sc., BCBA)</h1>
          <h4>Registered Psychologist</h4>
          <p>
            Rosemarie is a Psychologist and Board-Certified Behavior Analyst with a strong commitment to enhancing
            mental health. She has extensive experience providing psychological assessments, councelling, and
            clinical supervision, supporting individuals with completx mental health issues, behavioral challenges,
            and disabilities. Known for her collaborative and compassionate approach, Rosemarie is dedicated to
            creating positive, lasting change in the lives she touches. Outside of work, she spends time with her
            family which includes two children, who enjoy competitive gymnastics and taekwondo. In her free time,
            Rosemarie loves playing video games and embracing the outdoors in the summer and fall seasons through
            hiking, swimming, and creating her own little green oasis in her garden.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
