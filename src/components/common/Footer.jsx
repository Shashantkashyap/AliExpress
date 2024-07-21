import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-600 py-8 mt-10   ">
      <div className="container mx-auto text-sm px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Customer Service</h2>
            <ul>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Transaction Services Agreement for non-EU/UK Consumers</a></li>
              <li><a href="#" className="hover:underline">Terms and Conditions for EU/EEA/UK Consumers (Transactions)</a></li>
              <li><a href="#" className="hover:underline">Take our feedback survey</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Shopping with Us</h2>
            <ul>
              <li><a href="#" className="hover:underline">Making payments</a></li>
              <li><a href="#" className="hover:underline">Delivery options</a></li>
              <li><a href="#" className="hover:underline">Buyer Protection</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Collaborate with Us</h2>
            <ul>
              <li><a href="#" className="hover:underline">Partnerships</a></li>
              <li><a href="#" className="hover:underline">Affiliate program</a></li>
              <li><a href="#" className="hover:underline">DS Center</a></li>
              <li><a href="#" className="hover:underline">Seller Log In</a></li>
              <li><a href="#" className="hover:underline">中国卖家入驻</a></li>
              <li><a href="#" className="hover:underline">Non-Chinese Seller Registration</a></li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-bold mb-4">Stay Connected</h2>
            <div className="flex space-x-2">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Messenger</a>
              
            </div>
          </div>
          <div className="ml-10">
            <h2 className="text-lg font-bold mb-4">Pay with</h2>
            <div className="grid grid-cols-2 gap-2 text-[12px]">
              <ul className="space-y-1">
                <li>VISA</li>
                <li>MASTERCARD</li>
                <li>JCB</li>
                <li>AMEX</li>
                <li>WALLET</li>
                <li>PAYPAL</li>
              </ul>
              <ul className="space-y-1">
                <li>PPRO</li>
                <li>IDEAL</li>
                <li>BLIK</li>
                <li>CODE</li>
                <li>CREDIT</li>
                <li>PAY</li>
                <li>PAYU</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Help</h2>
            <ul>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Disputes & Reports</a></li>
              <li><a href="#" className="hover:underline">Buyer Protection</a></li>
              <li><a href="#" className="hover:underline">Report IPR infringement</a></li>
              <li><a href="#" className="hover:underline">Regulated Information</a></li>
              <li><a href="#" className="hover:underline">Integrity Compliance</a></li>
              <li><a href="#" className="hover:underline">Transparency Center</a></li>
              <li><a href="#" className="hover:underline">Submit report (non-registered users)</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">AliExpress Multi-Language Sites</h2>
            <p className="break-words">Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, Vietnamese, Arabic, Hebrew, Polish</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Browse by Category</h2>
            <p className="break-words">All Popular, Product, Promotion, Low Price, Great Value, Reviews, Blog, Seller Portal, BLACK FRIDAY, AliExpress Assistant</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Alibaba Group</h2>
            <p className="break-words">Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, Alibaba Cloud, Alibaba International, AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688</p>
          </div>
        </div>
      </div>
      <div className="text-sm bg-black text-white py-8 mt-8 text-center px-10 ">
        Intellectual Property Protection - Privacy Policy - Sitemap - Terms of Use - Information for EU consumers - Imprint - Transaction Services Agreement for non-EU/UK Consumers - Terms and Conditions for EU/EEA/UK Consumers - User Information Legal Enquiry Guide ©️2010-2024 AliExpress.com. All rights reserved. 增值电信业务经营许可证 浙B2-20120091-8 浙公网安备 33010802002248号
      </div>
    </footer>
  );
}

export default Footer;
