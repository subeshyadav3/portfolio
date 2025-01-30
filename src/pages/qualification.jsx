import { useState } from "react"
import { GraduationCap, Briefcase, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Qualification() {
    const [activeTab, setActiveTab] = useState("education")

    const education = [
        {
            title: "Computer Engineering",
            subtitle: "Pulchoowk Campus",
            year: "2024 - Present",
        },
        {
            title: "High School",
            subtitle: "KIST COLLEGE & SS",
            year: "2021 - 2023",
        },
        {
            title: "School",
            subtitle: "Navodaya Shishu Sadan",
            year: "2016 - 2021",
        },
    ]

    const experience = [
        {
            title: "Senior Web Developer",
            subtitle: "Company Name",
            year: "2021 - Present",
        },
        {
            title: "Frontend Developer",
            subtitle: "Company Name",
            year: "2019 - 2021",
        },
        {
            title: "Junior Developer",
            subtitle: "Company Name",
            year: "2018 - 2019",
        },
    ]

    const tabVariants = {
        active: { color: "#ffffff", fontWeight: 600 },
        inactive: { color: "#9ca3af" },
    }

    const timelineVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <section className="py-16">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    exit={{ opacity: 0, y: -50 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-2">Qualification</h2>
                    <p className="text-gray-400">My personal journey</p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center gap-8 mb-12">
                    <motion.button
                        variants={tabVariants}
                        animate={activeTab === "education" ? "active" : "inactive"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-lg"
                        onClick={() => setActiveTab("education")}
                    >
                        <GraduationCap className="w-5 h-5" />
                        Education
                    </motion.button>

                    <motion.button
                        variants={tabVariants}
                        animate={activeTab === "experience" ? "active" : "inactive"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-lg"
                        onClick={() => setActiveTab("experience")}
                    >
                        <Briefcase className="w-5 h-5" />
                        Experience
                    </motion.button>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-700" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            variants={timelineVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="space-y-8"
                        >
                            {(activeTab === "education" ? education : experience).map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                                >
                                    <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className={`p-4 rounded-lg bg-slate-800/50 border border-gray-700 ${index % 2 === 0 ? "text-left" : "text-right"
                                                }`}
                                        >
                                            <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                            <p className="text-gray-400 mb-2">{item.subtitle}</p>
                                            <div
                                                className={`flex items-center text-sm text-gray-400 ${index % 2 === 0 ? "" : "justify-end"}`}
                                            >
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {item.year}
                                            </div>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: index * 0.2, duration: 0.5 }}
                                        className="w-4 h-4 bg-slate-800 border-4 border-gray-700 rounded-full absolute left-1/2 transform -translate-x-1/2"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

