interface ICharacter {
    "anime": string,
    "character": string,
    "url": string,
    "description": string
}

interface IAnime {
    "name": string,
    "code": string
}
//["Solo Leveling", "Kaiju Nº 8", "Naruto", "Dragon Ball", "Demon Slayer", "Bleach", "Boku no Hero", "Jujutsu Kaisen", "Shingeki no Kyojin", "Fire Force", "One Punch Man", "Hunter x Hunter", "Fullmetal Alchemist", "Souso no Frieren", "One Piece"]
export const animes: IAnime[] = [
    //cards
    {"name": "Solo Leveling", code: "solo" },
    {"name": "Kaiju Nº8", code: "kaiju" },
    {"name": "Demon Slayer", code: "kimetsu" },
    {"name": "Naruto", code: "naruto" },
    {"name": "Dragon Ball", code: "db" }
]

export const characters: ICharacter[] = [
    // Solo Leveling
    { anime: "Solo Leveling", character: "Sung Jin-Woo", url: "", description: "Jinwoo é um indivíduo humilde e benevolente que se importa profundamente com sua família e tem um desejo ardente de se tornar mais forte. Como resultado, ele compartilha um relacionamento próximo com sua irmã e sua mãe, e raramente desperdiça uma oportunidade de refinar suas habilidades e ganhar mais poder. Seu profundo vínculo com sua família também o torna absolutamente implacável com qualquer um que ouse machucá-los, como demonstrado quando ele massacrou Groctar e seus lacaios por tentar matar Jinah, e assassinou Hwang Dongsoo por torturar Jinho . Vale ressaltar que, apesar de ser o caçador mais forte do mundo, Jinwoo não é particularmente arrogante e, pessoalmente, é educado e tranquilo. Ele também é indiferente a desejos materialistas e pode ser bastante altruísta, como demonstrado quando se teletransportou para a Ilha de Jeju sem pensar duas vezes para salvar os outros Caçadores Coreanos de Rank S da morte certa. Em batalha, no entanto, ele é implacável, tendendo a massacrar seus inimigos indiscriminadamente, e até mesmo um tanto desdenhoso, como demonstrado quando provocou o Rei Formiga chamando-o de \"mero inseto\" e zombou de Kandiaru pelas falhas que ele cometeu no projeto do Sistema." },
    { anime: "Solo Leveling", character: "Igris", url: "", description: "Igris é leal, respeitoso e cavalheiro, a ponto de se ajoelhar diante de seu mestre sempre que este termina uma batalha. Uma piada recorrente com seu personagem é que ele sempre traz a cabeça de suas vítimas para Jin-Woo , o que acabou se tornando um problema quando Iron começou a imitá-lo. Assim como Jin-Woo, Igris também não aprova as palhaçadas de Iron e normalmente se irrita sempre que Iron exagera na batalha. Além disso, apesar de seu amor pela batalha, Igris acredita na importância da educação, como demonstrado por sua argumentação com Bellion de que Suho estaria melhor estudando em uma escola do que aprendendo a lutar. Da mesma forma, ele também tem uma grande admiração por Suho , pois fica pensativo e satisfeito quando o garoto o supera e o derrota durante seu treinamento." },
    { anime: "Solo Leveling", character: "Beru", url: "", description: "Por ter nascido para matar, Beru se deleita com seu poder e tem uma sede de sangue evidente pela batalha. Como tal, ele é extremamente brutal com seus oponentes, raramente se contendo a menos que receba ordens, e ataca diretamente os pontos fracos do inimigo. Ele também é um tanto condescendente com seus companheiros soldados das sombras, como demonstrado quando começou a gritar furiosamente com eles quando falharam em seguir seu exemplo e escapar da prisão de gelo do Monarca do Gelo . Fora das batalhas, porém, Beru é ferozmente leal ao seu mestre e tem um lado mais leve em sua personalidade, chegando a elogiá-lo no meio de uma luta. Uma piada recorrente sobre seu personagem é seu estranho hobby de assistir a dramas de época coreanos, o que o levou a desenvolver um jeito divertido de falar com um toque histórico. Ele tem grande afeição por Sung Suho , filho de Jinwoo , tendo sido conquistado pela inocência e fascínio da criança por ele, e foi às lágrimas ao saber que Suho seria forçado a esquecer sua existência para poder viver uma vida normal." },
    { anime: "Solo Leveling", character: "Bellion", url: "", description: "Bellion parece sereno e não demonstra muita emoção. No entanto, ele é profundamente leal ao Monarca das Sombras, tanto do passado quanto do presente, e nunca duvidou de suas decisões. Isso o levaria mais tarde a notar que seus dois mestres tinham traços de caráter semelhantes e a acreditar genuinamente que Ashborn fez a escolha certa ao escolher Jin-Woo como seu sucessor. Como um guerreiro de longa data, Bellion acredita que a habilidade de combate é a habilidade mais importante a se ter, como demonstrado quando argumentou com Igris que Suho deveria aprender a usar uma espada em vez de ir à escola. Assim como Beru , ele tem grande afeição por Suho e ficou muito satisfeito ao ver o quão forte Suho havia se tornado depois que este o derrotou em batalha. Como Grande Marechal do exército das sombras, Bellion leva sua posição muito a sério, como demonstrado pela promessa que fez a Jinwoo de que disciplinaria pessoalmente Iron por sua falta de respeito se ele algum dia retornasse às fileiras deles." },
    { anime: "Solo Leveling", character: "Kamish", url: "", description: "Kamish tinha um ego feroz e uma sede de sangue intensa em relação aos humanos, como demonstrado quando ele tentou matar alguns com seu ataque de sopro depois que ele foi revivido como uma sombra. No entanto, apesar de suas tendências selvagens, ele ainda estava disposto a ouvir a razão, pois ele imediatamente interrompeu seu ataque após saber que ele não estava mais sendo controlado pelos Governantes . Como uma sombra, Kamish também era leal e respeitoso com Jinwoo , dirigindo-se a ele com honoríficos e até mesmo abanando o rabo comicamente quando este tocava seu nariz." },
    { anime: "Solo Leveling", character: "Thomas Andre", url: "", description: "Thomas é um indivíduo orgulhoso e agressivo, com um forte senso de camaradagem. Como resultado, ele ainda deu a Hwang Dongsoo um funeral digno, mesmo que o homem fosse um assassino sem coração e tenha lutado contra Jinwoo até a morte para salvar sua vida. Thomas também tem pouca tolerância à insubordinação e ao desrespeito, como demonstrado quando ameaçou Dongsoo por tentar discutir com ele e ficou furioso quando Jinwoo se recusou a poupá-lo por torturar Jinho . Devido à sua força quase incomparável e às suas origens humildes, Thomas acredita na ideologia de que a força faz a justiça e não tem escrúpulos em usar a força bruta para atingir seus objetivos. No entanto, apesar do orgulho, Thomas é muito gentil na derrota, pois não demonstrou má vontade em relação a Jinwoo depois que este quase o matou durante a batalha nos Estados Unidos. Ele também odeia dever favores às pessoas e fará de tudo para garantir que estejam quites, como demonstrado quando viajou para a Coreia apenas para pagar Jinwoo com uma refeição e lhe dar a Ira de Kamish como retribuição por poupar a vida de seus companheiros de guilda." },
    { anime: "Solo Leveling", character: "Liu Zhigang", url: "", description: "Na linha do tempo original , Zhigang era impetuoso e sedento por batalhas, como demonstrado pela forma como expressou sua decepção por não poder lutar contra o Rei Formiga . Ele também era muito direto nas conversas, como demonstrado quando disse a um repórter chinês que Sung Jinwoo era muito superior a ele em força e descartava aqueles que acreditavam o contrário como tolos. No entanto, ele agia de forma amigável e humilde com aqueles que haviam conquistado seu respeito. Na linha do tempo revisada , Zhigang manteve a maioria de seus traços de caráter originais e sua personalidade geral não mudou muito, além de ter um forte interesse em artes marciais. Ele também possuía grande determinação e força de vontade, como demonstrado pela forma como recusou as ofertas feitas a ele pelos Itarim, embora pudesse ter obtido imenso poder em troca, e resistiu com sucesso às tentativas deles de possuir seu corpo por dois anos. " },
    { anime: "Solo Leveling", character: "Ashborn", url: "", description: "Ashborn se importava muito com a vida e tinha uma atitude benevolente para com a humanidade. Ele também nutria um profundo desejo por paz e estava cansado da guerra sem fim entre os Monarcas e os Governantes , o que o levou a confiar suas ambições e poderes a um humano na esperança de pôr fim ao derramamento de sangue de uma vez por todas. No entanto, ao mesmo tempo, ele era cegamente leal ao Ser Absoluto e continuou a lutar em nome deste, mesmo depois de descobrir a verdade por trás de sua existência." },
    { anime: "Solo Leveling", character: "Antares", url: "", description: "Como o Monarca da Destruição, Antares se deleitava com a devastação que causava com seus poderes. Devido à sua força quase inigualável, ele geralmente se comportava de maneira muito casual e confiante, e não era do tipo que perdia a cabeça facilmente. Assim como os outros Monarcas , ele também tinha uma atitude muito desdenhosa em relação à humanidade e não tinha escrúpulos em cometer genocídio contra eles a fim de forçar o Monarca das Sombras a se manifestar e enfrentá-lo em batalha. No entanto, apesar de sua natureza sanguinária, Antares tinha um senso de honra e estava disposto a negociar com aqueles que eram fortes o suficiente para impressioná-lo em batalha, como demonstrado quando prometeu a Jinwoo que retiraria suas forças e pouparia a humanidade, contanto que esta concordasse em lutar com ele contra os Governantes . Mesmo depois que Jinwoo o matou em duas linhas do tempo diferentes, Antares continuou a reconhecer sua força a ponto de ficar incrivelmente desapontado quando derrotou facilmente o filho de Jinwoo, Suho, durante seu primeiro encontro, várias décadas depois, levando-o a lamentar o quão fraco Suho era e até mesmo afirmar em um ponto que o menino era indigno de suceder seu pai. Apesar de todos os seus defeitos pessoais, Antares demonstrava um certo cuidado com seus lacaios e sentia repulsa por qualquer um que os explorasse para fins experimentais. Ele também parecia acreditar na pureza do sangue e não tinha respeito por dragões de ascendência mista." },
    { anime: "Solo Leveling", character: "Kandiaru", url: "", description: "Kandiaru era um indivíduo extremamente psicopata e egoísta, que se orgulhava muito de seu trabalho e tinha uma atitude de extremo desdém em relação à humanidade, como demonstrado quando começou a gritar de raiva e descrença ao perceber que Jin-Woo estava vencendo. Ele também era ferozmente leal aos Monarcas e os adorava como se fossem deuses, o que também o levou a ficar indignado ao descobrir que Ashborn o havia traído e se aliado aos Governantes ." },

    // Kaiju Nº 8
    { anime: "Kaiju Nº 8", character: "Hibino Kafka", url: "", description: "Kafka tem uma personalidade comicamente infantil na maioria das situações, resultando em ser um alvo fácil para provocar por outros personagens apesar de ser um indivíduo determinado e dedicado em situações sérias, trazendo-o para tentar fazer tudo para ter sucesso, seja individualmente ou para a melhoria do grupo. Kafka também é um cara genuinamente carinhoso e gentil muito antes de se juntar à Força de Defesa, resultando em ele sair do seu caminho para ajudar e cuidar dos outros, independentemente de eles quererem ou não. Alguns exemplos desse comportamento são quando Kafka oferece soluções para inconvenientes, salva as pessoas de perigo iminente, e às vezes repreende-as por não cuidarem melhor de si mesmas. É por essas razões que Kafka faz tudo o que pode para não decepcionar ou entristecer aqueles que colocaram sua confiança e crença nele. Ter que quebrar essa conexão em tempos de necessidade faz com que ele se torne inseguro e inseguro sobre o que ele será capaz de alcançar no futuro." },
    { anime: "Kaiju Nº 8", character: "Soushirou Hoshina", url: "", description: "Soshiro é bastante descontraído, sempre tendo um sorriso no rosto; é muito raro vê-lo oprimido. Ele parece gostar de tirar sarro dos outros, especialmente Kafka Hibino, considerando-o um alívio cômico. No entanto, ele tem alguns momentos sérios quando fala com firmeza e abre os olhos para enfatizar a seriedade de suas palavras. Soshiro também gosta de provocar o capitão Gen Narumi da Primeira Divisão. Apesar da aparência relaxada e amigável de Soshiro, ele é muito inteligente e intuitivo. Ele foi o único que suspeitou corretamente a identidade de Kafka como Kaiju No. 8, assim, uma das principais razões pelas quais ele o aceitou na Terceira Divisão, apesar de falhar no exame foi ficar de olho nele. Soshiro tem um grande, mas escondido, senso de lealdade para com a Força de Defesa e se sente muito grato por seu capitão Mina Ashiro por deixá-lo entrar em sua divisão. Seu senso de lealdade ao seu papel na força é tão forte que ele, no fundo, vê isso como sua única razão de viver. Soshiro também é muito grato como visto quando ele falou com Kafka dois meses depois que ele provou ser Kaiju No. 8 e agradeceu-lhe por salvar sua vida e aqueles de seus subordinados mostrando para não guardar rancor em direção a ele." },
    { anime: "Kaiju Nº 8", character: "Kikoru Shinomiya", url: "", description: "Kikoru aparece como uma garota arrogante e orgulhosa que está muito confiante em sua capacidade de desprezar as pessoas e humilhar aqueles que ela considera inferiores sem pensar duas vezes. Kikoru também é uma pessoa muito persistente e determinada, trabalhando duro para melhorar constantemente a si mesma e se tornando mais forte e mais útil sempre que pode. Mesmo em relação aos oficiais superiores, ela ainda consegue mostrar sua confiança, embora de uma maneira muito mais educada e menos arrogante. Apesar dessa característica mais evidente, Kikoru no fundo se preocupa com seus companheiros e faz o que quer que esteja em seu poder para evitar vítimas ou ferimentos sempre que estiver no campo de batalha. Ela também é uma pessoa leal, mostrando gratidão a Kafka Hibino por salvá-la e manter seu segredo. Mesmo que esteja escondida por sua natureza orgulhosa e sem medo, ela cuida do bem-estar de seus aliados e vai o mais longe possível para garantir sua segurança ou simplesmente apoiá-los." },
    { anime: "Kaiju Nº 8", character: "Reno Ichikawa", url: "", description: "Reno é uma pessoa calma e recolhida. Apesar de inicialmente antagonizar Kafka por desistir de seu sonho, ele mais tarde mostra um lado mais suave e mais carinhoso em relação a seu amigo e sua condição e objetivos. Como seu vínculo cresce, Reno começa a mostrar seu lado protetor, não só para Kafka, mas para qualquer um de seus companheiros. Sua determinação em lutar para proteger seus pares o leva a ignorar completamente o one-sided de Ihar Furuhashi rivalmente em relação a ele e ainda colocar sua segurança em primeiro lugar. Na batalha, Reno é uma pessoa determinada e direta, sendo um pensador natural por conta própria. Devido ao seu imenso senso de responsabilidade em relação a seus colegas e seu desejo de se tornar mais forte, um uso prolongado de sua Arma Números pode fazer Reno sair do controle e empurrar-se além de seus limites, a fim de ser forte o suficiente para salvar aqueles ao seu redor." },
    { anime: "Kaiju Nº 8", character: "Mina Ashiro", url: "", description: "Mina é uma mulher séria e determinada que leva seu trabalho e papel na Força de Defesa muito a sério e ela se esforça para manter a promessa feita como uma criança para derrotar cada kaiju a ponto de dedicar tudo de si mesma à luta kaiju. Apesar de seu comportamento profissional, ela tem um ponto fraco para Kafka Hibino: embora ela estivesse chateada com ele por não manter sua promessa de ficar ao seu lado, ela se lembra de sua amizade carinhosamente e deseja vê-lo ter sucesso na Força de Defesa, mesmo depois de saber que ele era Kaiju No. 8 - O que se cal e o 8. Sob seu exterior difícil, Mina mostra seu eu autêntico como uma pessoa atenciosa que faz o seu melhor para garantir que ninguém se machuque em uma luta e mantenha todos seguros. Ela também é propensa a mostrar gratidão aos seus subordinados, elogiando as pessoas por sua ajuda sempre que possível e ser capaz de reconhecer o valor de alguém. No entanto, esses traços também contribuem para um profundo medo de fracasso dentro dela. Em sua mente, qualquer erro invalidaria os sacrifícios de seus companheiros e violaria a confiança que os civis têm nela. Embora insalubre, essa mentalidade também é o que a leva a atuar tão bem quanto na batalha." },
    { anime: "Kaiju Nº 8", character: "Gen Narumi", url: "", description: "Apesar de mostrar um comportamento bastante sério, Gen esconde uma personalidade preguiçosa e infantil, exagerando quando um pouco irritado com algo. Seu comportamento não profissional o leva a dar prioridades a coisas fúteis sobre o trabalho, como seus videogames e figuras de ação, ou seus seguidores nas mídias sociais. No entanto, uma vez que ele chega no campo de batalha, a atitude de Gen muda radicalmente, tornando-se muito séria e dedicada ao seu trabalho como capitão de sua própria divisão, dando ordens específicas aos seus subordinados. Ao confrontar outras pessoas, Gen parece ser muito informal e rude, pois ele casualmente fala com o diretor-geral Isao Shinomiya e fica bravo com Eiji Hasegawa sempre que o último o repreende. Ele parece valorizar as habilidades acima de tudo, e exige resultados por qualquer um que sirva em sua divisão. Apesar de seu comportamento infantil e superficial, Gen ainda é tido em alta consideração por muitas pessoas próximas a ele com o próprio Diretor Geral Isao confiando a Gen a segurança da Força de Defesa e de todo o país." },
    { anime: "Kaiju Nº 8", character: "Iharu Furuhashi", url: "", description: "Iharu é um indivíduo de sangue quente e orgulhoso que não gosta de ser inferior a outras pessoas ou perder, e constantemente tenta melhorar mais do que aqueles que ele considera mais fortes do que ele. Por esta razão, ele alvejou Leno Ichikawa, gabando-se dele sempre que ele tem a chance de fazê-lo. Iharu é descrito como um personagem obstinado que ilumina todos os ambientes em que está. Apesar de sua atitude aparentemente confiante, Iharu esconde um grande complexo de inferioridade em relação a seus pares, principalmente devido à sua vida passada de sucesso, que ele agora compara com sua vida atual na Força de Defesa, onde a maioria de seus colegas melhora mais rápido do que ele. Por uma questão de fato, quando empurrado para situações difíceis e com risco de vida, Iharu exibe um lado mais frágil e inseguro, estando ciente de suas próprias fraquezas e até mesmo admirando alguém mais forte do que ele como o próprio Leno. No fundo, ele valoriza sua própria equipe e companheiros de equipe mais do que ele admitiria. No entanto, ele é mostrado para ser determinado e muito teimoso, recusando-se a desistir e virando a parede de evey em seu caminho para melhorar a si mesmo." },
    { anime: "Kaiju Nº 8", character: "Isao Shinomiya", url: "", description: "Isao é um homem muito autoritário e sério, sendo também muito exigente para com seus subordinados e sua filha Kikoru Shinomiya. Como o Diretor Geral da Força de Defesa que serviu muitos anos em suas fileiras, ele é um homem clareado que deu suas ordens firmemente à vista de ameaças futuras e também não está acima de usar kaiju vivo como armas para capacitar a Força de Defesa. O forte relacionamento romântico de Isao com sua esposa Hikari Shinomiya o levou a ser muito afetado por sua morte e, desde então, ele se tornou frio e distante com Kikoru, exigindo que ela se tornasse o \"soldado perfeito\" para que ela não sofresse o mesmo destino que sua mãe. Seu rigor não se limitou apenas à sua família sozinho, pois ele agiu da mesma maneira com seus subordinados e seu ex-aluno Gen Narumi. " },
    { anime: "Kaiju Nº 8", character: "Number 9", url: "", description: "Kaiju No. 9 parece ser um indivíduo frio e calmo, prestando muita atenção ao que acontece ao seu redor. É implacável e levado a terminar suas missões, não importa o que aconteça, e não hesita em matar inimigos que o envolvem, embora também esteja disposto a poupar espectadores inocentes se isso significar evitar chamar a atenção indesejada para si mesmo. Embora calculista e distante, ainda pode demonstrar pura raiva e aborrecimento sempre que for derrotado ou se seus planos forem constantemente frustrados. Sua fraqueza reside no fato de que nunca parece aprender com seus erros, tendo continuamente subestimado a humanidade, apesar do número de vezes que os humanos excederam as expectativas dos kaijus sobre eles. O principal traço de personalidade de Kaiju No. 9 é sua determinação em destruir a Força de Defesa e recuperar um grande \"poder de kiju\". Sua determinação, juntamente com sua natureza intrigante, leva-o a formular planos articulados e complexos para esmagar a Força de Defesa. O foco em seu plano é tão forte que o número 9 aparece como uma criatura completamente apática e distante, não mostrando nenhum afeto ou mesmo atenção ao kaiju que ele gerou para eliminar os oficiais da Força de Defesa." },
    { anime: "Kaiju Nº 8", character: "Number 10", url: "", description: "Kaiju No. 10 é um indivíduo implacável e intimidante, levado ao máximo para realizar suas missões. Ele também parece estar bastante confiante, sendo um líder orgulhoso de um bando de kaiju e desafiando o membro mais forte da Força de Defesa que ele poderia encontrar.  Parece lutar contra inimigos fortes, a ponto de estender as lutas e insultar seus rivais apenas por causa disso. Sua personalidade orgulhosa o leva a nunca admitir a derrota, mas sim um \"desenhar\", mesmo quando quase no ponto de morte. Sua luta com Soshiro Hoshina conseguiu excitá-lo tanto que, mesmo depois de ser derrotado, ainda se sentia ligado a Soshiro e desejava ser transformado em uma arma para ele, para lutar com ele mais uma vez. O número 10 parece ser um indivíduo bastante independente, facilmente traindo seu progenitor Kaiju No. 9 apenas para se aproximar de Soshiro." },

    // Naruto
    { anime: "Naruto", character: "Naruto Uzumaki", url: "", description: "" },
    { anime: "Naruto", character: "Sasuke Uchiha", url: "", description: "" },
    { anime: "Naruto", character: "Sakura Haruno", url: "", description: "" },
    { anime: "Naruto", character: "Kakashi Hatake", url: "", description: "" },
    { anime: "Naruto", character: "Minato Namikaze", url: "", description: "" },
    { anime: "Naruto", character: "Obito Uchiha", url: "", description: "" },
    { anime: "Naruto", character: "Madara Uchiha", url: "", description: "" },
    { anime: "Naruto", character: "Tobirama Senju", url: "", description: "" },
    { anime: "Naruto", character: "Orochimaru", url: "", description: "" },
    { anime: "Naruto", character: "Jiraiya", url: "", description: "" },

    // Dragon Ball
    { anime: "Dragon Ball", character: "Goku", url: "", description: "" },
    { anime: "Dragon Ball", character: "Vegeta", url: "", description: "" },
    { anime: "Dragon Ball", character: "Gohan", url: "", description: "" },
    { anime: "Dragon Ball", character: "Piccolo", url: "", description: "" },
    { anime: "Dragon Ball", character: "Bardock", url: "", description: "" },
    { anime: "Dragon Ball", character: "Beerus", url: "", description: "" },
    { anime: "Dragon Ball", character: "Whis", url: "", description: "" },
    { anime: "Dragon Ball", character: "Broly", url: "", description: "" },
    { anime: "Dragon Ball", character: "Frieza", url: "", description: "" },
    { anime: "Dragon Ball", character: "Cell", url: "", description: "" },

    // Demon Slayer
    { anime: "Demon Slayer", character: "Tanjiro Kamado", url: "", description: "" },
    { anime: "Demon Slayer", character: "Zenitsu Agatsuma", url: "", description: "" },
    { anime: "Demon Slayer", character: "Inosuke Hashibira", url: "", description: "" },
    { anime: "Demon Slayer", character: "Sanemi Shinazugawa", url: "", description: "" },
    { anime: "Demon Slayer", character: "Muichiro Tokito", url: "", description: "" },
    { anime: "Demon Slayer", character: "Muzan Kibutsuji", url: "", description: "" },
    { anime: "Demon Slayer", character: "Kyojuro Rengoku", url: "", description: "" },
    { anime: "Demon Slayer", character: "Kokushibo", url: "", description: "" },
    { anime: "Demon Slayer", character: "Giyu Tomioka", url: "", description: "" },
    { anime: "Demon Slayer", character: "Akaza", url: "", description: "" },

    // Bleach
    { anime: "Bleach", character: "Ichigo Kurosaki", url: "", description: "" },
    { anime: "Bleach", character: "Sosuke Aizen", url: "", description: "" },
    { anime: "Bleach", character: "Kisuke Urahara", url: "", description: "" },
    { anime: "Bleach", character: "Yhwach", url: "", description: "" },
    { anime: "Bleach", character: "Renji Abarai", url: "", description: "" },
    { anime: "Bleach", character: "Rukia Kuchiki", url: "", description: "" },
    { anime: "Bleach", character: "Uryu Ishida", url: "", description: "" },
    { anime: "Bleach", character: "Yoruichi Shihoin", url: "", description: "" },
    { anime: "Bleach", character: "Orihime Inoue", url: "", description: "" },
    { anime: "Bleach", character: "Toshiro Hitsugaya", url: "", description: "" },

    // Boku no Hero
    { anime: "Boku no Hero", character: "Izuku Midoriya", url: "", description: "" },
    { anime: "Boku no Hero", character: "Katsuki Bakugo", url: "", description: "" },
    { anime: "Boku no Hero", character: "Shoto Todoroki", url: "", description: "" },
    { anime: "Boku no Hero", character: "All Might", url: "", description: "" },
    { anime: "Boku no Hero", character: "Gang Orca", url: "", description: "" },
    { anime: "Boku no Hero", character: "Endeavor", url: "", description: "" },
    { anime: "Boku no Hero", character: "Shoto Todoroki", url: "", description: "" },
    { anime: "Boku no Hero", character: "Overhaul", url: "", description: "" },
    { anime: "Boku no Hero", character: "All For One", url: "", description: "" },
    { anime: "Boku no Hero", character: "Stain", url: "", description: "" },

    // Jujutsu Kaisen
    { anime: "Jujutsu Kaisen", character: "Ryomen Sukuna", url: "", description: "" },
    { anime: "Jujutsu Kaisen", character: "Satoru Gojo", url: "", description: "" },
    { anime: "Jujutsu Kaisen", character: "Yuta Okkotsu", url: "", description: "" },
    { anime: "Jujutsu Kaisen", character: "Yuji Itadori", url: "", description: "" },
    { anime: "Jujutsu Kaisen", character: "Megumi Fushiguro", url: "", description: "" },
    { anime: "Jujutsu Kaisen", character: "Nobara Kugisaki", url: "", description: "" },
    { anime: "Jujutsu Kaisen", character: "Kento Nanami", url: "", description: "" },
    { anime: "Jujutsu Kaisen", character: "Kinji Hakari", url: "", description: "" },
    { anime: "Jujutsu Kaisen", character: "Toji Fushiguro", url: "", description: "" },
    { anime: "Jujutsu Kaisen", character: "Maki Zenin", url: "", description: "" },

    // Attack on Titan
    { anime: "Shingeki no Kyojin", character: "Eren Yeager", url: "", description: "" },
    { anime: "Shingeki no Kyojin", character: "Zeke Yeager", url: "", description: "" },
    { anime: "Shingeki no Kyojin", character: "Mikasa Ackerman", url: "", description: "" },
    { anime: "Shingeki no Kyojin", character: "Levi Ackerman", url: "", description: "" },
    { anime: "Shingeki no Kyojin", character: "Armin Arlert", url: "", description: "" },
    { anime: "Shingeki no Kyojin", character: "Bertholdt Hoover", url: "", description: "" },
    { anime: "Shingeki no Kyojin", character: "Annie Leonhart", url: "", description: "" },
    { anime: "Shingeki no Kyojin", character: "Ymir", url: "", description: "" },
    { anime: "Shingeki no Kyojin", character: "Erwin Smith", url: "", description: "" },
    { anime: "Shingeki no Kyojin", character: "Reiner Braun", url: "", description: "" },

    // Fire Force
    { anime: "Fire Force", character: "Shinra Kusakabe", url: "", description: "" },
    { anime: "Fire Force", character: "Arthur Boyle", url: "", description: "" },
    { anime: "Fire Force", character: "Iris", url: "", description: "" },
    { anime: "Fire Force", character: "Maki Oze", url: "", description: "" },
    { anime: "Fire Force", character: "Takehisa Hinawa", url: "", description: "" },
    { anime: "Fire Force", character: "Akitaru Obi", url: "", description: "" },
    { anime: "Fire Force", character: "Joker", url: "", description: "" },
    { anime: "Fire Force", character: "Victor Licht", url: "", description: "" },
    { anime: "Fire Force", character: "Benimaru Shinmon", url: "", description: "" },
    { anime: "Fire Force", character: "Sho Kusakabe", url: "", description: "" },

    // One Punch Man
    { anime: "One Punch Man", character: "Saitama", url: "", description: "" },
    { anime: "One Punch Man", character: "Genos", url: "", description: "" },
    { anime: "One Punch Man", character: "God", url: "", description: "" },
    { anime: "One Punch Man", character: "Tatsumaki", url: "", description: "" },
    { anime: "One Punch Man", character: "Fubuki", url: "", description: "" },
    { anime: "One Punch Man", character: "Blast", url: "", description: "" },
    { anime: "One Punch Man", character: "King", url: "", description: "" },
    { anime: "One Punch Man", character: "Garou", url: "", description: "" },
    { anime: "One Punch Man", character: "Watchdog Man", url: "", description: "" },
    { anime: "One Punch Man", character: "Bang", url: "", description: "" },

    // Hunter x Hunter
    { anime: "Hunter x Hunter", character: "Gon Freecss", url: "", description: "" },
    { anime: "Hunter x Hunter", character: "Hisoka Morow", url: "", description: "" },
    { anime: "Hunter x Hunter", character: "Killua Zoldyck", url: "", description: "" },
    { anime: "Hunter x Hunter", character: "Isaac Netero", url: "", description: "" },
    { anime: "Hunter x Hunter", character: "Illumi Zoldyck", url: "", description: "" },
    { anime: "Hunter x Hunter", character: "Chrollo Lucilfer", url: "", description: "" },
    { anime: "Hunter x Hunter", character: "Meruem", url: "", description: "" },
    { anime: "Hunter x Hunter", character: "Neferpitou", url: "", description: "" },
    { anime: "Hunter x Hunter", character: "Kurapika", url: "", description: "" },
    { anime: "Hunter x Hunter", character: "Leorio Paradinight", url: "", description: "" },

    // Fullmetal Alchemist
    { anime: "Fullmetal Alchemist", character: "Roy Mustang", url: "", description: "" },
    { anime: "Fullmetal Alchemist", character: "Alphonse Elric", url: "", description: "" },
    { anime: "Fullmetal Alchemist", character: "Scar", url: "", description: "" },
    { anime: "Fullmetal Alchemist", character: "Edward Elric", url: "", description: "" },
    { anime: "Fullmetal Alchemist", character: "Greed", url: "", description: "" },
    { anime: "Fullmetal Alchemist", character: "Envy", url: "", description: "" },
    { anime: "Fullmetal Alchemist", character: "Father", url: "", description: "" },
    { anime: "Fullmetal Alchemist", character: "Van Hohenheim", url: "", description: "" },
    { anime: "Fullmetal Alchemist", character: "Truth", url: "", description: "" },
    { anime: "Fullmetal Alchemist", character: "Wrath", url: "", description: "" },

    // Souso no Frieren
    { anime: "Souso no Frieren", character: "Himmel", url: "", description: "" },
    { anime: "Souso no Frieren", character: "Frieren", url: "", description: "" },
    { anime: "Souso no Frieren", character: "Mimic", url: "", description: "" },
    { anime: "Souso no Frieren", character: "Macht", url: "", description: "" },
    { anime: "Souso no Frieren", character: "Fern", url: "", description: "" },
    { anime: "Souso no Frieren", character: "Stark", url: "", description: "" },
    { anime: "Souso no Frieren", character: "Denken", url: "", description: "" },
    { anime: "Souso no Frieren", character: "Hero of the South", url: "", description: "" },
    { anime: "Souso no Frieren", character: "Sein", url: "", description: "" },
    { anime: "Souso no Frieren", character: "Aura", url: "", description: "" },

    // One Piece
    { anime: "One Piece", character: "Monkey D. Luffy", url: "", description: "" },
    { anime: "One Piece", character: "Roronoa Zoro", url: "", description: "" },
    { anime: "One Piece", character: "Nami", url: "", description: "" },
    { anime: "One Piece", character: "Sanji", url: "", description: "" },
    { anime: "One Piece", character: "Trafalgar Law", url: "", description: "" },
    { anime: "One Piece", character: "Nico Robin", url: "", description: "" },
    { anime: "One Piece", character: "Boa Hancock", url: "", description: "" },
    { anime: "One Piece", character: "Portgas D. Ace", url: "", description: "" },
    { anime: "One Piece", character: "Sabo", url: "", description: "" },
    { anime: "One Piece", character: "Yamato", url: "", description: "" }
]