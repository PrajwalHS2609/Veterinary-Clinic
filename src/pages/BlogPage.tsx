import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Search, Check } from 'lucide-react';
import { HEALTH_ARTICLES, VETERINARY_DOCTORS } from '../data/clinicData';
import { EditorialImage } from '../components/BrandGraphics';

interface BlogIndexProps {
  onNavigate: (path: string) => void;
}

export function BlogIndexPage({ onNavigate }: BlogIndexProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [query, setQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(HEALTH_ARTICLES.map((a) => a.category)))];

  const filtered = HEALTH_ARTICLES.filter((article) => {
    const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  return (
    <div>
      <section className="bg-[#FBF5F2] py-16 lg:py-24 border-b border-[#38283F]/10">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-[#B9574B]">Pet Health Blog & Guides</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[#38283F] tracking-tight leading-[1.1]">
              Helping You Make Better Decisions for Your Pet’s Health.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5D4D63] leading-relaxed">
              Veterinarian-authored articles on immunization, nutrition, dental care, puppy and kitten milestones, and senior pet comfort.
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter articles by topic">
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-[#38283F] text-white'
                        : 'bg-white border border-[#38283F]/12 text-[#38283F] hover:bg-[#E4F0E8]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#5D4D63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pet health guides..."
                aria-label="Search pet health guides"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-[#38283F]/15 text-sm text-[#38283F] placeholder:text-[#8E7F94] focus:outline-none focus:border-[#B9574B]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-2xl border border-[#38283F]/10 p-8">
              <p className="text-base font-semibold text-[#38283F]">
                No articles match your current filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setQuery('');
                }}
                className="mt-4 px-5 py-2.5 rounded-lg bg-[#38283F] text-white text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-10">
              {filtered.map((article) => {
                const author = VETERINARY_DOCTORS.find((d) => d.slug === article.authorSlug);
                return (
                  <article
                    key={article.slug}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#38283F]/10 flex flex-col"
                  >
                    <button
                      type="button"
                      onClick={() => onNavigate(`/blog/${article.slug}`)}
                      className="text-left flex-1 flex flex-col cursor-pointer"
                    >
                      <EditorialImage
                        src={article.image}
                        alt={article.imageAlt}
                        fallbackTitle={article.category}
                        className="aspect-[16/10]"
                        imgClassName="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="p-7 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-[#5D4D63]">
                            <span className="font-semibold text-[#B9574B]">{article.category}</span>
                            <span aria-hidden="true">·</span>
                            <span className="tabular-nums">{article.readTime}</span>
                            <span aria-hidden="true">·</span>
                            <span>{article.publishedDate}</span>
                          </div>
                          <h2 className="mt-3 text-2xl font-bold text-[#38283F] group-hover:text-[#1B3831] leading-snug">
                            {article.title}
                          </h2>
                          <p className="mt-3 text-sm text-[#5D4D63] leading-relaxed">
                            {article.excerpt}
                          </p>
                        </div>

                        <div className="mt-6 pt-5 border-t border-[#38283F]/10 flex items-center justify-between gap-4">
                          {author && (
                            <span className="text-xs text-[#5D4D63]">
                              By {author.name}, {author.credentials}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B3831] group-hover:text-[#B9574B] whitespace-nowrap">
                            Read Article
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

interface BlogArticleProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function BlogArticlePage({ slug, onNavigate }: BlogArticleProps) {
  const article = HEALTH_ARTICLES.find((a) => a.slug === slug);
  if (!article) return null;

  const author =
    VETERINARY_DOCTORS.find((d) => d.slug === article.authorSlug) || VETERINARY_DOCTORS[0];
  const otherArticles = HEALTH_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="bg-[#FAF7F0]">
      <header className="bg-[#FBF5F2] pt-10 pb-14 border-b border-[#38283F]/10">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('/blog')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5D4D63] hover:text-[#38283F] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Pet Health Blog
          </button>

          <div className="mt-7 flex flex-wrap items-center gap-2 text-xs text-[#5D4D63]">
            <span className="font-semibold text-[#B9574B]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>Published {article.publishedDate}</span>
          </div>

          <h1 className="mt-3 text-3xl sm:text-5xl font-bold text-[#38283F] tracking-tight leading-[1.12]">
            {article.title}
          </h1>

          <p className="mt-5 text-lg text-[#5D4D63] leading-relaxed">{article.excerpt}</p>

          <div className="mt-7 pt-6 border-t border-[#38283F]/10 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => onNavigate(`/doctors/${author.slug}`)}
              className="flex items-center gap-3.5 text-left cursor-pointer group"
            >
              <EditorialImage
                src={author.image}
                alt={author.imageAlt}
                className="w-12 h-12 rounded-full shrink-0"
                imgClassName="w-full h-full object-cover object-top"
              />
              <div>
                <p className="text-sm font-bold text-[#38283F] group-hover:text-[#B9574B]">
                  {author.name}, {author.credentials}
                </p>
                <p className="text-xs text-[#5D4D63]">{author.role}</p>
              </div>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">
        <EditorialImage
          src={article.image}
          alt={article.imageAlt}
          fallbackTitle={article.title}
          className="aspect-[16/9] rounded-2xl mb-10"
          imgClassName="w-full h-full object-cover object-top"
        />

        {/* Key Clinical Takeaways */}
        <div className="bg-[#E4F0E8] rounded-2xl p-7 sm:p-8 mb-12">
          <h2 className="text-base font-bold text-[#1B3831]">Key Clinical Takeaways</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#38283F]">
            {article.keyTakeaways.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#1B3831] mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Sections */}
        <div className="space-y-10 max-w-[68ch]">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-[#38283F]">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base text-[#5D4D63] leading-[1.75]">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Appointment Note */}
        <div className="mt-14 p-8 rounded-2xl bg-[#1B3831] text-[#FAF7F0] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Have questions specific to your dog or cat?
            </h3>
            <p className="mt-1.5 text-sm text-[#DFD3E0]">
              Educational articles support—but never replace—an individualized physical examination.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/book')}
            className="px-6 py-3 rounded-lg bg-[#B9574B] text-white text-sm font-semibold hover:bg-[#9D4439] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Book a Consultation
          </button>
        </div>

        {/* Related Reading */}
        <div className="mt-16 pt-12 border-t border-[#38283F]/10">
          <h2 className="text-xl font-bold text-[#38283F]">Continue Reading</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {otherArticles.map((rel) => (
              <button
                key={rel.slug}
                type="button"
                onClick={() => onNavigate(`/blog/${rel.slug}`)}
                className="text-left p-6 rounded-xl bg-white border border-[#38283F]/10 hover:border-[#B9574B]/40 transition-colors cursor-pointer"
              >
                <p className="text-xs font-semibold text-[#B9574B]">
                  {rel.category} · {rel.readTime}
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#38283F] leading-snug">
                  {rel.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
