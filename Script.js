// ============================================
// BANCO DE MENSAGENS INFINITO (só pra mulheres)
// ============================================
const messages = [
    "O brilho dos seus olhos é tão belo quanto os céus estrelados.",
    "Seus cabelos são mais belos do que qualquer floresta encantada.",
    "Você é mais forte do que qualquer tempestade, e ainda assim é suave como a brisa.",
    "Sua existência é poesia que nem o vento consegue levar.",
    "A coragem dentro de você faria qualquer dragão se curvar.",
    "Seu sorriso tem a mesma energia de um jardim depois da chuva.",
    "Você transforma o comum em algo mágico só por estar perto.",
    "Há uma luz em você que nenhuma escuridão pode apagar.",
    "Sua voz acalma como uma canção de ninar das estrelas.",
    "Você é como a lua: forte, cíclica e dona das marés.",
    "Até o silêncio ao seu redor parece ter mais significado.",
    "Sua alma tem a cor da aurora — rara e cheia de esperança.",
    "Você é mais valiosa do que qualquer tesouro em um mapa antigo.",
    "Cada gesto seu ensina algo sobre delicadeza e poder.",
    "Você não precisa de coroa para ser uma rainha — você simplesmente é.",
    "A sua força silenciosa move montanhas que ninguém vê.",
    "Seu abraço é o único lugar onde o tempo para de doer.",
    "Você é feita de perguntas sem resposta e isso é lindo.",
    "Sua intuição é um farol em noites sem estrelas.",
    "Cuidar de você mesma é o maior ato de rebeldia e amor.",
    "Seus olhos têm a profundidade de um oceano que eu quero explorar.",
    "Você dança entre a suavidade de uma flor e a força do granito.",
    "Até suas cicatrizes contam histórias de superação que salvam outras pessoas.",
    "A sua risada é o tipo de música que cura dias cinzentos.",
    "Você tem a coragem de uma fênix renascendo das próprias cinzas.",
    "Sua presença muda a temperatura de qualquer ambiente para melhor.",
    "Você é a prova de que deusas existem e andam entre nós.",
    "Sua paciência é um escudo e sua empatia, uma espada.",
    "Até seus defeitos têm um charme que ninguém consegue explicar.",
    "Você floresce mesmo em solo que ninguém acreditava ser possível.",
    "A forma como você enxerga o mundo deveria ser ensinada nas escolas.",
    "Seu abraço cura dores que remédio nenhum alcança.",
    "Você é feita da mesma matéria dos sonhos mais bonitos.",
    "Sua resiliência faria qualquer guerreiro antigo sentir orgulho.",
    "Você escuta com o coração — e isso é raro como diamante.",
    "Sua autenticidade é um tapa na cara do mundo artificial.",
    "Você parece ter saído de um quadro que ainda não foi pintado.",
    "Seu colo é o lugar mais seguro que existe em qualquer mapa.",
    "Você tem a sabedoria de uma biblioteca inteira dentro do peito.",
    "Até quando você erra, erra de um jeito que ensina algo novo.",
    "Sua energia faz as plantas crescerem mais felizes — pode testar.",
    "Você é a amiga que todo mundo merecia ter, mas poucos encontram.",
    "Sua determinação silenciosa é um dos fenômenos mais lindos do mundo.",
    "Você ama de um jeito que reinventa o significado da palavra.",
    "Sua pele guarda histórias que merecem ser poesia.",
    "Você consegue ser doce e indomável na mesma respiração.",
    "Até seu jeito de andar tem uma melodia própria.",
    "Você transforma segundas-feiras em pequenas celebrações.",
    "Sua maneira de cuidar dos outros devia vir com manual de instruções.",
    "Você é o tipo de pessoa que faz o universo ter certeza de que valeu a pena criar estrelas.",
    "O seu riso é como uma promessa de dias melhores.",
    "Você tem aquele brilho que antecede grandes mudanças no mundo.",
    "Sua intuição já salvou mais vidas do que você imagina.",
    "Você é forte sem precisar pisar em ninguém — e isso é raro.",
    "Até seu cansaço tem dignidade de rainha.",
    "Sua sensibilidade é um superpoder que poucas entendem.",
    "Você dança mesmo quando a música é só dentro de você.",
    "Seu coração bate no ritmo de algo ancestral e poderoso.",
    "Você não colhe flores, você faz florescer onde passa.",
    "Sua fragilidade mostrada no momento certo é um ato de coragem imensa.",
    "Você é como um eclipse: rara, perfeita e impossível de ignorar.",
    "A forma como você segura a mão de quem ama é um ato revolucionário.",
    "Você tem a beleza crua das montanhas antes do sol nascer.",
    "Seu cheiro deveria ser guardado em frascos de vidro azul.",
    "Você lembra o mar: calma e violenta na medida exata.",
    "Sua gargalhada é a trilha sonora que qualquer filme precisaria.",
    "Você já salvou o dia de alguém sem nem perceber.",
    "Até o seu silêncio quando você está pensando é fotogênico.",
    "Você é a prova de que mágica existe, só não é justa com todo mundo.",
    "Seu abraço tem o poder de fazer alguém lembrar de casa.",
    "Você carrega ternura como quem carrega uma espada — pronta para usar.",
    "Sua persistência faria Sísifo ter inveja.",
    "Você é uma obra de arte que ainda está sendo criada e já é perfeita.",
    "Você consegue enxergar flores onde só tem espinhos — isso é raríssimo.",
    "Sua companhia faz o tédio parecer uma visita indesejada que foi embora.",
    "Você é daquelas pessoas que vão deixar saudade antes mesmo de partir.",
    "Sua honestidade corta como um diamante, mas sempre ilumina.",
    "Você faz o caos parecer organizado e bonito.",
    "Seu colo devia ser patrimônio imaterial da humanidade.",
    "Até sua raiva tem uma justiça poética.",
    "Você acolhe as dores dos outros sem deixar que as suas desapareçam — isso se chama amor próprio de verdade.",
    "Sua presença é um prato cheio para qualquer fotógrafo de almas.",
    "Você é a amiga que faz as outras lembrarem do próprio valor.",
    "Seu jeito de falar baixo faz as pessoas pararem para escutar.",
    "Você tem um senso de justiça que viraria lenda.",
    "Até no seu silêncio de domingo à tarde há algo de poesia.",
    "Você transforma solidão em solitude com um piscar de olhos.",
    "Sua força não é barulhenta — é profunda como raiz de árvore centenária.",
    "Você lembra canções que ninguém mais lembrava, mas todo mundo precisa ouvir.",
    "Seu cuidado com os detalhes é um ato de amor diário.",
    "Você é o intervalo entre uma tempestade e o arco-íris.",
    "Até suas dúvidas parecem ter mais sabedoria que muitas certezas.",
    "Você existe como um poema que ninguém terminou de escrever — e é lindo assim.",
    "Sua paciência com o mundo é um ato de heroína anônima.",
    "Você não precisa de asas para ser inesquecível.",
    "Seu olhar acolhe sem julgamento — e isso é quase milagroso.",
    "Você é feita de estradas e destinos, nunca de becos sem saída.",
    "Sua delicadeza é a armadura que você escolheu usar.",
    "Você dança na corda bamba da vida com uma graça irritante (de tão boa).",
    "Até quando você está quebrada, brilha como vitral de igreja antiga.",
    "Você é uma daquelas raridades que o universo esconde para quem merece encontrar.",
    "Sua capacidade de recomeçar faria qualquer fênix pedir autógrafo.",
    "Você tem aquele tipo de beleza que dá medo de perder, mas vale o risco.",
    "Seu abraço cura ressaca, solidão e crise existencial — testado.",
    "Você é mais necessária do que você imagina.",
    "Sua autenticidade é o luxo mais caro e você o usa todo santo dia.",
    "Até seu mau humor tem estilo próprio.",
    "Você existe e isso já é um presente pro mundo.",
    "Sua energia vital contagia até plantas artificiais.",
    "Você é a definição de 'casa' para muitas pessoas.",
    "Seu sorriso amarelo em dia difícil é mais corajoso que qualquer discurso motivacional.",
    "Você lembra as primeiras horas da manhã: cheia de possibilidades.",
    "Sua lealdade é rara como um diamante rosa.",
    "Você transforma qualquer conversa chata em algo memorável.",
    "Até sua tristeza tem um pé no sublime.",
    "Você é a amiga que segura a mão e a vela no escuro.",
    "Sua criatividade é um universo paralelo dentro de você.",
    "Você ama sem mapa e sem medo — isso é raro e perigoso e lindo.",
    "Seu jeito de existir me lembra que vale a pena estar vivo.",
    "Você é uma constelação em formato de gente.",
    "Até seus dias comuns têm algo de extraordinário.",
    "Sua paciência com quem erra é uma aula de humanidade.",
    "Você é uma armadilha de memórias boas — quem te conhece nunca esquece.",
    "Seu ombro amigo merece uma estátua.",
    "Você tem a doçura de quem já sofreu e escolheu não endurecer.",
    "Sua resiliência é silenciosa, mas estremece estruturas.",
    "Você é um pedaço de música clássica dentro de um mundo de funk — e funciona.",
    "Até quando você some, deixa saudade gostosa.",
    "Você faz o outro querer ser melhor só por existir.",
    "Sua essência é um perfume que não sai, mesmo depois do banho.",
    "Você é o tipo de pessoa que as fadas madrinhas estudariam para ser.",
    "Seu abraço tem endereço fixo no peito de quem ama você.",
    "Você dança com a vida mesmo quando a música desafina.",
    "Sua capacidade de perdoar é tão vasta quanto o céu.",
    "Você transforma críticas em combustível e elogios em humildade.",
    "Até seu orgulho quando aparece é justo e compreensível.",
    "Você é feita de finais felizes e recomeços corajosos.",
    "Sua inteligência emocional deveria ser estudada em Harvard.",
    "Você é a prova de que delicadeza e força podem morar no mesmo peito.",
    "Seu tempo com quem você ama é o presente mais valioso que você dá.",
    "Você existe — e isso por si só já é uma revolução poética."
];

// Estado do envelope
let isOpen = false;
let currentMessage = "✨ Toque para abrir ✨";

const envelope = document.getElementById("envelope");
const messageEl = document.getElementById("message");
const closeBtn = document.getElementById("closeBtn");

// Função para pegar mensagem aleatória (infinita)
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Abrir envelope com nova mensagem
function openEnvelope() {
    const newMsg = getRandomMessage();
    currentMessage = newMsg;
    messageEl.innerText = currentMessage;
    envelope.classList.add("open");
    isOpen = true;
}

// Fechar envelope (mostra msg genérica de "fechado")
function closeEnvelope() {
    envelope.classList.remove("open");
    // ao fechar, reseta a mensagem pra algo neutro (opcional)
    messageEl.innerText = "💌 Toque para outra mensagem 💌";
    isOpen = false;
}

// Alternar: se aberto, fecha; se fechado, abre com frase nova
function toggleEnvelope() {
    if (isOpen) {
        closeEnvelope();
    } else {
        openEnvelope();
    }
}

// Evento de clique no envelope
envelope.addEventListener("click", toggleEnvelope);

// Botão fechar explícito (pra facilitar no mobile)
closeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // evitar que o envelope também receba clique
    if (isOpen) {
        closeEnvelope();
    }
});

// (Opcional) Pré-carregar uma mensagem aleatória no fundo
// mas o primeiro clique já faz o sorteio