"use client";

import { useEffect } from "react";

export default function RevealEffect() {
useEffect(() => {
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
(entries) => {
entries.forEach((e, i) => {
if (e.isIntersecting) {
setTimeout(() => e.target.classList.add("visible"), i * 80);
}
});
},
{ threshold: 0.1 }
);

reveals.forEach((r) => observer.observe(r));

return () => observer.disconnect();
}, []);

return null;
}