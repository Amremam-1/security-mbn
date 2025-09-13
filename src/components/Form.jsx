import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import useFetchQuery from "../constants/useFetchQuery"
import { useAddData } from "../constants/useAddData"

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(3, "Your message must be at least 3 characters"),
  phone: z.string().min(7, "Phone number is required"),
  service_id: z.string().min(1, "Please select a service"),
})

const Form = () => {
  const { data, isLoading, error } = useFetchQuery("services", "/services")
  const { mutate: addFormData, isPending } = useAddData("contactRequests")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = (formData) => {
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      phone: formData.phone,
      service_id: formData.service_id,
    }

    addFormData(payload, {
      onSuccess: () => {
        console.log("Form sent successfully ✅")
        reset()
      },
      onError: () => {
        console.log("Something went wrong ❌")
      },
    })
  }

  if (isLoading) return <></>

  const inputClass =
    "w-full px-4 py-2 rounded-full bg-transparent border-[1px] mb-4 text-[#6b7280] dark:text-white placeholder-[#111827] dark:placeholder-white outline-none ring-1 ring-orange-400"

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
        {...register("phone")}
        type="tel"
        placeholder="Phone Number"
        className={inputClass}
      />
      {errors.phone && (
        <p className="text-red-500 text-[12px]">{errors.phone.message}</p>
      )}

      <select
        {...register("service_id")}
        className={`border-none bg-[#f9fafb] dark:bg-black w-full px-4 py-2 rounded-full border-[1px] text-[#111827] dark:text-white placeholder-white outline-none ring-1 ring-orange-400`}
      >
        <option value="">Service Inquiry</option>
        {data.map((item) => (
          <option key={item.id} value={item?.id}>
            {item?.en_name}
          </option>
        ))}
      </select>
      {errors.service_id && (
        <p className="text-red-500 text-[12px]">{errors.service_id.message}</p>
      )}

      <textarea
        {...register("message")}
        placeholder="message"
        className={`border-none h-[100px] rounded-xl mt-2 ${inputClass}`}
      />
      {errors.message && (
        <p className="text-red-500 text-[12px]">{errors.message.message}</p>
      )}

      <button type="submit" className="btn shadow-custom-hover w-[200px] mt-4">
        {isPending ? "Sending..." : "Submit"}
      </button>
    </form>
  )
}

export default Form
