import type { PersonalInfo, ShopItem } from "~/types";

export const useGenerateWappLink = (
  shoppingCart: ShopItem[],
  personalInfo: PersonalInfo
) => {
  const phoneNumber = "+40738950590";

  // Format the items
  const itemsMessage = shoppingCart
    .map(
      (item: ShopItem, index: number) =>
        `*Item ${index + 1}:* \n  *Title:* ${item.name}\n  *Color:* ${
          item.color
        }\n  *Design Color:* ${item.designColor}\n  *Size:* ${
          item.size
        }\n  *Price:* ${item.price}\n`
    )
    .join("\n");

  const totalPrice =
    shoppingCart.reduce((sum, item) => sum + item.price, 0) + 20;

  // Customer details
  const customerDetails = `*Customer Details:*  

  *Name:* ${personalInfo.fullName}  
  *Address:* ${personalInfo.address}  
  *Phone:* ${personalInfo.cellPhoneNo}  
  *Phone:* ${personalInfo.email}  
`;

  // Full message
  const message = `*New Order Request* \n\n${itemsMessage}\n${customerDetails}\n*Total Price (including fees):* ${totalPrice.toFixed(
    2
  )} RON \n\nThank you for your order! Your order will be confirmed shortly. We appreciate your patience and will update you as soon as possible.`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
