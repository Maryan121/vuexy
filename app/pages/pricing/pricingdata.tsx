import pricePot1 from '../../../public/images/pricing/Pot4.svg'
import pricePot2 from '../../../public/images/pricing/Pot1.svg'
import pricePot3 from '../../../public/images/pricing/Pot5.svg'

export default [
    {
        id:1,
        potImage:pricePot1,
        level:'basic',
        levelDesc:'A simple start for everyone',
        price:0,
        list:['100 responses a month','Unlimited forms and surveys','Unlimited fields','Basic form creation tools','Up to 2 subdomains'],
        button:'Your current plan',

    },
    {
        id:2,
        potImage:pricePot2,
        level:'standard',
        levelDesc:'For small to medium businesses',
        price:99,
        list:['Unlimited responses','Unlimited forms and surveys','Instagram profile page','Google Docs integration','Custom “Thank you” page'],
        button:'upgrade',
        popular:'popular',
        specialStyle:'self-start bg-primary-purpuleish text-white',
        border:'border border-primary-purpuleish'
    },
    {
        id:1,
        potImage:pricePot3,
        level:'Enterprise',
        levelDesc:'Solution for big organizations',
        price:499,
        list:['PayPal payments','Logic Jumps','File upload with 5GB storage','Custom domain support','Stripe integration'],
        button:'upgrade',

    }
]