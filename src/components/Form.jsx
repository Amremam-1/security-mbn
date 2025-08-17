import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import useFetchQuery from "../constants/useFetchQuery"

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  number: z.number().min(1, "Phone number is required"),
  massege: z.string().min(3, "Your message must be at least 3 characters"),
  service: z.string().min(1, "Please select a service"),
})

const Form = () => {
  const { data, isLoading, error } = useFetchQuery("services", "/services")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = (data) => {
    console.log(data)
  }

  if (isLoading) return <></>

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

      <select
        {...register("service")}
        className={`border-none bg-black w-full px-4 py-2 rounded-full border-[1px] text-white placeholder-white outline-none ring-1 ring-orange-400`}
      >
        <option value="">Service Inquiry</option>

        {data.map((item) => (
          <option key={item.id} value={item?.en_name}>
            {item?.en_name}
          </option>
        ))}
      </select>
      {errors.service && (
        <p className="text-red-500 text-[12px]">{errors.service.message}</p>
      )}

      <textarea
        {...register("massege")}
        placeholder="massege"
        className={`border-none h-[100px] rounded-xl mt-2 ${inputClass}`}
      />

      {errors.massege && (
        <p className="text-red-500 text-[12px]">{errors.massege.message}</p>
      )}

      <button type="submit" className="btn shadow-custom-hover w-[200px] mt-4">
        Submit
      </button>
    </form>
  )
}

export default Form
