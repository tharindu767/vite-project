import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
   <div className={layout.sectionImgReverse}>


      <img src={bill} alt="billing" className="h-[100%] w-[100%]  relative z-[5]" />


      <div className="absolute z-[3] -left-1/2 top-0  h-[50%]  w-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0]  h-[50%]  w-[50%]-left-1/2 bottom-0 rounded-full pink__gradient" />
   
    </div>

   <div className={layout.sectionInfo}>

      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>

     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

    <div className="flex flex-row flex-wrap sm:mt-10 mt-6">

        <img src={apple}  className=" h-[42.05px] w-[128.86px]  object-contain mr-5 cursor-pointer" alt="google_play"/>
        <img src={google}  className=" h-[43.08px] w-[144.17px]  object-contain cursor-pointer" alt="google_play"/>
      </div>
    </div>
  </section>
);

export default Billing;