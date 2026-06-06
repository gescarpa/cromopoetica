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
  "friedrich-holderlin": {
    bio: "Friedrich Hölderlin (1770-1843) fue un poeta alemán cuya obra une el idealismo de su época con una veneración casi religiosa por la Grecia antigua. Compañero de estudios de Hegel y Schelling, concibió una poesía de tono elevado y profético, en la que lo sagrado, la naturaleza y la patria perdida se entrelazan. Hacia 1806 sufrió una crisis mental que lo apartó del mundo, y pasó la segunda mitad de su vida recluido en una torre a orillas del Néckar. Largamente incomprendido, fue redescubierto en el siglo XX como uno de los grandes líricos europeos. Su influencia sobre la filosofía y la poesía posteriores es enorme.",
    obras: ["Himnos", "Hiperión", "El archipiélago"],
  },
  "john-keats": {
    bio: "John Keats (1795-1821) es una de las voces centrales del segundo Romanticismo inglés. De origen humilde y formación inicial como aprendiz de cirujano, abandonó la medicina por la poesía. En apenas unos años produjo una obra de extraordinaria riqueza sensorial, célebre por sus odas, donde la belleza, la fugacidad y el arte se funden en imágenes memorables. Murió de tuberculosis en Roma con solo veinticinco años, convencido de que su nombre quedaría escrito «en el agua». La posteridad lo consagró como uno de los mayores poetas de su lengua.",
    obras: ["Oda a un ruiseñor", "Oda sobre una urna griega", "Endymion"],
  },
  "giacomo-leopardi": {
    bio: "Giacomo Leopardi (1798-1837) fue poeta, filósofo y filólogo italiano, la gran voz del pesimismo lírico del siglo XIX. Niño prodigio formado en la vasta biblioteca paterna, su salud frágil marcó toda su vida. Su poesía, reunida en los «Cantos», alcanza una perfección formal serena mientras medita sobre el dolor, la ilusión perdida y la indiferencia de la naturaleza. En prosa, su «Zibaldone» es un inmenso cuaderno de pensamiento. Pese a la amargura de su visión, su lenguaje posee una belleza luminosa que lo sitúa entre los grandes de Europa.",
    obras: ["Cantos", "El infinito", "Zibaldone"],
  },
  "walt-whitman": {
    bio: "Walt Whitman (1819-1892) es el poeta fundacional de la lírica moderna estadounidense. Periodista y autodidacta, revolucionó la poesía con el verso libre, un aliento largo y expansivo que canta la democracia, el cuerpo, la naturaleza y la fraternidad humana. Reescribió y amplió durante toda su vida un único gran libro, al que fue añadiendo poemas. Su voz, a la vez íntima y colectiva, rompió con la métrica tradicional y abrió el camino a casi toda la poesía contemporánea. Su influencia, de Neruda a Ginsberg, es universal.",
    obras: ["Hojas de hierba", "Canto a mí mismo"],
  },
  "emily-dickinson": {
    bio: "Emily Dickinson (1830-1886) es una de las mayores poetas en lengua inglesa, hoy considerada esencial. Vivió recluida en su casa familiar de Amherst, en una existencia exterior mínima que contrasta con la intensidad de su mundo interior. Escribió cerca de mil ochocientos poemas breves, de sintaxis condensada, guiones característicos y rima oblicua, sobre la muerte, la inmortalidad, la naturaleza y el yo. Apenas publicó en vida; el grueso de su obra se descubrió tras su muerte, guardado en cuadernillos. Su originalidad la convirtió, ya en el siglo XX, en una voz decisiva.",
    obras: ["Poemas (edición póstuma)", "Porque no pude detenerme ante la Muerte"],
  },
  "charles-baudelaire": {
    bio: "Charles Baudelaire (1821-1867) es el gran iniciador de la poesía moderna y figura clave del simbolismo. Su libro «Las flores del mal» causó un escándalo en su tiempo y fue objeto de un proceso judicial por inmoralidad. En él explora la belleza de lo prohibido, el hastío («spleen»), la ciudad moderna y la correspondencia secreta entre los sentidos. Fue también un agudo crítico de arte y traductor de Edgar Allan Poe, y desarrolló el poema en prosa. Su mirada inauguró una sensibilidad que marcaría a Rimbaud, Mallarmé y toda la modernidad.",
    obras: ["Las flores del mal", "El spleen de París"],
  },
  "arthur-rimbaud": {
    bio: "Arthur Rimbaud (1854-1891) fue un poeta francés cuya obra, escrita casi toda antes de los veinte años, revolucionó la poesía. Adolescente genial y rebelde, propugnó un «desarreglo de todos los sentidos» para convertir al poeta en vidente. Su tumultuosa relación con Verlaine y su lenguaje incandescente marcaron una ruptura radical. Hacia los veinte años abandonó por completo la literatura y se dedicó a viajar y comerciar en África. Su silencio posterior, tan enigmático como su obra, contribuyó a su leyenda de poeta-meteoro.",
    obras: ["Una temporada en el infierno", "Iluminaciones", "El barco ebrio"],
  },
  "stephane-mallarme": {
    bio: "Stéphane Mallarmé (1842-1898) fue el poeta más radical del simbolismo francés y un maestro del hermetismo. Profesor de inglés de profesión, persiguió a lo largo de su vida la idea de un Libro absoluto y una poesía depurada que sugiriese en lugar de nombrar. Su sintaxis quebrada, sus elipsis y su música cifrada hacen de su obra un desafío para el lector. Sus reuniones de los martes congregaron a la vanguardia literaria de París. Su poema «Una tirada de dados», con su revolucionaria disposición tipográfica, anticipó la poesía visual del siglo XX.",
    obras: ["La siesta de un fauno", "Una tirada de dados jamás abolirá el azar"],
  },
  "rosalia-de-castro": {
    bio: "Rosalía de Castro (1837-1885) es la gran voz de la lírica gallega y una figura central de la poesía española del XIX. Con «Cantares gallegos» y «Follas novas» fue decisiva en el Rexurdimento, el renacimiento cultural de la lengua gallega. En castellano escribió «En las orillas del Sar», de tono intimista y melancólico, considerado precursor de la poesía moderna. Su obra une la voz del pueblo, la denuncia social y una honda meditación sobre la soledad y la patria. Reivindicada como símbolo de Galicia, su figura crece con el tiempo.",
    obras: ["Cantares gallegos", "Follas novas", "En las orillas del Sar"],
  },
  "ruben-dario": {
    bio: "Rubén Darío (1867-1916), nicaragüense, fue el líder indiscutible del modernismo hispánico y el renovador más influyente de la poesía en español desde el Siglo de Oro. Su libro «Azul...» marcó el arranque del movimiento, y «Prosas profanas» consolidó una estética de musicalidad, exotismo y refinamiento formal. En «Cantos de vida y esperanza» su voz se volvió más reflexiva y americanista. Periodista y diplomático, viajó por América y Europa difundiendo la nueva poesía. Su huella sobre toda una generación, a ambos lados del Atlántico, fue inmensa.",
    obras: ["Azul...", "Prosas profanas", "Cantos de vida y esperanza"],
  },
  "antonio-machado": {
    bio: "Antonio Machado (1875-1939) es uno de los poetas españoles más queridos del siglo XX, ligado al espíritu del 98. Su primer libro, «Soledades», es de raíz intimista y simbolista; con «Campos de Castilla» su mirada se abre al paisaje, la historia y las gentes de España. Su poesía, de aparente sencillez y honda meditación sobre el tiempo, la memoria y los sueños, incluye también el pensamiento de sus heterónimos Abel Martín y Juan de Mairena. Fiel a la República, murió en el exilio, en Colliure, pocos días después de cruzar la frontera.",
    obras: ["Soledades", "Campos de Castilla", "Juan de Mairena"],
  },
  "juan-ramon-jimenez": {
    bio: "Juan Ramón Jiménez (1881-1958), onubense, fue una de las figuras tutelares de la poesía española del siglo XX y maestro reconocido por la Generación del 27. Persiguió incansablemente el ideal de una «poesía pura», esencial y desnuda, depurando su estilo a lo largo de etapas sucesivas. Es célebre su libro en prosa poética «Platero y yo». Exiliado tras la Guerra Civil, residió en Puerto Rico, donde recibió el Premio Nobel de Literatura en 1956, pocos días antes de la muerte de su esposa Zenobia. Su búsqueda de la perfección marcó a generaciones.",
    obras: ["Platero y yo", "Diario de un poeta reciencasado", "Eternidades"],
  },
  "rainer-maria-rilke": {
    bio: "Rainer Maria Rilke (1875-1926) es uno de los mayores poetas en lengua alemana y una voz central de la modernidad europea. Nacido en Praga, llevó una vida errante por Europa, marcada por su trabajo como secretario del escultor Rodin, que le enseñó a «mirar» las cosas. Su obra evoluciona hacia una poesía de honda dimensión espiritual y existencial, que culmina en las «Elegías de Duino» y los «Sonetos a Orfeo». Sus «Cartas a un joven poeta» se han convertido en una guía íntima para muchos lectores. Murió de leucemia en Suiza.",
    obras: ["Elegías de Duino", "Sonetos a Orfeo", "Cartas a un joven poeta"],
  },
  "constantino-cavafis": {
    bio: "Constantino Cavafis (1863-1933) fue un poeta griego nacido y muerto en Alejandría, ciudad que es alma de su obra. Funcionario discreto, publicó muy poco en vida, difundiendo sus poemas en hojas sueltas entre amigos. Su poesía, de tono irónico y reflexivo, combina dos grandes vetas: la evocación de la historia y el mundo helenístico, y una lírica del deseo homoerótico de notable franqueza para su época. Su lenguaje sobrio y preciso lo aleja de toda grandilocuencia. Reconocido plenamente tras su muerte, hoy es uno de los grandes de la poesía moderna.",
    obras: ["Esperando a los bárbaros", "Ítaca", "La ciudad"],
  },
  "fernando-pessoa": {
    bio: "Fernando Pessoa (1888-1935) es la figura mayor de la poesía portuguesa moderna y uno de los autores más singulares del siglo XX. Su rasgo más célebre es la heteronimia: creó decenas de identidades poéticas con biografía y estilo propios, entre ellas Alberto Caeiro, Ricardo Reis y Álvaro de Campos, además de su obra firmada como Pessoa. Educado en Sudáfrica, escribió también en inglés. Publicó poco en vida y dejó un legado inmenso de papeles inéditos, entre ellos el «Libro del desasosiego». Su obra explora la identidad, la conciencia y el fingimiento.",
    obras: ["Libro del desasosiego", "Mensaje", "Poemas de Alberto Caeiro"],
  },
  "anna-ajmatova": {
    bio: "Anna Ajmátova (1889-1966) es una de las grandes voces de la poesía rusa del siglo XX y figura del acmeísmo, que defendía la claridad y la precisión frente al simbolismo. Su lírica temprana, intimista y depurada, le dio pronta fama. Bajo el estalinismo sufrió la persecución: su obra fue censurada, su hijo y su esposo fueron represaliados. De esa experiencia surgió «Réquiem», estremecedor testimonio del terror, que durante años solo pudo conservar en la memoria. Encarnó la dignidad de la poesía frente a la opresión.",
    obras: ["Réquiem", "Poema sin héroe", "La tarde"],
  },
  "marina-tsvetaieva": {
    bio: "Marina Tsvetáieva (1892-1941) es una de las voces más intensas de la poesía rusa del siglo XX. Su lírica, de gran energía rítmica y sintaxis quebrada, se nutre de la pasión, el desarraigo y la entrega absoluta a la palabra. La Revolución y la guerra civil rusa la condujeron a un largo y penoso exilio por Europa, marcado por la pobreza. Su regreso a la Unión Soviética terminó en tragedia: la represión cayó sobre su familia y ella se quitó la vida en 1941. Reconocida plenamente después, hoy es figura imprescindible de la poesía europea.",
    obras: ["Poema del fin", "Las millas", "Después de Rusia"],
  },
  "t-s-eliot": {
    bio: "T. S. Eliot (1888-1965) fue un poeta, dramaturgo y crítico nacido en Estados Unidos y nacionalizado británico, figura central del modernismo anglosajón. Su poema «La tierra baldía» renovó radicalmente la poesía con su técnica de collage, su erudición y su visión desolada del mundo de posguerra. Como crítico ejerció enorme influencia, y como editor impulsó a muchos autores. Su obra evolucionó hacia una dimensión espiritual y religiosa que culmina en los «Cuatro cuartetos». Recibió el Premio Nobel de Literatura en 1948.",
    obras: ["La tierra baldía", "Cuatro cuartetos", "La canción de amor de J. Alfred Prufrock"],
  },
  "cesar-vallejo": {
    bio: "César Vallejo (1892-1938) es uno de los poetas más innovadores y conmovedores de la lengua española. Nacido en los Andes peruanos, su obra parte del modernismo para romperlo desde dentro: su libro «Trilce» lleva la experimentación del lenguaje a un extremo de audacia rara vez igualado. La pobreza, la cárcel y el exilio en Europa marcaron su vida. En sus «Poemas humanos» y en los versos inspirados por la Guerra Civil española une la vanguardia con una hondísima solidaridad con el sufrimiento humano. Murió en París, como había presentido en sus versos.",
    obras: ["Trilce", "Los heraldos negros", "Poemas humanos"],
  },
  "vicente-huidobro": {
    bio: "Vicente Huidobro (1893-1948), chileno, fue uno de los grandes impulsores de la vanguardia en lengua española y creador del «creacionismo». Según su célebre lema, el poeta no debe imitar la naturaleza, sino crear realidades nuevas: «hacer un poema como la naturaleza hace un árbol». Vivió entre Chile, París y Madrid, en contacto con la vanguardia internacional. Su obra mayor, «Altazor», es un vertiginoso poema en el que el lenguaje se descompone hasta el puro sonido. Su figura, polémica y brillante, fue decisiva para la modernidad poética.",
    obras: ["Altazor", "Temblor de cielo"],
  },
  "federico-garcia-lorca": {
    bio: "Federico García Lorca (1898-1936) es el poeta y dramaturgo español más conocido del siglo XX y figura central de la Generación del 27. Su obra funde la tradición popular andaluza con la vanguardia: del «Romancero gitano», de hondo simbolismo, al desgarro surrealista de «Poeta en Nueva York». Brillante también en el teatro, con tragedias como «Bodas de sangre», recorrió España acercando la cultura al pueblo con el grupo La Barraca. Fue fusilado al inicio de la Guerra Civil, y su muerte lo convirtió en símbolo. Su influencia es universal.",
    obras: ["Romancero gitano", "Poeta en Nueva York", "Bodas de sangre"],
  },
  "pablo-neruda": {
    bio: "Pablo Neruda (1904-1973), chileno, es uno de los poetas más leídos e influyentes del siglo XX. Su obra es vastísima y de registros muy diversos: del intimismo amoroso de «Veinte poemas de amor» a la épica americana del «Canto general», pasando por las celebraciones de lo cotidiano en sus «Odas elementales». Diplomático, senador y militante comunista, vivió persecución y exilio. Recibió el Premio Nobel de Literatura en 1971. Su voz, torrencial y sensorial, transformó la manera de escribir poesía en español.",
    obras: ["Veinte poemas de amor y una canción desesperada", "Canto general", "Odas elementales"],
  },
  "gabriela-mistral": {
    bio: "Gabriela Mistral (1889-1957), seudónimo de Lucila Godoy, fue la primera persona latinoamericana en recibir el Premio Nobel de Literatura, en 1945. Maestra rural de origen humilde, hizo de la educación y la infancia ejes de su vida y su obra. Su poesía, de aparente sencillez y honda emoción, aborda el amor, la maternidad simbólica, el dolor y lo sagrado. Ejerció además como diplomática y figura cultural en varios países. Su reconocimiento abrió camino a la proyección internacional de la poesía latinoamericana escrita por mujeres.",
    obras: ["Desolación", "Ternura", "Tala"],
  },
  "jorge-luis-borges": {
    bio: "Jorge Luis Borges (1899-1986), argentino, es uno de los escritores más influyentes del siglo XX, célebre sobre todo por sus relatos, pero también poeta esencial. Su poesía, de aire clásico y tono reflexivo, medita sobre el tiempo, la identidad, los espejos, el laberinto y el infinito, los mismos temas que recorren su narrativa. La ceguera progresiva acentuó en él la dimensión memoriosa y musical del verso. Su erudición y su ironía dieron forma a una obra que difumina las fronteras entre filosofía y literatura. Su huella es planetaria.",
    obras: ["Fervor de Buenos Aires", "El hacedor", "El otro, el mismo"],
  },
  "jose-lezama-lima": {
    bio: "José Lezama Lima (1910-1976) fue el gran poeta del neobarroco cubano y una figura central de la cultura de la isla. Desde la revista «Orígenes», que dirigió, articuló todo un proyecto estético y espiritual. Su obra, de extraordinaria densidad, despliega un lenguaje suntuoso, lleno de imágenes y referencias cultas, regido por su idea de un «sistema poético del mundo». Es también autor de la célebre novela «Paradiso». Su escritura, exigente y deslumbrante, ejerció una enorme influencia en la poesía latinoamericana posterior.",
    obras: ["Muerte de Narciso", "Paradiso", "La fijeza"],
  },
  "octavio-paz": {
    bio: "Octavio Paz (1914-1998), mexicano, fue poeta y ensayista, una de las grandes figuras intelectuales del siglo XX en lengua española. Su poesía integra la reflexión filosófica, la exploración del tiempo y el instante, la tradición oriental y la simbología amorosa, como en su extenso poema «Piedra de sol». Como ensayista, «El laberinto de la soledad» es una indagación clásica sobre la identidad mexicana. Diplomático y fundador de revistas influyentes, recibió el Premio Nobel de Literatura en 1990. Su obra es un puente entre culturas.",
    obras: ["Piedra de sol", "Libertad bajo palabra", "El laberinto de la soledad"],
  },
  "paul-celan": {
    bio: "Paul Celan (1920-1970) es uno de los mayores poetas europeos de la posguerra. De origen judío rumano y lengua alemana, perdió a sus padres en el Holocausto, experiencia que marca toda su obra. Escribió en la lengua de los verdugos una poesía cada vez más hermética y despojada, que busca decir lo indecible del exterminio. Su célebre «Fuga de muerte» es uno de los poemas más estremecedores sobre el tema. Atormentado, se quitó la vida en París. Su obra es una de las reflexiones más hondas sobre el lenguaje tras la catástrofe.",
    obras: ["Fuga de muerte", "Amapola y memoria", "Reja del lenguaje"],
  },
  "wis-awa-szymborska": {
    bio: "Wisława Szymborska (1923-2012), polaca, fue una poeta de aparente sencillez y profunda agudeza, premiada con el Nobel de Literatura en 1996. Su obra, no muy extensa pero muy querida, observa lo cotidiano y lo histórico con ironía, humor y una curiosidad filosófica que desarma. Huye de toda solemnidad para plantear, desde lo concreto, las grandes preguntas sobre el azar, la existencia y el lugar del ser humano en el mundo. Su voz cercana y luminosa la convirtió en una de las poetas más leídas de su tiempo.",
    obras: ["Sal", "Gente en el puente", "Fin y principio"],
  },
  "alejandra-pizarnik": {
    bio: "Alejandra Pizarnik (1936-1972), argentina, es una de las voces más intensas y singulares de la poesía latinoamericana. Su obra, breve y de extrema concentración, trabaja el silencio, la noche, la infancia y la muerte con un lenguaje depurado hasta el hueso. Vivió un tiempo en París, en contacto con el surrealismo y con grandes escritores. Su poesía bordea siempre el abismo: la palabra como tentativa y a la vez imposibilidad de nombrar el dolor. Murió muy joven. Su figura y su obra ejercen una fascinación que no ha dejado de crecer.",
    obras: ["Árbol de Diana", "Extracción de la piedra de locura", "El infierno musical"],
  },
  "sylvia-plath": {
    bio: "Sylvia Plath (1932-1963) es una de las figuras centrales de la llamada «poesía confesional» estadounidense. Su obra integra la experiencia íntima, el conflicto psíquico y el malestar con una intensidad extrema y un dominio formal notable. Su único libro de poemas publicado en vida fue «El coloso»; la fuerza arrolladora de «Ariel», aparecido tras su muerte, consolidó su mito. Escribió también la novela autobiográfica «La campana de cristal». Su suicidio a los treinta años marcó la lectura de su obra, que conviene no reducir a su biografía.",
    obras: ["Ariel", "El coloso", "La campana de cristal"],
  },
  "allen-ginsberg": {
    bio: "Allen Ginsberg (1926-1997) fue el poeta más emblemático de la generación beat estadounidense. Su extenso poema «Aullido», cuya publicación provocó un juicio por obscenidad, se convirtió en un manifiesto generacional contra el conformismo de la posguerra. Heredero del verso libre y profético de Whitman, mezcló crítica social, espiritualidad oriental, experiencia personal y oralidad. Activista incansable, fue figura clave de la contracultura. Su voz, expansiva y desinhibida, transformó la poesía estadounidense y su relación con el público.",
    obras: ["Aullido", "Kaddish"],
  },
  "idea-vilarino": {
    bio: "Idea Vilariño (1920-2009), uruguaya, fue una de las grandes voces de la poesía rioplatense y miembro de la influyente Generación del 45. Su lírica amorosa, de extrema intensidad y desnudez, indaga en el deseo, la pérdida y la soledad con una lucidez descarnada. Escribió también ensayo y fue una destacada estudiosa de la canción popular. Su célebre serie de «Poemas de amor» nació de una relación marcada por la ausencia. Su voz, sobria y demoledora, la sitúa entre las poetas esenciales en lengua española del siglo XX.",
    obras: ["Poemas de amor", "Nocturnos", "Pobre mundo"],
  },
  "blanca-varela": {
    bio: "Blanca Varela (1926-2009) es una de las voces fundamentales de la poesía peruana y latinoamericana del siglo XX. Vinculada en su juventud al ambiente intelectual de París, donde trató a figuras del surrealismo y del existencialismo, desarrolló una obra exigente y personalísima. Su poesía, de tono sobrio y a menudo sombrío, explora el cuerpo, el desencanto y la condición humana con imágenes precisas y una ironía contenida. Fue la primera mujer en recibir el Premio Internacional de Poesía Federico García Lorca. Su reconocimiento creció con los años.",
    obras: ["Canto villano", "Ejercicios materiales", "El libro de barro"],
  },
  "mahmud-darwish": {
    bio: "Mahmud Darwish (1941-2008) es el poeta nacional palestino y una de las grandes voces de la poesía árabe contemporánea. Su obra dio expresión lírica a la experiencia del exilio, el despojo y la identidad de su pueblo, sin renunciar nunca a la dimensión universal y a la belleza del lenguaje. Vivió largos años fuera de su tierra y participó intensamente en la vida cultural y política de su tiempo. Su poesía evolucionó de lo combativo hacia una creciente complejidad simbólica e íntima. Multitudes acudían a sus recitales, y su muerte fue un duelo colectivo.",
    obras: ["Carnet de identidad", "Once astros", "Mural"],
  },
  "olga-orozco": {
    bio: "Olga Orozco (1920-1999) es una de las voces mayores de la poesía argentina del siglo XX, vinculada a la sensibilidad surrealista. Su obra despliega un mundo de gran densidad simbólica, poblado de presencias, rituales, memoria e infancia, con un tono solemne y visionario. La muerte, lo sagrado y lo oculto recorren sus poemas, escritos en un lenguaje suntuoso y musical. Trabajó también en el periodismo bajo diversos seudónimos. Reconocida con importantes premios, su poesía mantiene una atmósfera única, entre el conjuro y la elegía.",
    obras: ["Los juegos peligrosos", "Museo salvaje", "Con esta boca, en este mundo"],
  },
};
