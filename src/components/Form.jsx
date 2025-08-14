import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  number: z.number().min(1, "Phone number is required"),
  company: z.string().min(3, "Company name must be at least 3 characters"),
  service: z.string().min(1, "Please select a service"),
})

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = (data) => {
    console.log(data)
  }

  const inputClass =
    "w-full px-4 py-2 rounded-full bg-transparent border-[1px] mb-4 text-white placeholder-white outline-none ring-1 ring-orange-400"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mb-10">
      <input
        {...register("name")}
        placeholder="Full Name"
        className={inputClass}
      />
      {errors.name && (
        <p className="text-red-500 text-[12px]">{errors.name.message}</p>
      )}

      <input
        {...register("email")}
        type="email"
        placeholder="Email Address"
        className={inputClass}
      />
      {errors.email && (
        <p className="text-red-500 text-[12px]">{errors.email.message}</p>
      )}

      <input
        {...register("number")}
        type="number"
        placeholder="Phone Number"
        className={inputClass}
      />
      {errors.number && (
        <p className="text-red-500 text-[12px]">{errors.number.message}</p>
      )}

      <input
        {...register("company")}
        placeholder="Company Name"
        className={inputClass}
      />
      {errors.company && (
        <p className="text-red-500 text-[12px]">{errors.company.message}</p>
      )}

      <select
        {...register("service")}
        className={`border-none bg-black w-full px-4 py-2 rounded-full border-[1px] text-white placeholder-white outline-none ring-1 ring-orange-400`}
      >
        <option value="">Service Inquiry</option>
        <option value="design">Network Security</option>
        <option value="development">EndPoint Security</option>
        <option value="marketing">Cloud Security</option>
      </select>
      {errors.service && (
        <p className="text-red-500 text-[12px]">{errors.service.message}</p>
      )}

      <button type="submit" className="btn shadow-custom-hover w-[200px] mt-4">
        Submit
      </button>
    </form>
  )
}

export default Form
