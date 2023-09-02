// Português
$(".br").click(function () {
    // Header
    $("#nav ul li:nth-child(1) a").html('<i class="bi bi-book" aria-hidden="true"></i> Sobre');
    $("#nav ul li:nth-child(2) a").html('<i class="bi bi-plus-square" aria-hidden="true"></i> Criar Seu Combo');
    $("#nav ul li:nth-child(3) a").html('<i class="bi bi-journals" aria-hidden="true"></i> Ver Combo');
    $("#nav ul li:nth-child(4) a").html('<i class="bi bi-people" aria-hidden="true"></i> Comunidade');
    $("#nav ul li:nth-child(5) a").html('<i class="bi bi-card-text" aria-hidden="true"></i> Página Principal');
    $("#logout").html('<i class="bi bi-door-open" aria-hidden="true"></i> Sair');
    // About
    $("#introduction").text('Aqui você pode criar combos para si mesmo e compartilhá-los com pessoas e também, com uma comunidade, você pode procurar por combos e ideias interessantes, então certifique-se de acompanhar os novos combos!');
    // Things to Toggle
    $(".language-selected").text("pt-BR");
    $(".language-selected").removeClass("change-en change-fr change-kr");
    $(".language-selected").addClass("change-br");

});

// English
$(".en").click(function () {
    // Header
    $("#nav ul li:nth-child(1) a").html('<i class="bi bi-book" aria-hidden="true"></i> About');
    $("#nav ul li:nth-child(2) a").html('<i class="bi bi-plus-square" aria-hidden="true"></i> Create Your Combo');
    $("#nav ul li:nth-child(3) a").html('<i class="bi bi-journals" aria-hidden="true"></i> View Combo');
    $("#nav ul li:nth-child(4) a").html('<i class="bi bi-people" aria-hidden="true"></i> Community');
    $("#nav ul li:nth-child(5) a").html('<i class="bi bi-card-text" aria-hidden="true"></i> Main Page');
    $("#logout").html('<i class="bi bi-door-open" aria-hidden="true"></i> Log Out');
    //About
    $("#introduction").text('Here you can create combos for yourself and share it with peoples and also, with a community, you can look for interesting combos and ideas, therefore make sure to keep up with new combos!');
    // Things to Toggle
    $(".language-selected").text("en-US");
    $(".language-selected").removeClass("change-br change-fr change-kr");
    $(".language-selected").addClass("change-en");
    // Get Started
    $(".get-started").text("Get Started");
});

// Français
$(".fr").click(function () {
    // Header
    $("#nav ul li:nth-child(1) a").html('<i class="bi bi-book" aria-hidden="true"></i> À Propos');
    $("#nav ul li:nth-child(2) a").html('<i class="bi bi-plus-square" aria-hidden="true"></i> Créer Combo');
    $("#nav ul li:nth-child(3) a").html('<i class="bi bi-journals" aria-hidden="true"></i> Voir Combo');
    $("#nav ul li:nth-child(4) a").html('<i class="bi bi-people" aria-hidden="true"></i> Communauté');
    $("#nav ul li:nth-child(5) a").html('<i class="bi bi-card-text" aria-hidden="true"></i> Page Principale');
    $("#logout").html('<i class="bi bi-door-open" aria-hidden="true"></i> Sortir');
    //About
    $("#introduction").text('Ici tu peux créer des combo pour soi-même et partagez-le avec les gens e aussi, avec un communauté, tu peux trouver pour les combo et les idées intéressants, alors assurez-vous de accompagner les nouveaux combos!');
    // Things to Toggle
    $(".language-selected").text("FR");
    $(".language-selected").removeClass("change-br change-en change-kr");
    $(".language-selected").addClass("change-fr");
    // Get Started
    $(".get-started").text("Commencer");
});

// 한국어
$(".kr").click(function () {
    // Header
    $("#nav ul li:nth-child(1) a").html('<i class="bi bi-book" aria-hidden="true"></i> 정보');
    $("#nav ul li:nth-child(2) a").html('<i class="bi bi-plus-square" aria-hidden="true"></i> 콤보 만들기');
    $("#nav ul li:nth-child(3) a").html('<i class="bi bi-journals" aria-hidden="true"></i> 콤보 보기');
    $("#nav ul li:nth-child(4) a").html('<i class="bi bi-people" aria-hidden="true"></i> 커뮤니티');
    $("#nav ul li:nth-child(5) a").html('<i class="bi bi-card-text" aria-hidden="true"></i> 메인 페이지');
    $("#logout").html('<i class="bi bi-door-open" aria-hidden="true"></i> 로그 아웃');
    //About
    $("#introduction").text('여기서는 자신을 위한 콤보를 만들고 공유할 수 있으며, 또한 커뮤니티와 함께 새로운 콤보를 찾을 수도 있으니, 새로운 콤보를 확인해 보세요!');
    // Things to Toggle
    $(".language-selected").text("KR");
    $(".language-selected").removeClass("change-br change-en change-fr");
    $(".language-selected").addClass("change-kr");
    // Get Started
    $(".get-started").text("시작");
});
