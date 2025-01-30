import { Users, Settings, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function StatsSection() {
  const stats = [
    {
      value: "100+",
      label: "Happy Clients",
      icon: Users,
    },
    {
      value: "10+",
      label: "Project Complete",
      icon: Settings,
    },
    {
      value: "2+",
      label: "Years of Experience",
      icon: Award,
    },
  ]

  return (
    <motion.div className="w-full py-16" 
    initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-slate-800/50 rounded-lg">
                  <Icon className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

