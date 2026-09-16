import { useEffect, useMemo, useRef, useState } from 'react'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowLeft,
  ArrowRight,
  Bold,
  Check,
  ChevronDown,
  Image as ImageIcon,
  Italic,
  LayoutTemplate,
  Maximize2,
  MessageCircle,
  Minus,
  Move,
  Palette,
  Plus,
  Redo2,
  RotateCcw,
  RotateCw,
  Ruler,
  Save,
  Send,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Trash2,
  Type,
  Undo2,
  Upload,
  X,
} from 'lucide-react'

import { useCart } from '../../context/CartContext'
import './Designer.css'

const STORAGE_KEY = 'neonlab-saved-designs'

const neonColors = [
  { name: 'Beyaz', value: '#ffffff', glow: '255,255,255' },
  { name: 'Günışığı', value: '#fff3b0', glow: '255,243,176' },
  { name: 'Amber', value: '#ffb000', glow: '255,176,0' },
  { name: 'Kırmızı', value: '#ff304f', glow: '255,48,79' },
  { name: 'Pembe', value: '#ff4fd8', glow: '255,79,216' },
  { name: 'Mor', value: '#b95cff', glow: '185,92,255' },
  { name: 'Mavi', value: '#2997ff', glow: '41,151,255' },
  { name: 'Buz Mavisi', value: '#7fe9ff', glow: '127,233,255' },
  { name: 'Yeşil', value: '#4cff8f', glow: '76,255,143' },
]

// TWINSLED Designer için kullanılan gerçek 40 font ailesi.
// Font aile adları customneon kaynağındaki isimlerle birebir eşleştirilir.
const fonts = [
  { name: 'Alexa', family: 'Alexa' },
  { name: 'Amanda', family: 'Amanda' },
  { name: 'Amsterdam', family: 'Amsterdam' },
  { name: 'Austin', family: 'Austin' },
  { name: 'Avante', family: 'Avante' },
  { name: 'Barcelona', family: 'Barcelona' },
  { name: 'Bayview', family: 'Bayview' },
  { name: 'Beachfront', family: 'Beachfront' },
  { name: 'Bellview', family: 'Bellview' },
  { name: 'Buttercup', family: 'Buttercup' },
  { name: 'Chelsea', family: 'Chelsea' },
  { name: 'ClassicType', family: 'ClassicType' },
  { name: 'Freehand', family: 'Freehand' },
  { name: 'Freespirit', family: 'Freespirit' },
  { name: 'Greenworld', family: 'Greenworld' },
  { name: 'LoveNeon', family: 'LoveNeon' },
  { name: 'LoveNote', family: 'LoveNote' },
  { name: 'Marquee', family: 'Marquee' },
  { name: 'Mayfair', family: 'Mayfair' },
  { name: 'Melbourne', family: 'Melbourne' },
  { name: 'Monaco', family: 'Monaco' },
  { name: 'NeonGlow', family: 'NeonGlow' },
  { name: 'NeonLite', family: 'NeonLite' },
  { name: 'Neonscript', family: 'Neonscript' },
  { name: 'Neontrace', family: 'Neontrace' },
  { name: 'NeoTokyo', family: 'NeoTokyo' },
  { name: 'Nevada', family: 'Nevada' },
  { name: 'NewCursive', family: 'NewCursive' },
  { name: 'Northshore', family: 'Northshore' },
  { name: 'Photogenic', family: 'Photogenic' },
  { name: 'Rocket', family: 'Rocket' },
  { name: 'Royalty', family: 'Royalty' },
  { name: 'SciFi', family: 'SciFi' },
  { name: 'Signature', family: 'Signature' },
  { name: 'Sorrento', family: 'Sorrento' },
  { name: 'Typewriter', family: 'Typewriter' },
  { name: 'Venetian', family: 'Venetian' },
  { name: 'Vintage', family: 'Vintage' },
  { name: 'Waikiki', family: 'Waikiki' },
  { name: 'WildScript', family: 'WildScript' },
]

const customFontFiles = [
  ['Alexa', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Alexa.ttf`],
  ['Amanda', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Amanda.ttf`],
  ['Amsterdam', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Amsterdam.ttf`],
  ['Austin', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Austin.ttf`],
  ['Avante', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Avante.ttf`],
  ['Barcelona', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Barcelona.ttf`],
  ['Bayview', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Bayview.ttf`],
  ['Beachfront', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Beachfront.ttf`],
  ['Bellview', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Bellview.ttf`],
  ['Buttercup', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Buttercup.ttf`],
  ['Chelsea', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Chelsea.ttf`],
  ['ClassicType', `https://customneon.com.au/create-neon-sign/css/fonts/custom/ClassicType.ttf`],
  ['Freehand', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Freehand.ttf`],
  ['Freespirit', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Freespirit.ttf`],
  ['Greenworld', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Greenworld.ttf`],
  ['LoveNeon', `https://customneon.com.au/create-neon-sign/css/fonts/custom/LoveNeon.ttf`],
  ['LoveNote', `https://customneon.com.au/create-neon-sign/css/fonts/custom/LoveNote.ttf`],
  ['Marquee', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Marquee.ttf`],
  ['Mayfair', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Mayfair.ttf`],
  ['Melbourne', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Melbourne.ttf`],
  ['Monaco', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Monaco.ttf`],
  ['NeonGlow', `https://customneon.com.au/create-neon-sign/css/fonts/custom/NeonGlow.ttf`],
  ['NeonLite', `https://customneon.com.au/create-neon-sign/css/fonts/custom/NeonLite.ttf`],
  ['Neonscript', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Neonscript.ttf`],
  ['Neontrace', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Neontrace.ttf`],
  ['NeoTokyo', `https://customneon.com.au/create-neon-sign/css/fonts/custom/NeoTokyo.ttf`],
  ['Nevada', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Nevada.ttf`],
  ['NewCursive', `https://customneon.com.au/create-neon-sign/css/fonts/custom/NewCursive.ttf`],
  ['Northshore', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Northshore.ttf`],
  ['Photogenic', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Photogenic.ttf`],
  ['Rocket', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Rocket.ttf`],
  ['Royalty', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Royalty.ttf`],
  ['SciFi', `https://customneon.com.au/create-neon-sign/css/fonts/custom/SciFi.ttf`],
  ['Signature', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Signature.ttf`],
  ['Sorrento', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Sorrento.ttf`],
  ['Typewriter', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Typewriter.ttf`],
  ['Venetian', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Venetian.ttf`],
  ['Vintage', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Vintage.ttf`],
  ['Waikiki', `https://customneon.com.au/create-neon-sign/css/fonts/custom/Waikiki.ttf`],
  ['WildScript', `https://customneon.com.au/create-neon-sign/css/fonts/custom/WildScript.ttf`],
]

const loadTurkishFallbackFonts = () => {
  const id = 'twinsled-turkish-fallback-fonts'
  if (document.getElementById(id)) return

  const link = document.createElement('link')
  link.id = id
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=Allura&family=Alex+Brush&family=Parisienne&family=Great+Vibes&family=Josefin+Sans&family=Lobster&family=Montserrat&family=Sacramento&family=Playfair+Display&family=Yellowtail&family=Ballet&family=Libre+Baskerville&family=Dancing+Script&family=Italianno&family=Kaushan+Script&family=Pacifico&family=Mrs+Saint+Delafield&family=Bebas+Neue&family=Cormorant+Garamond&family=Abril+Fatface&family=Space+Mono&family=Sora&family=Poppins&family=Qwitcher+Grypen&family=Tangerine&family=Space+Grotesk&family=Oswald&family=Arizonia&family=Outfit&family=Cinzel&family=DM+Serif+Display&family=Bodoni+Moda&family=Cookie&family=Quicksand&family=Noto+Sans&display=swap'
  document.head.appendChild(link)
}

const loadCustomFonts = async () => {
  loadTurkishFallbackFonts()

  const styleId = 'twinsled-real-neon-fonts'
  let style = document.getElementById(styleId)

  if (!style) {
    style = document.createElement('style')
    style.id = styleId
    style.textContent = customFontFiles
      .map(
        ([name, url]) => `
          @font-face {
            font-family: '${name}';
            src: url('${url}') format('truetype');
            font-display: block;
            font-style: normal;
            font-weight: 400;
          }
        `,
      )
      .join('\n')

    document.head.appendChild(style)
  }

  const loads = customFontFiles.map(async ([name, url]) => {
    try {
      const face = new FontFace(name, `url(${url}) format("truetype")`, {
        style: 'normal',
        weight: '400',
      })

      await face.load()
      document.fonts.add(face)
      return true
    } catch {
      return false
    }
  })

  await Promise.all(loads)

  // Google fallback font stylesheet ve gerçek neon fontları birlikte hazırla.
  await document.fonts.ready
}

const environments = [
  {
    id: 'brown',
    name: 'Toprak Duvar',
    type: 'WARM',
    image: '/designer-environments/wall-brown.jpg',
  },
  {
    id: 'cream',
    name: 'Krem Duvar',
    type: 'LIGHT',
    image: '/designer-environments/wall-cream.jpg',
  },
  {
    id: 'blue',
    name: 'Mavi Duvar',
    type: 'COLOR',
    image: '/designer-environments/wall-blue.jpg',
  },
  {
    id: 'black',
    name: 'Siyah Duvar',
    type: 'DARK',
    image: '/designer-environments/wall-black.jpg',
  },
  {
    id: 'light-gray',
    name: 'Açık Gri Duvar',
    type: 'MINIMAL',
    image: '/designer-environments/wall-light-gray.jpg',
  },
  {
    id: 'dark-gray',
    name: 'Antrasit Duvar',
    type: 'DARK',
    image: '/designer-environments/wall-dark-gray.jpg',
  },
  {
    id: 'pink',
    name: 'Pembe Duvar',
    type: 'SOFT',
    image: '/designer-environments/wall-pink.jpg',
  },
  {
    id: 'orange',
    name: 'Turuncu Duvar',
    type: 'WARM',
    image: '/designer-environments/wall-orange.jpg',
  },
]

const backgrounds = [
  { id: 'none', name: 'Zemin Yok', short: 'Yok', multiplier: 1, className: 'none' },
  { id: 'clear', name: 'Şeffaf Pleksi', short: 'Şeffaf', multiplier: 1.1, className: 'clear' },
  { id: 'black', name: 'Siyah Pleksi', short: 'Siyah', multiplier: 1.16, className: 'black' },
  { id: 'white', name: 'Beyaz Pleksi', short: 'Beyaz', multiplier: 1.12, className: 'white' },
  { id: 'wood', name: 'Ahşap', short: 'Ahşap', multiplier: 1.2, className: 'wood' },
  { id: 'mirror', name: 'Ayna', short: 'Ayna', multiplier: 1.3, className: 'mirror' },
  { id: 'circle', name: 'Daire', short: 'Daire', multiplier: 1.24, className: 'circle' },
  { id: 'oval', name: 'Oval', short: 'Oval', multiplier: 1.25, className: 'oval' },
  { id: 'arch', name: 'Kemer', short: 'Kemer', multiplier: 1.27, className: 'arch' },
  { id: 'capsule', name: 'Kapsül', short: 'Kapsül', multiplier: 1.26, className: 'capsule' },
  { id: 'hex', name: 'Altıgen', short: 'Altıgen', multiplier: 1.28, className: 'hex' },
  { id: 'organic', name: 'Organik', short: 'Organik', multiplier: 1.32, className: 'organic' },
]


const iconLibrary = [
  { id: 'none', label: 'Yok', char: '' },
  { id: 'heart', label: 'Kalp', char: '♥' },
  { id: 'star', label: 'Yıldız', char: '★' },
  { id: 'spark', label: 'Parıltı', char: '✦' },
  { id: 'bolt', label: 'Şimşek', char: '⚡' },
  { id: 'crown', label: 'Taç', char: '♛' },
  { id: 'music', label: 'Müzik', char: '♫' },
  { id: 'infinity', label: 'Sonsuzluk', char: '∞' },
  { id: 'diamond', label: 'Elmas', char: '◆' },
  { id: 'flower', label: 'Çiçek', char: '✿' },
  { id: 'moon', label: 'Ay', char: '☾' },
  { id: 'sun', label: 'Güneş', char: '☼' },
]

const templates = [
  {
    id: 'love',
    name: 'LOVE',
    subtitle: 'Romantik',
    lines: ['LOVE', 'IS HERE'],
    colors: [4, 3],
    fonts: [15, 32],
    icon: 'heart',
    placement: 'after',
  },
  {
    id: 'coffee',
    name: 'COFFEE',
    subtitle: 'Kafe',
    lines: ['COFFEE', 'FIRST'],
    colors: [2, 0],
    fonts: [17, 20],
    icon: 'diamond',
    placement: 'before',
  },
  {
    id: 'barber',
    name: 'BARBER',
    subtitle: 'Berber',
    lines: ['BARBER', 'SHOP'],
    colors: [3, 0],
    fonts: [17, 24],
    icon: 'star',
    placement: 'after',
  },
  {
    id: 'welcome',
    name: 'WELCOME',
    subtitle: 'Giriş',
    lines: ['WELCOME', 'HOME'],
    colors: [7, 0],
    fonts: [2, 25],
    icon: 'spark',
    placement: 'before',
  },
  {
    id: 'game',
    name: 'GAME ON',
    subtitle: 'Gaming',
    lines: ['GAME', 'ON'],
    colors: [8, 6],
    fonts: [25, 32],
    icon: 'bolt',
    placement: 'after',
  },
  {
    id: 'marry',
    name: 'MARRY ME',
    subtitle: 'Etkinlik',
    lines: ['MARRY', 'ME'],
    colors: [4, 0],
    fonts: [31, 2],
    icon: 'heart',
    placement: 'after',
  },
]

function createWord(text = '', color = neonColors[4], font = fonts[2]) {
  return {
    id: `word-${Math.random().toString(36).slice(2, 10)}`,
    text,
    color,
    font,
    size: 100,
    weight: 400,
    italic: false,
    letterSpacing: 0,
    rotate: 0,
    skew: 0,
  }
}

function wordsFromText(text, previousWords = [], color, font) {
  const tokens = text.match(/\S+/g) || []

  return tokens.map((token, index) => {
    const previous = previousWords[index]
    return {
      ...createWord(token, color, font),
      ...(previous || {}),
      id: previous?.id || `word-${Math.random().toString(36).slice(2, 10)}`,
      text: token,
      color: previous?.color || color,
      font: previous?.font || font,
    }
  })
}

function createLine(text, color, font) {
  return {
    id: `line-${Math.random().toString(36).slice(2, 10)}`,
    text,
    color,
    font,
    words: wordsFromText(text, [], color, font),
    align: 'center',
    lineSpacing: 1,
  }
}

function createInitialDesign() {
  const lines = [
    createLine('', neonColors[4], fonts[2]),
  ]

  return {
    lines,
    activeLine: 0,
    activeWord: 0,
    selectedEnvironment: environments.find((environment) => environment.id === 'dark-gray') || environments[0],
    brightness: 100,
    previewScale: 100,
    customWidth: 120,
    customHeight: 45,
    quantity: 1,
    background: backgrounds[0],
    icon: 'none',
    iconPlacement: 'after',
    iconSize: 100,
    iconColor: neonColors[4],
    logo: '',
    logoName: '',
    logoSize: 100,
    logoX: 80,
    logoY: 18,
    previewMode: 'mobile',
    offsetX: 0,
    offsetY: 0,
  }
}

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function formatPrice(value) {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(Number(value) || 0)
}

function getActiveWord(design) {
  return design.lines[design.activeLine]?.words?.[design.activeWord] || null
}

function getBaseWordSize(text, lineCount) {
  const length = text.trim().length
  let size = 62

  if (length <= 4) size = 72
  else if (length <= 7) size = 66
  else if (length <= 10) size = 60
  else if (length <= 14) size = 54
  else if (length <= 20) size = 47
  else if (length <= 28) size = 40
  else if (length <= 38) size = 34
  else size = 29

  if (lineCount >= 3) size *= 0.86
  if (lineCount >= 5) size *= 0.9

  return Math.max(18, Math.round(size))
}

function Designer() {
  const { addToCart } = useCart()
  const fileInputRef = useRef(null)
  const textInputRef = useRef(null)
  const historyRef = useRef([])
  const futureRef = useRef([])
  const noticeTimerRef = useRef(null)
  const mobilePreviewRef = useRef(null)

  const [design, setDesign] = useState(createInitialDesign)
  const [, forceHistory] = useState(0)
  const [fontSearch, setFontSearch] = useState('')
  const [showAllFonts, setShowAllFonts] = useState(false)
  const [saveName, setSaveName] = useState('')
  const [savedDesigns, setSavedDesigns] = useState([])
  const [notice, setNotice] = useState('')
  const [fullscreen, setFullscreen] = useState(false)
  const [activePanel, setActivePanel] = useState('design')
  const [showEnvironmentPanel, setShowEnvironmentPanel] = useState(false)
  const [mobilePreviewHeight, setMobilePreviewHeight] = useState(0)

  useEffect(() => {
    const element = mobilePreviewRef.current
    if (!element) return undefined

    const measure = () => {
      const nextHeight = Math.ceil(element.getBoundingClientRect().height)
      setMobilePreviewHeight((current) => (Math.abs(current - nextHeight) > 1 ? nextHeight : current))
    }

    measure()
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null
    observer?.observe(element)
    window.addEventListener('resize', measure)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [design.previewMode, design.selectedEnvironment.id])

  useEffect(() => {
    document.title = 'Neon Tabela Tasarımı | NeonLab'
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      setSavedDesigns(Array.isArray(stored) ? stored : [])
    } catch {
      setSavedDesigns([])
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    loadCustomFonts().then(() => {
      if (cancelled) return
      document.fonts.ready.then(() => {
        window.dispatchEvent(new Event('resize'))
      })
    })

    return () => {
      cancelled = true
    }
  }, [])

  const showNotice = (message) => {
    setNotice(message)
    if (noticeTimerRef.current) {
      window.clearTimeout(noticeTimerRef.current)
    }
    noticeTimerRef.current = window.setTimeout(() => {
      setNotice('')
      noticeTimerRef.current = null
    }, 1800)
  }

  useEffect(() => {
    return () => {
      if (noticeTimerRef.current) {
        window.clearTimeout(noticeTimerRef.current)
      }
    }
  }, [])

  const commit = (updater) => {
    setDesign((current) => {
      const next = typeof updater === 'function' ? updater(current) : updater
      historyRef.current.push(clone(current))
      if (historyRef.current.length > 40) historyRef.current.shift()
      futureRef.current = []
      forceHistory((value) => value + 1)
      return next
    })
  }

  const undo = () => {
    if (!historyRef.current.length) return
    const previous = historyRef.current.pop()
    futureRef.current.push(clone(design))
    setDesign(previous)
    forceHistory((value) => value + 1)
  }

  const redo = () => {
    if (!futureRef.current.length) return
    const next = futureRef.current.pop()
    historyRef.current.push(clone(design))
    setDesign(next)
    forceHistory((value) => value + 1)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const modifier = event.ctrlKey || event.metaKey

      if (modifier && event.key.toLowerCase() === 'z') {
        event.preventDefault()
        if (event.shiftKey) redo()
        else undo()
      }

      if (modifier && event.key.toLowerCase() === 'y') {
        event.preventDefault()
        redo()
      }

      if (event.key === 'Escape') {
        setFullscreen(false)
        setActivePanel('design')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [design, redo, undo])

  const lines = design.lines
  const activeLine = lines[design.activeLine] || lines[0]
  const activeWord = getActiveWord(design)

  const previewLines = useMemo(
    () => lines.filter((line) => line.text.trim()),
    [lines],
  )

  const totalTextLength = useMemo(
    () => lines.reduce((sum, line) => sum + line.text.trim().length, 0),
    [lines],
  )

  const totalWords = useMemo(
    () => lines.reduce((sum, line) => sum + line.words.length, 0),
    [lines],
  )

  const estimatedPrice = useMemo(() => {
    const basePrice = 1290
    const textMultiplier = 1 + Math.min(totalTextLength / 250, 0.5)
    const lineMultiplier =
      previewLines.length <= 1
        ? 1
        : previewLines.length === 2
          ? 1.08
          : previewLines.length === 3
            ? 1.16
            : 1.24

    const sizeMultiplier = Math.max(
      1,
      Math.min(
        (design.customWidth * design.customHeight) / (100 * 35),
        2.8,
      ),
    )

    const materialMultiplier = design.background.multiplier
    const iconMultiplier = design.icon !== 'none' ? 1.08 : 1
    const logoMultiplier = design.logo ? 1.12 : 1

    return Math.round(
      (basePrice *
        textMultiplier *
        lineMultiplier *
        sizeMultiplier *
        materialMultiplier *
        iconMultiplier *
        logoMultiplier *
        design.quantity) /
        10,
    ) * 10
  }, [
    design,
    previewLines.length,
    totalTextLength,
  ])

  const sizeLabel = `${design.customWidth} × ${design.customHeight} cm`

  const setLineText = (value) => {
    commit((current) => {
      const nextLines = current.lines.map((line, index) => {
        if (index !== current.activeLine) return line
        const defaultColor = line.color || neonColors[4]
        const defaultFont = line.font || fonts[2]
        const words = wordsFromText(value, line.words, defaultColor, defaultFont)
        return {
          ...line,
          text: value,
          words,
          color: words[0]?.color || defaultColor,
          font: words[0]?.font || defaultFont,
        }
      })

      return {
        ...current,
        lines: nextLines,
        activeWord: Math.min(
          current.activeWord,
          Math.max(nextLines[current.activeLine].words.length - 1, 0),
        ),
      }
    })
  }

  const updateLine = (key, value) => {
    commit((current) => ({
      ...current,
      lines: current.lines.map((line, index) =>
        index === current.activeLine ? { ...line, [key]: value } : line,
      ),
    }))
  }

  const updateActiveWord = (key, value) => {
    commit((current) => ({
      ...current,
      lines: current.lines.map((line, lineIndex) => {
        if (lineIndex !== current.activeLine) return line
        return {
          ...line,
          words: line.words.map((word, wordIndex) =>
            wordIndex === current.activeWord
              ? { ...word, [key]: value }
              : word,
          ),
        }
      }),
    }))
  }

  const updateWordColor = (color) => updateActiveWord('color', color)
  const updateWordFont = (font) => updateActiveWord('font', font)

  const createNextLine = () => {
    commit((current) => {
      const currentLine = current.lines[current.activeLine]
      const baseColor = currentLine?.color || neonColors[4]
      const baseFont = currentLine?.font || fonts[2]
      const line = createLine('', baseColor, baseFont)
      const nextLines = [...current.lines]
      nextLines.splice(current.activeLine + 1, 0, line)

      return {
        ...current,
        lines: nextLines,
        activeLine: current.activeLine + 1,
        activeWord: 0,
      }
    })
  }

  const handleTextKeyDown = (event) => {
    if (event.key !== 'Enter') return

    event.preventDefault()

    if (!currentLineText.trim()) return

    createNextLine()
  }

  const resetDesign = () => {
    commit(createInitialDesign())
    showNotice('Tasarım sıfırlandı.')
  }

  const chooseTemplate = (template) => {
    commit((current) => {
      const nextLines = template.lines.map((text, index) =>
        createLine(
          text,
          neonColors[template.colors[index] ?? 0],
          fonts[template.fonts[index] ?? 0],
        ),
      )
      return {
        ...current,
        lines: nextLines,
        activeLine: 0,
        activeWord: 0,
        icon: template.icon,
        iconPlacement: template.placement,
        iconColor: neonColors[template.colors[0] ?? 0],
      }
    })
    setActivePanel('design')
    showNotice(`${template.name} şablonu uygulandı.`)
  }

  const chooseEnvironment = (environment) =>
    commit((current) => ({ ...current, selectedEnvironment: environment }))

  const chooseBackground = (background) =>
    commit((current) => ({ ...current, background }))

  const chooseIcon = (icon) =>
    commit((current) => ({ ...current, icon }))

  const updateSettings = (key, value) =>
    commit((current) => ({ ...current, [key]: value }))

  const moveEnvironment = (direction) => {
    const currentIndex = environments.findIndex(
      (item) => item.id === design.selectedEnvironment.id,
    )
    const nextIndex =
      (currentIndex + direction + environments.length) % environments.length
    chooseEnvironment(environments[nextIndex])
  }

  const handleLogoUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      showNotice('Logo dosyası en fazla 5 MB olabilir.')
      event.target.value = ''
      return
    }

    if (!file.type.startsWith('image/')) {
      showNotice('Lütfen bir görsel dosyası seç.')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      commit((current) => ({
        ...current,
        logo: String(reader.result || ''),
        logoName: file.name,
      }))
      showNotice('Logo tasarıma eklendi.')
    }
    reader.readAsDataURL(file)
  }

  const saveDesign = () => {
    const name = saveName.trim() || `Neon Tasarım ${savedDesigns.length + 1}`
    const entry = {
      id: `saved-${Date.now()}`,
      name: name.slice(0, 48),
      createdAt: new Date().toLocaleString('tr-TR'),
      design: clone(design),
    }

    const next = [entry, ...savedDesigns].slice(0, 12)

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      setSavedDesigns(next)
      setSaveName('')
      setActivePanel('saved')
      showNotice('Tasarım kaydedildi.')
    } catch {
      showNotice('Tasarım kaydedilemedi. Tarayıcı depolama alanı dolu olabilir.')
    }
  }

  const loadSavedDesign = (entry) => {
    const base = createInitialDesign()
    const loaded = clone(entry.design || {})
    const mergedLines = Array.isArray(loaded.lines) && loaded.lines.length
      ? loaded.lines.map((line) => ({
          ...createLine(
            line.text || '',
            line.color || neonColors[4],
            line.font || fonts[2],
          ),
          ...line,
          words: Array.isArray(line.words)
            ? line.words
            : wordsFromText(
                line.text || '',
                [],
                line.color || neonColors[4],
                line.font || fonts[2],
              ),
        }))
      : base.lines

    const normalized = {
      ...base,
      ...loaded,
      lines: mergedLines,
      customWidth: Number(loaded.customWidth) || 120,
      customHeight: Number(loaded.customHeight) || 45,
      logoSize: Number(loaded.logoSize) || 100,
      logoX: Number.isFinite(loaded.logoX) ? loaded.logoX : 80,
      logoY: Number.isFinite(loaded.logoY) ? loaded.logoY : 18,
    }

    commit(normalized)
    setActivePanel('design')
    showNotice(`${entry.name} açıldı.`)
  }

  const deleteSavedDesign = (id) => {
    const next = savedDesigns.filter((item) => item.id !== id)
    setSavedDesigns(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      showNotice('Kayıt silinirken bir hata oluştu.')
      return
    }
    showNotice('Kayıt silindi.')
  }

  const buildWhatsAppMessage = () => {
    const linesForMessage = [
      'Merhaba, NEONLAB üzerinden özel neon tabela tasarımı oluşturmak istiyorum.',
      '',
      '--- TASARIM ---',
      ...previewLines.flatMap((line, lineIndex) => [
        `Satır ${lineIndex + 1}: ${line.text}`,
        ...line.words.map(
          (word) =>
            `  ${word.text} → ${word.color?.name || '-'} / ${word.font?.name || '-'}`,
        ),
      ]),
      '',
      `Ölçü: ${sizeLabel}`,
      `Zemin: ${design.background.name}`,
      `Duvar: ${design.selectedEnvironment.name}`,
      `Parlaklık: %${design.brightness}`,
      `Yatay konum: ${design.offsetX || 0}px`,
      `Dikey konum: ${design.offsetY || 0}px`,
      `İkon: ${iconLibrary.find((item) => item.id === design.icon)?.label || 'Yok'}${design.icon !== 'none' ? ` (${design.iconPlacement === 'before' ? 'önce' : 'sonra'})` : ''}`,
      `Logo: ${design.logo ? design.logoName || 'Yüklendi' : 'Yok'}`,
      `Adet: ${design.quantity}`,
    ]

    return linesForMessage.join('\n')
  }

  const sendWhatsApp = (number) => {
    if (!previewLines.length) return
    const url = `https://wa.me/${number}?text=${encodeURIComponent(buildWhatsAppMessage())}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const addDesignToCart = () => {
    if (!previewLines.length) return

    const cartLines = previewLines.map((line) => line.text)
    const wordStyles = previewLines.map((line) =>
      line.words.map((word) => ({
        text: word.text,
        color: word.color,
        font: word.font,
        size: word.size,
        weight: word.weight,
        italic: word.italic,
        letterSpacing: word.letterSpacing,
        rotate: word.rotate,
        skew: word.skew,
      })),
    )

    addToCart({
      productId: `custom-${Date.now()}`,
      name: 'Özel Neon Tasarım',
      category: 'Özel Tasarım',
      image: design.selectedEnvironment.image,
      color: previewLines[0]?.words[0]?.color || neonColors[4],
      colors: previewLines.map((line) => line.words[0]?.color || line.color),
      fonts: previewLines.map((line) => line.words[0]?.font || line.font),
      lines: cartLines,
      wordStyles,
      size: {
        name: sizeLabel,
        value: sizeLabel,
        multiplier: Math.max(1, Math.min((design.customWidth * design.customHeight) / (100 * 35), 2.8)),
      },
      quantity: design.quantity,
      totalPrice: estimatedPrice,
      background: design.background,
      environment: design.selectedEnvironment.name,
      icon: design.icon,
      logo: Boolean(design.logo),
    })

    showNotice('Tasarım sepete eklendi.')
  }

  const currentLineText = activeLine?.text || ''

  useEffect(() => {
    const input = textInputRef.current
    if (!input) return

    input.focus()
    requestAnimationFrame(() => {
      const end = input.value.length
      input.setSelectionRange(end, end)
    })
  }, [design.activeLine])

  const visibleFonts = fonts.filter((font) =>
    font.name.toLowerCase().includes(fontSearch.toLowerCase()),
  )
  const fontItems = showAllFonts ? visibleFonts : visibleFonts.slice(0, 10)
  const activeColor = activeWord?.color || neonColors[4]

  const productionWarnings = useMemo(() => {
    const warnings = []
    if (totalTextLength > 55) warnings.push('Metin oldukça uzun; genişlik/ölçü yeniden değerlendirilmelidir.')
    if (previewLines.length > 5) warnings.push('5 satırdan fazla tasarımlar üretimde daha küçük yazı gerektirebilir.')
    if (activeWord && activeWord.size < 75) warnings.push('Seçili kelimenin boyutu normalden küçük.')
    if (design.customWidth < 50 || design.customHeight < 20) warnings.push('Ölçü çok küçük; üretim uygunluğu teyit edilmelidir.')
    return warnings
  }, [activeWord, design.customHeight, design.customWidth, previewLines.length, totalTextLength])

  const setLogoPosition = (x, y) => {
    setDesign((current) => ({
      ...current,
      logoX: Math.max(5, Math.min(95, x)),
      logoY: Math.max(5, Math.min(95, y)),
    }))
  }

  const turkishGlyphs = {
    İ: { base: 'I', mark: 'dot' },
    Ş: { base: 'S', mark: 'cedilla' },
    Ğ: { base: 'G', mark: 'breve' },
    Ç: { base: 'C', mark: 'cedilla' },
    Ö: { base: 'O', mark: 'umlaut' },
    Ü: { base: 'U', mark: 'umlaut' },
    ş: { base: 's', mark: 'cedilla' },
    ğ: { base: 'g', mark: 'breve' },
    ç: { base: 'c', mark: 'cedilla' },
    ö: { base: 'o', mark: 'umlaut' },
    ü: { base: 'u', mark: 'umlaut' },
    ı: { base: 'ı', mark: null, fallback: true },
  }

  const renderTurkishText = (value = '') =>
    Array.from(value).map((char, index) => {
      const glyph = turkishGlyphs[char]

      if (!glyph) {
        return <span key={`${char}-${index}`}>{char}</span>
      }

      if (glyph.fallback) {
        return (
          <span
            key={`${char}-${index}`}
            className="designer-neon__turkish-fallback-glyph"
          >
            {char}
          </span>
        )
      }

      return (
        <span
          key={`${char}-${index}`}
          className={`designer-neon__turkish-glyph designer-neon__turkish-glyph--${glyph.mark}`}
          aria-hidden="true"
        >
          <span className="designer-neon__turkish-glyph-base">{glyph.base}</span>
          <span className="designer-neon__turkish-glyph-mark">{glyph.mark === 'dot' ? '•' : glyph.mark === 'cedilla' ? '¸' : glyph.mark === 'breve' ? '˘' : '¨'}</span>
        </span>
      )
    })

  const handleLogoPointerDown = (event) => {
    if (!design.logo) return
    const mount = event.currentTarget.closest('.designer-mount')
    if (!mount) return

    event.preventDefault()
    const rect = mount.getBoundingClientRect()

    const handleMove = (moveEvent) => {
      const x = ((moveEvent.clientX - rect.left) / rect.width) * 100
      const y = ((moveEvent.clientY - rect.top) / rect.height) * 100
      setLogoPosition(x, y)
    }

    const handleUp = () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp, { once: true })
  }

  const renderNeonLines = (isFullscreen = false) => (
    <div
      className={`designer-neon ${isFullscreen ? 'designer-neon--fullscreen' : ''}`}
      style={{
        transform: `translate(${design.offsetX}px, ${design.offsetY}px) scale(${design.previewScale / 100})`,
        filter: `brightness(${design.brightness / 100})`,
      }}
    >
      {previewLines.map((line) => {
        const originalIndex = lines.findIndex((item) => item.id === line.id)
        const baseSize = getBaseWordSize(line.text, previewLines.length)
        const icon = iconLibrary.find((item) => item.id === design.icon)

        return (
          <div
            key={line.id}
            className={`designer-neon__line designer-neon__line--${line.align}`}
            onClick={() =>
              commit((current) => ({
                ...current,
                activeLine: originalIndex,
                activeWord: 0,
              }))
            }
            style={{ lineHeight: line.lineSpacing }}
          >
            {design.icon !== 'none' && design.iconPlacement === 'before' && originalIndex === 0 && icon && (
              <span
                className="designer-neon__icon"
                style={{
                  color: design.iconColor.value,
                  fontSize: `${(baseSize * design.iconSize) / 100}px`,
                }}
              >
                {icon.char}
              </span>
            )}

            {(() => {
              let wordIndex = 0

              return line.text.split(/(\s+)/).map((part, partIndex) => {
                if (!part) return null

                if (/^\s+$/.test(part)) {
                  return (
                    <span
                      key={`space-${line.id}-${partIndex}`}
                      className="designer-neon__space"
                      aria-hidden="true"
                    >
                      {part}
                    </span>
                  )
                }

                const currentWordIndex = wordIndex
                const word = line.words[currentWordIndex] || createWord(part)
                wordIndex += 1

                const isActive =
                  originalIndex === design.activeLine &&
                  currentWordIndex === design.activeWord

                return (
                  <button
                    key={word.id || `word-${line.id}-${partIndex}`}
                    type="button"
                    className={`designer-neon__word ${isActive ? 'is-active' : ''}`}
                    onClick={(event) => {
                      event.stopPropagation()
                      commit((current) => ({
                        ...current,
                        activeLine: originalIndex,
                        activeWord: currentWordIndex,
                      }))
                    }}
                    style={{
                      color: word.color.value,
                      fontFamily: `"${word.font.family}", sans-serif`,
                      fontSize: `${(baseSize * word.size) / 100}px`,
                      fontWeight: word.weight,
                      fontStyle: word.italic ? 'italic' : 'normal',
                      letterSpacing: `${word.letterSpacing}px`,
                      transform: `rotate(${word.rotate}deg) skewX(${word.skew}deg)`,
                      '--word-rgb': word.color.glow,
                    }}
                  >
                    {renderTurkishText(part)}
                  </button>
                )
              })
            })()}

            {design.icon !== 'none' && design.iconPlacement === 'after' && originalIndex === 0 && icon && (
              <span
                className="designer-neon__icon"
                style={{
                  color: design.iconColor.value,
                  fontSize: `${(baseSize * design.iconSize) / 100}px`,
                }}
              >
                {icon.char}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )

  const renderTextEditor = (className = '') => (
    <div className={`control-section designer-text-editor ${className}`}>
      <div className="control-section__title">
        <div className="control-icon"><Type size={17} /></div>
        <div>
          <span>METİN</span>
          <strong>Enter ile yeni satır · Önizlemeden kelime seç</strong>
        </div>
      </div>
      <div className="text-input-wrapper">
        <textarea
          ref={textInputRef}
          value={currentLineText}
          maxLength={250}
          onChange={(event) => setLineText(event.target.value.replace(/[\r\n]+/g, ' '))}
          onKeyDown={handleTextKeyDown}
          placeholder="Metnini yaz... Enter ile yeni satır"
          rows={3}
          inputMode="text"
          enterKeyHint="next"
        />
      </div>
      <div className="text-stats">
        Aktif satır {design.activeLine + 1} • {currentLineText.trim().length}/250 karakter
      </div>
    </div>
  )

  const backgroundStyle = {
    '--background-class': design.background.className,
  }

  return (
    <main className="designer-page">
      <div className="designer-page__background" />

      <div className="designer">
        <header className="designer-header">
          <div>
            <div className="designer-header__eyebrow">
              <Sparkles size={15} />
              <span>NEON STUDIO / DESIGN LAB</span>
            </div>
            <h1>
              Neon Tabela <span>Tasarım Stüdyosu</span>
            </h1>
            <p>
              Yazını, kelimelerini, renklerini, ölçünü ve ikonunu tek ekranda tasarla. Önizlemeyi anında gör ve hazır olduğunda sepete gönder.
            </p>
          </div>

          <div className="designer-header__actions">
            <button className="designer-history" type="button" onClick={undo} disabled={!historyRef.current.length}>
              <Undo2 size={15} />
            </button>
            <button className="designer-history" type="button" onClick={redo} disabled={!futureRef.current.length}>
              <Redo2 size={15} />
            </button>
            <button className="designer-reset" type="button" onClick={resetDesign}>
              <RotateCcw size={16} />
              Sıfırla
            </button>
          </div>
        </header>

        {notice && (
          <div className="designer-toast">
            <Check size={15} />
            {notice}
          </div>
        )}

        <div className="designer-workflow-hint">Ctrl/Cmd + Z: geri al · Ctrl/Cmd + Shift + Z: ileri al · Esc: paneli kapat</div>

        <div className="designer-tabs designer-tabs--single">
          <button type="button" className="is-active" aria-current="page">
            <SlidersHorizontal size={15} />
            Tasarım
          </button>
        </div>

        <section
          className="designer-workspace"
          style={{ "--mobile-preview-height": `${mobilePreviewHeight}px` }}
        >
          <div className="designer-preview-card" ref={mobilePreviewRef}>
            <div className="designer-preview-sticky">
            <div className="designer-preview-card__top">
              <div className="designer-preview-card__status">
                <span className="status-dot" />
                <span>CANLI ÖNİZLEME</span>
              </div>

              <div className="designer-preview-card__top-controls">
                <div className="preview-mode-switch">
                  <button type="button" className={design.previewMode === 'desktop' ? 'is-active' : ''} onClick={() => updateSettings('previewMode', 'desktop')}>DESKTOP</button>
                  <button type="button" className={design.previewMode === 'mobile' ? 'is-active' : ''} onClick={() => updateSettings('previewMode', 'mobile')}>MOBILE</button>
                </div>
                <button type="button" onClick={() => moveEnvironment(-1)} aria-label="Önceki ortam"><ArrowLeft size={16} /></button>
                <button type="button" onClick={() => moveEnvironment(1)} aria-label="Sonraki ortam"><ArrowRight size={16} /></button>
                <button type="button" onClick={() => setFullscreen(true)} aria-label="Tam ekran"><Maximize2 size={16} /></button>
              </div>
            </div>

            <div className={`designer-scene designer-scene--${design.previewMode}`} style={backgroundStyle}>
              <img src={design.selectedEnvironment.image} alt={design.selectedEnvironment.name} className="designer-scene__image" />
              <div className="designer-scene__overlay" />

              <div className={`designer-mount designer-mount--${design.background.className}`}>
                {design.logo && (
                  <img
                    src={design.logo}
                    alt="Yüklenen logo"
                    className="designer-uploaded-logo"
                    onPointerDown={handleLogoPointerDown}
                    style={{
                      left: `${design.logoX}%`,
                      top: `${design.logoY}%`,
                      width: `${110 * ((design.logoSize || 100) / 100)}px`,
                    }}
                  />
                )}
                {renderNeonLines()}
              </div>

              <div className="designer-scene__environment">
                <div><span>DUVAR</span><strong>{design.selectedEnvironment.name}</strong></div>
                <span>{design.selectedEnvironment.type}</span>
              </div>

              <div className="designer-scene__scale">
                <Ruler size={12} />
                <span>{sizeLabel}</span>
              </div>
            </div>
            </div>
          </div>
          <div className="designer-mobile-preview-spacer" aria-hidden="true" />

          {renderTextEditor('designer-mobile-text-editor')}

            <div className={`environment-selector ${showEnvironmentPanel ? 'is-open' : ''}`}>
              <button
                type="button"
                className="environment-selector__toggle"
                onClick={() => setShowEnvironmentPanel((current) => !current)}
                aria-expanded={showEnvironmentPanel}
              >
                <span>
                  <small>ORTAM</small>
                  <strong>Duvarını seç</strong>
                  <em>{design.selectedEnvironment.name}</em>
                </span>
                <ChevronDown size={18} className="environment-selector__chevron" />
              </button>

              {showEnvironmentPanel && (
                <div className="environment-selector__panel">
                  <div className="environment-selector__heading">
                    <span>ORTAM SEÇENEKLERİ</span>
                    <strong>Bir duvar seç</strong>
                  </div>
                  <div className="environment-grid">
                    {environments.map((environment) => (
                      <button key={environment.id} type="button" className={`environment-item ${design.selectedEnvironment.id === environment.id ? 'is-active' : ''}`} onClick={() => chooseEnvironment(environment)}>
                        <img src={environment.image} alt={environment.name} />
                        <span>{environment.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

          <aside className="designer-controls">
            <div className="controls-heading">
              <div>
                <span className="control-label">KENDİN TASARLA</span>
                <h2>Her detayı sen belirle</h2>
              </div>
              <div className="controls-heading__icon"><Sparkles size={18} /></div>
            </div>

            {renderTextEditor('designer-desktop-text-editor')}

            <div className="control-section">
              <div className="control-section__title">
                <div className="control-icon"><Type size={17} /></div>
                <div><span>KELİMELER</span><strong>Kelimeyi seç ve ayrı tasarla</strong></div>
              </div>

              {activeLine?.words.length ? (
                <div className="word-picker">
                  {activeLine.words.map((word, index) => (
                    <button key={word.id} type="button" className={index === design.activeWord ? 'is-active' : ''} onClick={() => commit((current) => ({ ...current, activeWord: index }))}>
                      <span>{word.text}</span>
                      <i style={{ background: word.color.value, boxShadow: `0 0 8px ${word.color.value}` }} />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="control-empty">Bu satıra kelime eklemek için metin yaz.</div>
              )}
            </div>

            <div className="control-section">
              <div className="control-section__title">
                <div className="control-icon"><Palette size={17} /></div>
                <div><span>RENK</span><strong>{activeWord ? `${activeWord.text} rengi` : 'Kelime seç'}</strong></div>
              </div>

              <div className="color-grid">
                {neonColors.map((color) => (
                  <button key={color.name} type="button" className={`color-option ${activeColor.name === color.name ? 'is-active' : ''}`} onClick={() => updateWordColor(color)}>
                    <span className="color-option__dot" style={{ background: color.value, boxShadow: `0 0 14px ${color.value}` }} />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="control-section">
              <div className="control-section__title">
                <div className="control-icon"><Type size={17} /></div>
                <div>
                  <span>FONT</span>
                  <strong>{activeWord?.font?.name || 'Kelime seç'}</strong>
                </div>
              </div>

              <input className="font-search" value={fontSearch} onChange={(event) => setFontSearch(event.target.value)} placeholder="Font ara..." />
              <div className="font-grid">
                {fontItems.map((font) => (
                  <button key={font.name} type="button" className={`font-option ${activeWord?.font?.name === font.name ? 'is-active' : ''}`} onClick={() => updateWordFont(font)} style={{ fontFamily: `"${font.family}", sans-serif` }}>
                    <span>{font.name}</span>
                  </button>
                ))}
              </div>
              <button type="button" className="font-show-more" onClick={() => setShowAllFonts((value) => !value)}>
                {showAllFonts ? 'Daha az göster' : `Tüm fontları göster (${visibleFonts.length})`}
              </button>
            </div>

            <div className="control-section">
              <div className="control-section__title">
                <div className="control-icon"><SlidersHorizontal size={17} /></div>
                <div><span>KELİME STİLİ</span><strong>İnce ayar</strong></div>
              </div>

              {activeWord ? (
                <>
                  <div className="style-row style-row--split">
                    <label>Boyut <strong>%{activeWord.size}</strong><input type="range" min="60" max="145" value={activeWord.size} onChange={(event) => updateActiveWord('size', Number(event.target.value))} /></label>
                    <label>Kalınlık <strong>{activeWord.weight}</strong><input type="range" min="300" max="700" step="100" value={activeWord.weight} onChange={(event) => updateActiveWord('weight', Number(event.target.value))} /></label>
                  </div>

                  <label className="style-range">Harf aralığı <strong>{activeWord.letterSpacing}px</strong><input type="range" min="-2" max="10" step="0.5" value={activeWord.letterSpacing} onChange={(event) => updateActiveWord('letterSpacing', Number(event.target.value))} /></label>
                  <label className="style-range">Döndürme <strong>{activeWord.rotate}°</strong><input type="range" min="-15" max="15" value={activeWord.rotate} onChange={(event) => updateActiveWord('rotate', Number(event.target.value))} /></label>
                  <label className="style-range">Eğme <strong>{activeWord.skew}°</strong><input type="range" min="-20" max="20" value={activeWord.skew} onChange={(event) => updateActiveWord('skew', Number(event.target.value))} /></label>

                  <div className="toggle-row">
                    <button type="button" className={activeWord.weight >= 600 ? 'is-active' : ''} onClick={() => updateActiveWord('weight', activeWord.weight >= 600 ? 400 : 700)}><Bold size={15} /> Kalın</button>
                    <button type="button" className={activeWord.italic ? 'is-active' : ''} onClick={() => updateActiveWord('italic', !activeWord.italic)}><Italic size={15} /> İtalik</button>
                  </div>
                </>
              ) : (
                <div className="control-empty">Önizlemeden veya kelime listesinden bir kelime seç.</div>
              )}
            </div>

            <div className="control-section">
              <div className="control-section__title">
                <div className="control-icon"><AlignCenter size={17} /></div>
                <div><span>HİZALAMA</span><strong>Satır düzeni</strong></div>
              </div>

              <div className="align-grid">
                <button type="button" className={activeLine?.align === 'left' ? 'is-active' : ''} onClick={() => updateLine('align', 'left')}><AlignLeft size={15} /> Sol</button>
                <button type="button" className={activeLine?.align === 'center' ? 'is-active' : ''} onClick={() => updateLine('align', 'center')}><AlignCenter size={15} /> Orta</button>
                <button type="button" className={activeLine?.align === 'right' ? 'is-active' : ''} onClick={() => updateLine('align', 'right')}><AlignRight size={15} /> Sağ</button>
              </div>
              <label className="style-range">Satır aralığı <strong>{activeLine?.lineSpacing.toFixed(2)}</strong><input type="range" min="0.75" max="1.6" step="0.05" value={activeLine?.lineSpacing || 1} onChange={(event) => updateLine('lineSpacing', Number(event.target.value))} /></label>
            </div>

            <div className="control-section">
              <div className="control-section__title">
                <div className="control-icon"><Move size={17} /></div>
                <div><span>KONUM</span><strong>Önizlemeyi yerleştir</strong></div>
              </div>
              <label className="style-range">Yatay <strong>{design.offsetX}px</strong><input type="range" min="-160" max="160" value={design.offsetX} onChange={(event) => updateSettings('offsetX', Number(event.target.value))} /></label>
              <label className="style-range">Dikey <strong>{design.offsetY}px</strong><input type="range" min="-120" max="120" value={design.offsetY} onChange={(event) => updateSettings('offsetY', Number(event.target.value))} /></label>
              <label className="style-range">Önizleme ölçeği <strong>%{design.previewScale}</strong><input type="range" min="75" max="125" value={design.previewScale} onChange={(event) => updateSettings('previewScale', Number(event.target.value))} /></label>
            </div>

            <div className="control-section">
              <div className="control-section__title">
                <div className="control-icon"><Ruler size={17} /></div>
                <div><span>ÖLÇÜ</span><strong>Müşteri ölçüsünü belirle</strong></div>
              </div>

              <div className="custom-size-pro">
                <div className="custom-size-pro__field">
                  <span>GENİŞLİK</span>
                  <div>
                    <input
                      type="number"
                      min="30"
                      max="500"
                      value={design.customWidth}
                      onChange={(event) => updateSettings('customWidth', Math.max(30, Math.min(500, Number(event.target.value) || 30)))}
                    />
                    <b>cm</b>
                  </div>
                </div>

                <div className="custom-size-pro__x">×</div>

                <div className="custom-size-pro__field">
                  <span>YÜKSEKLİK</span>
                  <div>
                    <input
                      type="number"
                      min="15"
                      max="250"
                      value={design.customHeight}
                      onChange={(event) => updateSettings('customHeight', Math.max(15, Math.min(250, Number(event.target.value) || 15)))}
                    />
                    <b>cm</b>
                  </div>
                </div>
              </div>

              <div className="size-live-info">
                <span>ÖNİZLEME ÖLÇEK ORANI</span>
                <strong>{Math.round((design.customWidth / Math.max(design.customHeight, 1)) * 10) / 10} : 1</strong>
              </div>
              <p className="control-helper">30–500 cm genişlik, 15–250 cm yükseklik. Üretim ölçüsü sipariş öncesi teyit edilir.</p>
            </div>

            <div className="control-section">
              <div className="control-section__title">
                <div className="control-icon"><Sparkles size={17} /></div>
                <div><span>İKON</span><strong>Hazır sembol ekle</strong></div>
              </div>
              <div className="icon-grid">
                {iconLibrary.map((icon) => (
                  <button key={icon.id} type="button" className={design.icon === icon.id ? 'is-active' : ''} onClick={() => chooseIcon(icon.id)} title={icon.label}>
                    <span style={{ color: design.iconColor.value }}>{icon.char || '—'}</span>
                    <small>{icon.label}</small>
                  </button>
                ))}
              </div>
              {design.icon !== 'none' && (
                <>
                  <div className="icon-placement">
                    <button type="button" className={design.iconPlacement === 'before' ? 'is-active' : ''} onClick={() => updateSettings('iconPlacement', 'before')}>Önce</button>
                    <button type="button" className={design.iconPlacement === 'after' ? 'is-active' : ''} onClick={() => updateSettings('iconPlacement', 'after')}>Sonra</button>
                  </div>
                  <div className="mini-palette">
                    {neonColors.map((color) => (
                      <button key={color.name} type="button" className={design.iconColor.name === color.name ? 'is-active' : ''} style={{ background: color.value, boxShadow: `0 0 8px ${color.value}` }} onClick={() => updateSettings('iconColor', color)} aria-label={color.name} />
                    ))}
                  </div>
                  <label className="style-range">İkon boyutu <strong>%{design.iconSize}</strong><input type="range" min="60" max="140" value={design.iconSize} onChange={(event) => updateSettings('iconSize', Number(event.target.value))} /></label>
                </>
              )}
            </div>

            <div className="control-section">
              <div className="control-section__title">
                <div className="control-icon"><ShoppingCart size={17} /></div>
                <div><span>ADET</span><strong>{design.quantity} adet</strong></div>
              </div>
              <div className="quantity-selector">
                <button type="button" onClick={() => updateSettings('quantity', Math.max(1, design.quantity - 1))}><Minus size={15} /></button>
                <strong>{design.quantity}</strong>
                <button type="button" onClick={() => updateSettings('quantity', design.quantity + 1)}><Plus size={15} /></button>
              </div>
            </div>

            <div className="designer-summary">
              <div><span>TASARIM</span><strong>{previewLines.length} satır / {totalWords} kelime</strong></div>
              <div><span>ÖLÇÜ</span><strong>{sizeLabel}</strong></div>
              <div><span>ZEMİN</span><strong>{design.background.name}</strong></div>
            </div>

            {productionWarnings.length > 0 && (
              <div className="production-warning">
                <strong>ÜRETİM KONTROLÜ</strong>
                {productionWarnings.map((warning) => <span key={warning}>• {warning}</span>)}
              </div>
            )}

            <div className="save-design-row">
              <input value={saveName} onChange={(event) => setSaveName(event.target.value)} placeholder="Tasarım adı..." />
              <button type="button" onClick={saveDesign}><Save size={15} /> Kaydet</button>
            </div>

            <button type="button" className="designer-cart-button" onClick={addDesignToCart} disabled={!previewLines.length}><ShoppingCart size={18} /> Sepete Ekle <ArrowRight size={17} /></button>

            <div className="designer-whatsapp-grid">
              <button type="button" className="designer-whatsapp" onClick={() => sendWhatsApp('905439103247')} disabled={!previewLines.length}><MessageCircle size={16} /> WhatsApp 1</button>
              <button type="button" className="designer-whatsapp" onClick={() => sendWhatsApp('905439103246')} disabled={!previewLines.length}><MessageCircle size={16} /> WhatsApp 2</button>
            </div>

          </aside>
        </section>
      </div>

      {fullscreen && (
        <div className="designer-fullscreen">
          <button type="button" className="designer-fullscreen__close" onClick={() => setFullscreen(false)}><X size={16} /> Kapat</button>
          <div className="designer-fullscreen__scene">
            <img src={design.selectedEnvironment.image} alt={design.selectedEnvironment.name} />
            <div className="designer-fullscreen__overlay" />
            <div className={`designer-mount designer-mount--${design.background.className}`}>
              {design.logo && (
                <img
                  src={design.logo}
                  alt="Logo"
                  className="designer-uploaded-logo"
                  style={{
                    left: `${design.logoX}%`,
                    top: `${design.logoY}%`,
                    width: `${110 * ((design.logoSize || 100) / 100)}px`,
                  }}
                />
              )}
              {renderNeonLines(true)}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function LayersIconFallback() {
  return <SlidersHorizontal size={17} />
}

function CopyIconFallback() {
  return <span className="copy-fallback">⧉</span>
}

function SunIconFallback() {
  return <span className="sun-fallback">☼</span>
}

export default Designer
