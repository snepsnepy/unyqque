import type { PersonalInfo, ShopItem } from "~/types";

export const useGenerateWappLink = (
  shoppingCart: ShopItem[],
  personalInfo: PersonalInfo
) => {
  const phoneNumber = "+40738950590";

  // Format the items
  const itemsMessage = shoppingCart
    .map((item: ShopItem, index: number) => {
      let itemDetails = `*Item ${index + 1}:* \n  *Title:* ${
        item.name
      }\n  *Color:* ${item.color}`;

      // Only include design color if the item has one
      if (item.designColor) {
        itemDetails += `\n  *Design Color:* ${item.designColor}`;
      }

      itemDetails += `\n  *Size:* ${item.size}\n  *Price:* ${item.price} RON\n`;

      return itemDetails;
    })
    .join("\n");

  const totalPrice =
    shoppingCart.reduce((sum, item) => sum + item.price, 0) + 20;

  // Customer details
  const customerDetails = `*Customer Details:*  

  *Name:* ${personalInfo.fullName}  
  *Address:* ${personalInfo.address}  
  *Phone:* ${personalInfo.cellPhoneNo}  
  *Email:* ${personalInfo.email}  
`;

  // Full message
  const message = `*NEW ORDER REQUEST* \n\n${itemsMessage}\n${customerDetails}\n*Total Price (including fees):* ${totalPrice.toFixed(
    2
  )} RON`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
