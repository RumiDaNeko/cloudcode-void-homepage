"use client"
import Image from "next/image";
import StaggeredMenu from '@/components/StaggeredMenu'
import LiquidEther from '@/components/LiquidEther';
import SpotlightCard from '@/components/SpotlightCard';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Dashboard', ariaLabel: 'Access the dashboard', link: 'https://get-void.cloudcode.site' },
  { label: 'Panel', ariaLabel: 'Access the panel', link: 'https://panel-void.cloudcode.site' },
];

const socialItems = [
  { label: 'Discord', link: 'https://discord.gg/U7aFkZWk74' },
  { label: 'Cloudcode', link: 'https://cloudcode.site' },
];

export default function Home() {
  const routers = useRouter()
  const [mwidth, setWidth] = useState(1024); // default safe value

useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
  }, []);
  const isSmall = mwidth < 768;
  const toosmall = mwidth < 450
  return (
    <div>
       <div
    id="blur"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 9998,
      pointerEvents: 'none',
      backdropFilter: 'none', // initial blur
      WebkitBackdropFilter: 'none',
      transition: 'backdrop-filter 0.5s ease, -webkit-backdrop-filter 0.5s ease'
    }}
  ></div>
      <div id="menu" style={{ position: "fixed", top: 0, right: 0, width: "100%", height: '100vh', background: "transparent", zIndex: 9999, pointerEvents: "none" }}>
  <StaggeredMenu
    className={"neko"}
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials={true}
    displayItemNumbering={true}
    menuButtonColor="#fff"
    openMenuButtonColor="#000"
    changeMenuColorOnOpen={true}
    colors={['#B19EEF', '#5227FF']}
    logoUrl="https://media.harumi.io.vn/voidcode.png"
    accentColor="#5227FF"
        onMenuOpen={() => {
      document.getElementById("menu").style.pointerEvents = "auto"
      document.getElementById("blur").style.backdropFilter = "blur(5px)";
      document.getElementById("blur").style.WebkitBackdropFilter = "blur(5px)";
    }}
    onMenuClose={() => {
      document.getElementById("menu").style.pointerEvents = "none"
      document.getElementById("blur").style.backdropFilter = "none";  
      document.getElementById("blur").style.WebkitBackdropFilter = "none";
    }}
  />
</div>
  <section id="hero1" style={{ width: '100%', height: "100vh", background: "#111"}}>
<div >
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous={false}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
    style={{  width: '100%', height: "100%", position: 'absolute', backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)" }}
  />
</div>
<div style={{ width: '100%', height: "100%",position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: "center"}}>
 

  
<SpotlightCard 
spotlightColor="#5227FF"
  className="my-custom-class"
>
  <div className="text-2xl" style={{width: "100%", height: "100%", color:"white", display:"flex",flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
    <h1 className={ isSmall ? toosmall ? "text-4xl mb-8" : "text-5xl mb-8" : "text-6xl mb-8"} >Cloudcode <span style={{background: "linear-gradient( #FF9FFC, #5227FF, #B19EEF)",  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>void</span></h1>
    <p className=" mb-6" style={{ fontSize: isSmall ? toosmall ? "20px" : "25px" : "30px"}}>Free server for every minecraft needs, 24/7, start anytime anywhere, BS? nah, also what is an credit card, can it be eaten?</p>
    <div style={{width: "100%", height: "100px", display:"flex", flexDirection: "row", alignItems: "center", justifyContent:"center"}}>
      <div onClick={() => {routers.push("https://get-void.cloudcode.site")}} className="rounded-xl  active:scale-95 transition-transform duration-100 flex items-center justify-center select-none" style={{ width: "30%", height: "50%", background:"#5227FF", color: "white", fontSize: isSmall ? "20px" : "17px"}} >{toosmall ? "Start" : "Start the journey!"} </div>
    </div>
  </div>
</SpotlightCard>
</div>
</section>
    </div>
  );
}
