("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {allowed_countries: ['US','CA',"AE","AG","AL","AM","AR","AT","AU","BA","BE","BG","BH","BO","CH","CI","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","EG","ES","ET","FI","FR","GB","GH","GM","GR","GT","GY","HK","HR","HU","ID","IE","IL","IS","IT","JM","JO","JP","KE","KH","KR","KW","LC","LI","LK","LT","LU","LV","MA","MD","MG","MK","MN","MO","MT","MU","MX","MY","NA","NG","NL","NO","NZ","OM","PA","PE","PH","PL","PT","PY","QA","RO","RS","RW","SA","SE","SG","SI","SK","SN","SV","TH","TN","TR","TT","TZ","UY","UZ","VN","ZA","BD","BJ","MC","NE","SM","AZ","BN","BT","AO","DZ","TW","BS","BW","GA","LA","MZ"]},
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL+"?success=true",
        cancel_url: process.env.CLIENT_URL+"?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: {  products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));




        

