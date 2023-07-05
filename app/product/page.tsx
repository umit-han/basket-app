import { BsButton } from "@/components/Button/BsButton";
import { BsInput } from "@/components/Input/BsInput";
import { BsProduct } from "@/components/Product/BsProduct";
import { BsSelect } from "@/components/Select/BsSelect";
import { colors } from "@/utils/colors/colors";
import React from "react";

export default function Login() {
  return (
    <main className="container h-screen">
      <div className="pt-6">
        <BsProduct
          imgUrl="https://images.unsplash.com/photo-1687996345260-2f8e48b6b387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=220&q=80"
          km="3.9"
          point="3.7"
          title="Villa Bosphorus"
          fillRate={colors.rate}
          fillLocation={colors.blue500}
          fillButton={colors.primary}
          btnActionText="Sepete Ekle"
        />
        <div className="border-b border-gray000 my-4"></div>
        <BsProduct
          imgUrl="https://images.unsplash.com/photo-1687996345260-2f8e48b6b387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=220&q=80"
          km="3.9"
          point="3.7"
          title="Villa Bosphorus"
          fillRate={colors.rate}
          fillLocation={colors.blue500}
          fillButton={colors.primary}
          btnActionText="Sepetten Çıkar"
        />
        <BsProduct
          imgUrl="https://images.unsplash.com/photo-1687996345260-2f8e48b6b387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=220&q=80"
          km="3.9"
          point="3.7"
          title="Villa Bosphorus"
          fillRate={colors.rate}
          fillLocation={colors.blue500}
          fillButton={colors.primary}
          btnActionText="Sepetten Çıkar"
        />
      </div>
      <div className="border-b border-gray000 my-4"></div>
      <div>
        <h1 className="text-black text-3xl font-bold leading-[33px] mt-10 mb-8">
          Ürünlerin Toplamı:
        </h1>
        <p className="text-black text-base font-normal leading-[20px] mb-3">
          Toplam:124,35 TL
        </p>
        <p className="text-black text-base font-normal leading-[20px]">
          Vergiler + Kargo: 21,45 TL
        </p>
        <h2 className="text-black text-xl font-bold leading-[26px] my-6">
          Genel Toplam:145,8 TL
        </h2>
      </div>
    </main>
  );
}
