import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import useFetchQuery from "../constants/useFetchQuery"
import { useAddData } from "../constants/useAddData"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

const Form = () => {
  const { t, i18n } = useTranslation()
  const { data, isLoading } = useFetchQuery("services", "/services")
  const { mutate: addFormData, isPending } = useAddData("contactRequests")

  const schema = z.object({
    name: z.string().min(3, t("name_required")),
    email: z.string().email(t("email_invalid")),
    message: z.string().min(3, t("message_required")),
    phone: z.string().min(7, t("phone_required")),
    service_id: z.string().min(1, t("service_required")),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = (formData) => {
    const payload = { ...formData }

    addFormData(payload, {
      onSuccess: () => {
        toast.success(t("success"))
        reset()
      },
      onError: () => {
        toast.error(t("error"))
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
        placeholder={t("full_name")}
        className={inputClass}
      />
      {errors.name && (
        <p className="text-red-500 text-[12px]">{errors.name.message}</p>
      )}

      <input
        {...register("email")}
        type="email"
        placeholder={t("email_address")}
        className={inputClass}
      />
      {errors.email && (
        <p className="text-red-500 text-[12px]">{errors.email.message}</p>
      )}

      <input
        {...register("phone")}
        type="tel"
        placeholder={i18n.language === "ar" ? "رقم الهاتف" : "Phone Number"}
        className={`${inputClass} ${
          i18n.language === "ar"
            ? "text-right placeholder:text-right"
            : "text-left placeholder:text-left"
        }`}
      />
      {errors.phone && (
        <p className="text-red-500 text-[12px]">{errors.phone.message}</p>
      )}

      <select
        {...register("service_id")}
        className={`border-none bg-[#f9fafb] dark:bg-black w-full px-4 py-2 rounded-full text-[#111827] dark:text-white outline-none ring-1 ring-orange-400`}
      >
        <option value="">{t("service_inquiry")}</option>
        {data.map((item) => (
          <option key={item.id} value={item?.id}>
            {i18n.language === "en" ? item?.en_name : item?.ar_name}
          </option>
        ))}
      </select>
      {errors.service_id && (
        <p className="text-red-500 text-[12px]">{errors.service_id.message}</p>
      )}

      <textarea
        {...register("message")}
        placeholder={t("message")}
        className={`border-none h-[100px] rounded-xl mt-2 ${inputClass}`}
      />
      {errors.message && (
        <p className="text-red-500 text-[12px]">{errors.message.message}</p>
      )}

      <button type="submit" className="btn shadow-custom-hover w-[200px] mt-4">
        {isPending ? t("sending") : t("submit")}
      </button>
    </form>
  )
}

export default Form
