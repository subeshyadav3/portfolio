
import { useState } from "react"
import { Facebook, Github, Linkedin } from "lucide-react"
import useNotification from "./components/notification"
import Title from "./components/Title"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    comment: "",
  })
  const { addNotification } = useNotification()
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNotification("Subscribed successfully")
  }

  return (
    <motion.div className=" text-white p-8 mt-10 " 
    initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      exit={{ opacity: 0, y: -50 }}
      >
                    <Title title="Contact Us" font='font-ougkeh'/>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mt-[80px]">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-serif">Get in Touch. Contact me</h2>
            <p className="text-gray-400">
              If you have any query, Please feel free to contact me. I will be happy to help you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>

            <textarea
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none"
            />

            <button
              type="submit"
              className="px-8 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Submit Message
            </button>
          </form>
        </div>

        <div className="space-y-8 lg:border-l lg:border-slate-700 lg:pl-12 hidden lg:flex flex-col">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Phone:</p>
              <p>9803304345</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Email:</p>
              <p>subeshgaming@gmail.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Github:</p>
              <p>subeshyadav3</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Address:</p>
              <p>Kathmandu, Nepal.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-serif">Follow Me</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.github.com/subeshyadav3" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/subeshyadav3/" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

