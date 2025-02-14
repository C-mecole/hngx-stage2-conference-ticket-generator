import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState (false);
  const style = {
  top: isOpen? "80px": '-100vh',
  transition: 'top 0.5s ease',
  }
  return (
    <>
    <header className=' h-[76px] mb-12'>
    <div className='xl:w-[1200px] lg:w-[800px] w-[100vw] rounded-xl border border-[#07363e] flex justify-between items-center h-full p-4 relative'>
      <div>
        <div>
        <svg width="93" height="36" viewBox="0 0 93 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="39" height="35" rx="11.5" fill="#052F35"/>
<rect x="0.5" y="0.5" width="39" height="35" rx="11.5" stroke="#0E464F"/>
<path d="M17 9.5V26.5M10.464 15.344C10.216 15.344 9.989 15.142 10 14.879C10.067 13.337 10.255 12.333 10.78 11.539C11.0795 11.0865 11.455 10.6893 11.89 10.365C13.055 9.5 14.7 9.5 17.992 9.5H22.006C25.298 9.5 26.943 9.5 28.11 10.365C28.541 10.685 28.917 11.082 29.219 11.539C29.744 12.333 29.932 13.337 29.999 14.879C30.01 15.142 29.783 15.344 29.534 15.344C28.148 15.344 27.024 16.533 27.024 18C27.024 19.467 28.148 20.656 29.534 20.656C29.783 20.656 30.01 20.858 29.999 21.122C29.932 22.663 29.744 23.667 29.219 24.462C28.9195 24.9141 28.5439 25.311 28.109 25.635C26.943 26.5 25.298 26.5 22.006 26.5H17.993C14.701 26.5 13.056 26.5 11.889 25.635C11.4544 25.3106 11.0792 24.9134 10.78 24.461C10.255 23.667 10.067 22.663 10 21.121C9.989 20.858 10.216 20.656 10.464 20.656C11.85 20.656 12.974 19.467 12.974 18C12.974 16.533 11.85 15.344 10.464 15.344Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<mask id="path-3-outside-1_4002_88" maskUnits="userSpaceOnUse" x="46" y="4.688" width="47" height="26" fill="black">
<rect fill="white" x="46" y="4.688" width="47" height="26"/>
<path d="M55.072 28.992C54.752 28.992 54.3147 28.8747 53.76 28.64C53.2053 28.384 52.64 28.064 52.064 27.68C51.488 27.2747 50.9973 26.8587 50.592 26.432C50.1867 25.984 49.984 25.5573 49.984 25.152C49.984 24.9173 49.9947 24.672 50.016 24.416C50.0373 24.16 50.0693 23.8293 50.112 23.424C50.1547 22.9973 50.1867 22.432 50.208 21.728C50.2293 21.024 50.24 20.1067 50.24 18.976C50.24 18.5493 50.24 18.1013 50.24 17.632C50.24 17.1627 50.2293 16.672 50.208 16.16H49.632L48 14.016L48.224 13.504C49.3547 13.376 50.0693 13.0347 50.368 12.48C50.6667 11.9253 50.816 11.0827 50.816 9.952L51.36 9.76L53.312 11.232C53.312 11.616 53.312 11.9893 53.312 12.352C53.312 12.7147 53.312 13.0773 53.312 13.44H56.032L57.632 15.68L57.408 16.16H53.344C53.344 16.928 53.344 17.664 53.344 18.368C53.344 19.072 53.344 19.744 53.344 20.384C53.344 21.6213 53.3227 22.5707 53.28 23.232C53.2587 23.8933 53.2267 24.384 53.184 24.704C53.1413 25.024 53.12 25.3227 53.12 25.6C53.12 26.0267 53.344 26.24 53.792 26.24C54.176 26.24 54.592 26.144 55.04 25.952C55.488 25.7387 55.904 25.4827 56.288 25.184H56.736L58.24 27.68C57.9413 28.0427 57.472 28.352 56.832 28.608C56.192 28.864 55.6053 28.992 55.072 28.992Z"/>
<path d="M62.6423 11.296L60.5303 9.024V8.704C61.1063 7.936 61.8849 7.264 62.8663 6.688L64.9783 8.896L64.9463 9.28C64.5196 9.57867 64.1143 9.90933 63.7303 10.272C63.3676 10.6347 63.0049 10.976 62.6423 11.296ZM65.4902 29.312C64.1249 28.8 63.0689 28.3413 62.3223 27.936C61.5969 27.5093 61.2343 27.1253 61.2343 26.784C61.2343 26.4853 61.2662 26.0267 61.3302 25.408C61.4156 24.768 61.4583 24.1493 61.4583 23.552V18.976C61.4583 18.4213 61.4796 17.9093 61.5223 17.44C61.5863 16.9493 61.6823 16.5227 61.8103 16.16H60.7543L59.0583 13.984L59.2823 13.44H63.3783L65.2343 15.936C64.9783 16.2773 64.8076 16.704 64.7222 17.216C64.6582 17.728 64.6263 18.3787 64.6263 19.168V23.904C64.6263 24.672 64.5942 25.3547 64.5303 25.952C64.4663 26.528 64.4342 26.9653 64.4342 27.264C64.4342 27.4773 64.5089 27.648 64.6583 27.776C64.8289 27.8827 65.2343 28.1067 65.8743 28.448L65.4902 29.312Z"/>
<path d="M77.0505 24.288L79.7385 26.016C79.3118 27.0187 78.6932 27.7867 77.8825 28.32C77.0932 28.8533 76.1972 29.12 75.1945 29.12C74.5545 29.12 73.8718 28.9813 73.1465 28.704C72.4212 28.4053 71.7385 28.032 71.0985 27.584C70.4585 27.136 69.9252 26.6667 69.4985 26.176C69.0932 25.6853 68.8905 25.2267 68.8905 24.8C68.8905 24.5227 68.8905 24.096 68.8905 23.52C68.9118 22.944 68.9225 22.3467 68.9225 21.728C68.9438 21.088 68.9545 20.5547 68.9545 20.128V17.504C68.9545 16.096 69.3812 15.0293 70.2345 14.304C71.0878 13.5573 72.2292 13.184 73.6585 13.184C74.1065 13.184 74.6292 13.3227 75.2265 13.6C75.8238 13.856 76.4105 14.208 76.9865 14.656C77.5625 15.0827 78.0425 15.5627 78.4265 16.096C78.8105 16.608 79.0025 17.12 79.0025 17.632C79.0025 18.1867 78.9812 18.6773 78.9385 19.104C78.8958 19.5093 78.8425 19.8827 78.7785 20.224L75.4825 19.584C75.6532 18.56 75.7385 17.664 75.7385 16.896C75.7385 16.5333 75.6638 16.288 75.5145 16.16C75.3865 16.032 75.1732 15.968 74.8745 15.968C73.0398 15.968 72.1225 16.8853 72.1225 18.72V21.28C72.1225 22.6453 72.1012 23.648 72.0585 24.288C72.0372 24.9067 72.0265 25.3973 72.0265 25.76C72.0265 25.9947 72.1332 26.176 72.3465 26.304C72.5598 26.432 72.8265 26.496 73.1465 26.496C73.9358 26.496 74.6078 26.336 75.1625 26.016C75.7172 25.6747 76.2185 25.1307 76.6665 24.384L77.0505 24.288Z"/>
<path d="M83.3448 28.672L81.4888 25.888C81.8088 25.3547 82.2568 24.6507 82.8328 23.776C83.4301 22.9013 84.0594 21.9733 84.7208 20.992C85.4034 19.9893 86.0434 19.04 86.6408 18.144C87.2594 17.248 87.7501 16.5227 88.1128 15.968H87.5688C86.5234 15.968 85.6914 16.032 85.0728 16.16C84.4754 16.288 83.9848 16.5227 83.6008 16.864H83.0568L81.1048 13.984L81.3608 13.44H89.1688L91.2488 16.288C91.0568 16.608 90.7581 17.0773 90.3528 17.696C89.9688 18.3147 89.5208 19.0187 89.0088 19.808C88.5181 20.576 88.0061 21.3653 87.4728 22.176C86.9608 22.9653 86.4701 23.712 86.0008 24.416C85.5528 25.0987 85.1901 25.664 84.9128 26.112H85.1048C85.7234 26.1333 86.5021 26.1333 87.4408 26.112C88.4008 26.0693 89.3394 25.9733 90.2568 25.824L91.7928 28.128L91.5368 28.672H83.3448Z"/>
</mask>
<path d="M55.072 28.992C54.752 28.992 54.3147 28.8747 53.76 28.64C53.2053 28.384 52.64 28.064 52.064 27.68C51.488 27.2747 50.9973 26.8587 50.592 26.432C50.1867 25.984 49.984 25.5573 49.984 25.152C49.984 24.9173 49.9947 24.672 50.016 24.416C50.0373 24.16 50.0693 23.8293 50.112 23.424C50.1547 22.9973 50.1867 22.432 50.208 21.728C50.2293 21.024 50.24 20.1067 50.24 18.976C50.24 18.5493 50.24 18.1013 50.24 17.632C50.24 17.1627 50.2293 16.672 50.208 16.16H49.632L48 14.016L48.224 13.504C49.3547 13.376 50.0693 13.0347 50.368 12.48C50.6667 11.9253 50.816 11.0827 50.816 9.952L51.36 9.76L53.312 11.232C53.312 11.616 53.312 11.9893 53.312 12.352C53.312 12.7147 53.312 13.0773 53.312 13.44H56.032L57.632 15.68L57.408 16.16H53.344C53.344 16.928 53.344 17.664 53.344 18.368C53.344 19.072 53.344 19.744 53.344 20.384C53.344 21.6213 53.3227 22.5707 53.28 23.232C53.2587 23.8933 53.2267 24.384 53.184 24.704C53.1413 25.024 53.12 25.3227 53.12 25.6C53.12 26.0267 53.344 26.24 53.792 26.24C54.176 26.24 54.592 26.144 55.04 25.952C55.488 25.7387 55.904 25.4827 56.288 25.184H56.736L58.24 27.68C57.9413 28.0427 57.472 28.352 56.832 28.608C56.192 28.864 55.6053 28.992 55.072 28.992Z" fill="#0E464F"/>
<path d="M62.6423 11.296L60.5303 9.024V8.704C61.1063 7.936 61.8849 7.264 62.8663 6.688L64.9783 8.896L64.9463 9.28C64.5196 9.57867 64.1143 9.90933 63.7303 10.272C63.3676 10.6347 63.0049 10.976 62.6423 11.296ZM65.4902 29.312C64.1249 28.8 63.0689 28.3413 62.3223 27.936C61.5969 27.5093 61.2343 27.1253 61.2343 26.784C61.2343 26.4853 61.2662 26.0267 61.3302 25.408C61.4156 24.768 61.4583 24.1493 61.4583 23.552V18.976C61.4583 18.4213 61.4796 17.9093 61.5223 17.44C61.5863 16.9493 61.6823 16.5227 61.8103 16.16H60.7543L59.0583 13.984L59.2823 13.44H63.3783L65.2343 15.936C64.9783 16.2773 64.8076 16.704 64.7222 17.216C64.6582 17.728 64.6263 18.3787 64.6263 19.168V23.904C64.6263 24.672 64.5942 25.3547 64.5303 25.952C64.4663 26.528 64.4342 26.9653 64.4342 27.264C64.4342 27.4773 64.5089 27.648 64.6583 27.776C64.8289 27.8827 65.2343 28.1067 65.8743 28.448L65.4902 29.312Z" fill="#0E464F"/>
<path d="M77.0505 24.288L79.7385 26.016C79.3118 27.0187 78.6932 27.7867 77.8825 28.32C77.0932 28.8533 76.1972 29.12 75.1945 29.12C74.5545 29.12 73.8718 28.9813 73.1465 28.704C72.4212 28.4053 71.7385 28.032 71.0985 27.584C70.4585 27.136 69.9252 26.6667 69.4985 26.176C69.0932 25.6853 68.8905 25.2267 68.8905 24.8C68.8905 24.5227 68.8905 24.096 68.8905 23.52C68.9118 22.944 68.9225 22.3467 68.9225 21.728C68.9438 21.088 68.9545 20.5547 68.9545 20.128V17.504C68.9545 16.096 69.3812 15.0293 70.2345 14.304C71.0878 13.5573 72.2292 13.184 73.6585 13.184C74.1065 13.184 74.6292 13.3227 75.2265 13.6C75.8238 13.856 76.4105 14.208 76.9865 14.656C77.5625 15.0827 78.0425 15.5627 78.4265 16.096C78.8105 16.608 79.0025 17.12 79.0025 17.632C79.0025 18.1867 78.9812 18.6773 78.9385 19.104C78.8958 19.5093 78.8425 19.8827 78.7785 20.224L75.4825 19.584C75.6532 18.56 75.7385 17.664 75.7385 16.896C75.7385 16.5333 75.6638 16.288 75.5145 16.16C75.3865 16.032 75.1732 15.968 74.8745 15.968C73.0398 15.968 72.1225 16.8853 72.1225 18.72V21.28C72.1225 22.6453 72.1012 23.648 72.0585 24.288C72.0372 24.9067 72.0265 25.3973 72.0265 25.76C72.0265 25.9947 72.1332 26.176 72.3465 26.304C72.5598 26.432 72.8265 26.496 73.1465 26.496C73.9358 26.496 74.6078 26.336 75.1625 26.016C75.7172 25.6747 76.2185 25.1307 76.6665 24.384L77.0505 24.288Z" fill="#0E464F"/>
<path d="M83.3448 28.672L81.4888 25.888C81.8088 25.3547 82.2568 24.6507 82.8328 23.776C83.4301 22.9013 84.0594 21.9733 84.7208 20.992C85.4034 19.9893 86.0434 19.04 86.6408 18.144C87.2594 17.248 87.7501 16.5227 88.1128 15.968H87.5688C86.5234 15.968 85.6914 16.032 85.0728 16.16C84.4754 16.288 83.9848 16.5227 83.6008 16.864H83.0568L81.1048 13.984L81.3608 13.44H89.1688L91.2488 16.288C91.0568 16.608 90.7581 17.0773 90.3528 17.696C89.9688 18.3147 89.5208 19.0187 89.0088 19.808C88.5181 20.576 88.0061 21.3653 87.4728 22.176C86.9608 22.9653 86.4701 23.712 86.0008 24.416C85.5528 25.0987 85.1901 25.664 84.9128 26.112H85.1048C85.7234 26.1333 86.5021 26.1333 87.4408 26.112C88.4008 26.0693 89.3394 25.9733 90.2568 25.824L91.7928 28.128L91.5368 28.672H83.3448Z" fill="#0E464F"/>
<path d="M55.072 28.992C54.752 28.992 54.3147 28.8747 53.76 28.64C53.2053 28.384 52.64 28.064 52.064 27.68C51.488 27.2747 50.9973 26.8587 50.592 26.432C50.1867 25.984 49.984 25.5573 49.984 25.152C49.984 24.9173 49.9947 24.672 50.016 24.416C50.0373 24.16 50.0693 23.8293 50.112 23.424C50.1547 22.9973 50.1867 22.432 50.208 21.728C50.2293 21.024 50.24 20.1067 50.24 18.976C50.24 18.5493 50.24 18.1013 50.24 17.632C50.24 17.1627 50.2293 16.672 50.208 16.16H49.632L48 14.016L48.224 13.504C49.3547 13.376 50.0693 13.0347 50.368 12.48C50.6667 11.9253 50.816 11.0827 50.816 9.952L51.36 9.76L53.312 11.232C53.312 11.616 53.312 11.9893 53.312 12.352C53.312 12.7147 53.312 13.0773 53.312 13.44H56.032L57.632 15.68L57.408 16.16H53.344C53.344 16.928 53.344 17.664 53.344 18.368C53.344 19.072 53.344 19.744 53.344 20.384C53.344 21.6213 53.3227 22.5707 53.28 23.232C53.2587 23.8933 53.2267 24.384 53.184 24.704C53.1413 25.024 53.12 25.3227 53.12 25.6C53.12 26.0267 53.344 26.24 53.792 26.24C54.176 26.24 54.592 26.144 55.04 25.952C55.488 25.7387 55.904 25.4827 56.288 25.184H56.736L58.24 27.68C57.9413 28.0427 57.472 28.352 56.832 28.608C56.192 28.864 55.6053 28.992 55.072 28.992Z" stroke="white" stroke-width="2" mask="url(#path-3-outside-1_4002_88)"/>
<path d="M62.6423 11.296L60.5303 9.024V8.704C61.1063 7.936 61.8849 7.264 62.8663 6.688L64.9783 8.896L64.9463 9.28C64.5196 9.57867 64.1143 9.90933 63.7303 10.272C63.3676 10.6347 63.0049 10.976 62.6423 11.296ZM65.4902 29.312C64.1249 28.8 63.0689 28.3413 62.3223 27.936C61.5969 27.5093 61.2343 27.1253 61.2343 26.784C61.2343 26.4853 61.2662 26.0267 61.3302 25.408C61.4156 24.768 61.4583 24.1493 61.4583 23.552V18.976C61.4583 18.4213 61.4796 17.9093 61.5223 17.44C61.5863 16.9493 61.6823 16.5227 61.8103 16.16H60.7543L59.0583 13.984L59.2823 13.44H63.3783L65.2343 15.936C64.9783 16.2773 64.8076 16.704 64.7222 17.216C64.6582 17.728 64.6263 18.3787 64.6263 19.168V23.904C64.6263 24.672 64.5942 25.3547 64.5303 25.952C64.4663 26.528 64.4342 26.9653 64.4342 27.264C64.4342 27.4773 64.5089 27.648 64.6583 27.776C64.8289 27.8827 65.2343 28.1067 65.8743 28.448L65.4902 29.312Z" stroke="white" stroke-width="2" mask="url(#path-3-outside-1_4002_88)"/>
<path d="M77.0505 24.288L79.7385 26.016C79.3118 27.0187 78.6932 27.7867 77.8825 28.32C77.0932 28.8533 76.1972 29.12 75.1945 29.12C74.5545 29.12 73.8718 28.9813 73.1465 28.704C72.4212 28.4053 71.7385 28.032 71.0985 27.584C70.4585 27.136 69.9252 26.6667 69.4985 26.176C69.0932 25.6853 68.8905 25.2267 68.8905 24.8C68.8905 24.5227 68.8905 24.096 68.8905 23.52C68.9118 22.944 68.9225 22.3467 68.9225 21.728C68.9438 21.088 68.9545 20.5547 68.9545 20.128V17.504C68.9545 16.096 69.3812 15.0293 70.2345 14.304C71.0878 13.5573 72.2292 13.184 73.6585 13.184C74.1065 13.184 74.6292 13.3227 75.2265 13.6C75.8238 13.856 76.4105 14.208 76.9865 14.656C77.5625 15.0827 78.0425 15.5627 78.4265 16.096C78.8105 16.608 79.0025 17.12 79.0025 17.632C79.0025 18.1867 78.9812 18.6773 78.9385 19.104C78.8958 19.5093 78.8425 19.8827 78.7785 20.224L75.4825 19.584C75.6532 18.56 75.7385 17.664 75.7385 16.896C75.7385 16.5333 75.6638 16.288 75.5145 16.16C75.3865 16.032 75.1732 15.968 74.8745 15.968C73.0398 15.968 72.1225 16.8853 72.1225 18.72V21.28C72.1225 22.6453 72.1012 23.648 72.0585 24.288C72.0372 24.9067 72.0265 25.3973 72.0265 25.76C72.0265 25.9947 72.1332 26.176 72.3465 26.304C72.5598 26.432 72.8265 26.496 73.1465 26.496C73.9358 26.496 74.6078 26.336 75.1625 26.016C75.7172 25.6747 76.2185 25.1307 76.6665 24.384L77.0505 24.288Z" stroke="white" stroke-width="2" mask="url(#path-3-outside-1_4002_88)"/>
<path d="M83.3448 28.672L81.4888 25.888C81.8088 25.3547 82.2568 24.6507 82.8328 23.776C83.4301 22.9013 84.0594 21.9733 84.7208 20.992C85.4034 19.9893 86.0434 19.04 86.6408 18.144C87.2594 17.248 87.7501 16.5227 88.1128 15.968H87.5688C86.5234 15.968 85.6914 16.032 85.0728 16.16C84.4754 16.288 83.9848 16.5227 83.6008 16.864H83.0568L81.1048 13.984L81.3608 13.44H89.1688L91.2488 16.288C91.0568 16.608 90.7581 17.0773 90.3528 17.696C89.9688 18.3147 89.5208 19.0187 89.0088 19.808C88.5181 20.576 88.0061 21.3653 87.4728 22.176C86.9608 22.9653 86.4701 23.712 86.0008 24.416C85.5528 25.0987 85.1901 25.664 84.9128 26.112H85.1048C85.7234 26.1333 86.5021 26.1333 87.4408 26.112C88.4008 26.0693 89.3394 25.9733 90.2568 25.824L91.7928 28.128L91.5368 28.672H83.3448Z" stroke="white" stroke-width="2" mask="url(#path-3-outside-1_4002_88)"/>
</svg>
  </div>
  </div>
  <div className='capitalize text-[#B3B3B3;]  justify-center items-center gap-4 cursor-pointer text-[18px] font-[400] font-[JejuMyeongjo] hidden lg:flex'>
        <span>Events</span>
        <span>My Ticket</span>
        <span>About Project</span>
      </div>
      <div>
        <button className='bg-white rounded-xl w-[169px]  h-[52px] text-[18px]  items-center justify-center gap-2 font-[400] font-[JejuMyeongjo] hidden lg:flex'>
          My Ticket
          <FaArrowRightLong/>
        </button>
      </div>
      <div className='block lg:hidden'>
        <RxHamburgerMenu size={30} color='#B3B3B3' onClick={()=>setIsOpen(!isOpen)} /> 
      </div>
      <div className='absolute w-full flex flex-col items-center lg:hidden justify-center  left-0 h-[50vh] z-10 gap-6 bg-white/10 backdrop-blur-md p-12' style={style}>
      <div className='capitalize text-[#B3B3B3;]  justify-center items-center gap-6 cursor-pointer text-[18px] font-[400] font-[JejuMyeongjo] flex flex-col w-full'>
        <span>Events</span>
        <span>My Ticket</span>
        <span>About Project</span>
      </div>
      <div>
        <button className='bg-white rounded-xl w-[169px] h-[52px] text-[18px]  items-center justify-center gap-2 font-[400] font-[JejuMyeongjo] flex'>
          My Ticket
          <FaArrowRightLong/>
        </button>
      </div>
      </div>
    </div>
    </header>
    </>
  )
}

export default Header