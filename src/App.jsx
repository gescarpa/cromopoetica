import React, { useState, useEffect, useMemo, useRef } from "react";
import { supabase } from "./supabase";
import { BIOS } from "./biografias";

/* Fase 1: guardado en el navegador (localStorage). En la Fase 3 esto se sustituye por Supabase. */
if (typeof window !== "undefined" && !window.storage) {
  const NS = "cp:";
  window.storage = {
    async get(key) {
      const v = localStorage.getItem(NS + key);
      if (v === null) throw new Error("no existe");
      return { key, value: v };
    },
    async set(key, value) {
      localStorage.setItem(NS + key, value);
      return { key, value };
    },
    async delete(key) {
      localStorage.removeItem(NS + key);
      return { key, deleted: true };
    },
    async list(prefix = "") {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(NS + prefix)) keys.push(k.slice(NS.length));
      }
      return { keys };
    },
  };
}

/* ============================================================
   CROMOPOÉTICA — un pantonario de la poesía
   R temperatura · G arraigo · B abismo · A canonicidad
   ============================================================ */

/* ---------- paleta Bauhaus sobria ---------- */
const INK = "#17150F";
const PAPER = "#EFE9DA";
const PAPER2 = "#E6DECB";
const LINE = "#CDC4AC";
const RED = "#C0392B";
const BLUE = "#2E4A7D";
const YEL = "#D9A521";
const GRN = "#3E6B57";

/* ---------- ejes ---------- */
const AXES = [
  { key: "r", label: "R · Temperatura", lo: "frío · intelecto", hi: "visceral · emoción", col: RED },
  { key: "g", label: "G · Arraigo", lo: "etéreo · abstracto", hi: "terrenal · corpóreo", col: GRN },
  { key: "b", label: "B · Abismo", lo: "claro · inmediato", hi: "hermético · metafísico", col: BLUE },
  { key: "a", label: "A · Canonicidad", lo: "al margen", hi: "del canon", col: INK },
];

/* ---------- poetas (dominio amplio, sin imágenes con derechos) ---------- */
const RAW_POETS = [
  ["Safo de Lesbos", "s. VII–VI a.C.", "lírica arcaica griega"],
  ["Li Bai", "701–762", "dinastía Tang"],
  ["Du Fu", "712–770", "dinastía Tang"],
  ["Rumi", "1207–1273", "sufismo persa"],
  ["Omar Jayam", "1048–1131", "rubaiyat persa"],
  ["Dante Alighieri", "1265–1321", "dolce stil novo"],
  ["Francesco Petrarca", "1304–1374", "humanismo italiano"],
  ["Matsuo Bashō", "1644–1694", "haiku"],
  ["San Juan de la Cruz", "1542–1591", "mística española"],
  ["Sor Juana Inés de la Cruz", "1648–1695", "barroco novohispano"],
  ["Garcilaso de la Vega", "1501–1536", "renacimiento español"],
  ["Luis de Góngora", "1561–1627", "culteranismo"],
  ["Francisco de Quevedo", "1580–1645", "conceptismo"],
  ["William Shakespeare", "1564–1616", "soneto isabelino"],
  ["William Blake", "1757–1827", "romanticismo visionario"],
  ["Friedrich Hölderlin", "1770–1843", "romanticismo alemán"],
  ["John Keats", "1795–1821", "romanticismo inglés"],
  ["Giacomo Leopardi", "1798–1837", "pesimismo lírico"],
  ["Walt Whitman", "1819–1892", "verso libre americano"],
  ["Emily Dickinson", "1830–1886", "intimismo americano"],
  ["Charles Baudelaire", "1821–1867", "simbolismo"],
  ["Arthur Rimbaud", "1854–1891", "iluminaciones"],
  ["Stéphane Mallarmé", "1842–1898", "simbolismo hermético"],
  ["Rosalía de Castro", "1837–1885", "lírica gallega"],
  ["Rubén Darío", "1867–1916", "modernismo"],
  ["Antonio Machado", "1875–1939", "98 español"],
  ["Juan Ramón Jiménez", "1881–1958", "poesía pura"],
  ["Rainer Maria Rilke", "1875–1926", "elegía moderna"],
  ["Constantino Cavafis", "1863–1933", "modernidad griega"],
  ["Fernando Pessoa", "1888–1935", "heteronimia portuguesa"],
  ["Anna Ajmátova", "1889–1966", "acmeísmo ruso"],
  ["Marina Tsvetáieva", "1892–1941", "vanguardia rusa"],
  ["T. S. Eliot", "1888–1965", "modernismo anglosajón"],
  ["César Vallejo", "1892–1938", "vanguardia peruana"],
  ["Vicente Huidobro", "1893–1948", "creacionismo"],
  ["Federico García Lorca", "1898–1936", "generación del 27"],
  ["Pablo Neruda", "1904–1973", "neorromanticismo"],
  ["Gabriela Mistral", "1889–1957", "lírica chilena"],
  ["Jorge Luis Borges", "1899–1986", "metafísica de la forma"],
  ["José Lezama Lima", "1910–1976", "neobarroco cubano"],
  ["Octavio Paz", "1914–1998", "modernidad mexicana"],
  ["Paul Celan", "1920–1970", "hermetismo de posguerra"],
  ["Wisława Szymborska", "1923–2012", "ironía polaca"],
  ["Alejandra Pizarnik", "1936–1972", "lírica del abismo"],
  ["Sylvia Plath", "1932–1963", "confesionalismo"],
  ["Allen Ginsberg", "1926–1997", "generación beat"],
  ["Idea Vilariño", "1920–2009", "generación del 45"],
  ["Blanca Varela", "1926–2009", "vanguardia peruana"],
  ["Mahmud Darwish", "1941–2008", "lírica palestina"],
  ["Olga Orozco", "1920–1999", "surrealismo argentino"],
  ["Virgilio", "70–19 a.C.", "épica latina"],
  ["Horacio", "65–8 a.C.", "odas latinas"],
  ["Ovidio", "43 a.C.–17 d.C.", "elegía latina"],
  ["Catulo", "84–54 a.C.", "lírica latina"],
  ["Wang Wei", "699–759", "paisaje Tang"],
  ["Li Qingzhao", "1084–1155", "ci, dinastía Song"],
  ["Hafez", "1325–1390", "lírica persa"],
  ["Kabir", "1440–1518", "misticismo bhakti"],
  ["Mirabai", "1498–1547", "devoción bhakti"],
  ["Jorge Manrique", "1440–1479", "elegía medieval"],
  ["Fray Luis de León", "1527–1591", "Siglo de Oro"],
  ["Santa Teresa de Jesús", "1515–1582", "mística española"],
  ["John Donne", "1572–1631", "metafísicos ingleses"],
  ["John Milton", "1608–1674", "épica barroca inglesa"],
  ["Johann Wolfgang von Goethe", "1749–1832", "clasicismo de Weimar"],
  ["Novalis", "1772–1801", "romanticismo alemán"],
  ["Heinrich Heine", "1797–1856", "romanticismo alemán"],
  ["Victor Hugo", "1802–1885", "romanticismo francés"],
  ["Gérard de Nerval", "1808–1855", "romanticismo francés"],
  ["Gustavo Adolfo Bécquer", "1836–1870", "posromanticismo"],
  ["Paul Verlaine", "1844–1896", "simbolismo"],
  ["Paul Valéry", "1871–1945", "simbolismo tardío"],
  ["Guillaume Apollinaire", "1880–1918", "caligramas, vanguardia"],
  ["W. B. Yeats", "1865–1939", "simbolismo irlandés"],
  ["Ezra Pound", "1885–1972", "imaginismo"],
  ["Wallace Stevens", "1879–1955", "modernismo americano"],
  ["William Carlos Williams", "1883–1963", "imaginismo americano"],
  ["E. E. Cummings", "1894–1962", "vanguardia tipográfica"],
  ["Robert Frost", "1874–1963", "lírica de Nueva Inglaterra"],
  ["Giuseppe Ungaretti", "1888–1970", "hermetismo italiano"],
  ["Eugenio Montale", "1896–1981", "hermetismo italiano"],
  ["Osip Mandelshtam", "1891–1938", "acmeísmo ruso"],
  ["Vladímir Mayakovski", "1893–1930", "futurismo ruso"],
  ["Czesław Miłosz", "1911–2004", "poesía polaca"],
  ["Tomas Tranströmer", "1931–2015", "lírica sueca"],
  ["Yorgos Seferis", "1900–1971", "modernismo griego"],
  ["Odysseas Elytis", "1911–1996", "surrealismo griego"],
  ["Rabindranath Tagore", "1861–1941", "lírica bengalí"],
  ["Aimé Césaire", "1913–2008", "négritude"],
  ["Nazim Hikmet", "1902–1963", "vanguardia turca"],
  ["Forough Farrojzad", "1934–1967", "modernidad iraní"],
  ["Luis Cernuda", "1902–1963", "generación del 27"],
  ["Vicente Aleixandre", "1898–1984", "generación del 27"],
  ["Rafael Alberti", "1902–1999", "generación del 27"],
  ["Miguel Hernández", "1910–1942", "poesía del 36"],
  ["José Martí", "1853–1895", "modernismo cubano"],
  ["Delmira Agustini", "1886–1914", "modernismo uruguayo"],
  ["Alfonsina Storni", "1892–1938", "posmodernismo argentino"],
  ["Nicanor Parra", "1914–2018", "antipoesía"],
  ["Juan Gelman", "1930–2014", "poesía argentina"],
  ["José Emilio Pacheco", "1939–2014", "lírica mexicana"],
  ["Jaime Sabines", "1926–1999", "lírica mexicana"],
  ["Rosario Castellanos", "1925–1974", "lírica mexicana"],
  ["Nicolás Guillén", "1902–1989", "poesía afrocubana"],
  ["Carlos Drummond de Andrade", "1902–1987", "modernismo brasileño"],
  ["João Cabral de Melo Neto", "1920–1999", "rigor brasileño"],
  ["Charles Bukowski", "1920–1994", "realismo sucio"],
  ["Mary Oliver", "1935–2019", "poesía de la naturaleza"],
  ["Langston Hughes", "1902–1967", "Renacimiento de Harlem"],
  ["Elizabeth Bishop", "1911–1979", "precisión americana"],
  ["Dylan Thomas", "1914–1953", "neorromanticismo galés"],
  ["W. H. Auden", "1907–1973", "modernismo anglosajón"],
  ["Anne Carson", "1950", "ensayo lírico"],
  ["José Ángel Valente", "1929–2000", "poesía del silencio"],
];

const slug = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");

const POETS = RAW_POETS.map(([name, years, note]) => ({ id: slug(name), name, years, note }));
const POET_BY_ID = Object.fromEntries(POETS.map((p) => [p.id, p]));

/* ---------- utilidades ---------- */
function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const pad = (n, w) => String(n).padStart(w, "0");
const hex2 = (n) => pad(Math.round(n).toString(16), 2);
const toHex = (r, g, b) => `#${hex2(r)}${hex2(g)}${hex2(b)}`.toUpperCase();

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  let h = 0, s = 0; const l = (mx + mn) / 2;
  const d = mx - mn;
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
    if (mx === r) h = ((g - b) / d + (g < b ? 6 : 0));
    else if (mx === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return { h, s: s * 100, l: l * 100 };
}
const hueDist = (a, b) => { const d = Math.abs(a - b) % 360; return d > 180 ? 360 - d : d; };

/* código de catálogo estilo muestrario */
function catCode(r, g, b) {
  const { h, s, l } = rgbToHsl(r, g, b);
  const g1 = pad(Math.round(l), 2);
  const g2 = pad(Math.round(h), 3) + Math.round((s / 100) * 9);
  return `CP ${g1}-${g2}`;
}

/* nombres reales de color — el más cercano por distancia perceptual */
const NAMED = [
  ["Blanco", 0xff, 0xff, 0xff], ["Marfil", 0xf3, 0xee, 0xdc], ["Hueso", 0xe7, 0xe0, 0xcb],
  ["Crema", 0xf0, 0xe4, 0xc8], ["Beige", 0xd8, 0xc8, 0xa8], ["Arena", 0xcb, 0xb6, 0x8c],
  ["Perla", 0xdc, 0xd6, 0xc9], ["Gris claro", 0xb8, 0xb5, 0xae], ["Gris", 0x80, 0x80, 0x80],
  ["Gris pizarra", 0x55, 0x5a, 0x5e], ["Plomo", 0x6a, 0x6a, 0x6e], ["Carbón", 0x33, 0x33, 0x33],
  ["Negro", 0x12, 0x12, 0x12],
  ["Ocre", 0xc2, 0x8a, 0x3c], ["Mostaza", 0xc9, 0xa2, 0x27], ["Oro viejo", 0xb8, 0x86, 0x0b],
  ["Ámbar", 0xd9, 0xa0, 0x28], ["Amarillo cadmio", 0xf2, 0xc4, 0x10], ["Amarillo limón", 0xe6, 0xdb, 0x3a],
  ["Siena", 0xa0, 0x52, 0x2d], ["Siena tostada", 0x8a, 0x3e, 0x1f], ["Tierra de sombra", 0x6b, 0x4a, 0x2a],
  ["Sombra tostada", 0x4a, 0x33, 0x20], ["Sepia", 0x5a, 0x42, 0x2e], ["Caoba", 0x6b, 0x32, 0x1f],
  ["Terracota", 0xb5, 0x52, 0x33], ["Teja", 0xa8, 0x47, 0x2e], ["Cobre", 0xb4, 0x6a, 0x3a],
  ["Castaño", 0x7a, 0x4b, 0x2b], ["Chocolate", 0x4b, 0x2e, 0x1f],
  ["Bermellón", 0xd0, 0x3a, 0x22], ["Rojo cadmio", 0xc6, 0x28, 0x28], ["Escarlata", 0xc4, 0x1e, 0x2a],
  ["Carmín", 0x96, 0x1a, 0x2f], ["Granate", 0x73, 0x1f, 0x2c], ["Burdeos", 0x5c, 0x1a, 0x2a],
  ["Coral", 0xe2, 0x6d, 0x5a], ["Salmón", 0xe4, 0x8d, 0x76], ["Rosa palo", 0xd8, 0xa6, 0xa0],
  ["Rosa", 0xd9, 0x6f, 0x9a], ["Fucsia", 0xc0, 0x35, 0x83], ["Magenta", 0xb0, 0x2a, 0x6a],
  ["Púrpura", 0x77, 0x2a, 0x6e], ["Violeta", 0x6f, 0x3c, 0x8a], ["Malva", 0x9a, 0x76, 0x9e],
  ["Lila", 0xb5, 0x9c, 0xc6], ["Lavanda", 0xc6, 0xbe, 0xdc], ["Ciruela", 0x55, 0x33, 0x52],
  ["Añil", 0x39, 0x3b, 0x7a], ["Índigo", 0x2c, 0x2f, 0x66], ["Azul ultramar", 0x33, 0x40, 0x9a],
  ["Azul cobalto", 0x28, 0x4a, 0x9e], ["Azul de Prusia", 0x1e, 0x3a, 0x5a], ["Azul marino", 0x20, 0x2c, 0x4a],
  ["Azul", 0x2e, 0x5a, 0xa8], ["Azul cielo", 0x6f, 0x9e, 0xd0], ["Azul celeste", 0xa8, 0xc8, 0xe0],
  ["Cian", 0x2a, 0xa0, 0xb0], ["Turquesa", 0x32, 0xa0, 0x9a], ["Aguamarina", 0x6f, 0xc0, 0xb0],
  ["Verde esmeralda", 0x1f, 0x8a, 0x5a], ["Verde jade", 0x4a, 0x8a, 0x6e], ["Verde botella", 0x1f, 0x4a, 0x33],
  ["Verde", 0x3a, 0x8a, 0x44], ["Verde oliva", 0x6b, 0x6f, 0x2a], ["Verde musgo", 0x5a, 0x6b, 0x3a],
  ["Verde salvia", 0x9a, 0xa6, 0x86], ["Verde lima", 0x9a, 0xc0, 0x3a], ["Verde mar", 0x4a, 0x8a, 0x76],
];
function colorName(r, g, b) {
  let best = NAMED[0], bd = Infinity;
  for (const c of NAMED) {
    // distancia perceptual aproximada (redmean)
    const rm = (r + c[1]) / 2;
    const dr = r - c[1], dg = g - c[2], db = b - c[3];
    const d = (2 + rm / 256) * dr * dr + 4 * dg * dg + (2 + (255 - rm) / 256) * db * db;
    if (d < bd) { bd = d; best = c; }
  }
  return best[0];
}

function relation(c1, c2) {
  const a = rgbToHsl(c1.r, c1.g, c1.b);
  const b = rgbToHsl(c2.r, c2.g, c2.b);
  if (a.s < 12 && b.s < 12) return "ambos neutros — identidades poéticas difusas, sin filiación cromática clara";
  const d = hueDist(a.h, b.h);
  if (d < 22) return "análogos — familia cromática, poéticas hermanas";
  if (d >= 150) return "complementarios — oposición y tensión fértil";
  if (d >= 95) return "contraste de tríada — mundos distintos que aun así componen";
  return "contraste medio — parientes lejanos";
}

/* ---------- monograma tipográfico Bauhaus ---------- */
function Avatar({ seed, size = 132 }) {
  const { bg, shapes } = useMemo(() => {
    const name = (POET_BY_ID[seed] && POET_BY_ID[seed].name) || seed;
    const initials = (nm) => {
      const skip = new Set(["de", "la", "del", "los", "las", "y", "of", "the", "von", "van", "el"]);
      const w = nm.replace(/\./g, "").split(/\s+/).filter((x) => x && !skip.has(x.toLowerCase()));
      if (w.length === 0) return (nm.slice(0, 2) || "··").toUpperCase();
      if (w.length === 1) return w[0].slice(0, 2).toUpperCase();
      return (w[0][0] + w[w.length - 1][0]).toUpperCase();
    };
    const mono = initials(name);

    const rng = mulberry32(hashStr(seed) + 11);
    const pick = (a) => a[Math.floor(rng() * a.length)];

    const cream = "#EEE7D5", ink = "#1A1813", red = "#C8332B", blue = "#2B4C8C",
      yellow = "#E6B22E", green = "#2E7D5B", orange = "#D8622E", teal = "#2C7C82";
    const accents = [red, blue, yellow, green, orange, teal, ink];
    const bgChoices = [cream, red, blue, yellow, green, orange, teal];
    const isLight = (c) => c === cream || c === yellow;
    const bg = pick(bgChoices);
    const accentA = pick(accents.filter((c) => c !== bg));
    const accentB = pick(accents.filter((c) => c !== bg && c !== accentA));
    const monoOn = (field) => (isLight(field) ? pick([ink, red, blue, green]) : pick([cream, yellow]));

    const S = []; let k = 0; const key = () => k++;
    const rc = (x, y, w, h, fill) => S.push(<rect key={key()} x={x} y={y} width={w} height={h} fill={fill} />);
    const ci = (x, y, r, fill) => S.push(<circle key={key()} cx={x} cy={y} r={r} fill={fill} />);
    const pa = (d, fill) => S.push(<path key={key()} d={d} fill={fill} />);
    const poly = (pts, fill) => S.push(<polygon key={key()} points={pts.map((p) => p.join(",")).join(" ")} fill={fill} />);
    const txt = (str, x, y, fs, fill, rot = 0) => S.push(
      <text key={key()} x={x} y={y} fill={fill} fontFamily="'Jost', system-ui, sans-serif" fontWeight="900"
        fontSize={fs} textAnchor="middle" dominantBaseline="central"
        transform={rot ? `rotate(${rot} ${x} ${y})` : undefined}
        style={{ letterSpacing: "-0.04em" }}>{str}</text>
    );
    const drawMono = (m, col, x, y, scale = 1) => txt(m, x, y, (m.length > 1 ? 56 : 80) * scale, col);

    rc(0, 0, 120, 120, bg);
    const arch = Math.floor(rng() * 6);

    if (arch === 0) {
      const r = 46;
      const c = Math.floor(rng() * 4);
      const qc = {
        0: `M0 0 L${r} 0 A${r} ${r} 0 0 1 0 ${r} Z`,
        1: `M120 0 L120 ${r} A${r} ${r} 0 0 1 ${120 - r} 0 Z`,
        2: `M120 120 L${120 - r} 120 A${r} ${r} 0 0 1 120 ${120 - r} Z`,
        3: `M0 120 L0 ${120 - r} A${r} ${r} 0 0 1 ${r} 120 Z`,
      }[c];
      pa(qc, accentA);
      drawMono(mono, monoOn(bg), 60, 60);
    } else if (arch === 1) {
      ci(60, 60, 42, accentA);
      rc(pick([8, 100]), pick([8, 100]), 11, 11, accentB);
      drawMono(mono, monoOn(accentA), 60, 62);
    } else if (arch === 2) {
      rc(60, 0, 60, 120, accentA);
      const panel = pick([cream, ink]);
      ci(60, 60, 31, panel);
      drawMono(mono, monoOn(panel), 60, 62, 0.9);
    } else if (arch === 3) {
      poly(rng() < 0.5 ? [[0, 0], [120, 0], [0, 120]] : [[120, 0], [120, 120], [0, 120]], accentA);
      const panel = pick([cream, ink]);
      ci(60, 60, 30, panel);
      drawMono(mono, monoOn(panel), 60, 62, 0.88);
    } else if (arch === 4) {
      const by = 50;
      rc(0, by, 120, 32, accentA);
      ci(pick([16, 104]), pick([18, 102]), 9, accentB);
      drawMono(mono, monoOn(accentA), 60, by + 16, 0.92);
    } else {
      if (mono.length === 2) {
        txt(mono[0], 60, 38, 56, monoOn(bg));
        rc(34, 59, 52, 5, accentA);
        txt(mono[1], 60, 86, 56, monoOn(bg));
        ci(pick([15, 105]), pick([15, 105]), 8, accentB);
      } else {
        drawMono(mono, monoOn(bg), 60, 60, 1.1);
        ci(pick([18, 102]), pick([18, 102]), 11, accentA);
      }
    }

    return { bg, shapes: S };
  }, [seed]);

  const num = typeof size === "number";
  return (
    <svg viewBox="0 0 120 120" width={num ? size : "100%"} height={num ? size : undefined}
      style={{ display: "block", width: num ? size : "100%", height: num ? size : "auto", aspectRatio: "1 / 1" }}>
      <rect x="0" y="0" width="120" height="120" fill={bg} />
      {shapes}
    </svg>
  );
}

/* ---------- ficha de catálogo (chip) ---------- */
function Chip({ r, g, b, a = 255, name, years, note, footer = true, height = 168, faded = 1 }) {
  const hexv = toHex(r, g, b);
  const op = a / 255;
  return (
    <div style={{ border: `1px solid ${INK}`, background: PAPER, opacity: faded }}>
      <div style={{ position: "relative", height }}>
        <div style={{ position: "absolute", inset: 0, ...checker }} />
        <div style={{ position: "absolute", inset: 0, background: hexv, opacity: op }} />
      </div>
      {footer && (
        <div style={{ borderTop: `1px solid ${INK}`, padding: "8px 9px", background: PAPER }}>
          {name && <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 12.5, letterSpacing: ".02em", lineHeight: 1.1 }}>{name}</div>}
          {note && <div style={{ fontFamily: BODY, fontSize: 9.5, color: "#6b6450", marginTop: 1 }}>{note}{years ? ` · ${years}` : ""}</div>}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontFamily: MONO, fontSize: 9.5 }}>
            <span>{catCode(r, g, b)}</span>
            <span>{hexv}</span>
          </div>
          <div style={{ fontFamily: MONO, fontSize: 9, color: "#6b6450", marginTop: 2 }}>{colorName(r, g, b)}</div>
        </div>
      )}
    </div>
  );
}

/* ---------- slider de canal ---------- */
function Channel({ axis, value, others, onChange }) {
  const { key, label, lo, hi, col } = axis;
  let track;
  if (key === "a") {
    track = `linear-gradient(90deg, rgba(${others.r},${others.g},${others.b},0), rgb(${others.r},${others.g},${others.b}))`;
  } else {
    const at = (v) => {
      const o = { ...others, [key]: v };
      return `rgb(${o.r},${o.g},${o.b})`;
    };
    track = `linear-gradient(90deg, ${at(0)}, ${at(255)})`;
  }
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase" }}>{label}</span>
        <span style={{ fontFamily: MONO, fontSize: 13, fontWeight: 700 }}>{value}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: BODY, fontSize: 10, color: "#6b6450", margin: "1px 0 5px" }}>
        <span>0 · {lo}</span><span>{hi} · 255</span>
      </div>
      <input
        type="range" min={0} max={255} value={value}
        onChange={(e) => onChange(key, +e.target.value)}
        style={{ width: "100%", height: 16, WebkitAppearance: "none", appearance: "none", background: track, border: `1px solid ${INK}`, outline: "none", cursor: "pointer", borderRadius: 0 }}
      />
    </div>
  );
}

/* ---------- estilos compartidos ---------- */
const DISP = "'Jost', system-ui, sans-serif";
const BODY = "'Jost', system-ui, sans-serif";
const MONO = "'Space Mono', ui-monospace, monospace";
const checker = {
  backgroundImage:
    "linear-gradient(45deg,#cfc7b2 25%,transparent 25%),linear-gradient(-45deg,#cfc7b2 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#cfc7b2 75%),linear-gradient(-45deg,transparent 75%,#cfc7b2 75%)",
  backgroundSize: "16px 16px",
  backgroundPosition: "0 0,0 8px,8px -8px,-8px 0",
  backgroundColor: PAPER,
};
const BTN = {
  fontFamily: DISP, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase",
  fontSize: 13, padding: "13px 22px", border: `1px solid ${INK}`, background: INK, color: PAPER,
  cursor: "pointer",
};
const BTN_GHOST = { ...BTN, background: "transparent", color: INK };

/* batch sizes: 3, 5, luego 10 indefinidamente */
const batchSize = () => 3;
function batchInfo(total) {
  let i = 0, before = 0;
  while (before + batchSize(i) <= total) { before += batchSize(i); i++; }
  return { index: i, goal: batchSize(i), into: total - before };
}

/* ============================================================ */
function useIsMobile(bp = 720) {
  const [m, setM] = useState(typeof window !== "undefined" ? window.innerWidth <= bp : false);
  useEffect(() => {
    const onR = () => setM(window.innerWidth <= bp);
    window.addEventListener("resize", onR);
    onR();
    return () => window.removeEventListener("resize", onR);
  }, [bp]);
  return m;
}

export default function App() {
  const [screen, setScreen] = useState("intro"); // intro | vote | batch | stats
  const [ready, setReady] = useState(false);
  const [votedIds, setVotedIds] = useState([]); // poet ids voted by this user
  const [poet, setPoet] = useState(null);
  const [val, setVal] = useState({ r: 128, g: 128, b: 128, a: 200 });
  const [sessionBatch, setSessionBatch] = useState([]); // {poet, r,g,b,a}
  const [batchClosed, setBatchClosed] = useState(null); // {items, text, loading}
  const [stats, setStats] = useState(null);
  const [statsLoading, setStatsLoading] = useState(false);
  const [authorId, setAuthorId] = useState(null);

  /* fuentes */
  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700;900&family=Space+Mono:wght@400;700&display=swap";
    document.head.appendChild(l);
  }, []);

  /* cargar mis votos */
  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.list("mine:");
        setVotedIds((r?.keys || []).map((k) => k.replace("mine:", "")));
      } catch (e) { /* sin almacenamiento: seguimos en memoria */ }
      setReady(true);
    })();
  }, []);

  const total = votedIds.length;
  const info = batchInfo(total);

  const remaining = useMemo(
    () => POETS.filter((p) => !votedIds.includes(p.id)),
    [votedIds]
  );

  function nextPoet() {
    const pool = POETS.filter((p) => !votedIds.includes(p.id) && p.id !== poet?.id);
    const src = pool.length ? pool : remaining;
    if (!src.length) { setPoet(null); return; }
    setPoet(src[Math.floor(Math.random() * src.length)]);
    setVal({ r: 128, g: 128, b: 128, a: 200 });
  }

  function startVoting() {
    if (!poet) {
      const src = remaining.length ? remaining : POETS;
      setPoet(src[Math.floor(Math.random() * src.length)]);
      setVal({ r: 128, g: 128, b: 128, a: 200 });
    }
    setScreen("vote");
  }

  async function submitVote() {
    if (!poet) return;
    const entry = { poet, ...val };
    // marca local de a qué poetas ya he votado (para la progresión 3→5→10)
    try {
      await window.storage.set(`mine:${poet.id}`, JSON.stringify({ ...val, t: Date.now() }), false);
    } catch (e) { /* localStorage no disponible */ }
    // envía el voto a la base de datos compartida (Supabase)
    try {
      await supabase.from("votos").insert({ poeta: poet.id, r: val.r, g: val.g, b: val.b, a: val.a });
    } catch (e) { /* sin conexión: el voto local ya queda anotado */ }

    const newVoted = votedIds.includes(poet.id) ? votedIds : [...votedIds, poet.id];
    const newBatch = [...sessionBatch, entry];
    setVotedIds(newVoted);
    setSessionBatch(newBatch);

    const after = batchInfo(newVoted.length);
    if (after.into === 0 && newBatch.length >= 2) {
      // lote cerrado
      closeBatch(newBatch);
    } else {
      nextPoet();
    }
  }

  async function closeBatch(items) {
    setBatchClosed({ items, text: "", loading: true });
    setScreen("batch");
    setSessionBatch([]);
    const text = await fetchGama(items);
    setBatchClosed({ items, text, loading: false });
  }

  async function loadStats() {
    setStatsLoading(true);
    setScreen("stats");
    try {
      const { data, error } = await supabase
        .from("votos")
        .select("poeta,r,g,b,a")
        .limit(10000);
      if (error) throw error;
      const agg = {};
      for (const v of data || []) {
        const id = v.poeta; if (!POET_BY_ID[id]) continue;
        const o = (agg[id] = agg[id] || { n: 0, r: 0, g: 0, b: 0, a: 0, hs: [] });
        o.n++; o.r += v.r; o.g += v.g; o.b += v.b; o.a += v.a;
        o.hs.push(rgbToHsl(v.r, v.g, v.b).h);
      }
      const rows = Object.entries(agg).map(([id, o]) => {
        const r = o.r / o.n, g = o.g / o.n, b = o.b / o.n, a = o.a / o.n;
        // consenso ~ inverso de la dispersión de matiz
        let spread = 0;
        if (o.hs.length > 1) {
          const mh = o.hs[0];
          spread = o.hs.reduce((s, h) => s + hueDist(h, mh), 0) / o.hs.length;
        }
        const consenso = Math.max(0, Math.round(100 - (spread / 180) * 100));
        return { id, poet: POET_BY_ID[id], n: o.n, r, g, b, a, consenso };
      }).sort((x, y) => y.n - x.n);
      setStats(rows);
    } catch (e) {
      setStats([]);
    }
    setStatsLoading(false);
  }

  if (!ready) {
    return <Shell><div style={{ fontFamily: MONO, padding: 40 }}>Cargando archivo…</div></Shell>;
  }

  return (
    <Shell screen={screen} setScreen={setScreen} onStats={loadStats} total={total}>
      {screen === "intro" && <Intro onStart={startVoting} onStats={loadStats} total={total} />}
      {screen === "vote" && (
        poet ? (
          <Vote poet={poet} val={val} setVal={setVal} onSubmit={submitVote} info={info} total={total} />
        ) : (
          <Done onStats={loadStats} />
        )
      )}
      {screen === "batch" && batchClosed && (
        <BatchResult data={batchClosed} onContinue={() => { nextPoet(); setScreen("vote"); }} nextGoal={batchInfo(total).goal} />
      )}
      {screen === "stats" && <Stats rows={stats} loading={statsLoading} onBack={() => setScreen(poet ? "vote" : "intro")} />}
      {screen === "gallery" && <Gallery onBack={() => setScreen(poet ? "vote" : "intro")} onSelect={(id) => { setAuthorId(id); setScreen("autor"); }} />}
      {screen === "autor" && <AuthorScreen id={authorId} onBack={() => setScreen("gallery")} />}
    </Shell>
  );
}

/* ---------- API: comentario de gama ---------- */
async function fetchGama(items) {
  // Datos y relaciones cromáticas (también sirven de respaldo local)
  const data = items.map((it) => {
    const { h, s, l } = rgbToHsl(it.r, it.g, it.b);
    return {
      poeta: it.poet.name, periodo: it.poet.years, escuela: it.poet.note,
      R_temperatura: it.r, G_arraigo: it.g, B_abismo: it.b, A_canonicidad: it.a,
      hex: toHex(it.r, it.g, it.b), nombre_color: colorName(it.r, it.g, it.b),
      matiz: Math.round(h), saturacion: Math.round(s), luminosidad: Math.round(l),
    };
  });
  const rels = [];
  for (let i = 0; i < items.length; i++)
    for (let j = i + 1; j < items.length; j++)
      rels.push(`${items[i].poet.name} ↔ ${items[j].poet.name}: ${relation(items[i], items[j])}`);

  const prompt =
`Eres a la vez crítico literario y teórico del color. En CROMOPOÉTICA cada poeta recibe un color RGBA donde:
R = temperatura (0 frío/intelecto → 255 visceral/emoción), G = arraigo (0 etéreo/abstracto → 255 terrenal/corpóreo), B = abismo (0 claro/inmediato → 255 hermético/metafísico), A = canonicidad (opacidad: translúcido al margen → opaco en el canon). Máximo en R,G,B = blanco (toda la luz).

Estos son los colores que un lector acaba de asignar:
${JSON.stringify(data, null, 2)}

Relaciones cromáticas calculadas entre ellos:
${rels.join("\n")}

Escribe un comentario en español, lírico y culto, de entre 300 y 450 palabras, en VARIOS párrafos de prosa corrida (sin listas, sin títulos, sin markdown). Articúlalo en tres movimientos, sin rótulos visibles: primero, un breve retrato del estilo de cada autor a partir de sus coordenadas (temperatura, arraigo, abismo y lugar en el canon) y de su escuela, una o dos frases por autor, huyendo del tópico y del resumen de manual; después, un texto sobre las cercanías y las distancias entre ellos —dónde sus poéticas se hermanan (colores análogos), dónde se tensan o se oponen (complementarios), qué conversación sostendrían si coincidieran—; y al cerrar, una imagen de conjunto: qué clima, qué paisaje o qué acorde componen estos colores juntos. Usa los nombres de los poetas y, cuando encaje con naturalidad, los nombres de color. Tono ensayístico, sensible y preciso, sin caer en lo pomposo ni en la enumeración mecánica.`;

  try {
    const res = await fetch("/api/gama", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const j = await res.json();
    if (res.ok && j.text) return j.text;
    throw new Error("sin texto");
  } catch (e) {
    // respaldo: análisis local si la IA no responde
    const names = items.map((it) => `${it.poet.name} — ${colorName(it.r, it.g, it.b)}`).join("; ");
    return `Esta gama reúne a ${names}.\n\nRelaciones cromáticas entre sus poéticas:\n\n` + rels.join("\n");
  }
}

/* ---------- contenedor / cabecera ---------- */
function Shell({ children, screen, setScreen, onStats, total }) {
  const mob = useIsMobile();
  return (
    <div style={{
      minHeight: "100vh", background: PAPER, color: INK, fontFamily: BODY,
      backgroundImage: `linear-gradient(${LINE} 1px, transparent 1px), linear-gradient(90deg, ${LINE} 1px, transparent 1px)`,
      backgroundSize: "32px 32px", backgroundPosition: "-1px -1px",
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 18px" }}>
        {setScreen && (
          <header style={{ display: "flex", flexDirection: mob ? "column" : "row", alignItems: mob ? "stretch" : "center", justifyContent: "space-between", gap: mob ? 10 : 0, borderBottom: `2px solid ${INK}`, padding: "16px 0", background: PAPER }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => setScreen("intro")}>
              <svg width="26" height="26" viewBox="0 0 26 26"><rect width="26" height="26" fill={RED} /><circle cx="13" cy="13" r="9" fill={BLUE} /><path d="M4 13 A9 9 0 0 1 22 13 Z" fill={YEL} /></svg>
              <span style={{ fontFamily: DISP, fontWeight: 900, letterSpacing: ".14em", fontSize: 18, textTransform: "uppercase" }}>Cromopoética</span>
            </div>
            <nav style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ fontFamily: MONO, fontSize: 11, color: "#6b6450", marginRight: 4 }}>has completado {total} fichas</span>
              <button onClick={() => setScreen("gallery")} style={{ ...BTN_GHOST, fontSize: 11, padding: "8px 12px" }}>Autores</button>
              <button onClick={onStats} style={{ ...BTN_GHOST, fontSize: 11, padding: "8px 12px" }}>Pantonario público</button>
            </nav>
          </header>
        )}
        {children}
        <footer style={{ borderTop: `1px solid ${LINE}`, marginTop: 40, padding: "16px 0 30px", fontFamily: MONO, fontSize: 10, color: "#8a8266" }}>
          <div>CROMOPOÉTICA · síntesis aditiva de la poesía · R temperatura · G arraigo · B abismo · A canonicidad</div>
          <div style={{ marginTop: 7 }}>
            Idea original: grupo Nudo · Desarrollo: Gonzalo Escarpa · <a href="https://www.instagram.com/escarpa" target="_blank" rel="noopener noreferrer" style={{ color: "#8a8266", textDecoration: "underline" }}>@escarpa</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ---------- intro ---------- */
function Intro({ onStart, onStats, total }) {
  const mob = useIsMobile();
  return (
    <main style={{ padding: mob ? "28px 0" : "44px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1.4fr 1fr", gap: mob ? 24 : 36, alignItems: "center" }}>
        <div>
          <h1 style={{ fontFamily: DISP, fontWeight: 900, fontSize: mob ? 38 : 52, lineHeight: .98, letterSpacing: "-.01em", margin: "0 0 18px", textTransform: "uppercase" }}>
            Un pantonario<br />de la poesía
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.55, maxWidth: 520, margin: "0 0 14px" }}>
            En la pantalla, todo color nace de tres luces: <b style={{ color: RED }}>rojo</b>, <b style={{ color: GRN }}>verde</b> y <b style={{ color: BLUE }}>azul</b>. Súmalas al máximo y obtienes blanco: toda la luz. El proyecto <b>Cromopoética</b> traslada esa síntesis al análisis de la obra de los poetas.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.55, maxWidth: 520, margin: "0 0 22px" }}>
            A cada poeta le asignas tres valores de 0 a 255 y un cuarto de opacidad. El resultado es un color exacto —su ficha de catálogo—. Votarás los poetas de tres en tres: con cada terna haremos un comentario sobre sus similitudes y diferencias, tanto cromáticas como poéticas.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button onClick={onStart} style={BTN}>Empezar a votar</button>
            {total > 0 && <button onClick={onStats} style={BTN_GHOST}>Ver pantonario público</button>}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, border: `1px solid ${INK}`, background: INK }}>
          <Chip r={210} g={70} b={55} a={255} name="Brasa" note="cálido · terrenal" height={92} footer />
          <Chip r={40} g={60} b={130} a={255} name="Abismo" note="frío · hermético" height={92} footer />
          <Chip r={60} g={130} b={95} a={200} name="Savia" note="orgánico" height={92} footer />
          <Chip r={235} g={235} b={235} a={255} name="Toda la luz" note="R+G+B máx." height={92} footer />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: mob ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: 14, marginTop: 40 }}>
        {AXES.map((ax) => {
          const fullCol = ax.col;
          const zeroCol = ax.key === "a" ? "#D8CFB8" : INK;
          return (
            <div key={ax.key} style={{ border: `1px solid ${INK}`, padding: 14, background: PAPER }}>
              <div style={{ display: "flex", height: 22, marginBottom: 10, border: `1px solid ${INK}` }}>
                <div style={{ flex: 1, background: zeroCol }} />
                <div style={{ flex: 1, background: fullCol }} />
              </div>
              <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: ".05em" }}>{ax.label}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: MONO, fontSize: 11, color: ax.key === "a" ? "#6b6450" : zeroCol, marginTop: 7 }}>
                <span style={{ width: 9, height: 9, background: zeroCol, border: `1px solid ${INK}` }} />0 · {ax.lo}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: MONO, fontSize: 11, color: fullCol, marginTop: 3 }}>
                <span style={{ width: 9, height: 9, background: fullCol, border: `1px solid ${INK}` }} />255 · {ax.hi}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 40, border: `1px solid ${INK}`, background: PAPER, display: "grid", gridTemplateColumns: mob ? "1fr" : "210px 1fr" }}>
        <div style={{ borderRight: mob ? "none" : `1px solid ${INK}`, borderBottom: mob ? `1px solid ${INK}` : "none", background: PAPER2, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <svg viewBox="0 0 240 168" width="100%" style={{ maxWidth: 200, display: "block" }}>
            {["#C0392B", "#D8622E", "#D9A521", "#3E6B57", "#2C7C82", "#2E4A7D", "#7C5C8A"].map((c, i, arr) => {
              const ang = -52 + i * (104 / (arr.length - 1));
              return (
                <g key={i} transform={`rotate(${ang} 120 160)`}>
                  <rect x={107} y={38} width={26} height={122} rx={2} fill={PAPER} stroke={INK} strokeWidth="1" />
                  <rect x={107} y={38} width={26} height={62} fill={c} />
                  <rect x={111} y={150} width={18} height={3} fill={INK} opacity="0.25" />
                </g>
              );
            })}
            <circle cx="120" cy="160" r="5" fill={INK} />
          </svg>
        </div>
        <div style={{ padding: "18px 22px" }}>
          <div style={{ fontFamily: DISP, fontWeight: 900, fontSize: 18, textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 8 }}>¿Qué es un pantonario?</div>
          <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: 0 }}>
            Un pantonario es el muestrario físico de colores normalizados —ese abanico de fichas que diseñadores e imprentas despliegan para elegir y reproducir un tono exacto, sin ambigüedad—. Cada ficha lleva un código, un nombre y su fórmula. Cromopoética construye uno poético: en lugar de tintas, cataloga autores; en lugar de fórmulas de pigmento, sus coordenadas de lectura.
          </p>
        </div>
      </div>

      <InstallButtons />
    </main>
  );
}

/* ---------- botones de instalación (PWA) ---------- */
function InstallButtons() {
  const [deferred, setDeferred] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [modal, setModal] = useState(null); // 'ios' | 'android'

  useEffect(() => {
    const onBIP = (e) => { e.preventDefault(); setDeferred(e); };
    const onInstalled = () => setInstalled(true);
    window.addEventListener("beforeinstallprompt", onBIP);
    window.addEventListener("appinstalled", onInstalled);
    const standalone =
      (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
      window.navigator.standalone === true;
    if (standalone) setInstalled(true);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBIP);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed) return null;

  const onAndroid = async () => {
    if (deferred) {
      deferred.prompt();
      try { await deferred.userChoice; } catch (e) { /* el usuario cerró */ }
      setDeferred(null);
    } else {
      setModal("android");
    }
  };

  const Device = ({ c }) => (
    <svg width="14" height="18" viewBox="0 0 14 18" style={{ marginRight: 7, verticalAlign: "-3px" }}>
      <rect x="0.6" y="0.6" width="12.8" height="16.8" rx="2.2" fill="none" stroke={c} strokeWidth="1.4" />
      <rect x="5" y="13.6" width="4" height="1.6" rx="0.8" fill={c} />
    </svg>
  );

  return (
    <div style={{ marginTop: 18, border: `1px solid ${INK}`, background: PAPER, padding: "20px 22px", textAlign: "center" }}>
      <div style={{ fontFamily: DISP, fontWeight: 900, fontSize: 18, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 12 }}>Descargar app</div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={onAndroid} style={BTN}><Device c={PAPER} />Android</button>
        <button onClick={() => setModal("ios")} style={BTN_GHOST}><Device c={INK} />iPhone</button>
      </div>
      <div style={{ fontFamily: MONO, fontSize: 10, color: "#8a8266", marginTop: 12 }}>
        es la misma web, instalada como app en tu pantalla de inicio
      </div>
      {modal && <InstallModal kind={modal} onClose={() => setModal(null)} />}
    </div>
  );
}

function InstallModal({ kind, onClose }) {
  const steps = kind === "ios"
    ? ["Abre esta página en Safari.", "Pulsa el botón Compartir (el cuadrado con una flecha hacia arriba).", "Desliza y elige «Añadir a pantalla de inicio».", "Pulsa «Añadir»: el icono aparece en tu pantalla."]
    : ["Abre el menú de Chrome (los tres puntos ⋮).", "Pulsa «Instalar aplicación» o «Añadir a pantalla de inicio».", "Confirma: el icono aparece en tu pantalla de inicio."];
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(23,21,15,.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, zIndex: 50 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 380, width: "100%", background: PAPER, border: `2px solid ${INK}`, padding: "22px 22px 24px" }}>
        <div style={{ fontFamily: DISP, fontWeight: 900, fontSize: 18, textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 4 }}>
          Instalar en {kind === "ios" ? "iPhone" : "Android"}
        </div>
        <div style={{ fontFamily: MONO, fontSize: 11, color: "#6b6450", marginBottom: 14 }}>añadir a la pantalla de inicio</div>
        <ol style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, lineHeight: 1.5 }}>
          {steps.map((s, i) => <li key={i} style={{ marginBottom: 8 }}>{s}</li>)}
        </ol>
        <button onClick={onClose} style={{ ...BTN, marginTop: 18, width: "100%" }}>Entendido</button>
      </div>
    </div>
  );
}

/* ---------- votación ---------- */
function Vote({ poet, val, setVal, onSubmit, info, total }) {
  const mob = useIsMobile();
  const onCh = (k, v) => setVal((s) => ({ ...s, [k]: v }));
  const others = { r: val.r, g: val.g, b: val.b, a: val.a };
  return (
    <main style={{ padding: "30px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
        <span style={{ fontFamily: MONO, fontSize: 12, color: "#6b6450" }}>
          LOTE {info.index + 1} · {info.into + 1} / {info.goal}
        </span>
        <span style={{ fontFamily: MONO, fontSize: 12, color: "#6b6450" }}>FICHA Nº {pad(total + 1, 3)}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "320px 1fr", gap: mob ? 20 : 30, alignItems: "start" }}>
        {/* retrato + ficha viva */}
        <div style={mob ? { maxWidth: 300, width: "100%", margin: "0 auto" } : undefined}>
          <div style={{ border: `1px solid ${INK}`, background: PAPER }}>
            <Avatar seed={poet.id} size={mob ? "100%" : 318} />
            <div style={{ borderTop: `1px solid ${INK}`, padding: "12px 14px" }}>
              <div style={{ fontFamily: DISP, fontWeight: 900, fontSize: 22, lineHeight: 1, textTransform: "uppercase", letterSpacing: ".01em" }}>{poet.name}</div>
              <div style={{ fontFamily: MONO, fontSize: 12, color: "#6b6450", marginTop: 5 }}>{poet.note} · {poet.years}</div>
            </div>
          </div>
        </div>

        {/* sliders */}
        <div>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 168px", gap: 22, alignItems: "start" }}>
            <div>
              {AXES.map((ax) => (
                <Channel key={ax.key} axis={ax} value={val[ax.key]} others={others} onChange={onCh} />
              ))}
            </div>
            <div style={{ position: mob ? "static" : "sticky", top: 10, maxWidth: mob ? 220 : "none" }}>
              <Chip r={val.r} g={val.g} b={val.b} a={val.a} name={colorName(val.r, val.g, val.b)} note="vista previa" height={150} />
            </div>
          </div>
          <button onClick={onSubmit} style={{ ...BTN, marginTop: 18, width: "100%" }}>
            Fijar color y continuar
          </button>
        </div>
      </div>
    </main>
  );
}

/* ---------- resultado de lote ---------- */
function BatchResult({ data, onContinue, nextGoal }) {
  const { items, text, loading } = data;
  return (
    <main style={{ padding: "30px 0" }}>
      <h2 style={{ fontFamily: DISP, fontWeight: 900, fontSize: 30, textTransform: "uppercase", letterSpacing: ".02em", margin: "0 0 4px" }}>
        Gama de {items.length}
      </h2>
      <p style={{ fontFamily: MONO, fontSize: 12, color: "#6b6450", margin: "0 0 22px" }}>lectura cromática del conjunto</p>

      <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(items.length, 5)}, 1fr)`, gap: 1, border: `1px solid ${INK}`, background: INK, marginBottom: 26 }}>
        {items.map((it, i) => (
          <Chip key={i} r={it.r} g={it.g} b={it.b} a={it.a} name={it.poet.name} note={it.poet.note} years={it.poet.years} height={120} />
        ))}
      </div>

      <div style={{ border: `1px solid ${INK}`, background: PAPER, padding: "22px 24px", minHeight: 90 }}>
        {loading ? (
          <div style={{ fontFamily: MONO, fontSize: 13, color: "#6b6450" }}>Leyendo la gama…</div>
        ) : (
          <p style={{ fontSize: 16.5, lineHeight: 1.62, margin: 0, whiteSpace: "pre-wrap" }}>{text}</p>
        )}
      </div>

      <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: MONO, fontSize: 12, color: "#6b6450" }}>Siguiente tanda: {nextGoal} autores</span>
        <button onClick={onContinue} style={BTN}>Continuar el pantonario</button>
      </div>
    </main>
  );
}

/* ---------- estadística pública ---------- */
function Stats({ rows, loading, onBack }) {
  const [orden, setOrden] = useState("gama"); // 'gama' | 'votos'
  const sorted = useMemo(() => {
    if (!rows) return rows;
    const arr = [...rows];
    if (orden === "votos") {
      arr.sort((a, b) => b.n - a.n);
    } else {
      // por gama: matiz del arcoíris; los neutros (poco saturados) al final, por luminosidad
      const key = (x) => {
        const { h, s, l } = rgbToHsl(x.r, x.g, x.b);
        return s < 12 ? 1000 + l : h;
      };
      arr.sort((a, b) => key(a) - key(b));
    }
    return arr;
  }, [rows, orden]);

  const tab = (val, label) => (
    <button onClick={() => setOrden(val)} style={{
      fontFamily: MONO, fontSize: 11, padding: "6px 11px", cursor: "pointer",
      border: `1px solid ${INK}`,
      background: orden === val ? INK : "transparent",
      color: orden === val ? PAPER : INK,
    }}>{label}</button>
  );

  return (
    <main style={{ padding: "30px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <h2 style={{ fontFamily: DISP, fontWeight: 900, fontSize: 30, textTransform: "uppercase", letterSpacing: ".02em", margin: 0 }}>
          Pantonario público
        </h2>
        <button onClick={onBack} style={{ ...BTN_GHOST, fontSize: 11, padding: "8px 12px" }}>Volver</button>
      </div>
      <p style={{ fontFamily: MONO, fontSize: 12, color: "#6b6450", margin: "0 0 18px" }}>
        media de todas las votaciones realizadas por todos los visitantes
      </p>

      {!loading && rows && rows.length > 0 && (
        <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
          <span style={{ fontFamily: MONO, fontSize: 11, color: "#6b6450", alignSelf: "center", marginRight: 4 }}>ordenar:</span>
          {tab("gama", "por gama cromática")}
          {tab("votos", "por nº de votos")}
        </div>
      )}

      {loading && <div style={{ fontFamily: MONO, fontSize: 13, color: "#6b6450" }}>Reuniendo votos…</div>}
      {!loading && rows && rows.length === 0 && (
        <div style={{ fontFamily: MONO, fontSize: 13, color: "#6b6450" }}>Todavía no hay votos en el archivo común. Sé el primero.</div>
      )}
      {!loading && sorted && sorted.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(168px, 1fr))", gap: 12 }}>
          {sorted.map((row) => (
            <div key={row.id}>
              <Chip r={row.r} g={row.g} b={row.b} a={row.a} name={row.poet.name} note={row.poet.note} years={row.poet.years} height={120} faded={0.55 + 0.45 * (row.consenso / 100)} />
              <div style={{ fontFamily: MONO, fontSize: 9.5, color: "#6b6450", marginTop: 3, display: "flex", justifyContent: "space-between" }}>
                <span>{row.n} voto{row.n !== 1 ? "s" : ""}</span>
                <span>consenso {row.consenso}%</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

/* ---------- galería de autores ---------- */
function Gallery({ onBack, onSelect }) {
  return (
    <main style={{ padding: "30px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <h2 style={{ fontFamily: DISP, fontWeight: 900, fontSize: 30, textTransform: "uppercase", letterSpacing: ".02em", margin: 0 }}>
          Galería de autores
        </h2>
        <button onClick={onBack} style={{ ...BTN_GHOST, fontSize: 11, padding: "8px 12px" }}>Volver</button>
      </div>
      <p style={{ fontFamily: MONO, fontSize: 12, color: "#6b6450", margin: "0 0 22px" }}>
        {POETS.length} autores · si quieres conocer su biografía haz clic sobre cada uno de ellos
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 1, border: `1px solid ${INK}`, background: INK }}>
        {POETS.map((p, i) => (
          <div key={p.id} onClick={() => onSelect(p.id)} style={{ background: PAPER, cursor: "pointer" }}>
            <div style={{ position: "relative" }}>
              <Avatar seed={p.id} size="100%" />
              <span style={{ position: "absolute", top: 5, left: 6, fontFamily: MONO, fontSize: 10, color: INK, background: "rgba(239,233,217,.8)", padding: "0 3px" }}>{pad(i + 1, 2)}</span>
            </div>
            <div style={{ borderTop: `1px solid ${INK}`, padding: "7px 8px" }}>
              <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 12, lineHeight: 1.05, letterSpacing: ".01em", textDecoration: "underline", textUnderlineOffset: 2 }}>{p.name}</div>
              <div style={{ fontFamily: MONO, fontSize: 9, color: "#6b6450", marginTop: 2 }}>{p.note}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

/* ---------- ficha de autor ---------- */
function AuthorScreen({ id, onBack }) {
  const mob = useIsMobile();
  const poet = POET_BY_ID[id];
  const ficha = BIOS[id];
  const [media, setMedia] = useState(undefined); // undefined=cargando · null=sin votos · {r,g,b,a,n}=ok

  useEffect(() => {
    let activo = true;
    setMedia(undefined);
    (async () => {
      try {
        const { data, error } = await supabase
          .from("votos")
          .select("r,g,b,a")
          .eq("poeta", id)
          .limit(5000);
        if (error) throw error;
        if (!activo) return;
        if (!data || data.length === 0) { setMedia(null); return; }
        const n = data.length;
        const s = data.reduce(
          (a, v) => ({ r: a.r + v.r, g: a.g + v.g, b: a.b + v.b, a: a.a + v.a }),
          { r: 0, g: 0, b: 0, a: 0 }
        );
        setMedia({ r: Math.round(s.r / n), g: Math.round(s.g / n), b: Math.round(s.b / n), a: Math.round(s.a / n), n });
      } catch (e) {
        if (activo) setMedia(null);
      }
    })();
    return () => { activo = false; };
  }, [id]);

  return (
    <main style={{ padding: "30px 0" }}>
      <div style={{ marginBottom: 18 }}>
        <button onClick={onBack} style={{ ...BTN_GHOST, fontSize: 11, padding: "8px 12px" }}>← Volver a autores</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "200px 1fr", gap: mob ? 18 : 24, alignItems: "start" }}>
        <div style={mob ? { maxWidth: 240 } : undefined}>
          <div style={{ border: `1px solid ${INK}` }}>
            <Avatar seed={id} size="100%" />
          </div>

          <div style={{ marginTop: 12, border: `1px solid ${INK}`, background: PAPER }}>
            <div style={{ position: "relative", height: 72 }}>
              <div style={{ position: "absolute", inset: 0, ...checker }} />
              {media && media.r !== undefined && (
                <div style={{ position: "absolute", inset: 0, background: toHex(media.r, media.g, media.b), opacity: media.a / 255 }} />
              )}
            </div>
            <div style={{ borderTop: `1px solid ${INK}`, padding: "8px 9px" }}>
              <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 11.5, letterSpacing: ".05em", textTransform: "uppercase" }}>Color medio</div>
              {media === undefined && <div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6450", marginTop: 4 }}>Calculando…</div>}
              {media === null && <div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6450", marginTop: 4 }}>Aún sin votaciones</div>}
              {media && media.r !== undefined && (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontFamily: MONO, fontSize: 10 }}>
                    <span>{catCode(media.r, media.g, media.b)}</span>
                    <span>{toHex(media.r, media.g, media.b)}</span>
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 10, color: "#6b6450", marginTop: 2 }}>{colorName(media.r, media.g, media.b)}</div>
                  <div style={{ fontFamily: MONO, fontSize: 9, color: "#8a8266", marginTop: 6, lineHeight: 1.35 }}>
                    media de {media.n} votación{media.n !== 1 ? "es" : ""} recibida{media.n !== 1 ? "s" : ""}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ fontFamily: DISP, fontWeight: 900, fontSize: 34, lineHeight: 1, textTransform: "uppercase", letterSpacing: ".01em", margin: "0 0 6px" }}>
            {poet ? poet.name : "Autor"}
          </h2>
          <div style={{ fontFamily: MONO, fontSize: 12, color: "#6b6450", marginBottom: 18 }}>
            {poet ? `${poet.note} · ${poet.years}` : ""}
          </div>

          {ficha ? (
            <>
              <p style={{ fontSize: 16.5, lineHeight: 1.62, margin: "0 0 20px" }}>{ficha.bio}</p>
              {ficha.obras && ficha.obras.length > 0 && (
                <div style={{ border: `1px solid ${INK}`, background: PAPER, padding: "14px 16px" }}>
                  <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 8 }}>Obras clave</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {ficha.obras.map((o, i) => (
                      <span key={i} style={{ fontFamily: MONO, fontSize: 12, border: `1px solid ${INK}`, padding: "4px 8px", background: PAPER2 }}>{o}</span>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b6450", margin: 0 }}>
              Biografía en preparación. Pronto añadiremos la ficha de este autor.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

/* ---------- archivo completado ---------- */
function Done({ onStats }) {
  return (
    <main style={{ padding: "60px 0", textAlign: "center" }}>
      <h2 style={{ fontFamily: DISP, fontWeight: 900, fontSize: 34, textTransform: "uppercase" }}>Has cromado a todos los poetas</h2>
      <p style={{ fontSize: 16, color: "#6b6450", margin: "10px 0 24px" }}>Tu pantonario está completo. Mira cómo dialoga con el del resto.</p>
      <button onClick={onStats} style={BTN}>Ver pantonario público</button>
    </main>
  );
}
