import Image from "next/image"

const Card = ({ data: { title, year } }) => {
  return (
    <div className="w-full h-[504px] rounded-xl p-2 bg-card">
      <Image
        src="https://s3-alpha-sig.figma.com/img/71b7/26c9/bdb04893d9269540ca86da074296255e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HUfRMMMZnIjXiXWAM0wNdDQDWfNkJA6VrWHLNQWSGo5LuFHPQQgLwk55jgp4~9iS-Mj1k5eOzCbjRDU1R8jVGHlVtUtRvhDK9NnYQA~xAhLp1GzYCFn0SAt8AHBW9ERWKAxJMkhTOq2snteNlN8TNpnEikwSfjx6HP3mmAbwt7VTGgdHybR2oBX0O-zgMyQk6-F8~WusP1tcV4-B-8QKO~Tq4K~XRwb~NILOktC9115gLukj26bZyT9EU44NS34TqJaHSEUwymlHr76-XSwM9YeT9mez9je7Orglf4at~GmGkdt7WUnyWi7Un-j8dYBHEN8aapbNAbroLMtYt53EAg__"
        alt="movie poster"
        width={266}
        height={400}
        className="rounded-xl w-full h-[400px] object-cover"
      />
      <h6 className="text-bodyLarge text-white mt-4 ">{title}</h6>
      <p className="text-bodySmall text-white mt-2 ">{year}</p>
    </div>
  )
}

export default Card
