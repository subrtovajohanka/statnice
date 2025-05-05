const questions = [
  {
    question: "Jaký je podíl cestovního ruchu na HDP České republiky (včetně nepřímých a indukovaných efektů)?",
    options: [
      "A) 10–12 %",
      "B) 2–3 %",
      "C) 0,5–1 %"
    ],
    answer: 1
  },
  {
    question: "Který z následujících efektů cestovního ruchu vzniká prostřednictvím dodavatelských řetězců?",
    options: [
      "A) Přímý efekt",
      "B) Indukovaný efekt",
      "C) Nepřímý efekt"
    ],
    answer: 2
  },
  {
    question: "Který nástroj se používá pro kvantifikaci celkového ekonomického přínosu cestovního ruchu?",
    options: [
      "A) Výroční zpráva CzechTourism",
      "B) Satelitní účet cestovního ruchu (TSA)",
      "C) Platební bilance"
    ],
    answer: 1
  },
  {
    question: "Kdo vytváří strategické rámce a koordinuje marketing cestovního ruchu v ČR?",
    options: [
      "A) Světová banka",
      "B) Ministerstvo průmyslu a obchodu",
      "C) Ministerstvo pro místní rozvoj a CzechTourism"
    ],
    answer: 2
  },
  {
    question: "Který z následujících programů podporuje Evropská unie v oblasti cestovního ruchu?",
    options: [
      "A) Eurocity Awards",
      "B) Evropská destinace excelence (EDEN)",
      "C) Green Deal Tourism"
    ],
    answer: 1
  },
  {
    question: "Co je hlavním cílem destinačního managementu?",
    options: [
      "A) Podpora domácí výroby",
      "B) Zvýšení návštěvnosti a udržitelného rozvoje cestovního ruchu",
      "C) Kontrola kvality potravin",
      "D) Zajištění levného ubytování"
    ],
    answer: 1
  },
  {
    question: "Který zákon řadí cestovní ruch pod gesci Ministerstva pro místní rozvoj ČR?",
    options: [
      "A) Zákon o ochraně spotřebitele",
      "B) Kompetenční zákon č. 2/1969 Sb.",
      "C) Zákon o zájezdech č. 159/1999 Sb."
    ],
    answer: 1
  },
  {
    question: "Který z následujících nástrojů patří mezi ekonomické nástroje politiky CR?",
    options: [
      "A) Strategie rozvoje cestovního ruchu kraje",
      "B) Daňové úlevy a dotace",
      "C) Statistické výkaznictví"
    ],
    answer: 1
  },
  {
    question: "Kdo realizuje marketingové kampaně v oblasti cestovního ruchu v ČR?",
    options: [
      "A) Český statistický úřad",
      "B) Ministerstvo kultury",
      "C) Agentura CzechTourism"
    ],
    answer: 2
  },
  {
    question: "Který nástroj slouží k plánování rozvoje cestovního ruchu na regionální úrovni?",
    options: [
      "A) Koncepce státní politiky CR",
      "B) Regionální strategie a akční plány",
      "C) Zákon č. 455/1991 Sb. o živnostenském podnikání"
    ],
    answer: 1
  },
  {
    question: "Jaký je význam partnerství veřejného a soukromého sektoru (PPP) v CR?",
    options: [
      "A) Zajištění legislativních změn",
      "B) Společná realizace projektů, např. infocenter a cyklostezek",
      "C) Kontrola výběru turistických poplatků"
    ],
    answer: 1
  },
  {
    question: "Která organizace je hlavním globálním aktérem v oblasti cestovního ruchu?",
    options: [
      "A) UNESCO",
      "B) UNWTO",
      "C) Eurostat"
    ],
    answer: 1
  },
  {
    question: "Jaký je hlavní nástroj EU pro porovnávání a plánování rozvoje regionů?",
    options: [
      "A) Strategické plány měst",
      "B) Cíle Vize 2030",
      "C) Klasifikace NUTS"
    ],
    answer: 2
  },
  {
    question: "Jaká úroveň NUTS odpovídá jednotlivým krajům v ČR?",
    options: [
      "A) NUTS 1",
      "B) NUTS 2",
      "C) NUTS 3"
    ],
    answer: 2
  },
  {
    question: "Jaká je hlavní úloha CzechTourismu?",
    options: [
      "A) Tvorba legislativy cestovního ruchu",
      "B) Koordinace krajských DMO",
      "C) Marketing a propagace ČR v oblasti cestovního ruchu"
    ],
    answer: 2
  },
  {
    question: "Kdo v ČR vytváří strategické dokumenty a koordinuje činnost v oblasti CR?",
    options: [
      "A) CzechTourism",
      "B) Ministerstvo pro místní rozvoj",
      "C) Krajské úřady"
    ],
    answer: 1
  },
  {
    question: "Jakou roli hrají DMO na regionální a místní úrovni?",
    options: [
      "A) Vytvářejí evropskou legislativu",
      "B) Koordinují aktéry, propagují a vytvářejí turistické produkty",
      "C) Rozdělují dotace přímo podnikatelům"
    ],
    answer: 1
  },
  {
    question: "Který orgán je hlavním garantem financování cestovního ruchu na úrovni státu?",
    options: [
      "A) Ministerstvo zahraničí",
      "B) Ministerstvo pro místní rozvoj",
      "C) CzechTourism"
    ],
    answer: 1
  },
  {
    question: "Jaký zákon upravuje místní poplatek z pobytu?",
    options: [
      "A) Zákon č. 159/1999 Sb.",
      "B) Zákon č. 455/1991 Sb.",
      "C) Zákon č. 565/1990 Sb."
    ],
    answer: 2
  },
  {
    question: "Jaká je maximální výše místního poplatku z pobytu od roku 2020?",
    options: [
      "A) 150 Kč/osoba/den",
      "B) 50 Kč/osoba/den",
      "C) 90 Kč/osoba/den"
    ],
    answer: 1
  },
  {
    question: "Který program poskytuje dotace až do výše 2,5 mil. Kč na rozvoj CR v regionech?",
    options: [
      "A) COSME",
      "B) Národní program podpory CR v regionech",
      "C) Erasmus+"
    ],
    answer: 1
  },
  {
    question: "Které subjekty typicky financují rozvoj cestovního ruchu?",
    options: [
      "A) Pouze stát",
      "B) Jen soukromý sektor",
      "C) Kombinace veřejného a soukromého sektoru"
    ],
    answer: 2
  },
  {
    question: "Jaký je hlavní problém financování CR v obcích s nízkým turistickým výkonem?",
    options: [
      "A) Neexistují žádné dotace",
      "B) Nemají dostatek vlastních příjmů",
      "C) Nemohou vybírat místní poplatky"
    ],
    answer: 1
  },
  {
    question: "Co nejlépe vystihuje pojem konkurenceschopnost destinace?",
    options: [
      "A) Schopnost nabídnout nejlevnější služby",
      "B) Schopnost přitáhnout návštěvníky při zajištění udržitelnosti a kvality života",
      "C) Schopnost stát se turisticky nejnavštěvovanějším místem"
    ],
    answer: 1
  },
  {
    question: "Který faktor NEpatří mezi determinanty konkurenceschopnosti destinace?",
    options: [
      "A) Image a marketing",
      "B) Přítomnost zahraničních investorů",
      "C) Kvalita dopravní infrastruktury"
    ],
    answer: 1
  },
  {
    question: "Co hodnotí WEF Travel and Tourism Competitiveness Index?",
    options: [
      "A) Míru využití přírodních zdrojů v cestovním ruchu",
      "B) Marketingové strategie destinací",
      "C) Pilíře jako infrastruktura, bezpečnost a ICT"
    ],
    answer: 2
  },
  {
    question: "Který prvek je součástí modelu Palatky konkurenceschopnosti destinace?",
    options: [
      "A) Volební účast v regionu",
      "B) Produktová nabídka, marketing, inovace a kvalita služeb",
      "C) Výše ubytovací daně"
    ],
    answer: 1
  },
  {
    question: "Co je hlavním cílem marketingové diferenciace?",
    options: [
      "A) Snížit cenu služeb",
      "B) Získat podporu státu",
      "C) Odlišit destinaci od konkurence"
    ],
    answer: 2
  },
  {
    question: "Jakou roli hrají DMO v konkurenceschopnosti destinace?",
    options: [
      "A) Spravují daňový systém",
      "B) Integrují nabídku, koordinují marketing a spolupráci",
      "C) Provozují pouze ubytovací zařízení"
    ],
    answer: 1
  },
  {
    question: "Co vyjadřuje pojem benchmarking v cestovním ruchu?",
    options: [
      "A) Porovnávání daní mezi kraji",
      "B) Srovnávání destinací a přebírání osvědčených řešení",
      "C) Vyhodnocování nákladů DMO"
    ],
    answer: 1
  },
  {
    question: "Co je hlavním cílem statistického výkaznictví v cestovním ruchu?",
    options: [
      "A) Vybrat správné daně od cestovních kanceláří",
      "B) Plánovat, řídit a hodnotit vývoj odvětví na základě dat",
      "C) Vytvářet grafy pro cestovní kanceláře"
    ],
    answer: 1
  },
  {
    question: "Který typ zařízení sleduje ČSÚ v rámci statistiky cestovního ruchu?",
    options: [
      "A) Restaurace a kavárny",
      "B) Hromadná ubytovací zařízení (HUZ)",
      "C) Dopravní společnosti"
    ],
    answer: 1
  },
  {
    question: "Jaký je účel satelitního účtu cestovního ruchu (TSA)?",
    options: [
      "A) Měřit přesnost map v destinacích",
      "B) Vyhodnocovat environmentální dopady hotelů",
      "C) Kvantifikovat ekonomický přínos CR včetně nepřímých efektů"
    ],
    answer: 2
  },
  {
    question: "Která instituce vydává metodická doporučení pro statistiku CR na globální úrovni?",
    options: [
      "A) CzechTourism",
      "B) UNWTO",
      "C) ČSÚ"
    ],
    answer: 1
  },
  {
    question: "Které ukazatele patří do kategorie poptávky v CR?",
    options: [
      "A) Počet HUZ a pokojů",
      "B) Obsazenost a tržby",
      "C) Počet příjezdů, délka pobytu, struktura návštěvníků"
    ],
    answer: 2
  },
  {
    question: "Který nástroj slouží k hledání vztahů mezi ukazateli CR (např. návštěvnost a investice)?",
    options: [
      "A) Regresní a korelační analýza",
      "B) SWOT analýza",
      "C) Marketingový mix"
    ],
    answer: 0
  },
  {
    question: "Co dělá CzechTourism v oblasti výzkumu?",
    options: [
      "A) Spravuje daně z ubytování",
      "B) Provozuje hromadná ubytovací zařízení",
      "C) Zkoumá chování, spokojenost a motivace turistů"
    ],
    answer: 2
  },
  {
    question: "Co znamená udržitelný rozvoj cestovního ruchu?",
    options: [
      "A) Rozvoj, který upřednostňuje ekonomické cíle před přírodními",
      "B) Rozvoj, který vyhovuje potřebám současnosti bez ohrožení budoucnosti",
      "C) Rychlý růst cestovního ruchu v atraktivních oblastech"
    ],
    answer: 1
  },
  {
    question: "Které tři pilíře tvoří základ udržitelného cestovního ruchu?",
    options: [
      "A) Příroda, Peníze, Práce",
      "B) Ochrana, Obnova, Obchod",
      "C) People, Planet, Profit"
    ],
    answer: 2
  },
  {
    question: "Co NEpatří mezi cíle environmentálního pilíře?",
    options: [
      "A) Snižování emisí a odpadů",
      "B) Tvorba pracovních míst",
      "C) Ochrana biodiverzity"
    ],
    answer: 1
  },
  {
    question: "K čemu se vztahuje sociální pilíř udržitelnosti?",
    options: [
      "A) Rozvoji hotelových kapacit",
      "B) Ochraně kulturní identity a kvalitě života místních",
      "C) Snižování daní pro podnikatele"
    ],
    answer: 1
  },
  {
    question: "Která zásada NENÍ součástí udržitelného rozvoje podle UNWTO?",
    options: [
      "A) Rovnoměrné rozdělení přínosů mezi aktéry CR",
      "B) Maximalizace zisku za každou cenu",
      "C) Respekt ke kulturní autentičnosti komunit"
    ],
    answer: 1
  },
  {
    question: "Co znamená zkratka '3P' v kontextu udržitelného rozvoje?",
    options: [
      "A) Plán, Produkt, Prodej",
      "B) People, Planet, Profit",
      "C) Příroda, Příjmy, Podnikání"
    ],
    answer: 1
  },
  {
    question: "Proč nelze podporovat jen jeden pilíř udržitelnosti?",
    options: [
      "A) Protože je to technicky nemožné",
      "B) Protože by ostatní pilíře zanikly",
      "C) Protože udržitelnost vyžaduje rovnováhu všech tří"
    ],
    answer: 2
  },
  {
    question: "Co označujeme pojmem regionální disparity?",
    options: [
      "A) Rozdíly v cenách ubytování mezi městy",
      "B) Nerovnosti v úrovni rozvoje mezi regiony",
      "C) Nerovnosti mezi turisty a místními obyvateli"
    ],
    answer: 1
  },
  {
    question: "Který český kraj je považován za strukturálně znevýhodněný?",
    options: [
      "A) Jihomoravský",
      "B) Ústecký",
      "C) Středočeský"
    ],
    answer: 1
  },
  {
    question: "Jak může cestovní ruch pomoci snižovat regionální disparity?",
    options: [
      "A) Zvýšením spotřeby zahraničních značek",
      "B) Omezením výstavby v regionech",
      "C) Podporou místní zaměstnanosti a rozvoje infrastruktury"
    ],
    answer: 2
  },
  {
    question: "Co znamená pojem 'únosná kapacita území'?",
    options: [
      "A) Maximální počet zaměstnanců v CR",
      "B) Schopnost území unést tlak CR bez negativních dopadů",
      "C) Maximální výše dotací pro region"
    ],
    answer: 1
  },
  {
    question: "Která forma cestovního ruchu je nejvhodnější pro rozvoj venkovských oblastí?",
    options: [
      "A) Hromadný turismus",
      "B) Agroturismus a komunitní CR",
      "C) Městský luxusní CR"
    ],
    answer: 1
  },
  {
    question: "Jaký je význam DMO v řešení regionálních disparit?",
    options: [
      "A) Poskytuje ubytování a dopravu",
      "B) Zajišťuje koordinaci a marketing destinace",
      "C) Vypracovává územní plány"
    ],
    answer: 1
  },
  {
    question: "Co je nutné zohlednit při plánování CR v méně rozvinutých oblastech?",
    options: [
      "A) Jen ekonomický zisk",
      "B) Pouze počet lůžek v HUZ",
      "C) Ekologickou, ekonomickou, sociální a institucionální kapacitu"
    ],
    answer: 2
  },
  {
    question: "Co je hlavním účelem destinačního managementu?",
    options: [
      "Spravovat rezervace a prodeje zájezdů",
      "Zajišťovat propagační akce hotelů",
      "Koordinovat rozvoj a řízení destinace cestovního ruchu"
    ],
    answer: 2
  },
  {
    question: "Který z následujících prvků NEPATŘÍ mezi hlavní složky destinace cestovního ruchu?",
    options: [
      "Pojišťovny",
      "Atrakce",
      "Infrastruktura"
    ],
    answer: 0
  },
  {
    question: "Jaký je základní rozdíl mezi 'turistickou infrastrukturou' a 'dopravní infrastrukturou'?",
    options: [
      "Žádný rozdíl – jde o totéž",
      "Turistická infrastruktura zahrnuje hotely a značení, dopravní např. silnice a MHD",
      "Turistická infrastruktura je řízená státem, dopravní soukromými firmami"
    ],
    answer: 1
  },
  {
    question: "Kdo obvykle tvoří organizační a řídicí struktury destinace?",
    options: [
      "Pouze starostové obcí",
      "DMO, obce, podnikatelé a další partneři",
      "Cestovní kanceláře a agentury"
    ],
    answer: 1
  },
  {
    question: "Co je hlavním cílem vytváření značky destinace?",
    options: [
      "Získat dotaci od MMR",
      "Podpořit export místních potravin",
      "Budovat identitu a zvyšovat atraktivitu místa"
    ],
    answer: 2
  },
  {
    question: "Která z následujících činností je typická pro destinační management?",
    options: [
      "Vydávání víz pro turisty",
      "Zajištění jednotného marketingu destinace",
      "Stanovení měnové politiky pro CR"
    ],
    answer: 1
  },
  {
    question: "Proč je spolupráce místních aktérů důležitá pro úspěšný destinační management?",
    options: [
      "Protože to vyžaduje zákon o CR",
      "Aby se zabránilo uzavření hranic",
      "Aby destinace fungovala jako propojený systém"
    ],
    answer: 2
  },
  {
    question: "Který z následujících prvků NENÍ přímou součástí destinačního managementu?",
    options: [
      "Tvorba sezónních produktů",
      "Vydávání cestovních pasů",
      "Monitoring návštěvnosti"
    ],
    answer: 1
  },
  {
    question: "Jaký je hlavní cíl řízení cestovního ruchu v destinaci?",
    options: [
      "Maximalizace zisku cestovních kanceláří",
      "Dlouhodobě udržitelný a kvalitní rozvoj cestovního ruchu pro všechny aktéry",
      "Zvýšení počtu hotelových lůžek v regionu"
    ],
    answer: 1
  },
  {
    question: "Který z následujících přístupů klade důraz na zapojení komunity a rovnováhu mezi pilíři udržitelnosti?",
    options: [
      "Tradiční přístup",
      "Marketingově orientovaný přístup",
      "Udržitelný a integrovaný přístup"
    ],
    answer: 2
  },
  {
    question: "Co charakterizuje participativní přístup k řízení CR?",
    options: [
      "Řízení cestovního ruchu výhradně ze strany státu",
      "Spolupráce stakeholderů a bottom-up rozvoj",
      "Propagace destinace v médiích"
    ],
    answer: 1
  },
  {
    question: "Který z těchto prvků NENÍ součástí hlavních činností řízení CR v destinaci?",
    options: [
      "Tvorba a řízení produktů",
      "Vydávání cestovních pasů",
      "Monitoring a evaluace"
    ],
    answer: 1
  },
  {
    question: "Jakou roli hrají organizace destinačního managementu (DMO)?",
    options: [
      "Zajišťují ubytování turistům",
      "Koordinují rozvoj, marketing a strategii destinace",
      "Spravují veřejnou dopravu"
    ],
    answer: 1
  },
  {
    question: "Jaký je typický problém řízení CR v ČR?",
    options: [
      "Příliš mnoho mezinárodních turistů",
      "Roztříštěnost řízení a absence krajských DMO v některých regionech",
      "Přebytek financování a lidských zdrojů"
    ],
    answer: 1
  },
  {
    question: "Co nejlépe vystihuje strategický management destinace?",
    options: [
      "Krátkodobé promo akce a soutěže",
      "Dlouhodobá vize, akční plány a měření efektivity",
      "Zvýšení cen v turistické sezóně"
    ],
    answer: 1
  },
  {
    question: "Která organizace působí jako hlavní globální autorita v oblasti cestovního ruchu?",
    options: [
      "Eurostat",
      "CzechTourism",
      "UNWTO"
    ],
    answer: 2
  },
  {
    question: "Jaká je hlavní role CzechTourism na národní úrovni?",
    options: [
      "Vydává cestovní pasy",
      "Zajišťuje marketing a propagaci cestovního ruchu ČR",
      "Spravuje železniční dopravu pro turisty"
    ],
    answer: 1
  },
  {
    question: "Co je typickou funkcí regionální DMO?",
    options: [
      "Tvorba evropské legislativy",
      "Provoz letišť",
      "Koordinace cestovního ruchu v rámci kraje"
    ],
    answer: 2
  },
  {
    question: "Který subjekt v ČR nastavuje strategii státní politiky cestovního ruchu?",
    options: [
      "UNESCO",
      "MMR ČR",
      "Svaz měst a obcí"
    ],
    answer: 1
  },
  {
    question: "Jaká je role místních/mikroregionálních DMO?",
    options: [
      "Řídit mezinárodní spolupráci",
      "Zajišťovat marketing destinace a služby pro návštěvníky",
      "Tvořit zákony o cestovním ruchu"
    ],
    answer: 1
  },
  {
    question: "Co je nejčastější právní forma místních DMO?",
    options: [
      "Ministerstvo",
      "Akciová společnost",
      "Obecně prospěšná společnost nebo spolek"
    ],
    answer: 2
  },
  {
    question: "Který z těchto programů NENÍ typickým nástrojem EU pro podporu CR?",
    options: [
      "COSME",
      "Interreg",
      "TSA"
    ],
    answer: 2
  },
  {
    question: "Co je hlavní problém destinačního managementu v Ústeckém kraji?",
    options: [
      "Přebytek turistů a infrastruktury",
      "Chybějící krajská DMO a roztříštěnost",
      "Nedostatek kulturního dědictví"
    ],
    answer: 1
  },
  {
    question: "Jaký je hlavní účel organizace destinačního managementu (DMO)?",
    options: [
      "Zajištění levných letenek",
      "Koordinace rozvoje, marketingu a řízení cestovního ruchu",
      "Vydávání turistických pasů"
    ],
    answer: 1
  },
  {
    question: "Která z následujících činností NESPADÁ mezi přínosy DMO pro destinaci?",
    options: [
      "Strategické plánování a řízení destinace",
      "Prodej suvenýrů v infocentrech",
      "Monitoring a evaluace dopadů cestovního ruchu"
    ],
    answer: 1
  },
  {
    question: "Co je typickým výstupem práce DMO v oblasti marketingu?",
    options: [
      "Zřizování policejních hlídek",
      "Budování značky destinace a jednotná propagace",
      "Vyměřování daní v turistických oblastech"
    ],
    answer: 1
  },
  {
    question: "Jak může DMO pomoci podnikatelům v destinaci?",
    options: [
      "Zajistí jim zahraniční pracovníky",
      "Vede jejich účetnictví",
      "Zastřešuje žádosti o dotace a koordinuje projekty"
    ],
    answer: 2
  },
  {
    question: "Který z těchto příkladů NEPŘEDSTAVUJE přímý přínos DMO?",
    options: [
      "Koordinace aktérů v území",
      "Podpora tematických produktů",
      "Provoz státních hranic"
    ],
    answer: 2
  },
  {
    question: "Která organizace je příkladem úspěšné krajské DMO?",
    options: [
      "Jihočeská centrála cestovního ruchu",
      "Ministerstvo dopravy ČR",
      "Agentura ochrany přírody"
    ],
    answer: 0
  },
  {
    question: "Jak DMO přispívá k udržitelnosti cestovního ruchu?",
    options: [
      "Ruší turistické atrakce",
      "Zohledňuje únosnou kapacitu a chrání přírodní hodnoty",
      "Zajišťuje výhradně komerční projekty"
    ],
    answer: 1
  },
  {
    question: "Jaký hlavní problém brzdí efektivitu DMO systému v ČR?",
    options: [
      "Přebytek financí",
      "Chybějící centrální krajské DMO v některých regionech",
      "Přílišná účast obyvatel na rozhodování"
    ],
    answer: 1
  },
  {
    question: "Co je hlavním cílem teritoriálního marketingu?",
    options: [
      "Prodat co nejvíce suvenýrů",
      "Zvýšit atraktivitu území pro cílové skupiny jako turisté, podnikatelé či obyvatelé",
      "Vytvořit největší aquapark v regionu"
    ],
    answer: 1
  },
  {
    question: "Který z následujících prvků NESPADÁ mezi nástroje teritoriálního marketingu?",
    options: [
      "Storytelling",
      "Značka destinace",
      "Zřizování celních úřadů"
    ],
    answer: 2
  },
  {
    question: "Jaký je rozdíl mezi marketingem obce a kraje?",
    options: [
      "Obce mají širší kompetence než kraje",
      "Kraje koordinují regionální DMO a mají strategický přesah",
      "Obce mají větší rozpočet než kraje"
    ],
    answer: 1
  },
  {
    question: "Co je cílem segmentace trhu v teritoriálním marketingu?",
    options: [
      "Zrušit vstupné do všech památek",
      "Identifikovat a zacílit specifické skupiny návštěvníků",
      "Zamezit přístupu turistů mimo sezónu"
    ],
    answer: 1
  },
  {
    question: "Jaký typ marketingu využívá emoce a příběhy k propagaci destinace?",
    options: [
      "Segmentový marketing",
      "Taktický marketing",
      "Storytelling"
    ],
    answer: 2
  },
  {
    question: "Co nejlépe vystihuje funkci značky (brandu) destinace?",
    options: [
      "Jednotný vizuální styl a identita místa",
      "Cenová politika vstupenek",
      "Počet turistických informací na billboardech"
    ],
    answer: 0
  },
  {
    question: "Jaké aktivity často zajišťují obce v rámci teritoriálního marketingu?",
    options: [
      "Koordinace krajských DMO",
      "Strategie fondů soudržnosti",
      "Místní akce, TIC a drobná infrastruktura"
    ],
    answer: 2
  },
  {
    question: "Jaké výhody přináší spolupráce veřejného a soukromého sektoru (PPP) v teritoriálním marketingu?",
    options: [
      "Zvýšení počtu letišť",
      "Vytváření silnější značky a efektivnější správy",
      "Zrušení daňové povinnosti pro podnikatele"
    ],
    answer: 1
  },  
  {
    question: "Co je hlavním cílem marketingové strategie destinace cestovního ruchu?",
    options: [
      "Zvýšit počet místních obyvatel",
      "Dlouhodobě rozvíjet, propagovat a řídit destinaci udržitelně a konkurenceschopně",
      "Snížit daně v turistických oblastech"
    ],
    answer: 1
  },
  {
    question: "Co zahrnuje analytická část marketingové strategie?",
    options: [
      "Pouze SWOT analýzu",
      "Pouze výběr cílové skupiny",
      "SWOT analýzu, znalost image a analýzu trhu"
    ],
    answer: 2
  },
  {
    question: "Co znamená segmentace v marketingové strategii destinace?",
    options: [
      "Zvýšení vstupného na atraktivity",
      "Rozdělení trhu do skupin podle charakteristik a potřeb",
      "Omezení propagace jen na domácí trh"
    ],
    answer: 1
  },
  {
    question: "Který z následujících prvků NEpatří do marketingového mixu 8P?",
    options: [
      "Programming",
      "Packaging",
      "Performance"
    ],
    answer: 2
  },
  {
    question: "Co je cílem pozicioningu v rámci strategie?",
    options: [
      "Najít výhodnou lokalitu pro výstavbu hotelu",
      "Určit jedinečnou pozici destinace a její odlišení na trhu",
      "Změnit název destinace"
    ],
    answer: 1
  },
  {
    question: "Jaké ukazatele se sledují v rámci evaluace strategie?",
    options: [
      "Počet restaurací v destinaci",
      "Návštěvnost, spokojenost návštěvníků a návratnost investic",
      "Délka silnic v regionu"
    ],
    answer: 1
  },
  {
    question: "Který z těchto příkladů je strategický cíl destinace?",
    options: [
      "Zvýšit cenu ubytování",
      "Zavést novou daň pro turisty",
      "Přilákat zahraniční návštěvníky z konkrétních trhů"
    ],
    answer: 2
  },
  {
    question: "Jaký význam má značka destinace v marketingové strategii?",
    options: [
      "Je to povinný údaj v turistické evidenci",
      "Pomáhá vytvořit identitu a pozitivní vnímání místa",
      "Slouží k výpočtu daně z cestovního ruchu"
    ],
    answer: 1
  },
  {
    question: "Který zákon tvoří legislativní rámec pro strategické dokumenty rozvoje cestovního ruchu v ČR?",
    options: [
      "Zákon č. 128/2000 Sb. o obcích",
      "Zákon č. 248/2000 Sb. o podpoře regionálního rozvoje",
      "Zákon č. 565/1990 Sb. o místních poplatcích"
    ],
    answer: 1
  },
  {
    question: "Jaký je hlavní rozdíl mezi strategickým a marketingovým dokumentem?",
    options: [
      "Strategie řeší finance, marketing komunikaci a propagaci",
      "Strategie je dlouhodobý plán rozvoje, marketing řeší komunikaci a značku",
      "Marketingový dokument je právně závazný, strategie ne"
    ],
    answer: 1
  },
  {
    question: "Který z následujících NENÍ typickým výstupem strategického dokumentu?",
    options: [
      "SWOT analýza",
      "Značka destinace",
      "Opatření a aktivity"
    ],
    answer: 1
  },
  {
    question: "Jaké je hlavní využití těchto dokumentů pro dotační řízení?",
    options: [
      "Slouží jako povinná příloha k daňovému přiznání",
      "Slouží jako podklad pro vyhlašování výzev a hodnocení projektů",
      "Nahrazují projektovou žádost"
    ],
    answer: 1
  },
  {
    question: "Co obvykle obsahuje marketingová strategie kraje?",
    options: [
      "Cíle, harmonogram, povolení ke stavbě",
      "Analýzu trhu, cílové skupiny, pozicioning a komunikační nástroje",
      "Předpisy pro výběr daní z CR"
    ],
    answer: 1
  },
  {
    question: "Jaký je příklad propojení strategie a marketingu z praxe?",
    options: [
      "Jihomoravský kraj – značka 'Zážitky z jižní Moravy' jako výstup strategie",
      "Praha – zrušení turistické daně",
      "Plzeňský kraj – úplný zákaz marketingu CR"
    ],
    answer: 0
  },
  {
    question: "Jaké části obvykle obsahuje strategický dokument rozvoje CR?",
    options: [
      "Analytickou část, cíle, opatření, realizační část a monitoring",
      "Pouze SWOT a kontakty na DMO",
      "Návrh nových zákonů a daní"
    ],
    answer: 0
  },
  {
    question: "Jaký je účel značení a vizuální identity regionu?",
    options: [
      "Slouží pouze jako logo pro dotace",
      "Vytváří jednotnou a rozpoznatelnou komunikaci regionu navenek",
      "Nahrazuje správní rozhodnutí v území"
    ],
    answer: 1
  },
  {
    question: "Který orgán je hlavním gestorem státní politiky cestovního ruchu v ČR?",
    options: [
      "Ministerstvo kultury",
      "Ministerstvo pro místní rozvoj ČR",
      "CzechTourism"
    ],
    answer: 1
  },
  {
    question: "Jakou hlavní roli plní agentura CzechTourism?",
    options: [
      "Legislativní dohled nad organizacemi CR",
      "Marketing České republiky jako turistické destinace a výzkum trhu",
      "Financování dopravní infrastruktury"
    ],
    answer: 1
  },
  {
    question: "Které ministerstvo má na starosti lázeňství v rámci CR?",
    options: [
      "Ministerstvo zdravotnictví",
      "Ministerstvo dopravy",
      "Ministerstvo zemědělství"
    ],
    answer: 0
  },
  {
    question: "Jakou roli hrají obce v oblasti cestovního ruchu?",
    options: [
      "Tvoří národní marketingové strategie",
      "Realizují lokální projekty, spravují TIC a drobnou infrastrukturu",
      "Zajišťují výběr daně z příjmů podnikatelů v CR"
    ],
    answer: 1
  },
  {
    question: "Jaký je hlavní rozdíl mezi MMR ČR a CzechTourism?",
    options: [
      "MMR se věnuje propagaci, CzechTourism legislativě",
      "MMR vytváří koncepce a metodiky, CzechTourism zajišťuje marketing a analýzy",
      "Obě instituce mají totožné funkce"
    ],
    answer: 1
  },
  {
    question: "Na které úrovni veřejné správy působí krajské úřady v oblasti CR?",
    options: [
      "Ústřední úroveň",
      "NUTS 5",
      "NUTS 3"
    ],
    answer: 2
  },
  {
    question: "Který z následujících subjektů není přímou součástí veřejné správy, ale s ní úzce spolupracuje?",
    options: [
      "Ministerstvo kultury",
      "DMO (organizace destinačního managementu)",
      "Krajský úřad"
    ],
    answer: 1
  },
  {
    question: "Jakou možnost mají obce pro získání příjmů z cestovního ruchu?",
    options: [
      "Zavedení místního poplatku z pobytu",
      "Zvýšení DPH",
      "Zřízení povinného vstupného do města"
    ],
    answer: 0
  },
  {
    question: "Který z následujících produktů je typickým klíčovým produktem cestovního ruchu v ČR?",
    options: [
      "Agroturistika",
      "Lázeňství",
      "Geoturistika"
    ],
    answer: 1
  },
  {
    question: "Co platí o vedlejších produktech destinace?",
    options: [
      "Jsou hlavním tahounem zahraniční návštěvnosti",
      "Jsou méně známé, ale mohou prodloužit délku pobytu",
      "Jsou určeny výhradně pro domácí turisty"
    ],
    answer: 1
  },
  {
    question: "Který segment návštěvníků preferuje zážitky, aktivní turismus a digitální prostředí?",
    options: [
      "Senioři",
      "Rodiny s dětmi",
      "Mladí dospělí (20–35 let)"
    ],
    answer: 2
  },
  {
    question: "Mezi hlavní zahraniční zdrojové trhy pro Českou republiku NEpatří:",
    options: [
      "USA",
      "Francie",
      "Německo"
    ],
    answer: 1
  },
  {
    question: "Jaký je význam domácího trhu po roce 2020?",
    options: [
      "Ztratil na významu kvůli návratu zahraničního turismu",
      "Získal význam jako klíčový pro mimosezónu a venkov",
      "Přestal být součástí marketingové strategie"
    ],
    answer: 1
  },
  {
    question: "Který z následujících příkladů lze zařadit mezi vedlejší produkty CR?",
    options: [
      "Městský CR",
      "Zimní sporty",
      "Industriální cestovní ruch"
    ],
    answer: 2
  },
  {
    question: "Proč je důležitá segmentace cílových trhů?",
    options: [
      "Aby mohla destinace zrušit méně výdělečné produkty",
      "Aby se zvýšila výběr daní z pobytu",
      "Aby bylo možné efektivně cílit nabídku a propagaci"
    ],
    answer: 2
  },
  {
    question: "Jaké je klíčové motto strategie rozvoje cestovního ruchu ČR 2021–2030?",
    options: [
      "Růst za každou cenu",
      "Směřování, Spolupráce, Systém",
      "Více turistů, více zisku"
    ],
    answer: 1
  },
  {
    question: "Kdo je garantem Strategie rozvoje cestovního ruchu ČR 2021–2030?",
    options: [
      "Agentura CzechTourism",
      "Ministerstvo kultury",
      "Ministerstvo pro místní rozvoj ČR"
    ],
    answer: 2
  },
  {
    question: "Který z následujících cílů NENÍ součástí strategie 2021–2030?",
    options: [
      "Zvýšení počtu turistů o 50 % do roku 2030",
      "Digitalizace a inovace",
      "Vyvážený regionální rozvoj"
    ],
    answer: 0
  },
  {
    question: "Co znamená cíl 'profesionalizace řízení CR' ve strategii?",
    options: [
      "Zvýšení počtu hotelů v centrech měst",
      "Zajištění školení a jasných kompetencí DMO",
      "Privatizace marketingu cestovního ruchu"
    ],
    answer: 1
  },
  {
    question: "Jaká nová instituce byla navržena v rámci implementace strategie?",
    options: [
      "Národní fond pro CR",
      "Rada pro cestovní ruch",
      "Evropská platforma CR"
    ],
    answer: 1
  },
  {
    question: "K jakému posunu oproti minulosti dochází ve strategii ČR 2021–2030?",
    options: [
      "Od kvality ke kvantitě",
      "Od růstu kvantity k důrazu na kvalitu, koordinaci a data",
      "Od digitalizace k tradičním formám propagace"
    ],
    answer: 1
  },
  {
    question: "Jaká role je ve strategii přisuzována krajům?",
    options: [
      "Mají být hlavními příjemci dotací z MMR",
      "Mají být provozovateli TIC",
      "Mají zastřešovat činnost DMO a integrovat aktéry"
    ],
    answer: 2
  },
  {
    question: "Který z následujících příkladů NEspadá do kolaborativní ekonomiky v cestovním ruchu?",
    options: [
      "Hotelový řetězec Marriott",
      "Airbnb",
      "BlaBlaCar"
    ],
    answer: 0
  },
  {
    question: "Který z následujících je rizikem kolaborativní ekonomiky v oblasti ubytování?",
    options: [
      "Nižší cena pro turisty",
      "Zvyšování cen nájmů a vytlačování rezidentů",
      "Vyšší obsazenost hotelů"
    ],
    answer: 1
  },
  {
    question: "Jaké opatření NEPATŘÍ mezi možnosti regulace kolaborativní ekonomiky?",
    options: [
      "Zákaz marketingu destinací",
      "Licencování a povinné hlášení",
      "Platformová odpovědnost"
    ],
    answer: 0
  },
  {
    question: "Co je typickým znakem kolaborativní ekonomiky?",
    options: [
      "Zprostředkování služeb výhradně firmami",
      "Sdílení nevyužívaných kapacit mezi jednotlivci",
      "Centrálně řízené plánování nabídky služeb"
    ],
    answer: 1
  },
  {
    question: "Která digitální platforma umožňuje sdílení zážitků a lokálních aktivit?",
    options: [
      "BlaBlaCar",
      "Airbnb Experiences",
      "Booking.com"
    ],
    answer: 1
  },
  {
    question: "Jaký je cíl regulace kolaborativní ekonomiky podle EU?",
    options: [
      "Zvýhodnění digitálních platforem",
      "Zajištění rovnosti podmínek a ochrany spotřebitele",
      "Zákaz sdíleného ubytování"
    ],
    answer: 1
  },
  {
    question: "K jakému posunu v regulaci došlo v ČR v roce 2023?",
    options: [
      "Zrušení poplatků za pobyt",
      "Zpřísnění daňových podmínek pro krátkodobé pronájmy",
      "Zákaz využívání sdílených koloběžek"
    ],
    answer: 1
  },
  {
    question: "Co je hlavním cílem trendu zvaného slow tourism?",
    options: [
      "Navštívit co nejvíce atrakcí v krátkém čase",
      "Prožít hlubší zážitek při delším pobytu a menším počtu aktivit",
      "Cestovat bez rezervace a plánování"
    ],
    answer: 1
  },
  {
    question: "Která technologie patří do konceptu smart destinací?",
    options: [
      "Papírové brožury",
      "Internet věcí (IoT) a mobilní aplikace",
      "Klasické cestovní kanceláře"
    ],
    answer: 1
  },
  {
    question: "Jaký dopad měla pandemie COVID-19 na chování turistů?",
    options: [
      "Růst zájmu o exotické destinace",
      "Pokles zájmu o přírodu a venkov",
      "Posílení domácího cestovního ruchu a zájmu o bezpečnost"
    ],
    answer: 2
  },
  {
    question: "Co označuje pojem bleisure?",
    options: [
      "Kombinaci wellness a dobrodružství",
      "Kombinaci pracovní a volnočasové cesty",
      "Cestování bez předchozí rezervace"
    ],
    answer: 1
  },
  {
    question: "Která generace je typická důrazem na zážitky, ekologii a digitalizaci?",
    options: [
      "Generace X",
      "Generace Z a mileniálové",
      "Baby boomers"
    ],
    answer: 1
  },
  {
    question: "Který marketingový nástroj využívá obsah vytvořený samotnými uživateli?",
    options: [
      "Influencer marketing",
      "UGC (user-generated content)",
      "PPC reklama"
    ],
    answer: 1
  },
  {
    question: "Který trend souvisí s rozvojem služeb jako jóga, digitální detox nebo spánková terapie?",
    options: [
      "Kolaborativní ekonomika",
      "Wellness a well-being",
      "Smart destinace"
    ],
    answer: 1
  }
];
window.questions = questions;
