import React from 'react'
import ProductDescription from '../components/homeComponent/ProductDescription'
import Navbar from "../components/common/Navbar";

function ProductDescriptionPage() {
  return (
    <div>
        <div className="w-full bg-black mb-10">
        <Navbar />
      </div>

      <div>
        <ProductDescription/>

      </div>

      <div>
      <footer className="bg-gray-200 text-gray-700 py-8 flex flex-wrap ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%]">
          {/* Help Section */}
          <div className="col-span-1 md:col-span-1 w-[90%]">
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <p>
              <a href="#" className="hover:underline">
                Help Center
              </a>
              ,
              <a href="#" className="hover:underline">
                Disputes & Reports
              </a>
              ,
              <a href="#" className="hover:underline">
                Buyer Protection
              </a>
              ,
              <a href="#" className="hover:underline">
                Report IPR infringement
              </a>
              ,
              <a href="#" className="hover:underline">
                Regulated Information
              </a>
              ,
              <a href="#" className="hover:underline">
                Integrity Compliance
              </a>
              ,
              <a href="#" className="hover:underline">
                Transparency Center
              </a>
              ,
              <a href="#" className="hover:underline">
                Submit report (non-registered users)
              </a>
            </p>
          </div>

          {/* AliExpress Multi-Language Sites Section */}
          <div className="col-span-1 md:col-span-1 w-[90%]">
            <h3 className="text-lg font-bold mb-4">
              AliExpress Multi-Language Sites
            </h3>
            <p>
              {[
                "Russian",
                "Portuguese",
                "Spanish",
                "French",
                "German",
                "Italian",
                "Dutch",
                "Turkish",
                "Japanese",
                "Korean",
                "Thai",
                "Vietnamese",
                "Arabic",
                "Hebrew",
                "Polish",
              ].map((language, index, arr) => (
                <span key={language}>
                  <a href="#" className="hover:underline">
                    {language}
                  </a>
                  {index < arr.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>

          {/* Browse by Category Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Browse by Category</h3>
            <p>
              {[
                "All Popular",
                "Product",
                "Promotion",
                "Low Price",
                "Great Value",
                "Reviews",
              ].map((category, index, arr) => (
                <span key={category}>
                  <a href="#" className="hover:underline">
                    {category}
                  </a>
                  {index < arr.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>

          {/* Alibaba Group Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Alibaba Group</h3>
            <p>
              {[
                "Alibaba Group Website",
                "AliExpress",
                "Alimama",
                "Alipay",
                "Fliggy",
                "Alibaba Cloud",
                "Alibaba International",
                "AliTelecom",
                "DingTalk",
                "Juhuasuan",
                "Taobao Marketplace",
                "Tmall",
                "Taobao Global",
                "AliOS",
                "1688",
              ].map((site, index, arr) => (
                <span key={site}>
                  <a href="#" className="hover:underline">
                    {site}
                  </a>
                  {index < arr.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>
      </footer>
      <div className="text-sm bg-black text-white py-8 text-center px-10 ">
        Intellectual Property Protection - Privacy Policy - Sitemap - Terms of Use - Information for EU consumers - Imprint - Transaction Services Agreement for non-EU/UK Consumers - Terms and Conditions for EU/EEA/UK Consumers - User Information Legal Enquiry Guide ©️2010-2024 AliExpress.com. All rights reserved. 增值电信业务经营许可证 浙B2-20120091-8 浙公网安备 33010802002248号
      </div>
      </div>
      
    </div>
  )
}

export default ProductDescriptionPage
