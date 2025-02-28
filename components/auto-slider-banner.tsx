"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import useMediaQuery from "@/hooks/use-media-query"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function AutoSliderBanner() {
  const [mounted, setMounted] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleShopClick = () => {
    const productSection = document.getElementById("product-section")
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const slides = [
    {
      image: "https://i.ibb.co/8L2jgMC1/logan-weaver-lgnwvr-DXKtbz0ko-CI-unsplash.jpg",
      alt: "Vino Premium 1",
    },
    {
      image: "https://i.ibb.co/ZzBJwcS9/wmremove-transformed.jpg",
      alt: "Vino Premium 2",
    },
    {
      image: "https://i.ibb.co/Y4wLgnk9/wmremove-transformed-1.jpg",
      alt: "Vino Premium 3",
    },
  ]

  if (!mounted) return null

  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
      {isDesktop ? (
        // Video background for desktop
        <div className="absolute inset-0">
          <iframe
            src="https://player.vimeo.com/video/1058644154?autoplay=1&loop=1&background=1&muted=1"
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full h-full"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
            }}
          />
        </div>
      ) : (
        // Mobile Swiper carousel
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop
              className="w-full h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="w-full h-full bg-center bg-cover"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-10">
        <motion.div initial="hidden" animate="visible" variants={titleVariants} className="mb-4 relative">
          <div className="flex overflow-hidden">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center px-4"
              style={{
                background: "linear-gradient(45deg, #FF4136 0%, #85144b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 20px rgba(255,65,54,0.3)",
              }}
            >
              ¡Distribuidora Mataró!
            </motion.h1>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-900"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl text-gray-300 text-center mb-8 px-4"
        >
          Descubre nuestra selección de vinos y licores
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex flex-col items-center gap-8"
        >
          <Button
            onClick={handleShopClick}
            size="lg"
            variant="outline"
            className="hover:bg-red-800 hover:text-white transition-all duration-300"
          >
            EXPLORAR
          </Button>

          {/* Flecha animada */}
          <motion.div animate={bounceAnimation} className="cursor-pointer" onClick={handleShopClick}>
            <ChevronDown className="w-8 h-8 text-white opacity-75 hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #FF4136 !important;
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

