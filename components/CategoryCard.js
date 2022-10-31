import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

const CategoryCard = ({ containerStyle, categoryItem, onPress, bookCoverUrl }) => {
  return (
    <View style={{ marginVertical: SIZES.base, marginTop: SIZES.padding }}>
      <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>

        {/* Book Cover */}
         <Image
          source={{ uri:bookCoverUrl}}
          resizeMode="cover"
          style={{ width: 100, height: 150, borderRadius: 10 }}
        /> 

        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        {/* Book name and author */}
        <View>
        <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{categoryItem.title}</Text>
        <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{categoryItem.author}</Text>
        </View>
        
        </View>

       
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;
