import { recentAcademicActivities } from "@/data/academic"
import Image from "next/image"

export function RecentActivitiesSection() {
  return (
    <section id="recent-activities" className="bg-[#001b4b] px-5 pb-20 pt-[86px] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1183px]">
        <h2 className="text-center font-[family-name:var(--font-inter)] text-[22px] font-bold leading-tight text-white sm:text-2xl">
          Recent Activities
        </h2>

        <div className="mt-8 grid gap-[37px] lg:grid-cols-2">
          {recentAcademicActivities.map((post) => (
            <article
              key={post.id}
              className="grid overflow-hidden rounded-[16px] border border-white/70 bg-[#002a75] shadow-[0_18px_48px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:grid-cols-[270px_1fr]"
            >
              <div className="relative min-h-[260px] sm:min-h-full">
                <Image
                  src={post.image ?? "/figma/academic-recent.png"}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 270px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex min-h-[320px] flex-col justify-center px-6 py-7 font-[family-name:var(--font-inter)]">
                {post.date && (
                  <p className="text-sm font-semibold text-[#ffbd4a]">
                    {post.date}
                  </p>
                )}
                <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                  {post.title}
                </h3>
                {post.organizer && (
                  <p className="mt-2 text-sm font-medium leading-6 text-white/70">
                    {post.organizer}
                  </p>
                )}
                {post.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/72"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <dl className="mt-5 space-y-2 text-sm leading-6 text-white/72">
                  {post.registration && (
                    <div>
                      <dt className="inline font-bold text-white">Pendaftaran: </dt>
                      <dd className="inline">{post.registration}</dd>
                    </div>
                  )}
                  {post.eventDate && (
                    <div>
                      <dt className="inline font-bold text-white">Lomba: </dt>
                      <dd className="inline">{post.eventDate}</dd>
                    </div>
                  )}
                  {post.cost && (
                    <div>
                      <dt className="inline font-bold text-white">Biaya: </dt>
                      <dd className="inline">{post.cost}</dd>
                    </div>
                  )}
                </dl>
                <a
                  href={post.href ?? "#"}
                  className="mt-6 inline-flex h-[38px] w-fit items-center rounded-[10px] bg-[#f9a825] px-5 text-sm font-bold text-[#001b4b] transition hover:bg-[#ffbd4a]"
                >
                  {post.buttonLabel ?? "Info Lomba"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
