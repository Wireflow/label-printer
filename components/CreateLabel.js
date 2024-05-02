import React, { useEffect, useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";

const CreateLabel = () => {
  const [cashPrice, setCashPrice] = useState("");
  const [cardPrice, setCardPrice] = useState("");
  const [tax, setTax] = useState(false);

  const handleCashInput = (text) => {
    setCashPrice(text);
    const cash = parseFloat(text);
    if (!isNaN(cash)) {
      const taxRate = 0.04;
      const updatedCardPrice = (cash * (1 + taxRate)).toFixed(2);
      setCardPrice(updatedCardPrice);
    } else {
      setCardPrice("");
    }
  };
  const handleTaxToggle = () => {
    setTax(!tax);
  };
  return (
    <View className="flex flex-col gap-5">
      <Text className="text-gray-500 text-center text-3xl font-bold">
        Create a label
      </Text>
      <View className="px-5 w-full">
        <View className="flex flex-col items-end px-5">
          <Pressable
            onPress={handleTaxToggle}
            className={`${
              tax ? "bg-gray-500 " : "bg-white "
            } border-2 border-gray-300 w-[130px] duration-300 ease-in-out transition-transform flex  h-[60px] rounded-full relative`}
          >
            <View
              className={`${
                tax
                  ? "translate-x-[60px] bg-green-500"
                  : "translate-x-0 bg-red-500"
              }  w-[70px] rounded-full h-full flex justify-center items-center `}
            >
              <Text className="text-white  font-bold">
                {tax ? "Tax" : "No Tax"}
              </Text>
            </View>
          </Pressable>
        </View>
        <View className="flex flex-col gap-5 ">
          <View className=" mx-5">
            <Text className=" text-lg font-medium mb-2">Cash Price</Text>
            <TextInput
              onChangeText={handleCashInput}
              placeholder="Enter cash price"
              className="border-2 px-3 text-xl  py-3 rounded-xl border-gray-400"
            />
          </View>
          <View className=" mx-5 flex flex-col ">
            <Text className=" text-lg font-medium mb-2">Card Price</Text>
            <TextInput
              value={cardPrice}
              className="border-2 px-3 text-xl  py-3 rounded-xl border-gray-400"
            />
          </View>
        </View>
      </View>
      <View className="flex justify-center items-center">
        <Pressable className="bg-black px-[80px] py-3 rounded-full">
          <Text className="text-white text-xl font-semibold">Print</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateLabel;
