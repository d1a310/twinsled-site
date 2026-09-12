import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  X,
} from 'lucide-react'

import './Projects.css'

const projects = [
  {
    "title": "E-TECH / Teknoloji Mağazası",
    "category": "Mağaza",
    "tag": "İÇ MEKAN",
    "image": "/projects/01-e-tech-magaza.jpg",
    "description": "Teknoloji mağazasında marka kimliğini güçlendiren neon uygulama."
  },
  {
    "title": "Lupin Pasta",
    "category": "Dış Mekan",
    "tag": "CEPHE",
    "image": "/projects/02-lupin-pasta-dis-mekan.jpg",
    "description": "Dış cephede gece görünürlüğünü yükselten mor neon uygulama."
  },
  {
    "title": "Komagene",
    "category": "Dış Mekan",
    "tag": "MAĞAZA",
    "image": "/projects/03-komagene-magaza.jpg",
    "description": "Vitrin ve iç mekânda güçlü kontrast oluşturan neon yazı uygulaması."
  },
  {
    "title": "777 Atölye",
    "category": "Özel Tasarım",
    "tag": "GREEN WALL",
    "image": "/projects/04-777-atolye-neon.jpg",
    "description": "Bitki duvarına entegre edilmiş çok renkli neon kompozisyon."
  },
  {
    "title": "Gaming Room",
    "category": "İç Mekan",
    "tag": "GAMING",
    "image": "/projects/05-gaming-oda.jpg",
    "description": "Oyun odasında atmosferi tamamlayan dekoratif neon ve ışık uygulaması."
  },
  {
    "title": "Aura Finans Gayrimenkul",
    "category": "İç Mekan",
    "tag": "OFİS",
    "image": "/projects/06-aura-finans-ofis.jpg",
    "description": "Kurumsal ofis alanında sade, okunaklı beyaz neon tabela."
  },
  {
    "title": "Hayat Çok Güzel",
    "category": "İç Mekan",
    "tag": "DEKORATİF",
    "image": "/projects/07-hayat-cok-guzel.jpg",
    "description": "Yaşam alanında mavi neonla atmosferi öne çıkaran dekoratif uygulama."
  },
  {
    "title": "Bi' De Böyle İstersen Feriha",
    "category": "İç Mekan",
    "tag": "DUVAR",
    "image": "/projects/08-bide-bugul-tersen.jpg",
    "description": "Dekoratif duvar üzerinde renkli yazı ve çizgisel ışık uygulaması."
  },
  {
    "title": "Ruhunu Beslemek İstiyorsan",
    "category": "İç Mekan",
    "tag": "İLHAM",
    "image": "/projects/09-ruhuma-beslemek.jpg",
    "description": "Koyu kırmızı duvarda sıcak beyaz neon ile premium görünüm."
  },
  {
    "title": "Seta & Didem Çiçekçilik",
    "category": "Mağaza",
    "tag": "ÇİÇEKÇİ",
    "image": "/projects/10-seta-didem-cicekcilik.jpg",
    "description": "Mağaza cephesinde el yazısı karakterli sıcak neon uygulaması."
  },
  {
    "title": "Neva Ev Yemekleri",
    "category": "İç Mekan",
    "tag": "YEMEK",
    "image": "/projects/11-neva-yemekleri.jpg",
    "description": "Yeşil bitki duvarına entegre edilen sıcak sarı neon ve ikon uygulaması."
  },
  {
    "title": "Laten Lukken Coffee",
    "category": "Mağaza",
    "tag": "COFFEE",
    "image": "/projects/12-laten-lukken-coffee.jpg",
    "description": "Kahve barında premium, minimal neon logo ve slogan uygulaması."
  },
  {
    "title": "Çiçekli Ayna Duvar",
    "category": "Dekorasyon",
    "tag": "PHOTO SPOT",
    "image": "/projects/13-cicekli-ayna-duvar.jpg",
    "description": "Ayna ve çiçek duvarını neon mesajla birleştiren dekoratif sahne."
  },
  {
    "title": "Taş Duvar Neon",
    "category": "Dekorasyon",
    "tag": "RUSTIC",
    "image": "/projects/14-tas-duvar-neon.jpg",
    "description": "Doğal taş dokusunu sıcak beyaz neon ile tamamlayan uygulama."
  },
  {
    "title": "Yeşil Duvar Neon",
    "category": "Dekorasyon",
    "tag": "LOUNGE",
    "image": "/projects/15-yesil-duvar-neon.jpg",
    "description": "Bitki paneli üzerinde çok renkli neon mesaj ile sosyal alan uygulaması."
  }
]

const filters = ['Tümü', 'Mağaza', 'Dış Mekan', 'İç Mekan', 'Dekorasyon', 'Özel Tasarım']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tümü')
  const [selected, setSelected] = useState(null)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Tümü') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const openProject = (project) => {
    setSelected(project)
  }

  const closeProject = () => {
    setSelected(null)
  }

  const moveProject = (direction) => {
    if (!selected) return

    const index = filteredProjects.findIndex(
      (item) => item.image === selected.image,
    )

    if (index === -1) return

    const nextIndex =
      (index + direction + filteredProjects.length) %
      filteredProjects.length

    setSelected(filteredProjects[nextIndex])
  }

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero__grid" />
        <div className="projects-hero__glow projects-hero__glow--pink" />
        <div className="projects-hero__glow projects-hero__glow--cyan" />

        <div className="projects-container projects-hero__inner">
          <div className="projects-hero__copy">
            <div className="projects-eyebrow">
              <span />
              TWINSLED / PROJECTS
            </div>

            <span className="projects-kicker">
              GERÇEK UYGULAMALAR • NEON • LED • TASARIM
            </span>

            <h1>
              Fikri
              <span> ışığa.</span>
            </h1>

            <p>
              Mağaza, ofis, sosyal alan ve özel dekorasyon
              uygulamalarından seçilmiş gerçek çalışmalar.
            </p>

            <div className="projects-hero__meta">
              <div>
                <strong>{projects.length.toString().padStart(2, '0')}</strong>
                <span>PROJE</span>
              </div>

              <i />

              <div>
                <strong>4</strong>
                <span>KATEGORİ</span>
              </div>

              <i />

              <div>
                <strong>01</strong>
                <span>STUDIO</span>
              </div>
            </div>
          </div>

          <div className="projects-hero__visual">
            <div className="projects-hero__image-wrap">
              <img
                src={projects[1].image}
                alt={projects[1].title}
              />

              <div className="projects-hero__image-overlay" />

              <div className="projects-hero__image-label">
                <span>FEATURED PROJECT</span>
                <strong>LUPIN / NIGHT VIEW</strong>
              </div>
            </div>

            <div className="projects-floating projects-floating--one">
              <Sparkles size={15} />
              <span>Özel Tasarım</span>
            </div>

            <div className="projects-floating projects-floating--two">
              <span className="projects-live-dot" />
              <span>REAL APPLICATIONS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-gallery">
        <div className="projects-container">
          <div className="projects-section-head">
            <div>
              <span className="projects-section-tag">SELECTED WORKS</span>
              <h2>
                Gerçek
                <span> projeler.</span>
              </h2>
            </div>

            <p>
              Her proje farklı bir mekân, farklı bir ihtiyaç ve
              farklı bir ışık dili.
            </p>
          </div>

          <div className="projects-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter ? 'is-active' : ''
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <article
                key={project.image}
                className={`project-card project-card--${index % 5}`}
                onClick={() => openProject(project)}
              >
                <div className="project-card__image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={index > 3 ? 'lazy' : 'eager'}
                  />

                  <div className="project-card__overlay" />

                  <div className="project-card__top">
                    <span>{project.tag}</span>

                    <span className="project-card__icon">
                      <Maximize2 size={15} />
                    </span>
                  </div>

                  <div className="project-card__number">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>

                <div className="project-card__content">
                  <div>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <ArrowUpRight size={18} />
                </div>
              </article>
            ))}
          </div>

          <div className="projects-bottom-note">
            <span className="projects-bottom-note__line" />
            <p>
              Yeni gerçek uygulamalar eklendikçe bu galeri
              büyütülebilir.
            </p>
            <span className="projects-bottom-note__line" />
          </div>
        </div>
      </section>

      {selected && (
        <div className="projects-lightbox" onClick={closeProject}>
          <div
            className="projects-lightbox__panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="projects-lightbox__close"
              onClick={closeProject}
              aria-label="Kapat"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              className="projects-lightbox__nav projects-lightbox__nav--left"
              onClick={() => moveProject(-1)}
              aria-label="Önceki proje"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="projects-lightbox__image">
              <img
                src={selected.image}
                alt={selected.title}
              />
            </div>

            <button
              type="button"
              className="projects-lightbox__nav projects-lightbox__nav--right"
              onClick={() => moveProject(1)}
              aria-label="Sonraki proje"
            >
              <ChevronRight size={24} />
            </button>

            <div className="projects-lightbox__info">
              <span>{selected.category} / {selected.tag}</span>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Projects
