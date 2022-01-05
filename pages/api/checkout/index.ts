import { product } from './../../../recoil/cart';
import { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2020-08-27'
});

const checkout = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const line_items = await Promise.all(req.body.map(async (item: product) => {
      const resPriceCurrency = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
      const { USD } = await resPriceCurrency.json();

      return {
        price_data: {
          currency: "USD",
          unit_amount: Math.round(USD * item.ape.price), // should be * 100
          product_data: {
            name: item.ape.number,
            images: [item.ape.image_url]
          }
        },
        quantity: item.quantity
      }
    }))

    const { id } = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      line_items
    });

    res.status(200).json({ id });
  } catch {
    res.status(500);
  }
  res.end()
};

export default checkout;