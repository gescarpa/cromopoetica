// ===========================================================================
// BIOGRAFÍAS DE AUTORES — Cromopoética (tanda 1: 15 fichas)
// Textos originales, con datos verificables. Indexado por el id (slug) del poeta,
// el mismo que genera la app: slug(nombre).
// Crear este archivo como src/biografias.js
// Cada ficha: { bio: "texto 4-6 frases", obras: ["...", "..."] }
// ===========================================================================

export const BIOS = {
  "safo-de-lesbos": {
    bio: "Safo vivió en la isla de Lesbos entre los siglos VII y VI a.C. y es la voz lírica femenina más célebre de la Antigüedad griega. Compuso poesía monódica destinada al canto, acompañada de la lira, en torno al deseo, la belleza y la amistad entre mujeres. De su obra, reunida en la Antigüedad en nueve libros, solo sobreviven fragmentos, muchos recuperados de papiros. Su prestigio fue tal que la Antigüedad la llamó «la décima musa», y su nombre dio origen a términos como «safismo». Su influencia recorre toda la tradición amorosa occidental.",
    obras: ["Oda a Afrodita", "Fragmento 31 («Me parece igual a los dioses»)"],
  },
  "li-bai": {
    bio: "Li Bai (701-762) es, junto a Du Fu, el poeta más admirado de la dinastía Tang, edad de oro de la lírica china. Su poesía celebra la naturaleza, el vino, la amistad y la libertad del individuo frente a las convenciones, con un tono espontáneo y visionario. Vinculado al taoísmo, cultivó la figura del poeta errante y desligado del poder. La leyenda, probablemente apócrifa, cuenta que murió ahogado al intentar abrazar el reflejo de la luna en el agua. Se conservan cerca de mil poemas suyos.",
    obras: ["Pensamientos en una noche tranquila", "Bebiendo solo a la luz de la luna"],
  },
  "du-fu": {
    bio: "Du Fu (712-770) está considerado, con Li Bai, la cumbre de la poesía Tang, y a menudo se le llama «el poeta-historiador» por el modo en que su obra refleja las convulsiones de su tiempo. Vivió la devastadora rebelión de An Lushan, y su poesía une la maestría formal con una profunda compasión por el sufrimiento del pueblo. De tono más grave y moral que Li Bai, perfeccionó las formas reguladas del verso chino. No alcanzó reconocimiento en vida, pero la tradición posterior lo elevó a modelo supremo. Se conservan más de mil cuatrocientos poemas.",
    obras: ["Canción de los carros de guerra", "Primavera, panorama"],
  },
  "rumi": {
    bio: "Yalal ad-Din Rumi (1207-1273) fue un poeta y místico persa, figura central del sufismo. Tras su encuentro transformador con el derviche Shams de Tabriz, volcó su obra en una poesía de amor divino, éxtasis y unión espiritual. Escribió en persa una cantidad ingente de versos que han hecho de él uno de los poetas más leídos del mundo. La orden mevleví de los «derviches giróvagos», con su danza ritual, surgió en torno a su enseñanza. Su obra sigue siendo un puente entre la espiritualidad islámica y la sensibilidad universal.",
    obras: ["Masnavi", "Diván de Shams de Tabriz"],
  },
  "omar-jayam": {
    bio: "Omar Jayam (1048-1131) fue un sabio persa célebre a la vez como matemático, astrónomo y poeta. En su faceta científica realizó aportaciones notables al álgebra y a la reforma del calendario. Como poeta se le atribuye una colección de cuartetas, los «rubaiyat», de tono escéptico y epicúreo, que meditan sobre la fugacidad de la vida y el goce del instante. Su fama poética en Occidente se debe en gran parte a la versión inglesa de Edward FitzGerald en el siglo XIX. La autoría exacta de muchas cuartetas sigue siendo objeto de debate.",
    obras: ["Rubaiyat (Cuartetas)"],
  },
  "dante-alighieri": {
    bio: "Dante Alighieri (1265-1321) es el gran poeta del Medievo italiano y uno de los pilares de la literatura europea. Vinculado al «dolce stil novo», elevó la lengua toscana a vehículo literario, contribuyendo de forma decisiva al nacimiento del italiano. Su obra mayor, la «Comedia» —llamada después «Divina»—, narra un viaje por el Infierno, el Purgatorio y el Paraíso, síntesis del saber medieval y de su propia experiencia, marcada por el exilio de Florencia. La amada Beatriz, ya presente en su «Vida nueva», se convierte allí en guía espiritual. Su influencia es incalculable.",
    obras: ["Divina Comedia", "Vida nueva"],
  },
  "francesco-petrarca": {
    bio: "Francesco Petrarca (1304-1374) fue poeta y humanista italiano, considerado uno de los padres del Humanismo renacentista por su pasión por recuperar los clásicos latinos. Su «Cancionero», escrito en italiano y dedicado en gran parte a la amada Laura, fijó un modelo de poesía amorosa —el petrarquismo— que dominó la lírica europea durante siglos. Perfeccionó el soneto hasta convertirlo en forma de referencia. Coronado poeta laureado en Roma en 1341, encarnó como pocos la figura del intelectual moderno. Su huella en Garcilaso y en todo el Siglo de Oro español es profunda.",
    obras: ["Cancionero (Canzoniere)", "Triunfos"],
  },
  "matsuo-basho": {
    bio: "Matsuo Bashō (1644-1694) es el maestro indiscutible del haiku japonés, forma breve de diecisiete sílabas que él elevó a alta poesía. Transformó el «hokku» de pasatiempo ingenioso en una vía de contemplación, ligada a la sensibilidad zen y a la atención al instante y a la naturaleza. Llevó una vida austera y viajera, y sus desplazamientos a pie por Japón quedaron recogidos en diarios que combinan prosa y verso. Su poesía busca capturar lo efímero con una sencillez luminosa. Es una de las grandes figuras de la literatura mundial.",
    obras: ["Sendas de Oku (Oku no hosomichi)", "La calabaza"],
  },
  "san-juan-de-la-cruz": {
    bio: "San Juan de la Cruz (1542-1591) fue carmelita, místico y uno de los mayores poetas en lengua española. Colaborador de Santa Teresa en la reforma del Carmelo, sufrió prisión por ello, experiencia de la que surgió parte de su poesía. Su obra, brevísima pero de altura insuperable, expresa la unión del alma con Dios mediante un lenguaje simbólico de intensa carga amorosa, heredero del «Cantar de los cantares». Escribió en liras de gran perfección musical. Fue proclamado Doctor de la Iglesia y es referencia tanto espiritual como literaria.",
    obras: ["Cántico espiritual", "Noche oscura", "Llama de amor viva"],
  },
  "sor-juana-ines-de-la-cruz": {
    bio: "Sor Juana Inés de la Cruz (1648-1695) fue monja jerónima y la mayor figura del Barroco en la Nueva España. Autodidacta de inteligencia prodigiosa, reunió una notable biblioteca y cultivó la poesía, el teatro y la prosa. Su obra abarca desde sonetos amorosos y poesía filosófica hasta la defensa del derecho de las mujeres al conocimiento en su «Respuesta a Sor Filotea». Presionada por las autoridades eclesiásticas, en sus últimos años renunció a las letras. Es hoy un símbolo del pensamiento crítico y de la voz femenina en la literatura hispánica.",
    obras: ["Primero sueño", "Respuesta a Sor Filotea", "Hombres necios que acusáis"],
  },
  "garcilaso-de-la-vega": {
    bio: "Garcilaso de la Vega (1501-1536) fue soldado, cortesano y poeta, encarnación del ideal renacentista de armas y letras. Junto a Juan Boscán introdujo en la lírica española el endecasílabo y las formas italianas, renovando por completo la poesía en castellano. Su obra, breve y de serena perfección clásica, está marcada por el amor, la melancolía y la naturaleza idealizada de sus églogas. Murió joven, a consecuencia de las heridas sufridas en una acción militar en el sur de Francia. Su influencia sobre todo el Siglo de Oro fue decisiva.",
    obras: ["Églogas", "Sonetos"],
  },
  "luis-de-gongora": {
    bio: "Luis de Góngora (1561-1627) fue el gran poeta del culteranismo barroco español, corriente que de él tomó el nombre de «gongorismo». Su poesía busca la belleza a través de una sintaxis latinizante, un léxico culto y una densa red de metáforas e imágenes, que exigen del lector un esfuerzo de desciframiento. Cultivó tanto el poema mayor y complejo como la lírica popular de romances y letrillas, donde brilla su ingenio. Su rivalidad con Quevedo es legendaria. Rescatado por la Generación del 27 en 1927, hoy se le reconoce como uno de los cumbres de la lengua.",
    obras: ["Soledades", "Fábula de Polifemo y Galatea"],
  },
  "francisco-de-quevedo": {
    bio: "Francisco de Quevedo (1580-1645) fue una de las mentes más brillantes y mordaces del Barroco español, maestro del conceptismo. Su poesía abarca registros opuestos: desde el soneto amoroso y metafísico de hondura existencial hasta la sátira feroz y el chiste cruel. Cultivó también la prosa, con obras como la novela picaresca «El Buscón» y los visionarios «Sueños». Su vida estuvo marcada por las intrigas cortesanas, que lo llevaron a prisión. Su dominio del idioma, tenso y deslumbrante, lo sitúa entre los mayores escritores en español.",
    obras: ["El Buscón", "Los Sueños", "Amor constante más allá de la muerte"],
  },
  "william-shakespeare": {
    bio: "William Shakespeare (1564-1616) es el dramaturgo y poeta más influyente de la lengua inglesa y una figura central de la literatura universal. Aunque célebre sobre todo por su teatro, su obra poética incluye un conjunto de 154 sonetos que renovaron la tradición amorosa, explorando el tiempo, la belleza, el deseo y la muerte con extraordinaria profundidad. Trabajó como actor y autor en el Londres isabelino, ligado a la compañía que actuaba en el teatro The Globe. Su lenguaje amplió como ningún otro las posibilidades expresivas del inglés. Su influencia es inabarcable.",
    obras: ["Sonetos", "Hamlet", "El rey Lear"],
  },
  "william-blake": {
    bio: "William Blake (1757-1827) fue poeta, grabador y pintor inglés, figura singular del primer Romanticismo y profeta visionario al margen de las corrientes de su época. Concibió su obra como una unidad de texto e imagen: grababa e iluminaba a mano sus propios libros. Su poesía opone la inocencia y la experiencia, critica la moral y la razón ilustrada, y despliega una mitología personal de gran fuerza imaginativa. Incomprendido en vida y considerado por algunos un excéntrico, fue reivindicado mucho después como genio precursor. Su influencia llega hasta la poesía y el arte contemporáneos.",
    obras: ["Cantos de inocencia y de experiencia", "El matrimonio del cielo y el infierno"],
  },
};
