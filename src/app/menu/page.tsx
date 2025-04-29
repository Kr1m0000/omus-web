import Image from 'next/image';
import page1 from "@/assets/1.png";
import page2 from "@/assets/2.png";
import page3 from "@/assets/2.png";

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
         src={page2}
        alt="Menu Page 3" 
        width={1920} 
        height={1080} 
        layout="responsive" 
      />
    </main>
  );
};

export default MenuPage;