import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-9867853eb75e",
    sku: "techfine_2kva_inverter_1",
    name: "Techfine 2kva Inverter",
    description: `Introduction
    AV Series Inverters are electronic generators based on Microcontroller PWM-MOSFET technology which has a high efficiency inverter and a heavy duty integrated battery charger. The unit will automatically switch over to an external battery source when incoming AC line power fails or is too high/low,beyond acceptable limits.In this condition it will continue to supply stable power. With this inverter, you will never be left without power when you need it!
    Products features
    1.Ultra wide input voltage range
    2.Two stage battery charge
    3.Generator compatible
    4.Multifunction LED indications& Buzzer alarms
    5.Battery deep discharge protection
    6.Overload/Short circuit/Auto restart feature
    7.Noiseless and pollution-free
    8.Reliable & Trusted`,
    price: 15000000, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2017/10/AV2000.jpg?w=300&ssl=1",
    images: [
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2017/10/AV2000.jpg?w=300&ssl=1",
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2017/10/AV2000.jpg?w=300&ssl=1",
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2017/10/AV2000.jpg?w=300&ssl=1",
    ],
    categories: ["bags"],
    currency: "USD",
  },
  {
    id: "64da6006-a4bb-4775-af78-3467853eb75e",
    sku: "TF-MPPT-5",
    name: "Techfine 5kva Inverter with In-built MPPT",
    description: `DESCRIPTION
    Features:
    •Pure sine wave inverter
    •Built-in MPPT solar charge controller
    •Selectable input voltage range for home appliances and personal computers
    •Selectable charging current based on applications
    •Configurable AC/Solar input priority via LCD setting
    •Compatible to mains voltage or generator power
    •Auto restart while AC is recovering
    •Overload and short circuit protection
    •Smart battery charger design for optimized battery performance
    •Cold start function
    •Parallel operation with up to 4 units only available for MQS 4KVA/5KVA
    •Optional remote control panel available`,
    price: 42000000, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2018/02/IMG_3260.jpg?fit=749%2C1080&ssl=1",
    images: [
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2018/02/IMG_3260.jpg?fit=749%2C1080&ssl=1",
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2018/02/IMG_3260.jpg?fit=749%2C1080&ssl=1",
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2018/02/IMG_3260.jpg?fit=749%2C1080&ssl=1",
    ],
    categories: ["Inverter"],
    currency: "USD",
  },
  {
    id: "64da6006-a4bb-4355-af77-3467853eb75e",
    sku: "AV5000",
    name: "Techfine 5kva Inverter",
    description: `Introduction

    AV Series Inverters are electronic generators based on Microcontroller PWM-MOSFET technology which has a high efficiency inverter and a heavy duty integrated battery charger. The unit will automatically switch over to an external battery source when incoming AC line power fails or is too high/low,beyond acceptable limits.In this condition it will continue to supply stable power. With this inverter, you will never be left without power when you need it!
    
    Products features
    
    1.Ultra wide input voltage range
    2.Two stage battery charge
    3.Generator compatible
    4.Multifunction LED indications& Buzzer alarms
    5.Battery deep discharge protection
    6.Overload/Short circuit/Auto restart feature
    7.Noiseless and pollution-free
    8.Reliable & Trusted`,
    price: 32000000, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2017/11/inverter.jpg?w=680&ssl=1",
    images: [
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2017/11/inverter.jpg?w=680&ssl=1",
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2017/11/inverter.jpg?w=680&ssl=1",
      "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2017/11/inverter.jpg?w=680&ssl=1",
    ],
    categories: ["Inverter"],
    currency: "USD",
  },
  
]
