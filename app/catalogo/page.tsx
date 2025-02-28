"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Product data
const products = [
  {
    id: 1,
    name: "Los Patos Joven Malbec",
    price: 30250,
    category: "Vinos",
    description:
      "Variedad: 100% Malbec Graduacion: 13% Contenido: 750ml. Cosecha: 2019 Maridaje: carnes rojas, quesos y pastas",
    image1: "https://blending.com.ar/distribuidoramataro/img-prod/10.jpeg",
    image2: "https://th.bing.com/th/id/OIP.cMYzacNO-JdNo83KVyjD2AHaHa?w=217&h=217&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 2,
    name: "Los Patos Joven Cabernet Sauvignon",
    price: 30250,
    category: "Vinos",
    description:
      "Variedad: 100% Cabarnet Sauvignon Graduacion: 13% Contenido: 750ml. Cosecha: 2019 Maridaje: carnes rojas, quesos y pastas",
    image1: "https://blending.com.ar/distribuidoramataro/img-prod/11.jpeg",
    image2: "https://http2.mlstatic.com/D_NQ_NP_679004-MLA52592120821_112022-O.webp",
  },
  {
    id: 3,
    name: "Los Patos Joven Cabernet Franc",
    price: 30250,
    category: "Vinos",
    description:
      "Variedad: 100% Cabernet Franc Graduacion: 13% Contenido: 750ml. Cosecha: 2019 Mairdaje: Carnes rojas, quesos y pastas",
    image1: "https://blending.com.ar/distribuidoramataro/img-prod/12.jpeg",
    image2: "https://th.bing.com/th/id/OIP.nDkBvlWBOC61SbSgAbHnswHaJ4?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    name: "Los Patos Joven 4 Tintas Blend",
    price: 30250,
    category: "Vinos",
    description:
      "Variedad: 4 Tintas Blend Graduacion: 13% Contenido: 750ml. Cosecha: 2019 Maridaje: carnes rojas, quesos y pastas",
    image1: "https://blending.com.ar/distribuidoramataro/img-prod/13.jpeg",
    image2: "https://th.bing.com/th/id/OIP.H_62rSSKm_R6NOqinLdSiAHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    name: "Los Patos Bag in box Malbec 4 unid x3lts",
    price: 56200,
    category: "Vinos",
    description:
      "Variedad: 100% Malbec Graduacion: 13% Contenido: 750ml. Cosecha: 2019 Maridaje: carnes rojas, quesos y pastas",
    image1: "https://abrildistribuciones.com.ar/wp-content/uploads/2021/07/Sin-titulo-1_0002_Bag-In-Box-malbec-2.jpg",
    image2: "https://blending.com.ar/distribuidoramataro/img-prod/14.jpeg",
  },
  {
    id: 6,
    name: "Los Patos Coleccion Reserva Malbec",
    price: 40900,
    category: "Vinos Reserva",
    description:
      "Variedad: 100% Malbec Graduacion: 13,5% Contenido: 750ml. Cosecha: 2022 6 meses en barricas de roble Frances Procedencia: Agrelo, Mendoza. 1050 msnm",
    image1: "https://blending.com.ar/distribuidoramataro/img-prod/15.jpeg",
    image2: "https://www.madacilo.com.ar/9973-thickbox_default/lh-estate-chardonay-x750.jpg",
  },
  {
    id: 7,
    name: "Los Patos Coleccion Reserva Cabernet Sauvignon",
    price: 40900,
    category: "Vinos Reserva",
    description:
      "Variedad: 100% Cabernet Sauvignon Graduacion: 13,5% Contenido: 750ml. Cosecha: 2022 6 meses em barricas de roble frances Procedencia: Agrelo, Mendoza. 1050 msnm",
    image1: "https://blending.com.ar/distribuidoramataro/img-prod/15.jpeg",
    image2:
      "https://acdn.mitiendanube.com/stores/001/144/183/products/dsc_03901-8334dea42136c0ee0c16915118959856-480-0.jpg",
  },
  {
    id: 8,
    name: "Los Patos Coleccion Reserva 4 Tintas Blend",
    price: 40900,
    category: "Vinos Reserva",
    description:
      "Variedad: 100% 4 Tintas Blend Graduacion: 13,5% Contenido: 750ml. Cosecha: 2022 6 meses en barricas de roble frances Procedencia: Agrelo, Mendoza. 1050 msnm",
    image1: "https://blending.com.ar/distribuidoramataro/img-prod/15.jpeg",
    image2:
      "https://acdn.mitiendanube.com/stores/005/076/729/products/los-patos-joven-cab-franc-3eab76f82ab91a38f117264970442588-480-0.png",
  },
  {
    id: 9,
    name: "Los Patos Colección Reserva Petit Verdot",
    price: 40900,
    category: "Vinos Reserva",
    description:
      "Variedad: 100% Petit Verdot Graduación: 13,5% Contenido: 750 ml. Cosecha: 2022 6 meses en barricas de roble francés Procedencia: Agrelo, Mendoza. 1050 msnm",
    image1:
      "https://acdn.mitiendanube.com/stores/005/076/729/products/los-patos-gran-reserva-cabernet-sauvignion-gran-reserva-57459fb7877994caa017265000150774-480-0.png",
    image2: "https://th.bing.com/th/id/OIP.A7BQ-JPJY8oONCZhlWsKiQHaHa",
  },
  {
    id: 10,
    name: "Los Patos Gran Reserva Malbec",
    price: 68200,
    category: "Vinos Gran Reserva",
    description: "Varietal 100% Malbec Cosecha Manual Crianza 12meses en barricas de roble francés Alcohol 14 %",
    image1:
      "https://acdn.mitiendanube.com/stores/005/076/729/products/los-patos-gran-reserva-malbec-6cf604ac84953ca44117264998132180-640-0.png",
    image2: "https://th.bing.com/th/id/OIP.-aai8POStqplkPHzo-0C0QHaLH",
  },
  {
    id: 11,
    name: "Los Patos Gran Reserva Cabernet Sauvignon",
    price: 68200,
    category: "Vinos Gran Reserva",
    description:
      "Varietal 100% Cabernet Sauvignon Cosecha Manual Crianza 12meses en barricas de roble francés Alcohol 14 %",
    image1: "https://lospatoswines.com/wp-content/uploads/2023/08/botella-flotante-los-patos-gran-reserva.png",
    image2: "https://images.vivino.com/thumbs/0Ks7gF_LRMuF3j32DbYxSA_375x500.jpg",
  },
  {
    id: 12,
    name: "Los Patos Estuche x3 unidades Gran Reserva",
    price: 45100,
    category: "Vinos Gran Reserva",
    description:
      "Variedad: Malbec y Cabernet Sauvignon Graduación: 13,5% Contenido: 3 Botellas 750 ml. Cosecha: 2021 6 meses en barricas de roble francés Procedencia: Agrelo, Mendoza. 1050 msnm",
    image1: "https://http2.mlstatic.com/D_NQ_NP_941010-MLA46479067531_062021-O.webp",
    image2: "https://images.vivino.com/thumbs/VxlXMSUvSX-zkI3K6R-prQ_375x500.jpg",
  },
  {
    id: 13,
    name: "Don Rosendo Oak Malbec",
    price: 30000,
    category: "Vinos",
    description:
      "Botella Volumen de la unidad: 750 mL Varietal: Malbec Vino tinto Malbec Oak de 750 ml. Crianza de 6 meses en barricas de roble francés. Viñedo en Luján de Cuyo, Agrelo de 30 años, calidad asegurada. Intensos tonos violáceos, buena estructura y taninos amables. Presencia de frutos rojos y un toque ahumado. Disfruta de un Malbec de calidad superior.",
    image1: "https://images.vivino.com/thumbs/nn3AbfHpT-al-uh2ZmqMXA_pl_480x640.png",
    image2: "https://gabaapp.com/wp-content/uploads/2022/05/Bodega-Don-Rosendo-Oak-Malbec.png",
  },
  {
    id: 14,
    name: "Don Rosendo Special Selection Blend",
    price: 43000,
    category: "Vinos Gran Reserva",
    description:
      "Cosecha: Blend 2019 Ubicación del viñedo : Lujan de cuyo Edad del Viñedo: 25 años Altitud: 990 metros Suelo: franco arcilloso Sistema de conducción : espaldero Modo de cosecha: goteo presurizado Rendimiento: 9000 kg x hectárea Crianza: 8 meses en barricas francesas.",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2L_sBmJMkuasKQqp-God7u-QNEYLh7Vbe7wwSAZbukHaqaOrmF2T9zi5lMP-L4zrNG0&usqp=CAU",
    image2: "https://http2.mlstatic.com/D_NQ_NP_999515-MLU76515282493_052024-O.webp",
  },
  {
    id: 15,
    name: "Alcahuete Malbec Joven",
    price: 15000,
    category: "Vinos",
    description:
      "NOTA DE CATA: Vino de gran tipicidad varietal, color rojo intenso con reflejos violáceos. En nariz delicados aromas a frutas maduras grosellas y cerezas con leves notas a chocolate y especias. En boca de acidez equilibrada con taninos suaves y agradable.",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvhDfS87CB04CfqaxWXatl0ZuwwH2ysdDoA&s",
    image2:
      "https://dcdn.mitiendanube.com/stores/002/101/719/products/alcahuete-linea-joven1-81f3df90caf75addb816779625506657-1024-1024.jpeg",
  },
  {
    id: 16,
    name: "Alcahuete Cabernet Sauvignon Joven",
    price: 15000,
    category: "Vinos",
    description:
      "NOTA DE CATA: Vino de gran tipicidad varietal, de color rojo rubí brillante. En nariz presenta notas a pimiento y eucaliptos aportando ciertas notas minerales. En boca de estructura media y taninos equilibrados.",
    image1:
      "https://dcdn.mitiendanube.com/stores/005/140/787/products/bottle-shop-x6-11-01-1-3be9fb2a7a82dccbcc17283948329916-480-0.jpg",
    image2: "https://th.bing.com/th/id/OIP.oxBhuBHn5FmeK6VZd31TSwHaL0?rs=1&pid=ImgDetMain",
  },
  {
    id: 17,
    name: "Desdén Malbec Joven",
    price: 16000,
    category: "Vinos",
    description:
      "NOTA DE CATA: Vino joven y frutado, de color rojo intenso con destellos violáceos. En nariz predominan las frutas rojas maduras como la ciruela, cereza negra y frambuesa. En boca entrada dulce con una buena acidez equilibrada, taninos bien integrados y estructurados, que le dan un final largo y persistente.",
    image1:
      "https://dcdn.mitiendanube.com/stores/002/101/719/products/desden-vino-linea-joven1-b9c410d722f83b136916779627974880-240-0.jpeg",
    image2: "https://th.bing.com/th/id/OIP.b2W5y52hV8Hrer5U4mw5ywHaLy?rs=1&pid=ImgDetMain",
  },
  {
    id: 18,
    name: "Desdén Cabernet Sauvignon Joven",
    price: 16000,
    category: "Vinos",
    description:
      "NOTA DE CATA: Es una línea de varietal joven, fresco y muy buena tipicidad, en vista se presenta de color rojo granate con tonos violáceos. En nariz muy complejo con notas a pimiento verde. En boca de estructura media y taninos equilibrados.",
    image1:
      "https://dcdn.mitiendanube.com/stores/002/101/719/products/desden-vino-linea-joven1-b9c410d722f83b136916779627974880-240-0.jpeg",
    image2: "https://th.bing.com/th/id/OIP.9KTMdMqd9qyMNKhC_rHCqwHaLz?rs=1&pid=ImgDetMain",
  },
  {
    id: 19,
    name: "Desdén Malbec Reserva",
    price: 19000,
    category: "Vinos Reserva",
    description:
      "NOTAS DE CATA: Vino reserva de color rojo brillante intenso con reflejos violáceos y azulados. En nariz se presenta frutado con aromas a ciruela, cereza y mermeladas. También se perciben sutiles notas a vainilla, coco y cacao proveniente al paso por barricas. En boca es vino complejo de gran estructura, taninos amables y final largo.",
    image1:
      "https://dcdn.mitiendanube.com/stores/002/101/719/products/desden-vino-linea-joven1-b9c410d722f83b136916779627974880-240-0.jpeg",
    image2:
      "https://dcdn.mitiendanube.com/stores/002/101/719/products/desden-vino-malbec-linea-joven1-38e0802caf7309283416779628391873-480-0.png",
  },
  {
    id: 20,
    name: "Desdén Cabernet Sauvignon Reserva",
    price: 19000,
    category: "Vinos Reserva",
    description:
      "NOTA DE CATA: Vino reserva de color rojo granate con reflejos violáceos y azulados. En nariz se encuentran notas a pimiento, casis y eucalipto, también se perciben sutiles notas a vainilla, coco y cacao proveniente al paso por barricas. En boca es vino complejo de gran estructura, taninos amables y final largo.",
    image1:
      "https://dcdn.mitiendanube.com/stores/002/101/719/products/desden-vino-linea-joven1-b9c410d722f83b136916779627974880-240-0.jpeg",
    image2:
      "https://dcdn.mitiendanube.com/stores/002/101/719/products/desden-vino-malbec-linea-joven1-38e0802caf7309283416779628391873-480-0.png",
  },
  {
    id: 21,
    name: "El Mirón Malbec Joven",
    price: 18000,
    category: "Vinos",
    description:
      "100% Malbec de San Rafael, Mendoza. Es un vino que te llama la atención su vestimenta, te hipnotiza su color y aroma, y cuando menos lo esperabas diste el primer sorbo, y un sin fin de puntuales momentos volvieron a tu mente, despertando tus emociones y cautivando tus sentidos.",
    image1:
      "https://acdn-us.mitiendanube.com/stores/001/623/106/products/tio-beto-malbec1-9501a8a88535f37e6216645675230286-480-0.png",
    image2: "https://www.envero.com.ar/image/cache/data/el%20miron%20mb-228x228.jpg",
  },
  {
    id: 22,
    name: "El Mirón Cabernet Sauvignon Jóven",
    price: 18000,
    category: "Vinos",
    description:
      "100% Cabernet Sauvignon de San Rafael, Mendoza. Es un vino que te llama la atención su vestimenta, te hipnotiza su color y aroma, y cuando menos lo esperabas diste el primer sorbo, y un sin fin de puntuales momentos volvieron a tu mente, despertando tus emociones y cautivando tus sentidos.",
    image1:
      "https://acdn.mitiendanube.com/stores/001/623/106/products/desden-cb1-1beea1eecfd5d3a31016449440987750-480-0.png",
    image2: "https://images.vivino.com/thumbs/S4P0KMFdS9Objc_qfE0QTw_375x500.jpg",
  },
  {
    id: 23,
    name: "El Tío Beto Malbec Joven",
    price: 19000,
    category: "Vinos",
    description:
      "100% Malbec de San Rafael, Mendoza. Es un vino que transmite la pasión y la alegría de sueños concretados. De color rojo casi negro con tintes violáceos. En nariz fruta roja madura con algunas notas mentoladas, vainilla, coco y aporte especial de roble amalgamado. En boca entrada suave con buena untuosidad. Final largo y persistente en el tiempo.",
    image1:
      "https://acdn-us.mitiendanube.com/stores/001/623/106/products/tio-beto-malbec1-9501a8a88535f37e6216645675230286-480-0.png",
    image2: "https://images.vivino.com/thumbs/3haKsynBQp-Fus7p8QJcPA_375x500.jpg",
  },
  {
    id: 24,
    name: "Tío Beto Cabernet Sauvignon Jóven",
    price: 19000,
    category: "Vinos",
    description:
      "100% Cabernet Sauvignon de San Rafael, Mendoza. Es un vino que transmite la pasión y la alegría de sueños concretados. De color rojo burdeos, oscuro y brillante. Aroma a chocolate y cuero con notas especialidad. En boca acidez justa con gran volumen, estructura firme y taninos marcados. Aporte especial de roble amalgamado.",
    image1:
      "https://acdn.mitiendanube.com/stores/001/623/106/products/tio-beto-cab-sv-f4be48240ce75d8c9117068877996295-480-0.png",
    image2: "https://images.vivino.com/thumbs/uUFLgWJWSH2n-ImxGCU3mA_375x500.jpg",
  },
  {
    id: 25,
    name: "Cajón de Arenales Reserva Malbec",
    price: 40900,
    category: "Vinos Reserva",
    description:
      "100% Malbec, 10 meses en barrica de roble francés 2° uso. Paraje Altamira, Valle de Úco.. Conducción en espaldero bajo. 1.100 msnm. Pedregoso-arenoso, aluvionales, calcareo Manual en cajas de 15 kg. Maloláctica Natural inducida por temperatura entre 26° y 30° Por goteo. Racimos y bayas",
    image1: "https://lospatoswines.com/wp-content/uploads/2023/07/botella-flotante-cajon-de-arenales-aventura.png",
    image2: "https://th.bing.com/th/id/OIP.4TrNt2LoC2YNa9j6UP5TwgAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 26,
    name: "Cajón de Arenales Reserva Cabernet Sauvignon",
    price: 40900,
    category: "Vinos Reserva",
    description:
      "100% Cabernet Sauvignon, 10 meses en barrica de roble francés 2° uso. Paraje Altamira, Valle de Úco.. Conducción en espaldero bajo. 1.100 msnm. Pedregoso-arenoso, aluvionales, calcareo Manual en cajas de 15 kg. Maloláctica Natural inducida por temperatura entre 26° y 30° Por goteo. Racimos y bayas",
    image1: "https://lospatoswines.com/wp-content/uploads/2023/07/botella-flotante-cajon-de-arenales-aventura.png",
    image2: "https://th.bing.com/th/id/OIP.4TrNt2LoC2YNa9j6UP5TwgAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 27,
    name: "Tiezzi Reserva Select Malbec 2022",
    price: 52000,
    category: "Vinos Reserva",
    description:
      "Malbec 100% de Las Compuertas, Mendoza, criado 18 meses en roble francés. Color rojo intenso con tintes violáceos, aroma a violetas y frutas rojas, final balsámico y de tabaco. Entrada amable, sedoso y con marcada acidez. Taninos firmes y equilibrados.",
    image1:
      "https://www.veredictas.com/img/trabajopremiado/120-18949/1500-1125-ADAPTA/f5c9020a4fb4709ec67ed751fabbbe.jpg",
    image2: "https://www.vitvin.com.ar/wp-content/uploads/2024/07/Tiezzi-Malbec-1024x1024.png.jpg",
  },
  {
    id: 28,
    name: "Don Rosendo Gran Reserva Malbec-Carmenere",
    price: 87000,
    category: "Vinos Gran Reserva",
    description:
      "Vino Don Rosendo Malbec Carmenere 750Ml Ubicación del Viñedo: Luján de Cuyo, Agrelo Edad del Viñedo: 22 años Añejamiento: 12 meses en barricas de roble francés Notas de cata: vino elegante con gran cuerpo. Seduce en su color rojo intenso con reflejos violáceos. Aromas complejos, donde se combinan frutos negros y toques florales provenientes del Malbec con descriptores herbales y especiados aportados por el Carmenere. Gran estructura, equilibrada acidez y final suave y persistente.",
    image1: "https://lalogiaenofila.com/wp-content/uploads/2021/03/dr-mal-carm-scaled.jpg",
    image2: "https://http2.mlstatic.com/D_NQ_NP_705756-MLU76516928213_052024-O.webp",
  },
  {
    id: 29,
    name: "Don Rosendo Select Gran Reserva Malbec",
    price: 87000,
    category: "Vinos Gran Reserva",
    description:
      "Composición Varietal 100% Malbec Viñedo Ubicación Luján de Cuyo, Mendoza Altura 1020 msnm Cosecha Manual, primeros días de abril Rendimiento 1.5 kg por planta Maceración Tras el despalillado se realiza una maceración pre fermentativa a baja temperatura. Fermetnación Alcohólica Se realiza en barricas de roble francés y luego una larga maceración con hollejos de uva durante 10 días. Crianza 12-15 meses en roble francés (incluye la finalización de la fermentación maloláctica). Finalmente un análisis organoléptico determina cuándo llega el momento adecuado para el embotellado",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tyfaYTF9_Bp05nbWF036wqzOrHbgwi4GVQ&s",
    image2: "https://http2.mlstatic.com/D_NQ_NP_705756-MLU76516928213_052024-O.webp",
  },
  {
    id: 30,
    name: "Tiezzi Reserva Select Cabernet Franc 2022",
    price: 52000,
    category: "Vinos Reserva",
    description:
      "Cabernet Franc : Tipo: Tinto Variedad: 100% Cabernet Franc. Origen de viñedos: Barrancas - Maipú - Mendoza Altura (S.N.M.): 800 m. Crianza: Barricas de 225 litros de segundo y tercer uso, de roble francés durante 18 meses. Notas de Cata: Color: rojo bordó con reflejos púrpuras y negros. Aroma: marcados aromas a pimiento, tomate y grafito, sumados a los aportados por la madera: tabaco, cuero y vainilla. Boca: de entrada amable, sedoso y redondo con una marcada acidez. Este Cabernet Franc se destaca por taninos firmes y equilibrados y una acidez fresca. Enóloga: Daniela Tiezzi",
    image1:
      "https://www.veredictas.com/img/trabajopremiado/120-18949/1500-1125-ADAPTA/f5c9020a4fb4709ec67ed751fabbbe.jpg",
    image2: "https://www.vitvin.com.ar/wp-content/uploads/2024/07/Tiezzi-Malbec.png",
  },
  {
    id: 31,
    name: "Los Patos Joven Malbec Rosé",
    price: 30250,
    category: "Vinos",
    description:
      "¡Edición Limitada: Los Patos Joven Rosado de Malbec y Torrontés! Ideal para disfrutar en los días primaverales.",
    image1: "https://lorosyguacamayos.com.ar/wp-content/uploads/como-se-toma-el-malbec-rose.webp",
    image2: "https://th.bing.com/th/id/R.c326e9727dfd7a5f93cb18ba6b04be94?rik=GRJmJwRO%2f%2b4gzg&pid=ImgRaw&r=0",
  },
  {
    id: 32,
    name: "Box 1 Los Patos Joven",
    price: 30250,
    category: "Vinos",
    description: "Contenido: 2 Botellas Malbec joven, 2 Botellas Cabernet Sauvignon, 2 Botellas Cabernet Franc",
    image1: "https://revistawinemarket.com.ar/wp-content/uploads/2021/06/los-patos-bag-in-box.jpg",
    image2: "https://images.vivino.com/labels/W2d6KlLyTvyfXKOpUOL6sA.jpg",
  },
  {
    id: 33,
    name: "Box 2 Los Patos Joven",
    price: 30250,
    category: "Vinos",
    description: "Contenido: 2 Botellas Malbec joven, 2 Botellas 4 Tintas Blend, 2 Botellas Cabernet Franc",
    image1: "https://revistawinemarket.com.ar/wp-content/uploads/2021/06/los-patos-bag-in-box.jpg",
    image2: "https://http2.mlstatic.com/D_NQ_NP_877856-MLA45476899957_042021-O.webp",
  },
  {
    id: 34,
    name: "Box 1 Los Patos Coleccion",
    price: 40900,
    category: "Vinos Reserva",
    description: "Contenido: 2 Botellas Malbec joven, 2 Botellas Cabernet Sauvignon, 2 Botellas Petit Verdot",
    image1: "https://revistawinemarket.com.ar/wp-content/uploads/2021/06/los-patos-bag-in-box.jpg",
    image2: "https://images.vivino.com/labels/Oe2bWMl6QE-x62cnJkPVoQ.jpg",
  },
  {
    id: 35,
    name: "Box 2 Los Patos Colección",
    price: 40900,
    category: "Vinos Reserva",
    description: "Contenido: 2 Botellas Malbec joven, 2 Botellas Cabernet Sauvignon, 2 Botellas 4 Tintas Blend",
    image1: "https://revistawinemarket.com.ar/wp-content/uploads/2021/06/los-patos-bag-in-box.jpg",
    image2: "https://http2.mlstatic.com/D_NQ_NP_607366-MLU77571222984_072024-O.webp",
  },
  {
    id: 36,
    name: "Gin Oid Mortales London Dry x Botella",
    price: 13000,
    category: "Gin",
    description:
      "Gin artesanal argentino, estilo London Dry contemporáneo. Producto premium elaborado en microdestilería con ingredientes de alta calidad en pequeños lotes para garantizar excelencia.",
    image1: "https://http2.mlstatic.com/D_NQ_NP_894303-MLA80682111762_112024-O.webp",
    image2:
      "https://acdn.mitiendanube.com/stores/001/211/660/products/oid-mortales-c07dbefa7f3d41e07817158834025676-640-0.jpg",
  },
  {
    id: 37,
    name: "Gin Oid Mortales del Litoral x Botella",
    price: 13000,
    category: "Gin",
    description:
      "Gin artesanal inspirado en el litoral argentino, creado por tres amigos con botánicos de todo el país. Destilado e infusionado con naranjas entrerrianas para un perfil cítrico y fresco.",
    image1: "https://http2.mlstatic.com/D_NQ_NP_894303-MLA80682111762_112024-O.webp",
    image2:
      "https://acdn.mitiendanube.com/stores/131/273/products/gin-oid-mortales-del-litoral1-5ddcdace743107b1d016638816399105-640-0.png",
  },
  {
    id: 38,
    name: "Gin Oid Mortales Cruce de los Andes x Botella",
    price: 13000,
    category: "Gin",
    description:
      "Gin artesanal inspirado en el cruce de los Andes, creado en honor a San Martín y su ejército. Diseñado para calentar cuerpo y alma, combina enebro patagónico, coriandro, cítricos, angélica, regaliz, manzanilla, pimienta dulce, rosa mosqueta, muña, pepino y agua.",
    image1: "https://http2.mlstatic.com/D_NQ_NP_894303-MLA80682111762_112024-O.webp",
    image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6tvoUWAV8Q6VRdJzFHWlQXTEso7aH1TK6w&s",
  },
  {
    id: 39,
    name: "Box Cajon de Arenales Aventura",
    price: 40900,
    category: "Vinos Reserva",
    description: "Contenido: 3 Botellas Malbec , 3 Botellas Cabernet Sauvignon",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-evAFOlyhaBPcIk3gyYoUt8DRMV3c-EfP3Q&s",
    image2: "https://lospatoswines.com/wp-content/uploads/2023/07/botella-flotante-cajon-de-arenales-aventura.png",
  },
  {
    id: 40,
    name: "Box Los Patos Gran Reserva",
    price: 62000,
    category: "Vinos Gran Reserva",
    description: "Contenido: 3 Botellas Malbec , 3 Botellas Cabernet Sauvignon",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-evAFOlyhaBPcIk3gyYoUt8DRMV3c-EfP3Q&s",
    image2: "https://lospatoswines.com/wp-content/uploads/2023/07/botella-flotante-cajon-de-arenales-aventura.png",
  },
  {
    id: 41,
    name: "Gin London Dry Akela Bot 750cc",
    price: 10000,
    category: "Gin",
    description:
      "Gin artesanal destilado en alambique de cobre. Destacado por tres variedades y una selección de botánicos como enebro, coriandro, cardamomo, regaliz, angélica, pimientas, clavo de olor, canela, lima y nuez moscada.",
    image1:
      "https://d22fxaf9t8d39k.cloudfront.net/8e923a9d83e916d94d3f0800a7178701a5186fb3c0b8e776d94b4c0f538a317891862.png",
    image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJuqo-15GUhOF_Iddv2eyO2WVcK-kYoRrQg&s",
  },
  {
    id: 42,
    name: "Desdén Blanco Dulce Tardío",
    price: 19000,
    category: "Vinos",
    description:
      "Con su aroma dulce y delicado, siempre te saca una linda sonrisa, un vino cautivante para todos los sentidos. Desdén el placer de siempre. Blend de uvas blancas. Proveniente de San Rafael, Mendoza. Cosecha actual.",
    image1: "https://http2.mlstatic.com/D_NQ_NP_806105-MLA73108085575_112023-O.webp",
    image2:
      "https://dcdn.mitiendanube.com/stores/002/101/719/products/desden-vino-dulce-tardio-11-a33bdbdb4da8bc7b3016779627979578-640-0.png",
  },
  {
    id: 43,
    name: "Fernet Branca 750cc",
    price: 9750,
    category: "Fernet",
    description:
      "En cada Fernet Branca hay un mundo de botánicos provenientes de cuatro continentes: hierbas, frutos, raíces y cortezas se fusionan de manera única. Elaborado en infusiones alcohólicas, extractos o tisanas, después de un año de reposo en cubas y toneles de roble, evoluciona y afina todos los componentes aromáticos, finalizando en el sabor inigualable que tanto amas.",
    image1:
      "https://i0.wp.com/infodecordoba.com.ar/wp-content/uploads/2024/04/Fernet-con-Coca-Fernando-Cordoba.png?fit=1280%2C960&ssl=1",
    image2: "https://imag.bonviveur.com/vasos-de-fernet-branca-junto-a-una-botella-y-hierbas-de-maceracion.jpg",
  },
  {
    id: 44,
    name: "Cynar 750cc",
    price: 7000,
    category: "Aperitivos",
    description:
      "El Cynar es un licor amargo italiano elaborado a base de alcachofa y hierbas aromáticas. Se suele tomar como aperitivo. Características Color marrón con reflejos rojizos, Aroma intenso, Sabor amargo con un final dulzón, Graduación alcohólica de 16,5.",
    image1: "https://tiendavines.com/web/image/product.template/14/image_1024?unique=3531353",
    image2: "https://http2.mlstatic.com/D_NQ_NP_818961-MLA75638244210_042024-O.webp",
  },
  {
    id: 45,
    name: "Campari 750cc",
    price: 8000,
    category: "Aperitivos",
    description:
      "El Campari es un aperitivo italiano de tipo bitter, es decir, amargo. Se caracteriza por su color rojo intenso y su sabor amargo con notas cítricas.",
    image1: "https://http2.mlstatic.com/D_NQ_NP_721926-MLA48551294290_122021-O.webp",
    image2: "https://labebidadetusfiestas.com.ar/36945-thickbox_default/campari-750cc.jpg",
  },
  {
    id: 46,
    name: "Ajenjo Vermut Dry 750cc",
    price: 6000,
    category: "Aperitivos",
    description: "AJENJO VERMUT DRY ✨",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTLXzNHaViqKG0Tj5FkbIaQ5Va0DZd-4oCw&s",
    image2: "https://http2.mlstatic.com/D_NQ_NP_747726-MLA81859966104_012025-O.webp",
  },
  {
    id: 47,
    name: "Ajenjo Vermut Rosso 750cc",
    price: 6000,
    category: "Aperitivos",
    description:
      "AJENJO ROSSO es un vermut fresco y aromático, ideal para aquellos que buscan una opción más ligera, pero igualmente sofisticada. Está pensado para refrescar y tomar en copa cóctel con unos pinchos, como en España.",
    image1: "https://http2.mlstatic.com/D_NQ_NP_756227-MLA79888474552_102024-O.webp",
    image2: "https://http2.mlstatic.com/D_NQ_NP_756227-MLA79888474552_102024-O.webp",
  },
  {
    id: 48,
    name: "Ajenjo Vermut Rojo",
    price: 6000,
    category: "Aperitivos",
    description:
      "Ajenjo Rojo es un vermut de vino tinto elaborado a partir de un blend de tres varietales de uvas -30% Bonarda, 30% Tempranillo y 40% Malbec. Con un equilibrio entre dulzura y acidez, y notas frutales que evocan la tradición vitivinícola de la región, es ideal para tomarlo con hielo, tónica y dos rodajas de limón.",
    image1:
      "https://dcdn-us.mitiendanube.com/stores/001/035/482/products/img_6730-b72f37aa5dbb52d66d17313553018099-640-0.jpeg",
    image2: "https://quirinobebidas.com.ar/wp-content/uploads/2024/09/113-1.png",
  },
  {
    id: 49,
    name: "Jugo Pura Frutta Naranja litro",
    price: 2300,
    category: "Jugos",
    description:
      "El más elegido! Es fresco y dulce. Su sabor único es resultado de la cosecha y del proceso de exprimir las frutas frescas, como si lo hubieses hecho en casa. Probalo y sentí el sabor de lo natural, observa el color del jugo de la fruta y degustá un producto 100% fruta con cero chamuyo.",
    image1: "https://http2.mlstatic.com/D_NQ_NP_656952-MLA71282597146_082023-O.webp",
    image2:
      "https://jumboargentina.vtexassets.com/arquivos/ids/621444/Jugo-Naranja-Pura-Frutta-1l-1-848662.jpg?v=637473577321400000",
  },
  {
    id: 50,
    name: "Jugo Pura Frutta Manzana Litro",
    price: 2300,
    category: "Jugos",
    description:
      "El más elegido! Es fresco y dulce. Su sabor único es resultado de la cosecha y del proceso de exprimir las frutas frescas, como si lo hubieses hecho en casa. Probalo y sentí el sabor de lo natural, observa el color del jugo de la fruta y degustá un producto 100% fruta con cero chamuyo.",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3v3nT63Y8L59kkXYYPWNUvChgf5SVOp3HOA&s",
    image2:
      "https://farmacityar.vtexassets.com/arquivos/ids/218813/164122_jugo-exprimido-pf_imagen-1.jpg?v=637770006507800000",
  },
  {
    id: 51,
    name: "Jugo Pura Frutta Naranja Kids 250cc",
    price: 950,
    category: "Jugos",
    description:
      "El más elegido! Es fresco y dulce. Su sabor único es resultado de la cosecha y del proceso de exprimir las frutas frescas, como si lo hubieses hecho en casa. Probalo y sentí el sabor de lo natural, observa el color del jugo de la fruta y degustá un producto 100% fruta con cero chamuyo.",
    image1:
      "https://farmacityar.vtexassets.com/arquivos/ids/251424/238642_jugo-pura-frutta-naranja-kids-x-250-ml_imagen-1.jpg?v=638409289542100000",
    image2: "https://http2.mlstatic.com/D_NQ_NP_606141-MLA79862358242_102024-O.webp",
  },
  {
    id: 52,
    name: "Jugo Pura Frutta Multifruta Litro",
    price: 2300,
    category: "Jugos",
    description:
      "El más elegido! Es fresco y dulce. Su sabor único es resultado de la cosecha y del proceso de exprimir las frutas frescas, como si lo hubieses hecho en casa. Probalo y sentí el sabor de lo natural, observa el color del jugo de la fruta y degustá un producto 100% fruta con cero chamuyo.",
    image1:
      "https://jumboargentina.vtexassets.com/arquivos/ids/798388/Jugo-Multifruta-Pura-Frutta-1000ml-1-947647.jpg?v=638340185025900000",
    image2:
      "https://acdn.mitiendanube.com/stores/002/446/446/products/dsc_0710-ad7c818471e9a79d8a17042136133949-480-0.jpg",
  },
]

export default function CatalogoPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [sortBy, setSortBy] = useState("featured")

  // Filter products based on search, category, and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price
      case "price-desc":
        return b.price - a.price
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      default:
        return 0
    }
  })

  const categories = ["all", "Vinos", "Vinos Reserva", "Vinos Gran Reserva", "Gin", "Fernet", "Aperitivos", "Jugos"]

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <div className="bg-dark-800 border-b border-dark-700">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Nuestros Vinos</h1>
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar vinos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Destacados</SelectItem>
                <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
                <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
                <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
                <SelectItem value="name-desc">Nombre: Z-A</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile Filters Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                  <SheetDescription>Ajusta los filtros para encontrar el vino perfecto</SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <h3 className="text-sm font-medium mb-2">Categorías</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="w-full justify-center text-base py-4"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category === "all" ? "Todas las categorías" : category}
                      </Button>
                    ))}
                  </div>
                  <h3 className="text-sm font-medium mb-2 mt-6">Rango de Precio</h3>
                  <Slider
                    defaultValue={[0, 100000]}
                    max={100000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-400">${priceRange[0]}</span>
                    <span className="text-sm text-gray-400">${priceRange[1]}</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden md:block w-64">
            <div className="sticky top-20 overflow-y-auto h-[calc(100vh-5rem)] no-scrollbar">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-6">Categorías</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="w-full justify-center text-base py-4"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category === "all" ? "Todas las categorías" : category}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Rango de Precio</h3>
                  <Slider
                    defaultValue={[0, 100000]}
                    max={100000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-400">${priceRange[0]}</span>
                    <span className="text-sm text-gray-400">${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">No se encontraron productos que coincidan con tu búsqueda.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

