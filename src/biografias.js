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
  "virgilio": {
    bio: "Virgilio (70-19 a.C.) es el mayor poeta de la Roma antigua y una de las figuras centrales de toda la literatura occidental. Bajo el mecenazgo de Mecenas y el emperador Augusto, compuso una obra que se convirtió en modelo clásico durante siglos. Su «Eneida», epopeya sobre el origen mítico de Roma a través del héroe Eneas, dialoga con Homero y fija el ideal del poema nacional. Antes había cultivado la poesía pastoril y la didáctica del campo. Su prestigio fue tal que la Edad Media lo veneró casi como a un sabio profético; Dante lo eligió como guía en la «Comedia».",
    obras: ["Eneida", "Geórgicas", "Bucólicas"],
  },
  "horacio": {
    bio: "Horacio (65-8 a.C.) es, junto a Virgilio, el gran poeta del Siglo de Oro latino. Hijo de un liberto, se integró en el círculo de Mecenas y cultivó una poesía de equilibrio, mesura y perfección formal. Sus «Odas» adaptaron al latín los metros de la lírica griega, y de su obra proceden fórmulas que aún usamos, como «carpe diem» o «aurea mediocritas». En su «Arte poética» legó a la posteridad una influyente reflexión sobre el oficio de escribir. Su ideal de serenidad y vida retirada inspiró a poetas de todas las épocas, entre ellos Fray Luis de León.",
    obras: ["Odas", "Sátiras", "Arte poética"],
  },
  "ovidio": {
    bio: "Ovidio (43 a.C.-17 d.C.) fue uno de los poetas latinos más brillantes e ingeniosos, maestro de la poesía amorosa y mitológica. Su obra mayor, las «Metamorfosis», es un vasto poema que recorre la mitología clásica bajo el hilo conductor de las transformaciones, y se convirtió en fuente inagotable para el arte y la literatura posteriores. Cultivó también la poesía erótica y didáctica del amor. En la cumbre de su fama, el emperador Augusto lo desterró a orillas del mar Negro por razones nunca aclaradas del todo, y allí escribió elegías del exilio.",
    obras: ["Metamorfosis", "Arte de amar", "Tristes"],
  },
  "catulo": {
    bio: "Catulo (84-54 a.C.) es el gran poeta lírico de la Roma tardorrepublicana y una voz de sorprendente modernidad. Perteneció a los «poetae novi», que renovaron la poesía latina inspirándose en los modelos helenísticos y privilegiando lo personal y refinado frente a la épica. Es célebre por sus apasionados y atormentados poemas a la mujer que llamó Lesbia, donde el amor y el odio se entrelazan con una intensidad inédita. Cultivó también el epigrama mordaz y la invectiva. Su franqueza emocional lo acerca al lector contemporáneo como pocos antiguos.",
    obras: ["Carmina (Poemas)"],
  },
  "wang-wei": {
    bio: "Wang Wei (699-759) fue un poeta, pintor y músico de la dinastía Tang, y una de las grandes voces de la poesía china clásica junto a Li Bai y Du Fu. Funcionario y budista devoto, su poesía está impregnada de serenidad contemplativa y de una honda comunión con el paisaje. Se le considera maestro del poema breve de naturaleza, donde una escena aparentemente sencilla encierra una resonancia espiritual. La tradición resumió su arte diciendo que en su poesía hay pintura y en su pintura, poesía. Su influencia en la estética oriental es duradera.",
    obras: ["Poemas del río Wang", "Cervatal"],
  },
  "li-qingzhao": {
    bio: "Li Qingzhao (1084-1155) está considerada la mayor poeta de la historia de China y una maestra del género «ci», poesía escrita para ser cantada. Su obra temprana evoca una vida culta y feliz junto a su esposo, con quien compartía la pasión por el coleccionismo de arte y la erudición. La invasión yurchen y la muerte de su marido la sumieron en el desarraigo y la pérdida, que tiñen de melancolía su poesía madura. De tono intimista y musical, su voz femenina es excepcional en la tradición. Gran parte de su obra se ha perdido.",
    obras: ["Colección de poemas ci", "Ensayo sobre el ci"],
  },
  "hafez": {
    bio: "Hafez (1325-1390) es el poeta más amado de Persia y una cima de la lírica en lengua persa. Maestro del «gazal», breve poema de amor y vino, fundió en su obra el lenguaje del deseo terrenal con la mística sufí, en una ambigüedad deliberada y embriagadora. Su «Diván» es leído en el mundo persa casi como un oráculo: aún hoy se abre al azar para buscar consejo. Celebró el amor, la belleza y el éxtasis frente a la hipocresía de los poderosos. Su influencia llega hasta poetas occidentales como Goethe, que le rindió homenaje.",
    obras: ["Diván"],
  },
  "kabir": {
    bio: "Kabir (1440-1518) fue un poeta y místico de la India, figura central del movimiento devocional «bhakti» y voz de enorme influencia en la espiritualidad del subcontinente. De origen humilde, criado en una familia de tejedores musulmanes en un entorno hindú, predicó una devoción directa a lo divino que trascendía las fronteras entre religiones y rechazaba el ritualismo y las castas. Sus poemas y dísticos, transmitidos oralmente, usan un lenguaje sencillo, popular y lleno de imágenes cotidianas. Es venerado por hindúes, musulmanes y sijs por igual.",
    obras: ["Dohas (dísticos)", "Bijak"],
  },
  "mirabai": {
    bio: "Mirabai (1498-1547) es una de las poetas devocionales más célebres de la India y figura legendaria del movimiento «bhakti». Princesa rajput según la tradición, renunció a las convenciones de su rango para consagrar su vida y su poesía a la devoción amorosa al dios Krishna. Sus cantos, de gran intensidad emocional, expresan el anhelo de unión con lo divino en clave de amor apasionado. Compuestos para ser cantados, se transmitieron durante siglos por vía oral y siguen vivos en la devoción popular. Su figura encarna la libertad espiritual frente a las imposiciones sociales.",
    obras: ["Padavali (cantos devocionales)"],
  },
  "jorge-manrique": {
    bio: "Jorge Manrique (1440-1479) fue un poeta y noble castellano del siglo XV, recordado sobre todo por una sola obra maestra. Sus «Coplas a la muerte de su padre» son una de las elegías más perfectas de la lengua española: una meditación serena y solemne sobre la fugacidad de la vida, la fortuna y la muerte, escrita en las llamadas «coplas de pie quebrado». La obra equilibra el lamento personal con una reflexión universal de raíz medieval. Hombre de armas, Manrique murió joven en combate. Su breve legado le aseguró un lugar imperecedero.",
    obras: ["Coplas a la muerte de su padre"],
  },
  "fray-luis-de-leon": {
    bio: "Fray Luis de León (1527-1591) fue agustino, humanista, profesor de la Universidad de Salamanca y uno de los grandes poetas del Renacimiento español. Su poesía, de raíz clásica y horaciana, canta el anhelo de paz, la armonía del universo y el ideal de la vida retirada lejos del «mundanal ruido». Fue también notable traductor y prosista. Procesado por la Inquisición por sus traducciones bíblicas, pasó casi cinco años en prisión; la tradición cuenta que retomó su cátedra con un sereno «Decíamos ayer». Su obra une rigor intelectual y serenidad espiritual.",
    obras: ["Oda a la vida retirada", "Noche serena", "De los nombres de Cristo"],
  },
  "santa-teresa-de-jesus": {
    bio: "Santa Teresa de Jesús (1515-1582) fue una mística, reformadora y escritora española, una de las grandes figuras espirituales y literarias del Siglo de Oro. Fundadora de la reforma del Carmelo descalzo, recorrió España estableciendo conventos pese a innumerables dificultades. Su prosa autobiográfica y mística, de lenguaje sencillo, vivo y directo, es admirada tanto por su valor espiritual como literario. Como poeta dejó composiciones de honda emoción religiosa. Fue la primera mujer proclamada Doctora de la Iglesia. Su huella en la lengua y la espiritualidad es inmensa.",
    obras: ["Libro de la vida", "Las moradas", "Camino de perfección"],
  },
  "john-donne": {
    bio: "John Donne (1572-1631) es el máximo representante de los «poetas metafísicos» ingleses. Su poesía rompió con la suavidad renacentista mediante un estilo intelectual, áspero y apasionado, lleno de ingeniosas y sorprendentes imágenes (los llamados «conceptos»). Cultivó tanto una intensa poesía amorosa y erótica en su juventud como, tras ordenarse sacerdote anglicano, una hondísima poesía religiosa y sermones célebres. Llegó a ser deán de la catedral de San Pablo de Londres. Redescubierto en el siglo XX, influyó decisivamente en la poesía moderna.",
    obras: ["Canciones y sonetos", "Sonetos sagrados", "Devociones"],
  },
  "john-milton": {
    bio: "John Milton (1608-1674) es uno de los mayores poetas de la lengua inglesa, autor de la gran epopeya «El paraíso perdido». De vasta erudición y firmes convicciones religiosas y políticas, fue un defensor de la causa parlamentaria durante la revolución inglesa y autor de influyentes textos en prosa, como su alegato por la libertad de prensa. Quedó ciego en plena madurez y dictó su obra mayor, un monumental poema sobre la caída del hombre que reelabora el relato bíblico con grandeza épica. Su lenguaje y su ambición marcaron toda la poesía posterior.",
    obras: ["El paraíso perdido", "El paraíso recobrado", "Areopagítica"],
  },
  "johann-wolfgang-von-goethe": {
    bio: "Johann Wolfgang von Goethe (1749-1832) es la figura central de la literatura alemana y una de las mentes más universales de la cultura europea. Poeta, novelista, dramaturgo y también hombre de ciencia, encarnó el ideal del genio total. Su drama «Fausto», fruto de toda una vida, es una de las cumbres de la literatura mundial. Impulsó junto a Schiller el clasicismo de Weimar, tras participar de joven en el movimiento prerromántico. Su poesía lírica, vastísima y de extraordinaria variedad, abarca desde la canción popular hasta el «Diván de Oriente y Occidente», inspirado en Hafez.",
    obras: ["Fausto", "Diván de Oriente y Occidente", "Las penas del joven Werther"],
  },
  "novalis": {
    bio: "Novalis (1772-1801), seudónimo de Friedrich von Hardenberg, fue el poeta más representativo del primer Romanticismo alemán. De formación filosófica y científica, murió muy joven, dejando una obra breve pero de enorme influencia. Sus «Himnos a la noche», escritos tras la muerte de su joven prometida, hacen de la noche y la muerte un espacio de revelación y anhelo de lo infinito. Cultivó también la novela y el aforismo, persiguiendo una «poetización» del mundo. Su figura encarna como ninguna el ideal romántico de fusión entre poesía, amor, filosofía y muerte.",
    obras: ["Himnos a la noche", "Enrique de Ofterdingen", "Granos de polen"],
  },
  "heinrich-heine": {
    bio: "Heinrich Heine (1797-1856) fue uno de los grandes poetas alemanes del siglo XIX, en la encrucijada entre el Romanticismo y su crítica irónica. Su «Libro de las canciones» recogió poemas de tono popular y sentimental que fueron musicados innumerables veces. Pero Heine fue también un escritor mordaz, periodista y pensador comprometido, cuya ironía desmontaba la solemnidad romántica. De origen judío y espíritu crítico, vivió gran parte de su vida exiliado en París. Sus últimos años, postrado por la enfermedad, dieron una poesía estremecedora y lúcida.",
    obras: ["Libro de las canciones", "Romancero", "Cuadros de viaje"],
  },
  "victor-hugo": {
    bio: "Victor Hugo (1802-1885) fue la gran figura del Romanticismo francés y uno de los escritores más influyentes del siglo XIX. Poeta, novelista y dramaturgo, encarnó como nadie el papel del literato comprometido con su tiempo. Aunque universalmente conocido por novelas como «Los miserables» y «Nuestra Señora de París», su obra poética es vastísima y central en su lengua, desde la lírica intimista hasta la gran poesía visionaria y épica. Defensor de la república, vivió casi dos décadas en el exilio por su oposición a Napoleón III. A su muerte, Francia le rindió funerales de Estado.",
    obras: ["Las contemplaciones", "La leyenda de los siglos", "Los miserables"],
  },
  "gerard-de-nerval": {
    bio: "Gérard de Nerval (1808-1855) fue un poeta y prosista francés cuya obra anticipó el simbolismo y el surrealismo. Su escritura funde el sueño, el mito, lo esotérico y la memoria en una atmósfera enigmática y musical. Sus sonetos de «Las quimeras» son célebres por su densidad simbólica y su belleza cifrada. En prosa, «Aurélia» explora los límites entre la locura y la visión. Atormentado por crisis mentales, llevó una vida errante y precaria, y murió trágicamente. Su figura, a medio camino entre el romántico tardío y el visionario moderno, fascinó a generaciones posteriores.",
    obras: ["Las quimeras", "Aurelia", "Las hijas del fuego"],
  },
  "paul-verlaine": {
    bio: "Paul Verlaine (1844-1896) es uno de los grandes poetas del simbolismo francés, maestro de la musicalidad del verso. Su lema «la música ante todo» resume una poesía que busca la sugerencia, la sutileza y los estados de ánimo difusos por encima del sentido preciso. Su tormentosa relación con Rimbaud, que acabó en un disparo y en prisión, es legendaria. Tras una conversión religiosa en la cárcel, alternó la poesía mística con una vida bohemia y desordenada. Su obra, de honda emoción y delicadeza sonora, marcó profundamente la lírica moderna.",
    obras: ["Romanzas sin palabras", "Fiestas galantes", "Sabiduría"],
  },
  "paul-valery": {
    bio: "Paul Valéry (1871-1945) fue un poeta y pensador francés, heredero tardío del simbolismo de Mallarmé y una de las grandes inteligencias literarias de su tiempo. Tras un largo silencio dedicado a la reflexión, regresó a la poesía con obras de extraordinaria perfección formal e intelectual, como «El cementerio marino». Su poesía une la música del verso con el rigor del pensamiento sobre la conciencia, el tiempo y la creación. Sus cuadernos, escritos durante décadas al amanecer, son un monumento de meditación. Fue una figura intelectual de máximo prestigio en la Francia de entreguerras.",
    obras: ["El cementerio marino", "La joven Parca", "Cuadernos"],
  },
  "guillaume-apollinaire": {
    bio: "Guillaume Apollinaire (1880-1918) fue un poeta francés decisivo en el nacimiento de la vanguardia. Acuñó el término «surrealismo» y defendió con entusiasmo el cubismo y el arte nuevo. Su poesía rompió con las convenciones: suprimió la puntuación y, en sus «Caligramas», dispuso las palabras formando imágenes visuales sobre la página. Su obra combina la tradición lírica con la audacia formal, la melancolía amorosa con la fascinación por el mundo moderno. Herido en la Primera Guerra Mundial, murió poco después en la pandemia de gripe. Su influencia en la poesía del siglo XX fue enorme.",
    obras: ["Alcoholes", "Caligramas"],
  },
  "w-b-yeats": {
    bio: "W. B. Yeats (1865-1939) es el mayor poeta irlandés y una figura central de la literatura en lengua inglesa. Su obra evolucionó desde un simbolismo de raíz céltica y esotérica hacia una poesía madura más austera y poderosa, atravesada por la historia de Irlanda, el amor, la vejez y una compleja mitología personal. Fue alma del renacimiento cultural irlandés y cofundador del teatro nacional. Implicado en la vida política de su país, llegó a senador. Recibió el Premio Nobel de Literatura en 1923. Su poesía tardía está considerada una de las cimas del siglo.",
    obras: ["La torre", "La escalera de caracol", "Responsabilidades"],
  },
  "ezra-pound": {
    bio: "Ezra Pound (1885-1972) fue un poeta estadounidense y uno de los grandes promotores del modernismo literario. Impulsor del «imaginismo», abogó por una poesía concentrada, precisa y libre de retórica, y ejerció una influencia decisiva como editor y mentor de autores como Eliot. Su obra mayor, los «Cantos», es un vasto e inacabado poema que entreteje historia, economía, mito y múltiples lenguas. Su trayectoria quedó ensombrecida por su apoyo al fascismo de Mussolini durante la guerra, que le valió años de reclusión. Su renovación del lenguaje poético, sin embargo, fue capital.",
    obras: ["Cantos", "Hugh Selwyn Mauberley"],
  },
  "wallace-stevens": {
    bio: "Wallace Stevens (1879-1955) es uno de los grandes poetas estadounidenses del siglo XX, célebre por una obra de exuberancia verbal y hondura filosófica. Llevó una doble vida singular: alto ejecutivo de una compañía de seguros y, a la vez, poeta de refinada imaginación. Su poesía medita una y otra vez sobre la relación entre la imaginación y la realidad, sobre el poder del arte para dar forma a un mundo sin certezas religiosas. De aparente abstracción y rica sensorialidad, su obra ganó reconocimiento sobre todo en su madurez. Hoy se le considera un clásico moderno.",
    obras: ["Harmonium", "Las auroras de otoño", "El hombre de la guitarra azul"],
  },
  "william-carlos-williams": {
    bio: "William Carlos Williams (1883-1963) fue un poeta estadounidense que buscó una poesía radicalmente arraigada en lo cotidiano, lo concreto y el habla americana. Médico de profesión durante toda su vida, escribió entre paciente y paciente. Su lema «no hay ideas sino en las cosas» resume su atención a lo material y lo inmediato, frente al cosmopolitismo erudito de otros modernistas. Su obra mayor, «Paterson», hace de una ciudad de Nueva Jersey una épica moderna. Su voz directa y su verso flexible influyeron decisivamente en la poesía estadounidense de posguerra.",
    obras: ["Paterson", "Cuadros de Brueghel", "La música del desierto"],
  },
  "e-e-cummings": {
    bio: "E. E. Cummings (1894-1962) fue un poeta estadounidense célebre por su radical experimentación tipográfica y gramatical. Fragmentó palabras, prescindió de mayúsculas, dispersó el texto por la página y reinventó la puntuación para crear una poesía visual y rítmica de gran originalidad. Bajo esa apariencia vanguardista late, sin embargo, un lirismo tradicional: el amor, la naturaleza, la celebración del individuo frente a la masa. Pintor además de poeta, concebía el poema también como objeto visual. Su obra, lúdica y tierna a la vez, lo hizo enormemente popular.",
    obras: ["Tulipanes y chimeneas", "XLI poemas", "95 poemas"],
  },
  "robert-frost": {
    bio: "Robert Frost (1874-1963) es uno de los poetas estadounidenses más leídos y queridos del siglo XX. Su poesía, ambientada en los paisajes rurales de Nueva Inglaterra, emplea un lenguaje claro y un tono coloquial que esconden una notable profundidad y ambigüedad. Bajo la aparente sencillez de sus escenas campestres laten meditaciones sobre la elección, el aislamiento, el deber y la muerte. Recibió cuatro veces el Premio Pulitzer y se convirtió en una figura nacional, hasta recitar en la investidura presidencial de Kennedy. Su obra une la tradición y una honda complejidad moderna.",
    obras: ["Al norte de Boston", "El camino no elegido", "Intervalo en la montaña"],
  },
  "giuseppe-ungaretti": {
    bio: "Giuseppe Ungaretti (1888-1970) fue uno de los renovadores de la poesía italiana del siglo XX y figura clave del «hermetismo». Nacido en Alejandría, su experiencia como soldado en la Primera Guerra Mundial dio origen a una poesía esencial y desnuda, de versos brevísimos cargados de silencio, que buscaban la palabra pura en medio del horror. Su obra fue depurando el lenguaje hasta lo mínimo, atenta al instante y a la fragilidad de la existencia. Profesor y traductor, ejerció gran influencia sobre la lírica italiana posterior. Su brevedad intensa es su sello inconfundible.",
    obras: ["La alegría", "Sentimiento del tiempo", "El dolor"],
  },
  "eugenio-montale": {
    bio: "Eugenio Montale (1896-1981) es uno de los mayores poetas italianos del siglo XX y figura central del hermetismo, aunque su voz desbordó toda etiqueta. Su poesía parte del paisaje árido y luminoso de Liguria para construir una meditación desencantada sobre la dificultad de vivir y la imposibilidad de certezas. De lenguaje preciso y simbolismo sutil, su obra evolucionó hacia un tono más irónico y cotidiano. Fue también crítico, periodista y traductor. Recibió el Premio Nobel de Literatura en 1975. Su «correlato objetivo» y su rigor lo sitúan entre los clásicos modernos.",
    obras: ["Huesos de sepia", "Las ocasiones", "Diario del 71 y del 72"],
  },
  "osip-mandelshtam": {
    bio: "Osip Mandelshtam (1891-1938) es uno de los grandes poetas rusos del siglo XX y figura central del acmeísmo, que defendía la claridad, la cultura y el valor preciso de la palabra. Su poesía, densa y luminosa, dialoga con la tradición clásica europea y con la historia. Bajo el estalinismo, su independencia lo condenó: un poema satírico contra Stalin desencadenó su persecución, el destierro y finalmente la muerte en un campo de tránsito en Siberia. Su viuda, Nadiezhda, salvó su obra memorizándola. Hoy es símbolo de la poesía frente a la tiranía.",
    obras: ["La piedra", "Tristia", "Cuadernos de Voronezh"],
  },
  "vladimir-mayakovski": {
    bio: "Vladímir Mayakovski (1893-1930) fue el poeta más emblemático del futurismo ruso y de la vanguardia revolucionaria. Su voz potente, declamatoria y rupturista llevó la poesía a la calle, a los carteles y a la propaganda, al servicio de la Revolución de Octubre, que abrazó con entusiasmo. Renovó la métrica, el lenguaje y la tipografía, e hizo del poema un acto público y combativo. Cultivó también una intensa poesía amorosa. La creciente decepción con la burocracia soviética y sus conflictos personales lo llevaron al suicidio. Su obra encarna la fusión radical de arte y revolución.",
    obras: ["La nube en pantalones", "150.000.000", "A plena voz"],
  },
  "czes-aw-mi-osz": {
    bio: "Czesław Miłosz (1911-2004) fue un poeta polaco, una de las grandes conciencias literarias del siglo XX. Testigo de la ocupación nazi de Varsovia y luego del régimen estalinista, del que acabó exiliándose, hizo de la memoria histórica, el mal del siglo y la búsqueda de sentido los ejes de su obra. Su ensayo «El pensamiento cautivo» analizó la seducción del totalitarismo sobre los intelectuales. Su poesía, lúcida y meditativa, une lo concreto y lo metafísico. Profesor en Estados Unidos, recibió el Premio Nobel de Literatura en 1980. Su voz es un referente moral.",
    obras: ["El pensamiento cautivo", "Tierra inalcanzable", "Rescate"],
  },
  "yorgos-seferis": {
    bio: "Yorgos Seferis (1900-1971) fue el gran renovador de la poesía griega moderna y el primer griego en recibir el Premio Nobel de Literatura, en 1963. Diplomático de carrera, unió en su obra la herencia de la Grecia clásica con la sensibilidad del modernismo europeo. Su poesía, de tono sobrio y melancólico, está marcada por el exilio, el mar, la memoria histórica y el peso de un pasado mítico sobre el presente. Tradujo a Eliot al griego y dialogó con la tradición occidental. Su voz dio a la lengua griega contemporánea una dimensión universal.",
    obras: ["Mythistórima", "Diario de a bordo", "Tres poemas secretos"],
  },
  "odysseas-elytis": {
    bio: "Odysseas Elytis (1911-1996) es uno de los grandes poetas griegos del siglo XX, premiado con el Nobel de Literatura en 1979. Vinculado en su juventud al surrealismo, desarrolló una poesía luminosa y solar, celebración del mar, la luz y el paisaje del Egeo, que él identificaba con el alma griega. Su obra mayor, «Digno es», es un vasto poema que funde lo personal, lo histórico y lo litúrgico en un canto a la patria y a la existencia. Su lenguaje, sensorial y exultante, hizo de la claridad mediterránea una forma de conocimiento. Su voz es la del esplendor del mundo griego.",
    obras: ["Digno es", "Orientaciones", "Sol primero"],
  },
  "rabindranath-tagore": {
    bio: "Rabindranath Tagore (1861-1941) fue un poeta, músico y polímata bengalí, la mayor figura de la cultura india moderna y el primer no europeo en recibir el Premio Nobel de Literatura, en 1913. Su libro «Gitanjali», de hondo lirismo espiritual, lo dio a conocer en Occidente. Reformador social y educativo, fundó una célebre universidad y compuso los himnos nacionales de la India y Bangladés. Su obra, vastísima, une la tradición devocional india con una sensibilidad universal y moderna. Su figura encarnó el diálogo entre Oriente y Occidente con enorme prestigio mundial.",
    obras: ["Gitanjali", "El jardinero", "La luna nueva"],
  },
  "aime-cesaire": {
    bio: "Aimé Césaire (1913-2008) fue un poeta y político de la Martinica, uno de los fundadores del movimiento de la «négritude», que reivindicaba con orgullo la identidad y la herencia africanas frente al colonialismo. Su «Cuaderno de un retorno al país natal» es un texto fundacional, de lenguaje incandescente y vanguardista, que une la denuncia anticolonial con un poderoso impulso lírico. Diputado y alcalde durante décadas, combinó la creación con un intenso compromiso político. Su obra, surrealista y combativa, dio voz poética a la descolonización. Su influencia recorre toda la literatura caribeña y africana.",
    obras: ["Cuaderno de un retorno al país natal", "Las armas milagrosas"],
  },
  "nazim-hikmet": {
    bio: "Nazim Hikmet (1902-1963) es el poeta turco moderno más importante y una de las grandes voces de la poesía comprometida del siglo XX. Introdujo el verso libre en la poesía turca, rompiendo con la tradición métrica clásica, e impregnó su obra de un lirismo cálido y humano al servicio de su ideal revolucionario. Su militancia comunista le costó largos años de cárcel y el exilio, en el que murió. Su poesía une la denuncia social, el amor, la nostalgia de la patria y la esperanza, con un lenguaje directo y emocionante. Es hoy un símbolo internacional de la poesía y la libertad.",
    obras: ["Paisajes humanos", "Duro oficio el exilio", "Poemas de las nueve de la noche"],
  },
  "forough-farrojzad": {
    bio: "Forough Farrojzad (1934-1967) fue una poeta iraní revolucionaria y una de las voces femeninas más audaces de la literatura persa moderna. Su poesía, de gran franqueza emocional y sensual, rompió tabúes al expresar el deseo, la subjetividad y la libertad de la mujer en una sociedad conservadora. También fue cineasta, autora de un célebre documental. Su lenguaje moderno y desnudo renovó la lírica persa. Murió en un accidente de tráfico con solo treinta y dos años. Pese a la censura posterior, su obra siguió siendo un referente de modernidad y emancipación.",
    obras: ["Otro nacimiento", "Cautiva", "Creamos fe en el comienzo de la estación fría"],
  },
  "luis-cernuda": {
    bio: "Luis Cernuda (1902-1963) es uno de los poetas más hondos y singulares de la Generación del 27. Reunió toda su obra bajo el título «La realidad y el deseo», que resume su tema central: el choque entre el anhelo y un mundo hostil. Su poesía, de tono cada vez más reflexivo y desengañado, abordó con valentía el deseo homosexual y la condición del solitario. Marcó su obra el surrealismo de juventud y, sobre todo, el largo exilio tras la Guerra Civil, en Gran Bretaña, Estados Unidos y México, donde murió. Su influencia sobre la poesía española posterior es enorme.",
    obras: ["La realidad y el deseo", "Los placeres prohibidos", "Donde habite el olvido"],
  },
  "vicente-aleixandre": {
    bio: "Vicente Aleixandre (1898-1984) fue un poeta de la Generación del 27 y Premio Nobel de Literatura en 1977. Su obra, de raíz surrealista en su primera etapa, despliega una visión cósmica y panteísta en la que el amor, la naturaleza y la muerte se funden en una unidad elemental. Tras la guerra, que pasó en España por su frágil salud, su casa madrileña se convirtió en refugio y faro para las nuevas generaciones de poetas. Su poesía evolucionó hacia una mayor humanización y solidaridad. Maestro generoso, fue un puente vivo entre el 27 y la poesía de posguerra.",
    obras: ["La destrucción o el amor", "Sombra del paraíso", "Historia del corazón"],
  },
  "rafael-alberti": {
    bio: "Rafael Alberti (1902-1999) es una de las grandes voces de la Generación del 27, de extraordinaria versatilidad. Debutó con el neopopularismo luminoso de «Marinero en tierra», nostalgia del mar de su Cádiz natal, y pronto exploró el surrealismo en «Sobre los ángeles». Militante comunista, puso su poesía al servicio del compromiso político durante la República y la guerra. Tras la derrota, vivió un largo exilio en Argentina e Italia, hasta su regreso a España en 1977. Su obra, vastísima y musical, une la tradición popular, la vanguardia y la voz cívica. Recibió el Premio Cervantes.",
    obras: ["Marinero en tierra", "Sobre los ángeles", "Retornos de lo vivo lejano"],
  },
  "miguel-hernandez": {
    bio: "Miguel Hernández (1910-1942) fue un poeta de origen humilde, pastor en su juventud en Orihuela, cuya obra une la tradición del Siglo de Oro con la voz de la tierra y del pueblo. A menudo vinculado a la Generación del 36, su poesía evolucionó del fervor religioso temprano a una intensa poesía amorosa y, durante la Guerra Civil, a una poesía combativa y solidaria. Encarcelado por el franquismo tras la guerra, murió de tuberculosis en prisión con solo treinta y un años. Su «Cancionero y romancero de ausencias», escrito en la cárcel, es de una emoción desgarradora. Es símbolo del poeta del pueblo.",
    obras: ["El rayo que no cesa", "Viento del pueblo", "Cancionero y romancero de ausencias"],
  },
  "jose-marti": {
    bio: "José Martí (1853-1895) fue un escritor, pensador y héroe nacional cubano, figura clave de la independencia de la isla y precursor del modernismo literario. Su poesía, de sinceridad y sencillez aparentes, renovó el lenguaje lírico en español; sus «Versos sencillos» son célebres en todo el mundo hispánico. Periodista, orador y organizador político incansable, dedicó su vida a la causa de la libertad de Cuba y murió en combate al inicio de la guerra de independencia. Su prosa y su pensamiento sobre América son fundamentales. Une como pocos la palabra y la acción.",
    obras: ["Versos sencillos", "Ismaelillo", "Versos libres"],
  },
  "delmira-agustini": {
    bio: "Delmira Agustini (1886-1914) fue una poeta uruguaya, una de las voces más audaces y originales del modernismo hispanoamericano. Su poesía, de intensa carga erótica y simbólica, expresó el deseo femenino con una franqueza insólita para su época, dentro de un imaginario de cisnes, fuego y noche. Bajo la superficie modernista latía una sensibilidad profundamente personal y transgresora. Su vida terminó trágicamente, asesinada por su exmarido cuando tenía solo veintisiete años. Pese a la brevedad de su obra, su voz pionera la convirtió en figura fundacional de la poesía escrita por mujeres en América.",
    obras: ["El libro blanco", "Los cálices vacíos", "Los astros del abismo"],
  },
  "alfonsina-storni": {
    bio: "Alfonsina Storni (1892-1938) fue una de las poetas más importantes de la Argentina y de la lírica hispanoamericana del siglo XX. De origen humilde y trayectoria autodidacta, se abrió camino como maestra y escritora en un medio dominado por hombres. Su poesía, inicialmente posmodernista, cuestionó con lucidez e ironía los mandatos sobre la mujer y exploró el amor, el deseo y la independencia femenina. Su obra evolucionó hacia un lenguaje más despojado y vanguardista. Enferma de cáncer, se quitó la vida adentrándose en el mar, gesto que pasó a la leyenda. Es figura central del feminismo literario.",
    obras: ["El dulce daño", "Languidez", "Mascarilla y trébol"],
  },
  "nicanor-parra": {
    bio: "Nicanor Parra (1914-2018), chileno, fue el creador de la «antipoesía», una de las propuestas más influyentes de la poesía hispanoamericana del siglo XX. Físico y matemático de formación, propuso bajar la poesía del pedestal: desmontó la solemnidad lírica con humor, ironía, lenguaje coloquial y un escepticismo demoledor. Sus «Poemas y antipoemas» marcaron un antes y un después. Su obra, lúcida y corrosiva, dialoga con la cultura popular y la ciencia. Longevo y provocador hasta el final, recibió el Premio Cervantes en 2011. Su influencia sobre las generaciones posteriores fue inmensa.",
    obras: ["Poemas y antipoemas", "Artefactos", "Versos de salón"],
  },
  "juan-gelman": {
    bio: "Juan Gelman (1930-2014) es uno de los grandes poetas argentinos del siglo XX. Su obra une la ternura y el coloquialismo con la experimentación del lenguaje y un hondo compromiso político y humano. Militante, sufrió en carne propia la represión de la dictadura argentina: su hijo y su nuera fueron desaparecidos, y dedicó años a buscar a su nieta, recuperada finalmente. El exilio y el duelo atraviesan una poesía que, sin embargo, nunca renuncia al amor ni a la esperanza. Recibió el Premio Cervantes en 2007. Su voz, dolorida y luminosa, es un referente ético y poético.",
    obras: ["Violín y otras cuestiones", "Cólera buey", "Carta a mi madre"],
  },
  "jose-emilio-pacheco": {
    bio: "José Emilio Pacheco (1939-2014) fue un poeta, narrador y ensayista mexicano, una de las voces más respetadas de la literatura en español. Su poesía, de aparente claridad y tono reflexivo, medita sobre el tiempo, la destrucción, la historia y la fragilidad de lo humano, a menudo con una mirada irónica y desencantada. Cultivó también la prosa, con la célebre novela breve «Las batallas en el desierto». De erudición discreta y enorme rigor, fue además un gran traductor y divulgador. Recibió el Premio Cervantes en 2009. Su obra une lucidez moral y belleza serena.",
    obras: ["No me preguntes cómo pasa el tiempo", "Los elementos de la noche", "Las batallas en el desierto"],
  },
  "jaime-sabines": {
    bio: "Jaime Sabines (1926-1999) es uno de los poetas mexicanos más queridos y leídos del siglo XX. Su poesía, de lenguaje directo, coloquial y profundamente emotivo, habla del amor, el deseo, el dolor y la muerte con una cercanía que conecta con un público amplísimo. Huyó de la retórica y el hermetismo para escribir desde la experiencia cotidiana y el cuerpo. Su largo poema «Algo sobre la muerte del mayor Sabines», elegía por su padre, es una de sus obras más conmovedoras. Combinó la escritura con la actividad comercial y política. Su voz humana y desnuda lo hizo un clásico popular.",
    obras: ["Horal", "Tarumba", "Algo sobre la muerte del mayor Sabines"],
  },
  "rosario-castellanos": {
    bio: "Rosario Castellanos (1925-1974) fue una poeta, narradora y ensayista mexicana, figura pionera del pensamiento feminista en lengua española. Su obra reflexiona con lucidez sobre la condición de la mujer, la cultura indígena de su Chiapas natal y las estructuras de poder. Su poesía, de tono reflexivo e irónico, y su narrativa, comprometida con los marginados, le dieron un lugar central en las letras mexicanas. Fue también docente y diplomática, embajadora en Israel, donde murió en un accidente. Su ensayo y su poesía abrieron camino a generaciones de escritoras. Su voz crítica sigue muy viva.",
    obras: ["Poesía no eres tú", "Balún Canán", "Mujer que sabe latín"],
  },
  "nicolas-guillen": {
    bio: "Nicolás Guillén (1902-1989) fue el poeta nacional de Cuba y la gran voz de la poesía afroantillana. Integró en su obra el ritmo, el habla y la cultura afrocubana, especialmente el «son», creando una poesía musical y popular con honda dimensión social. Denunció el racismo, la desigualdad y el imperialismo, y reivindicó con orgullo la herencia mulata de Cuba. Militante comunista, su obra acompañó los grandes procesos políticos de la isla. De lenguaje vivo y contagioso, su poesía une fiesta y protesta, raíz africana y conciencia americana. Es figura central de la identidad cultural cubana.",
    obras: ["Motivos de son", "Sóngoro cosongo", "West Indies Ltd."],
  },
  "carlos-drummond-de-andrade": {
    bio: "Carlos Drummond de Andrade (1902-1987) está considerado el mayor poeta brasileño del siglo XX. Vinculado al modernismo de su país, desarrolló una voz inconfundible: irónica, reflexiva y a la vez profundamente humana. Su poesía parte de lo cotidiano y del «yo» para abrirse a la meditación sobre el mundo, la sociedad, el tiempo y la existencia. Funcionario discreto durante décadas, observó su época con lucidez crítica y humor melancólico. De lenguaje aparentemente sencillo y honda complejidad, su obra es un referente absoluto de la lengua portuguesa. Su influencia en la poesía brasileña es total.",
    obras: ["Sentimiento del mundo", "La rosa del pueblo", "Claro enigma"],
  },
  "joao-cabral-de-melo-neto": {
    bio: "João Cabral de Melo Neto (1920-1999) es uno de los grandes poetas brasileños del siglo XX, célebre por el rigor y la precisión casi arquitectónica de su obra. Frente al lirismo efusivo, propuso una poesía cerebral, despojada y constructiva, atenta a la materia y a la forma como un ingeniero o un arquitecto. Su obra mayor, «Muerte y vida severina», es un auto popular sobre el drama del campesino del Nordeste brasileño, de enorme fuerza social. Diplomático de carrera, vivió en España, que dejó huella en su obra. Su poética del control y la sequedad lo hizo inconfundible.",
    obras: ["Muerte y vida severina", "El ingeniero", "Educación por la piedra"],
  },
  "charles-bukowski": {
    bio: "Charles Bukowski (1920-1994) fue un escritor estadounidense, figura emblemática del llamado «realismo sucio». De origen alemán y vida marcada por la pobreza, el alcohol y los empleos precarios, hizo de esa experiencia el material de su obra. Su poesía y su narrativa, de lenguaje crudo, directo y antiliterario, retratan los márgenes de la vida urbana: bares, hipódromos, soledad y desencanto, no sin un humor áspero y cierta ternura oculta. Alcanzó tardío y enorme éxito, sobre todo entre lectores ajenos a la poesía convencional. Su voz desencantada lo convirtió en un fenómeno de culto.",
    obras: ["El amor es un perro del infierno", "Cartero", "La gente parece flores al fin"],
  },
  "mary-oliver": {
    bio: "Mary Oliver (1935-2019) fue una de las poetas estadounidenses más leídas de las últimas décadas. Su obra, arraigada en la observación atenta del mundo natural, celebra la naturaleza como vía de asombro, atención y conexión espiritual. De lenguaje claro y luminoso, sus poemas invitan a habitar el presente y a maravillarse ante lo vivo. Influida por la tradición de Whitman y de los trascendentalistas, paseaba diariamente por los bosques y marismas que inspiran su poesía. Reservada con su vida privada, alcanzó una popularidad inmensa. Su obra ofrece consuelo y celebración a millones de lectores.",
    obras: ["Primitivo americano", "Trabajo del sueño", "Devociones"],
  },
  "langston-hughes": {
    bio: "Langston Hughes (1902-1967) fue una figura central del «Renacimiento de Harlem», el florecimiento cultural afroamericano de los años veinte. Innovó al incorporar a su poesía el ritmo y la sensibilidad del jazz y del blues, dando voz a la experiencia, el orgullo y las luchas de la comunidad negra estadounidense. De lenguaje accesible y musical, su obra celebra la dignidad de la gente común y denuncia el racismo y la injusticia. Cultivó también la narrativa, el teatro y el ensayo. Su poesía, profundamente popular y comprometida, lo convirtió en una de las grandes voces de la cultura afroamericana.",
    obras: ["El blues del cansancio", "Montaña de barro", "Pregunta a tu mamá"],
  },
  "elizabeth-bishop": {
    bio: "Elizabeth Bishop (1911-1979) es una de las poetas estadounidenses más admiradas del siglo XX, célebre por la precisión y la contención de su obra. Perfeccionista, publicó relativamente pocos poemas, pero de una factura impecable: descripciones exactas, mirada atenta al detalle y una emoción siempre sugerida bajo una superficie serena. El viaje, la pérdida, el desarraigo y la geografía recorren su obra; vivió muchos años en Brasil. Amiga y corresponsal de grandes poetas de su tiempo, fue reconocida con los principales premios. Su arte de la observación y la reticencia la sitúa entre las grandes.",
    obras: ["Norte y Sur", "Geografía III", "Cuestiones de viaje"],
  },
  "dylan-thomas": {
    bio: "Dylan Thomas (1914-1953) fue un poeta galés célebre por la exuberancia musical y la intensidad casi incantatoria de su obra. Frente a la poesía intelectual de su tiempo, defendió un lirismo torrencial, sensorial y vital, centrado en los grandes temas del nacimiento, el amor, la naturaleza y la muerte. Sus lecturas en voz alta, de voz poderosa, lo hicieron famoso en giras por Estados Unidos. Su obra teatral radiofónica «Bajo el bosque lácteo» es muy celebrada. Su vida bohemia y excesiva terminó pronto, en Nueva York. Su poesía, intensa y oral, conserva una fuerza arrebatadora.",
    obras: ["Muertes y entradas", "Dieciocho poemas", "Bajo el bosque lácteo"],
  },
  "w-h-auden": {
    bio: "W. H. Auden (1907-1973) es uno de los mayores poetas en lengua inglesa del siglo XX. Nacido en Inglaterra y nacionalizado estadounidense, fue la voz central de su generación. Su obra, de extraordinaria amplitud temática y maestría formal, combina la inteligencia, la ironía y la reflexión moral, política y religiosa sobre un siglo convulso. Dominó como pocos las formas tradicionales y los registros más diversos. Algunos de sus poemas, como su elegía por Yeats o sus versos sobre el amor y la pérdida, son célebres. Su lucidez y su oficio lo convirtieron en un referente ineludible.",
    obras: ["Otro tiempo", "La edad de la ansiedad", "Escudo de Aquiles"],
  },
  "anne-carson": {
    bio: "Anne Carson (n. 1950) es una poeta y ensayista canadiense, una de las voces más originales e influyentes de la poesía contemporánea. Especialista en lenguas y literatura clásicas, difumina en su obra las fronteras entre poesía, ensayo, traducción y narrativa. Reescribe los mitos griegos desde una mirada actual y entreteje el saber antiguo con la experiencia íntima, el duelo y el amor. Obras como «Autobiografía de rojo» o «La belleza del marido» han alcanzado gran reconocimiento. Su erudición, su ironía y su libertad formal la han convertido en una autora de culto y prestigio internacional.",
    obras: ["Autobiografía de rojo", "La belleza del marido", "Nox"],
  },
  "jose-angel-valente": {
    bio: "José Ángel Valente (1929-2000) es una de las grandes voces de la poesía española de la segunda mitad del siglo XX y máximo representante de la llamada «poesía del silencio». Su obra, exigente y depurada, concibe el poema como un acto de conocimiento y una tensión hacia lo inefable, en diálogo con la mística y con el pensamiento. De los primeros libros, más ligados a su generación, evolucionó hacia una creciente desnudez y hondura. Fue también un penetrante ensayista y traductor. Vivió largos años fuera de España. Su rigor y su radicalidad lo convirtieron en un referente para la poesía posterior.",
    obras: ["A modo de esperanza", "Material memoria", "No amanece el cantor"],
  },
  "gustavo-adolfo-becquer": {
    bio: "Gustavo Adolfo Bécquer (1836-1870) es el gran poeta del posromanticismo español y una de las figuras más influyentes de la lírica en castellano. Sevillano, vivió de su trabajo como periodista en una existencia breve, marcada por la precariedad y la enfermedad. Su poesía, recogida en las «Rimas», rompe con la grandilocuencia romántica en favor de un lenguaje intimista, musical y aparentemente sencillo, centrado en el amor, el desengaño, la soledad y el misterio de la poesía misma. Escribió también las «Leyendas», relatos en prosa de atmósfera fantástica. Su obra, en buena parte de fama póstuma, abrió el camino a la poesía moderna y marcó hondamente al 27.",
    obras: ["Rimas", "Leyendas"],
  },
  "tomas-transtromer": {
    bio: "Tomas Tranströmer (1931-2015) fue el mayor poeta sueco contemporáneo y Premio Nobel de Literatura en 2011. Psicólogo de profesión, construyó una obra breve y depurada, célebre por sus imágenes precisas y reveladoras, a menudo nacidas del contraste entre la naturaleza nórdica y la vida interior. Su poesía, atenta al instante y a los umbrales entre el sueño y la vigilia, alcanza una claridad casi visionaria con muy pocos elementos. Un ictus lo dejó con dificultades para hablar en sus últimos años, pero siguió escribiendo. Traducido a innumerables lenguas, su voz serena y honda tiene resonancia universal.",
    obras: ["17 poemas", "Bálticos", "El cielo a medio hacer"],
  },
};
