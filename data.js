// Life in the UK Test — All Q&A data from Exams 1–17
// Source: lifeintheuktestweb.co.uk

// ─────────────────────────────────────────────────────────────────
// REGIONS TABLE  (single unified table, one row per topic)
// Use category:"..." rows to insert section headers
// Use "" for cells that don't apply to a region
// ─────────────────────────────────────────────────────────────────
const REGIONS_TABLE = [

  // ── SYMBOLS & IDENTITY ───────────────────────────────────────
  { category: "Symbols & Identity" },
  {
    question: "Patron Saint?",
    england: "St George", scotland: "St Andrew", wales: "St David", ni: "St Patrick",
    exams: [1,3,5,10]
  },
  {
    question: "Patron Saint's Day?",
    england: "23rd April", scotland: "30th November", wales: "1st March", ni: "17th March",
    exams: [8,11,13,14]
  },
  {
    question: "Patron Saint's Day — public holiday?",
    england: "No", scotland: "No", wales: "No", ni: "Yes",
    exams: [2]
  },
  {
    question: "Capital City?",
    england: "London", scotland: "Edinburgh", wales: "Cardiff", ni: "Belfast",
    exams: [3,7,9]
  },
  {
    question: "Flower Symbol?",
    england: "Rose", scotland: "Thistle", wales: "Daffodil", ni: "Shamrock",
    exams: [4,8,9,16]
  },

  // ── RELIGION & CHURCH ────────────────────────────────────────
  { category: "Religion & Church" },
  {
    question: "Own established church?",
    england: "Yes — Church of England", scotland: "Yes — Presbyterian", wales: "No", ni: "No",
    exams: [3,5,6,10]
  },
  {
    question: "Head of the Church of England?",
    england: "The Monarch", scotland: "—", wales: "—", ni: "—",
    exams: [4]
  },
  {
    question: "Spiritual leader of Church of England?",
    england: "Archbishop of Canterbury", scotland: "—", wales: "—", ni: "—",
    exams: [13]
  },
  {
    question: "When was a Protestant church established?",
    england: "1534 (Church of England)", scotland: "1560", wales: "—", ni: "—",
    exams: [3,11]
  },

  // ── GOVERNMENT & DEVOLUTION ──────────────────────────────────
  { category: "Government & Devolution" },
  {
    question: "Own Parliament / Assembly?",
    england: "— (Westminster)", scotland: "Scottish Parliament", wales: "Welsh Assembly", ni: "Northern Ireland Assembly",
    exams: [16]
  },
  {
    question: "Number of members?",
    england: "—", scotland: "—", wales: "60", ni: "90",
    exams: [10,12]
  },
  {
    question: "Elected every?",
    england: "—", scotland: "—", wales: "4 years", ni: "—",
    exams: [8]
  },
  {
    question: "Election method?",
    england: "—", scotland: "—", wales: "—", ni: "Proportional representation",
    exams: [14]
  },
  {
    question: "Can legislate on: Health & Education?",
    england: "—", scotland: "Yes", wales: "Yes", ni: "Yes",
    exams: [7]
  },
  {
    question: "Cannot legislate on?",
    england: "—", scotland: "Defence, Immigration", wales: "—", ni: "Defence, Immigration",
    exams: [7,11]
  },
  {
    question: "Own banknotes (valid UK-wide)?",
    england: "—", scotland: "Yes", wales: "—", ni: "Yes",
    exams: [2,8]
  },

  // ── LEGAL SYSTEM ─────────────────────────────────────────────
  { category: "Legal System" },
  {
    question: "Court for minor criminal cases?",
    england: "Magistrates' Court", scotland: "Justice of the Peace Court", wales: "Magistrates' Court", ni: "Magistrates' Court",
    exams: [2,6]
  },
  {
    question: "Jury size?",
    england: "12", scotland: "15", wales: "12", ni: "12",
    exams: [2,7]
  },
  {
    question: "Youth Court heard by?",
    england: "Up to 3 magistrates or District Judge", scotland: "—", wales: "Up to 3 magistrates or District Judge", ni: "Up to 3 magistrates or District Judge",
    exams: [15,16,17]
  },
  {
    question: "Small claims max amount?",
    england: "£10,000", scotland: "£5,000", wales: "£10,000", ni: "£5,000",
    exams: [14,16]
  },

  // ── FOOD & TRADITIONS ─────────────────────────────────────────
  { category: "Food & Traditions" },
  {
    question: "Traditional food?",
    england: "—", scotland: "Haggis", wales: "—", ni: "Ulster Fry",
    exams: [6,14]
  },
  {
    question: "New Year's Eve name?",
    england: "New Year's Eve", scotland: "Hogmanay", wales: "—", ni: "—",
    exams: [3,9,14]
  },
  {
    question: "New Year's Eve song (whole UK)?",
    england: "Auld Lang Syne", scotland: "Auld Lang Syne", wales: "Auld Lang Syne", ni: "Auld Lang Syne",
    exams: [15]
  },

  // ── GEOGRAPHY & LANDMARKS ────────────────────────────────────
  { category: "Geography & Landmarks" },
  {
    question: "Famous National Park?",
    england: "Lake District (largest in England)", scotland: "Loch Lomond & The Trossachs", wales: "Snowdonia", ni: "—",
    exams: [3,10,13]
  },
  {
    question: "Famous prehistoric site?",
    england: "Stonehenge (Wiltshire)", scotland: "Skara Brae", wales: "—", ni: "—",
    exams: [14,17]
  },
  {
    question: "Famous natural landmark?",
    england: "—", scotland: "—", wales: "—", ni: "Giant's Causeway",
    exams: [16]
  },
  {
    question: "Famous castle / historic building?",
    england: "Tower of London", scotland: "Crathes Castle", wales: "Caernarfon Castle", ni: "—",
    exams: [6,13]
  },
  {
    question: "Cultural / festival location?",
    england: "London West End (Theatreland)", scotland: "Edinburgh (Fringe Festival)", wales: "Cardiff / Swansea", ni: "Belfast",
    exams: [3,6,10,11]
  },

  // ── SPORT ────────────────────────────────────────────────────
  { category: "Sport" },
  {
    question: "Sport originated here?",
    england: "Cricket (The Ashes)", scotland: "Golf", wales: "—", ni: "—",
    exams: [2,5,7]
  },
  {
    question: "Famous horse racing event / venue?",
    england: "Royal Ascot; Newmarket (National Horseracing Museum)", scotland: "Ayr (Scottish Grand National)", wales: "—", ni: "—",
    exams: [7,10,13]
  },
  {
    question: "Famous tennis tournament?",
    england: "Wimbledon", scotland: "—", wales: "—", ni: "—",
    exams: [12]
  },

  // ── NOTABLE PEOPLE ────────────────────────────────────────────
  { category: "Notable People" },
  {
    question: "Famous inventor / scientist?",
    england: "Isaac Newton (gravity); Frank Whittle (jet engine); Alan Turing (Turing machine); Tim Berners-Lee (WWW); Francis Crick (DNA); Ernest Rutherford (atom)",
    scotland: "John Logie Baird (TV); Alexander Fleming (penicillin)",
    wales: "—", ni: "—",
    exams: [1,2,10,12,15,16]
  },
  {
    question: "Famous writer / poet?",
    england: "William Shakespeare (Stratford-upon-Avon); William Wordsworth; Geoffrey Chaucer; William Caxton (printing)",
    scotland: "Robert Burns",
    wales: "—", ni: "—",
    exams: [2,6,9,11,13]
  },
  {
    question: "Famous political leader?",
    england: "Winston Churchill; Margaret Thatcher (1st female PM); Oliver Cromwell; Sir Robert Walpole (1st PM)",
    scotland: "Robert the Bruce; Bonnie Prince Charlie",
    wales: "—", ni: "—",
    exams: [1,2,4,7,11,13,14]
  },

  // ── KEY HISTORICAL EVENTS ─────────────────────────────────────
  { category: "Key Historical Events" },
  {
    question: "Key battle?",
    england: "Battle of Hastings 1066; Battle of Trafalgar 1805; Battle of Waterloo 1815",
    scotland: "Battle of Bannockburn 1314 (Robert the Bruce defeated English)",
    wales: "—",
    ni: "Battle of the Boyne 1690 (James II defeated)",
    exams: [1,4,7,9,12,17]
  },
  {
    question: "Famous historic massacre / clearance?",
    england: "—", scotland: "Glencoe Massacre (~1692); Highland Clearances", wales: "—", ni: "—",
    exams: [7]
  },
  {
    question: "When did region join the Union?",
    england: "—", scotland: "Act of Union 1707", wales: "1536 (Laws in Wales Acts)", ni: "1800 (Acts of Union)",
    exams: []
  },
];

// ─────────────────────────────────────────────────────────────────
// TIMELINE DATA
// ─────────────────────────────────────────────────────────────────
const TIMELINE_DATA = [
  // PREHISTORIC
  { period: "Stone Age", year: "~800,000 BC", era: "Prehistoric", fact: "First people in Britain were hunter-gatherers", exams: [7] },
  { period: "Neolithic", year: "~4,000 BC", era: "Prehistoric", fact: "First farmers came to Britain from South-East Europe (~6,000 years ago)", exams: [2, 15] },
  { period: "Iron Age", year: "~800 BC", era: "Prehistoric", fact: "First coins minted in Britain, showing names of Iron Age kings", exams: [6, 11, 12] },
  { period: "Ancient", year: "~3,000 BC", era: "Prehistoric", fact: "Stonehenge built in Wiltshire", exams: [14] },
  { period: "Ancient", year: "~3,000 BC", era: "Prehistoric", fact: "Skara Brae – prehistoric settlement in Scotland", exams: [17] },

  // ROMAN
  { period: "Roman", year: "55 BC", era: "Roman Britain", fact: "Julius Caesar led the first invasion of Britain", exams: [2] },
  { period: "Roman", year: "~AD 60", era: "Roman Britain", fact: "Boudicca – tribal leader who fought against the Romans", exams: [4, 13, 14] },
  { period: "Roman", year: "~AD 122", era: "Roman Britain", fact: "Emperor Hadrian built a wall in northern England to keep out the Picts", exams: [10] },
  { period: "Roman", year: "AD 410", era: "Roman Britain", fact: "Romans left Britain", exams: [16] },

  // ANGLO-SAXON & VIKING
  { period: "Anglo-Saxon", year: "After AD 410", era: "Anglo-Saxon & Viking", fact: "The Jutes came to Britain from northern Europe after the Romans left", exams: [16] },
  { period: "Anglo-Saxon", year: "~9th century", era: "Anglo-Saxon & Viking", fact: "King Alfred the Great united Anglo-Saxon kingdoms and defeated the Vikings", exams: [2, 13] },

  // NORMAN
  { period: "Norman", year: "1066", era: "Norman Conquest", fact: "Battle of Hastings — last successful foreign invasion of England; the Norman Conquest", exams: [2, 7] },
  { period: "Norman", year: "1066", era: "Norman Conquest", fact: "William the Conqueror (from France) built the Tower of London (White Tower)", exams: [6, 16, 17] },
  { period: "Norman", year: "~1086", era: "Norman Conquest", fact: "Domesday Book written after the Norman Conquest — tells how people lived in England", exams: [11, 15] },
  { period: "Norman", year: "Post-1066", era: "Norman Conquest", fact: "English language developed from Anglo-Saxon + Norman French", exams: [11, 15] },

  // MEDIEVAL
  { period: "Medieval", year: "1215", era: "Medieval", fact: "Magna Carta created — restricted the King's power", exams: [2, 8] },
  { period: "Medieval", year: "~1300s", era: "Medieval", fact: "Geoffrey Chaucer wrote the Canterbury Tales", exams: [4, 10, 13] },
  { period: "Medieval", year: "1314", era: "Medieval", fact: "Battle of Bannockburn — Robert the Bruce defeated the English; Scotland remained unconquered", exams: [7, 12] },
  { period: "Medieval", year: "1348", era: "Medieval", fact: "Black Death (plague) — one third of the population of England died", exams: [6, 17] },
  { period: "Medieval", year: "~1337–1453", era: "Medieval", fact: "Hundred Years War with France", exams: [3] },
  { period: "Medieval", year: "~1455–1485", era: "Medieval", fact: "Wars of the Roses — House of York vs House of Lancaster", exams: [1] },

  // TUDOR
  { period: "Tudor", year: "~1476", era: "Tudor", fact: "William Caxton — first person to print books in England using a printing press", exams: [2, 13] },
  { period: "Tudor", year: "~1534", era: "Tudor", fact: "Henry VIII established the Church of England (the Reformation) — Pope refused his divorce from Catherine of Aragon", exams: [3, 6, 7] },
  { period: "Tudor", year: "~1536", era: "Tudor", fact: "Anne Boleyn executed at the Tower of London", exams: [4] },
  { period: "Tudor", year: "~1558", era: "Tudor", fact: "Elizabeth I became Queen — Protestant; found balance between Catholic and extreme Protestant views", exams: [6, 13] },
  { period: "Tudor", year: "~1585", era: "Tudor", fact: "English settlers began colonising the eastern coast of America under Elizabeth I", exams: [6] },
  { period: "Tudor", year: "1588", era: "Tudor", fact: "English defeated the Spanish Armada sent by Spain to conquer England", exams: [1, 8, 13] },

  // STUART
  { period: "Stuart", year: "1603", era: "Stuart", fact: "James I (King of Scotland) became King of England — united the crowns", exams: [13] },
  { period: "Stuart", year: "1611", era: "Stuart", fact: "King James I — Authorised (King James) Version of the Bible", exams: [12] },
  { period: "Stuart", year: "1642", era: "Stuart", fact: "English Civil War — Cavaliers (Charles I supporters) vs Roundheads; battles of Marston Moor & Naseby", exams: [4, 7, 15] },
  { period: "Stuart", year: "1649", era: "Stuart", fact: "Charles I executed after the Civil War — England briefly became a republic", exams: [6, 17] },
  { period: "Stuart", year: "~1650s", era: "Stuart", fact: "Oliver Cromwell given the title of Lord Protector (ruled England as a republic)", exams: [1] },
  { period: "Stuart", year: "~1651", era: "Stuart", fact: "Charles II hid in an oak tree after Civil War defeat, then escaped to Europe", exams: [5, 13] },
  { period: "Stuart", year: "1666", era: "Stuart", fact: "Great Fire of London during Charles II's reign; St Paul's Cathedral rebuilt by Sir Christopher Wren", exams: [4, 11] },
  { period: "Stuart", year: "1688", era: "Stuart", fact: "The Glorious Revolution — William of Orange (from Netherlands) invited to invade England; bloodless takeover", exams: [5, 16, 17] },
  { period: "Stuart", year: "1689", era: "Stuart", fact: "Bill of Rights confirmed — did NOT give women the right to vote; did NOT give all adult men the vote", exams: [1, 7] },
  { period: "Stuart", year: "1689", era: "Stuart", fact: "Habeas Corpus Act — gave everyone the right to a court hearing", exams: [10] },
  { period: "Stuart", year: "1689+", era: "Stuart", fact: "Constitutional monarchy established after the Glorious Revolution", exams: [10] },
  { period: "Stuart", year: "1690", era: "Stuart", fact: "Battle of the Boyne — James II defeated", exams: [17] },
  { period: "Stuart", year: "~1692", era: "Stuart", fact: "Massacre of the MacDonalds of Glencoe — killed for not taking the oath", exams: [7] },
  { period: "Stuart", year: "1707", era: "Stuart", fact: "Act of Union — united England and Scotland", exams: [] },
  { period: "Stuart", year: "1745", era: "Stuart", fact: "Bonnie Prince Charlie raised an army with support from Highland clansmen", exams: [3, 13] },

  // 18TH CENTURY
  { period: "18th Century", year: "1680–1720", era: "18th Century", fact: "Huguenot refugees fled to Britain from France", exams: [12] },
  { period: "18th Century", year: "~1700s", era: "18th Century", fact: "Manufacturing was the biggest source of employment in the 18th century", exams: [7] },
  { period: "18th Century", year: "~1760s+", era: "18th Century", fact: "Industrial Revolution — steam power drove rapid development; canals built to link factories to towns and ports", exams: [9, 14] },
  { period: "18th Century", year: "~1770s", era: "18th Century", fact: "The Enlightenment — new ideas in politics, philosophy and science. Adam Smith (economics), David Hume (philosophy)", exams: [5, 14, 17] },
  { period: "18th Century", year: "1776", era: "18th Century", fact: "American colonies declared independence — 'no taxation without representation'", exams: [3, 15] },

  // 19TH CENTURY
  { period: "19th Century", year: "1805", era: "19th Century", fact: "Battle of Trafalgar — Admiral Nelson died defeating the French and Spanish fleets", exams: [5, 14] },
  { period: "19th Century", year: "1807", era: "19th Century", fact: "Abolition of the slave trade in Britain", exams: [] },
  { period: "19th Century", year: "1815", era: "19th Century", fact: "Battle of Waterloo — last battle between Great Britain and France; Napoleon defeated", exams: [4, 9] },
  { period: "19th Century", year: "1833", era: "19th Century", fact: "Emancipation Act abolished slavery throughout the British Empire", exams: [7, 15] },
  { period: "19th Century", year: "1847", era: "19th Century", fact: "Factories Act — limited women and children to 10 hours of work per day", exams: [17] },
  { period: "19th Century", year: "~1840s", era: "19th Century", fact: "Ireland famine caused by potato shortage — many Irish died or emigrated", exams: [17] },
  { period: "19th Century", year: "~1850s", era: "19th Century", fact: "Crimean War — first war extensively covered by the media; Florence Nightingale served as a nurse", exams: [11, 14] },
  { period: "19th Century", year: "1851", era: "19th Century", fact: "Great Exhibition held at the Crystal Palace in Hyde Park, London", exams: [9] },
  { period: "19th Century", year: "~1860s", era: "19th Century", fact: "Fenians — Irish people who favoured complete independence from the UK", exams: [15] },
  { period: "19th Century", year: "~1880s", era: "19th Century", fact: "Highland Clearances — Scottish landlords cleared small farms to create large sheep and cattle farms", exams: [7] },
  { period: "19th Century", year: "1899–1902", era: "19th Century", fact: "Boer War in South Africa — British fought against the Boers (South African settlers)", exams: [5, 9] },

  // EARLY 20TH CENTURY
  { period: "Early 20th C", year: "1913", era: "Early 20th Century", fact: "British government promised Home Rule for Ireland (delayed until 1921 due to WWI)", exams: [6] },
  { period: "Early 20th C", year: "1914", era: "Early 20th Century", fact: "WWI started — triggered by assassination of Archduke Franz Ferdinand of Austria", exams: [7] },
  { period: "Early 20th C", year: "1918", era: "Early 20th Century", fact: "WWI ended at 11:00 am on 11th November 1918", exams: [10, 15] },
  { period: "Early 20th C", year: "1918", era: "Early 20th Century", fact: "Women over 30 given the right to vote — in recognition of their contribution to WWI", exams: [2, 10] },
  { period: "Early 20th C", year: "1921", era: "Early 20th Century", fact: "Ireland Home Rule enacted; partition of Ireland", exams: [6] },
  { period: "Early 20th C", year: "1928", era: "Early 20th Century", fact: "Women given equal voting rights at 21 — the same as men", exams: [1, 4, 9] },
  { period: "Early 20th C", year: "1930s", era: "Early 20th Century", fact: "Great Depression — shipbuilding industry badly affected", exams: [3] },
  { period: "Early 20th C", year: "1930s", era: "Early 20th Century", fact: "Sir Frank Whittle invented the jet engine", exams: [1] },
  { period: "Early 20th C", year: "1930s", era: "Early 20th Century", fact: "Alan Turing invented the Turing machine (foundation of modern computing)", exams: [15] },
  { period: "Early 20th C", year: "1939", era: "Early 20th Century", fact: "Germany invaded Poland — WWII began", exams: [3, 5, 8] },
  { period: "Early 20th C", year: "1940", era: "Early 20th Century", fact: "Battle of Britain — aerial battle; Germany bombed Britain; the Royal Air Force defended", exams: [6, 11, 13] },
  { period: "Early 20th C", year: "1940", era: "Early 20th Century", fact: "Dunkirk — evacuation of Allied soldiers from France (the 'Dunkirk spirit')", exams: [12] },
  { period: "Early 20th C", year: "1944", era: "Early 20th Century", fact: "Butler Act — introduced free secondary education in England and Wales", exams: [9] },
  { period: "Early 20th C", year: "1945", era: "Early 20th Century", fact: "WWII ended; Clement Attlee elected Prime Minister; United Nations set up", exams: [14, 16] },
  { period: "Early 20th C", year: "1949", era: "Early 20th Century", fact: "Ireland became a republic", exams: [2] },

  // POST-WAR & MODERN
  { period: "Post-War", year: "1950s", era: "Post-War & Modern", fact: "Francis Crick co-discovered the structure of the DNA molecule", exams: [8, 16] },
  { period: "Post-War", year: "1952", era: "Post-War & Modern", fact: "Ernest Rutherford led a team of scientists to split the atom for the first time", exams: [15] },
  { period: "Post-War", year: "1954", era: "Post-War & Modern", fact: "Sir Roger Bannister became the first man to run a mile in under 4 minutes", exams: [3] },
  { period: "Post-War", year: "1960s", era: "Post-War & Modern", fact: "Swinging Sixties — The Beatles & Rolling Stones; social laws liberalised; pop art (David Hockney)", exams: [2, 8, 12, 15] },
  { period: "Post-War", year: "1966", era: "Post-War & Modern", fact: "England won the Football World Cup; captain Bobby Moore", exams: [1] },
  { period: "Post-War", year: "1972", era: "Post-War & Modern", fact: "Mary Peters won Olympic gold medal at the Munich Games", exams: [15] },
  { period: "Post-War", year: "1979", era: "Post-War & Modern", fact: "Margaret Thatcher became the first female Prime Minister (longest serving PM of the 20th century)", exams: [1, 11, 17] },
  { period: "Post-War", year: "1990s", era: "Post-War & Modern", fact: "John Major played an important part in the Northern Ireland peace process", exams: [16] },
  { period: "Post-War", year: "1997", era: "Post-War & Modern", fact: "Tony Blair (Labour) introduced the Scottish Parliament and the Welsh Assembly", exams: [16] },
  { period: "Post-War", year: "2002", era: "Post-War & Modern", fact: "Winston Churchill voted the Greatest Briton of all time", exams: [4, 12] },
  { period: "Post-War", year: "2003", era: "Post-War & Modern", fact: "The Lord of the Rings by J.R.R. Tolkien voted the country's best-loved novel", exams: [5] },
  { period: "Post-War", year: "2010", era: "Post-War & Modern", fact: "Conservative–Liberal Democrat coalition government formed", exams: [6] },
  { period: "Post-War", year: "2012", era: "Post-War & Modern", fact: "Olympic Games held in the UK (third time UK has hosted)", exams: [12, 14] },
];
