import Image from "next/image"
import { academicPosts } from "@/data/academic"

function AcademicCard({ post }: { post: (typeof academicPosts)[number] }) {
  return (
    <article className="w-full overflow-hidden rounded-2xl border border-[#002a75]/10 bg-white shadow-[0_4px_24px_rgba(0,42,117,0.12)]">
      <div className="relative h-44">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 305px, 90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002a75]/55 to-transparent" />
        <div className="absolute left-3 top-3 rounded-full bg-[#002a75] px-3 py-1 font-[var(--font-inter)] text-xs font-bold text-white">
          {post.category}
        </div>
        <div
          className={`absolute right-3 top-3 rounded-full border px-3 py-1 font-[var(--font-inter)] text-xs font-bold ${post.statusClass}`}
        >
          {post.status}
        </div>
      </div>
      <div className="flex min-h-44 flex-col p-5 font-[var(--font-inter)]">
        <h3 className="text-base font-bold leading-snug text-[#002a75]">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#718096]">
          {post.description}
        </p>
        <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-[#a0aec0]">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  )
}

export function AcademicInfoSection() {
  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-16">
      <Image
        src="/figma/star-22.svg"
        alt=""
        width={647}
        height={647}
        className="pointer-events-none absolute right-[-220px] top-[-30px] opacity-70"
      />
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-[var(--font-goldman)] text-5xl leading-none sm:text-7xl">
            Activity <span className="text-[#ffbd4a]">Highlights</span>
          </h2>
          <p className="mt-4 max-w-2xl font-[var(--font-work-sans)] text-sm leading-relaxed text-white/80">
            Catch a glimpse of HMPTI&apos;s latest highlights and exciting moments. From tech
            innovations and academic events to our fun collaborations, discover how we stay
            connected and keep moving forward.
          </p>
        </div>
        <a
          className="inline-flex h-8 items-center justify-center rounded-md bg-gradient-to-r from-[#ffbd4a] to-[#ff8d24] px-5 font-[var(--font-inter)] text-xs font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition hover:brightness-110 sm:h-9 sm:text-sm"
          href="#explore"
        >
          Read more
        </a>
      </div>
      <div className="mx-auto mt-12 grid max-w-[1120px] gap-6 md:grid-cols-3">
        {academicPosts.map((post) => (
          <AcademicCard post={post} key={post.title} />
        ))}
      </div>
    </section>
  )
}
