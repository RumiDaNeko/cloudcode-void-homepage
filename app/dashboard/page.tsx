"use client"
import Image from "next/image";
import StaggeredMenu from '@/components/StaggeredMenu'
import LiquidEther from '@/components/LiquidEther';
import SpotlightCard from '@/components/SpotlightCard';
import { useEffect, useState } from "react";

import { useRouter } from 'next/navigation'


function getCookie(cname) {
      const name = cname + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for (let c of ca) {
        c = c.trim();
        if (c.indexOf(name) === 0) return c.substring(name.length);
      }
      return null;
    }

export default async function Home() {
    const router = useRouter()
    if (!getCookie("cloudcode_user")) return router.push('/auth/login')

  return (
    <div></div>
  );
}
