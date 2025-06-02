import Image from 'next/image';
import page1 from "@/assets/omus1.jpg";
import page2 from "@/assets/1.jpg";
import page3 from "@/assets/2.jpg";
import page4 from "@/assets/3.jpg";
import page5 from "@/assets/4.jpg";

const MenuPage = () => {
  return (
    <main>
      <Image 
         src={page1}
        alt="Menu Page 1" 
        width={1920} 
        height={1080} 
        layout="responsive" 
        priority 
      />


      
      <Image 
         src={page2}
        alt="Menu Page 2" 
        width={1920} 
        height={1080} 
        layout="responsive" 
      />
      <Image 
         src={page3}
        alt="Menu Page 3" 
        width={1920} 
        height={1080} 
        layout="responsive" 
      />
      <Image 
         src={page4}
        alt="Menu Page 2" 
        width={1920} 
        height={1080} 
        layout="responsive" 
      />
      <Image 
         src={page5}
        alt="Menu Page 3" 
        width={1920} 
        height={1080} 
        layout="responsive" 
      />
    </main>
  );
};

export default MenuPage;